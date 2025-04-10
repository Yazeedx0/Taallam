// @ts-nocheck

"use client";

import type { ChatRequestOptions, CreateMessage, Message } from "ai";
import type React from "react";
import {
  useRef,
  useEffect,
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { toast } from "sonner";
import { useLocalStorage, useWindowSize } from "usehooks-ts";

import { cn, sanitizeUIMessages } from "@/lib/utils";
import { useSelection } from "@/context/selection-context";
import { useSpeechRecognition } from "./ui/useSpeechRecognition";

import { StopIcon, ChevronDownIcon, PenIcon, SummarizeIcon, ThumbUpIcon, CheckedSquare, DeltaIcon, LightbulbIcon, SendIcon } from "./icons";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Tooltip } from "./ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

// Microphone icon component
const MicIcon = ({ className = "", size = 18 }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

// Define preset prompts with icons, text and enhanced descriptions in educational order
const presetPrompts = [
  {
    id: 'multiple-choice',
    icon: CheckedSquare,
    label: 'أنشئ سؤال اختيار متعدد',
    description: 'إنشاء أسئلة تفاعلية مع خيارات متعددة لاختبار فهمك للموضوع',
    text: 'أنشئ سؤال اختيار من متعدد حول هذا الموضوع: ',
    color: 'purple',
    isHighlighted: true
  },
  {
    id: 'explain',
    icon: SummarizeIcon,
    label: 'اشرح هذا',
    description: 'تقديم شرح بسيط وواضح للنص لمساعدتك على فهمه بشكل أفضل',
    text: 'اشرح هذا النص بطريقة بسيطة وواضحة: ',
    color: 'blue'
  },
  {
    id: 'rephrase',
    icon: ThumbUpIcon,
    label: 'أعد الصياغة',
    description: 'إعادة كتابة النص بأسلوب أبسط وأوضح للفهم مع الحفاظ على المعنى الأصلي',
    text: 'هل يمكنك إعادة صياغة هذه الفكرة بأسلوب أوضح: ',
    color: 'green'
  },
  {
    id: 'test-understanding',
    icon: PenIcon,
    label: 'اختبر فهمي',
    description: 'إنشاء سؤال أو تمرين قصير لاختبار مدى فهمك للمحتوى',
    text: 'اختبر فهمي لهذا الموضوع من خلال إنشاء سؤال تطبيقي: ',
    color: 'yellow'
  },
  {
    id: 'translate',
    icon: DeltaIcon,
    label: 'ترجم إلى العربية',
    description: 'تحويل النصوص من لغات أخرى إلى اللغة العربية بدقة ووضوح',
    text: 'هل يمكنك ترجمة هذا النص إلى اللغة العربية: ',
    color: 'blue'
  },
  {
    id: 'practice-activity',
    icon: LightbulbIcon,
    label: 'اقترح نشاط تعليمي',
    description: 'إنشاء أنشطة عملية وتطبيقية تساعد على تعزيز المهارات وفهم المفاهيم',
    text: 'هل يمكنك اقتراح نشاط تعليمي مرتبط بهذا الموضوع: ',
    color: 'green'
  }
];

// Common educational phrases for auto-suggestions
const commonPhrases = [
  "اشرح لي درس",
  "أريد أن أفهم",
  "ما معنى",
  "كيف أحل",
  "أعطني أمثلة على",
  "لخص لي",
];

interface MultimodalInputProps {
  input: string;
  setInput: (input: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  stop: () => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  append: (message: Message) => void;
  chatId: string;
  className?: string;
}

export function MultimodalInput({
  input,
  setInput,
  handleSubmit,
  isLoading,
  stop,
  messages,
  setMessages,
  append,
  chatId,
  className,
}: MultimodalInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Array of child-friendly placeholder suggestions
  const placeholders = [
    "أريد أن أفهم درس جمع الكسور...",
    "كيف أحل هذه المسألة الرياضية؟",
    "ساعدني في فهم درس الفاعل والمفعول به...",
    "أحتاج مساعدة في الواجب المدرسي...",
    "اشرح لي عن دورة حياة الفراشة..."
  ];
  
  // Current placeholder from the list
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  
  // Rotate through placeholders every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [placeholders.length]);
  
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [input]);

  return (
    <div className={`${className} rounded-xl bg-white ring-1 ring-[#FFCC00]/40 hover:ring-[#FFCC00]/60 focus-within:ring-[#FFCC00] w-full transition-all duration-300 shadow-sm relative`}>
      <div className="flex items-end">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholders[placeholderIndex]}
          className="bg-transparent text-[#664D00] w-full px-4 py-3 outline-none resize-none max-h-40 placeholder-[#664D00]/50 text-base"
          rows={1}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        
        {isLoading ? (
          <button
            onClick={stop}
            className="p-2.5 ms-1 me-1.5 my-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition-all shrink-0 flex items-center justify-center"
            aria-label="إيقاف الإجابة"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
            </svg>
            <span className="sr-only">إيقاف</span>
          </button>
        ) : (
          <button
            onClick={(e) => handleSubmit(e)}
            disabled={!input.trim()}
            className={`p-2.5 ms-1 me-1.5 my-1.5 rounded-lg ${
              input.trim()
                ? "bg-[#664D00] hover:bg-[#8B6B00] text-white cursor-pointer"
                : "bg-[#664D00]/30 text-white/50 cursor-not-allowed"
            } transition-all shrink-0 flex items-center justify-center`}
            aria-label="إرسال السؤال"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
            <span className="sr-only">إرسال</span>
          </button>
        )}
      </div>
      
      <div className="text-xs text-[#664D00]/60 px-4 pb-2 text-right">
        اضغط Enter للإرسال أو Shift+Enter لإضافة سطر جديد
      </div>
    </div>
  );
}
