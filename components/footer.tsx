"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SparklesIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-14 px-6 md:px-10 border-t border-[#FFCC00]/20 bg-[#FFFDE7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* لوجو "ت" */}
              <div className="size-10 rounded-md bg-[#664D00] shadow-md flex items-center justify-center rotate-3">
                <span className="text-xl font-bold text-[#FFD700]">ت</span>
              </div>
              <span className="text-2xl font-bold text-[#664D00]">تعلّم</span>
            </div>
            <p className="text-[#664D00]/80 leading-relaxed">
              منصة تعليمية متكاملة تقدم محتوى تعليمي مميز ومدرسين محترفين لتساعد الطلاب على تحقيق أهدافهم الدراسية.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-[#664D00] mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-[#664D00]/80 hover:text-[#FFCC00] transition-colors text-base flex items-center gap-2">
                  <span>المميزات</span>
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-[#664D00]/80 hover:text-[#FFCC00] transition-colors text-base flex items-center gap-2">
                  <span>كيف تعمل المنصة</span>
                </Link>
              </li>
              <li>
                <Link href="#subjects" className="text-[#664D00]/80 hover:text-[#FFCC00] transition-colors text-base flex items-center gap-2">
                  <span>المواد الدراسية</span>
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-[#664D00]/80 hover:text-[#FFCC00] transition-colors text-base flex items-center gap-2">
                  <span>الأسئلة الشائعة</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-[#664D00] mb-4">مصادر</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/guides" className="text-[#664D00]/80 hover:text-[#FFCC00] transition-colors text-base">
                  أدلة الاستخدام
                </Link>
              </li>
              <li>
                <Link href="/resources/library" className="text-[#664D00]/80 hover:text-[#FFCC00] transition-colors text-base">
                  المكتبة التعليمية
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#664D00]/80 hover:text-[#FFCC00] transition-colors text-base">
                  المدونة
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact and Social Media */}
          <div>
            <h3 className="text-lg font-bold text-[#664D00] mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@taallam.com" className="text-[#664D00]/80 hover:text-[#FFCC00] transition-colors text-base">
                  info@taallam.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 mt-3">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-[#FFCC00]/10 hover:bg-[#FFCC00]/30 rounded-full transition-all hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#664D00]">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-[#FFCC00]/10 hover:bg-[#FFCC00]/30 rounded-full transition-all hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#664D00]">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-[#FFCC00]/10 hover:bg-[#FFCC00]/30 rounded-full transition-all hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#664D00]">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="size-9 flex items-center justify-center bg-[#FFCC00]/10 hover:bg-[#FFCC00]/30 rounded-full transition-all hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#664D00]">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#FFCC00]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#664D00]/70">
            © {new Date().getFullYear()} تعلّم. جميع الحقوق محفوظة
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#664D00]/70 hover:text-[#FFCC00] transition-colors text-sm">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-[#664D00]/70 hover:text-[#FFCC00] transition-colors text-sm">
              شروط الاستخدام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}