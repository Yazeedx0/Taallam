// @ts-nocheck

"use client";

import type { Message } from "ai";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";

import { SparklesIcon, UserIcon, ThumbUpIcon } from "./icons";
import { Markdown } from "./markdown";
import { PreviewAttachment } from "./preview-attachment";
import { cn } from "@/lib/utils";
import { Weather } from "./weather";
import { Tooltip } from "./ui/tooltip";

// سأقوم بتعريف أيقونة المساعد هنا
export const AssistantIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export function PreviewMessage({
  message,
  isLoading = false,
  chatId,
}: {
  message: Message;
  isLoading?: boolean;
  chatId: string;
}) {
  const isAssistant = message.role === "assistant";
  const [isStarred, setIsStarred] = useState(false);

  const toggleStarred = useCallback(() => {
    setIsStarred((prev) => !prev);
  }, []);

  // Enhanced message animation variants
  const messageVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="w-full px-3 py-2.5 group/message"
      initial="hidden"
      animate="visible"
      variants={messageVariants}
      data-role={message.role}
    >
      <div
        className={cn(
          "flex gap-4 py-5 px-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md",
          isAssistant
            ? "bg-[#FFF8E1] w-full md:w-[88%] border-l-4 border-[#FFCC00]"
            : "bg-[#F0FAF0] border w-full md:w-[88%] mr-auto flex-row-reverse border-r-4 border-[#33B37B]"
        )}
      >
        <div
          className={cn(
            "size-10 flex items-center rounded-full justify-center ring-2 shrink-0 shadow-sm transition-transform duration-300 group-hover/message:scale-110",
            isAssistant
              ? "bg-gradient-to-br from-[#FFCC00] to-[#FFD700] ring-[#FFECB3]"
              : "bg-gradient-to-br from-[#33B37B] to-[#7BDCB5] ring-[#D1FAE5]"
          )}
        >
          {isAssistant ? 
            <AssistantIcon size={20} className="text-white" /> : 
            <UserIcon size={20} className="text-white" />
          }
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center mb-2">
            <Tooltip content="هل كان هذا الشرح مفيداً؟">
              <button
                onClick={toggleStarred}
                className="text-gray-400 hover:text-[#FFCC00] transition-colors"
                aria-label="تقييم الشرح"
              >
                <ThumbUpIcon className={`w-4 h-4 ${isStarred ? "text-[#FFCC00]" : ""}`} />
              </button>
            </Tooltip>

            <span className={cn("text-sm font-medium", isAssistant ? "text-[#664D00]" : "text-[#33B37B]")}>
              {isAssistant ? "المعلّم الذكي" : "أنت"}
            </span>
          </div>

          {message.content && (
            <div className="flex flex-col gap-3 text-right">
              <div className={cn(
                "text-[#664D00] leading-relaxed",
                isAssistant ? "font-medium" : "font-medium"
              )}>
                <Markdown>{message.content as string}</Markdown>
              </div>
            </div>
          )}

          {message.toolInvocations?.map(({ toolName, toolCallId, state, result }) => (
            <div key={toolCallId} className="mt-2">
              {/* ...existing code... */}
            </div>
          ))}

          {message.experimental_attachments?.length > 0 && (
            <div className="flex flex-row-reverse gap-2 mt-2">
              {message.experimental_attachments.map((attachment) => (
                <PreviewAttachment key={attachment.url} attachment={attachment} />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ThinkingMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="px-4 md:px-6 py-2 bg-white"
    >
      <div className={`flex gap-4 max-w-4xl mx-auto`}>
        <div className="size-10 flex items-center rounded-xl justify-center shrink-0 ring-2 ring-[#FFECB3] shadow-sm bg-gradient-to-br from-[#FFD700] to-[#FFEB3B]">
          <AssistantIcon size={20} className="text-white" />
        </div>
        <div className="w-full p-5 rounded-2xl shadow-sm bg-[#FFF8E1] border-r-4 border-[#FFCC00]">
          <div className="flex justify-end mb-2">
            <span className="text-sm font-medium text-[#664D00]">المعلّم الذكي</span>
          </div>
          <div className="flex gap-1.5 h-5 items-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="size-2 rounded-full bg-[#FFCC00]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
              className="size-2 rounded-full bg-[#FFCC00]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
              className="size-2 rounded-full bg-[#FFCC00]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
