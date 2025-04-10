import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Template questions by subject
const questionTemplates = {
  math: [
    "كيف أجمع الكسور المتشابهة؟",
    "ما هي خطوات حل مسألة الضرب؟",
    "كيف أجد محيط المربع؟",
    "كيف أحل مسألة طرح الأعداد الكبيرة؟"
  ],
  science: [
    "ما هي دورة حياة الفراشة؟",
    "كيف تنمو النباتات من البذور؟",
    "ما هي حالات المادة الثلاثة؟",
    "كيف تتكون الفصول الأربعة؟"
  ],
  arabic: [
    "كيف أعرب هذه الجملة؟",
    "ما الفرق بين الفاعل والمفعول به؟",
    "كيف أميز أنواع المد؟",
    "كيف أكتب موضوع تعبير عن الوطن؟"
  ],
  social: [
    "أين تقع محافظات الأردن؟",
    "ما هي أهم المعالم التاريخية في الأردن؟",
    "كيف نحافظ على البيئة؟",
    "ما هي موارد المياه في الأردن؟"
  ]
};

export function Overview() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center mt-8 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <div className="size-20 bg-[#FFCC00] rounded-3xl rotate-3 mx-auto mb-6 flex items-center justify-center">
          <span className="text-[#664D00] text-4xl font-bold">ت</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-[#664D00] text-center mb-4">
          مرحباً بك في المعلّم الذكي!
        </h1>
        
        <p className="text-[#664D00]/80 text-lg text-center mb-6">
          أنا معلمك الذكي وسأساعدك في دروسك حسب المنهاج الأردني. يمكنك أن تسألني أي سؤال وسأشرحه لك بطريقة سهلة وبسيطة!
        </p>
        
        <div className="bg-white rounded-xl p-6 border-2 border-[#FFCC00]/30 shadow-md mb-8">
          <h3 className="text-xl font-bold text-[#664D00] mb-4 text-center">ماذا يمكنني أن أفعل لك؟</h3>
          
          <ul className="list-disc list-inside space-y-2 text-[#664D00]">
            <li className="mb-2">شرح الدروس بطريقة سهلة ومبسطة</li>
            <li className="mb-2">مساعدتك في حل الواجبات المدرسية</li>
            <li className="mb-2">تقديم تدريبات واختبارات لتقوية مهاراتك</li>
            <li className="mb-2">الإجابة على أسئلتك حول المواد الدراسية</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl p-6 border-2 border-[#FFCC00]/30 shadow-md mb-10">
          <h3 className="text-xl font-bold text-[#664D00] mb-4 text-center">اختر المادة التي تريد مساعدة فيها</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button 
              onClick={() => setSelectedSubject('math')} 
              className={`p-4 rounded-xl font-bold transition-all ${
                selectedSubject === 'math' 
                ? 'bg-[#FFCC00] text-[#664D00]' 
                : 'bg-[#FFF8E1] text-[#664D00] hover:bg-[#FFECB3]'
              }`}
            >
              الرياضيات
            </button>
            
            <button 
              onClick={() => setSelectedSubject('science')} 
              className={`p-4 rounded-xl font-bold transition-all ${
                selectedSubject === 'science' 
                ? 'bg-[#FFCC00] text-[#664D00]' 
                : 'bg-[#FFF8E1] text-[#664D00] hover:bg-[#FFECB3]'
              }`}
            >
              العلوم
            </button>
            
            <button 
              onClick={() => setSelectedSubject('arabic')} 
              className={`p-4 rounded-xl font-bold transition-all ${
                selectedSubject === 'arabic' 
                ? 'bg-[#FFCC00] text-[#664D00]' 
                : 'bg-[#FFF8E1] text-[#664D00] hover:bg-[#FFECB3]'
              }`}
            >
              اللغة العربية
            </button>
            
            <button 
              onClick={() => setSelectedSubject('social')} 
              className={`p-4 rounded-xl font-bold transition-all ${
                selectedSubject === 'social' 
                ? 'bg-[#FFCC00] text-[#664D00]' 
                : 'bg-[#FFF8E1] text-[#664D00] hover:bg-[#FFECB3]'
              }`}
            >
              الاجتماعيات
            </button>
          </div>
          
          {selectedSubject && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <h4 className="font-bold text-[#664D00] mb-3 text-center">
                يمكنك اختيار أحد الأسئلة التالية أو كتابة سؤالك الخاص
              </h4>
              
              <div className="grid grid-cols-1 gap-2">
                {questionTemplates[selectedSubject].map((question, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-[#FFF8E1] rounded-lg cursor-pointer hover:bg-[#FFECB3] text-[#664D00]"
                    onClick={() => {
                      const textarea = document.querySelector('textarea');
                      if (textarea) {
                        textarea.value = question;
                        textarea.focus();
                        // Trigger an input event to update React state
                        const event = new Event('input', { bubbles: true });
                        textarea.dispatchEvent(event);
                      }
                    }}
                  >
                    {question}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="bg-[#664D00] rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            هيا نبدأ!
          </h3>
          <p className="text-white/80 mb-4">
            اطرح سؤالك في المربع أدناه وسأساعدك في التعلم
          </p>
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFCC00] animate-bounce">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
