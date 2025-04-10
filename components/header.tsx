"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [currentGrade, setCurrentGrade] = useState("الصف الرابع");
  const grades = [
    "الصف الأول", 
    "الصف الثاني", 
    "الصف الثالث", 
    "الصف الرابع", 
    "الصف الخامس", 
    "الصف السادس"
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#FFCC00]/90 to-[#FFD84D]/90 backdrop-blur-md shadow-md z-50 px-4 sm:px-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        {/* لوجو "ت" */}
        <div className="size-10 rounded-md bg-[#664D00] shadow-md flex items-center justify-center rotate-3">
          <span className="text-xl font-bold text-[#FFD700] dark:text-white">ت</span>
        </div>

        {/* اسم المنصة */}
        <div className="flex flex-col leading-tight">
          <Link href="/" className="text-[#664D00] text-2xl font-bold cursor-pointer">
            تعلّم
          </Link>
          <span className="text-[#664D00]/80 text-[10px] font-medium -mt-1.5">
            المساعد التعليمي للمنهاج الأردني
          </span>
        </div>
      </div>
      
      {/* اختيار الصف الدراسي */}
      <div className="flex items-center gap-3">
        <div className="relative group">
          <button className="text-[#664D00] bg-white/60 hover:bg-white/80 transition-colors px-3 py-1.5 text-sm font-medium rounded-md flex items-center">
            {currentGrade}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </button>
          
          <div className="absolute z-10 mt-1 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => setCurrentGrade(grade)}
                  className={`block w-full text-right px-4 py-2 text-sm ${
                    grade === currentGrade 
                      ? 'bg-[#FFF8E1] text-[#664D00] font-medium' 
                      : 'text-[#664D00]/80 hover:bg-[#FFF8E1]'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>
        </div>
      
        <Link href="/lessons">
          <motion.button 
            className="bg-[#664D00] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-[#8B6B00] transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            الدروس
          </motion.button>
        </Link>
      </div>
    </motion.header>
  );
}
