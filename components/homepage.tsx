// @ts-nocheck
/* eslint-disable react/no-unescaped-entities */

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { SparklesIcon, BookOpenIcon, UserIcon, QuestionMarkIcon } from "./icons";
import Header from "./header";
import Footer from "./footer";
import { LoadingSpinner } from "./LoadingSpinner";
import { useRouter } from "next/navigation";

export function HomePage() {
  const router = useRouter();
  const [chatId, setChatId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    setChatId(nanoid());
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  const handleStartNow = () => {
    if (chatId) {
      setIsLoading(true);
      // Navigate after a short delay to show the loading spinner
      setTimeout(() => {
        router.push(`/chat/${chatId}`);
      }, 1500);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FFF8E1] via-white to-[#FFFDE7] font-noto-sans flex items-center justify-center" dir="rtl">
        <div className="flex flex-col items-center gap-6">
          <LoadingSpinner size={60} color="#FFCC00" thickness={3} text="جارٍ إعداد غرفة التعلم..." textColor="#FFCC00" />
          <p className="text-[#664D00] text-lg mt-2">سنبدأ في ثوانٍ، استعد للتعلم!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDE7] font-noto-sans pt-16" dir="rtl">
      {/* Use the existing Header component */}
      <Header />
      
      {/* Hero Section - New Bold Design */}
      <section className="relative pt-16 pb-20 md:py-20 px-6 md:px-10 max-w-7xl mx-auto bg-[#FFCC00]/10 rounded-3xl mt-6 mx-6 md:mt-10 md:mx-auto overflow-hidden border-4 border-[#FFD700]/30">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFD700]/20 rounded-full"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#FFCC00]/20 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-[#FFCC00]/40 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-[#FFCC00]/30 rounded-full"></div>
        
        <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
          <motion.div 
            className="flex flex-col text-right md:col-span-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#FFD700]/20 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-bold text-[#664D00]">#أفضل_منصة_تعليمية</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#664D00] leading-none mb-6">
              اكتشف متعة 
              <span className="relative inline-block px-2 mx-1">
                <span className="relative z-10">التعلُم</span>
                <span className="absolute bottom-0 left-0 right-0 h-6 bg-[#FFCC00] -z-10 -rotate-2"></span>
              </span>
              معنا!
            </h1>
            
            <p className="text-[#664D00] text-xl leading-relaxed mb-8 font-medium">
              منصة <span className="font-bold">تعلّم</span> تمنحك تجربة تعليمية مميزة مع مدرسين محترفين ومحتوى تعليمي متنوع. ابدأ رحلتك التعليمية الآن واكتشف عالماً من المعرفة.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {chatId ? (
                <motion.button 
                  onClick={handleStartNow}
                  className="px-8 py-4 bg-[#664D00] text-white rounded-xl font-bold transition-all text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">ابدأ الدراسة الآن</span>
                  <span className="absolute top-0 left-0 right-0 bottom-0 bg-[#8B6B00] -z-0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </motion.button>
              ) : (
                <div className="px-8 py-4 bg-[#664D00] text-white rounded-xl font-bold text-lg shadow-md opacity-75">
                  ابدأ الدراسة الآن
                </div>
              )}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="#how-it-works" 
                  className="px-8 py-4 bg-white border-2 border-[#664D00] text-[#664D00] rounded-xl font-bold transition-all text-lg hover:bg-[#FFFBE0] duration-300 block text-center shadow-md"
                >
                  تعرف علينا
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Floating Elements Design */}
          <motion.div
            className="relative md:col-span-6 h-96 md:h-[500px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Main Circle */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-[#FFCC00] rounded-full shadow-2xl flex items-center justify-center"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "mirror" 
              }}
            >
              <span className="text-[#664D00] text-6xl md:text-7xl font-black">تعلّم</span>
            </motion.div>
            
            {/* Floating Subject Bubbles */}
            <motion.div 
              className="absolute top-0 left-[25%] w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.5
              }}
            >
              <span className="text-[#664D00] text-lg font-bold">رياضيات</span>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4.5, 
                repeat: Infinity,
                repeatType: "mirror",
                delay: 1
              }}
            >
              <span className="text-[#664D00] text-lg font-bold">علوم</span>
            </motion.div>
            
            <motion.div 
              className="absolute top-20 right-10 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.7
              }}
            >
              <span className="text-[#664D00] text-sm font-bold">لغة عربية</span>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 right-[20%] w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center"
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, -8, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "mirror",
                delay: 1.5
              }}
            >
              <span className="text-[#664D00] text-lg font-bold">تاريخ</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#FFCC00]/30 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#FFCC00] mb-2">+1000</h3>
              <p className="text-[#664D00] font-bold">درس تعليمي</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#FFCC00]/30 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#FFCC00] mb-2">+50</h3>
              <p className="text-[#664D00] font-bold">مدرس خبير</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#FFCC00]/30 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#FFCC00] mb-2">+20</h3>
              <p className="text-[#664D00] font-bold">مادة دراسية</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#FFCC00]/30 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#FFCC00] mb-2">+10K</h3>
              <p className="text-[#664D00] font-bold">طالب سعيد</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subjects Section - Grid Layout */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#FFCC00]/20 px-4 py-2 rounded-full mb-4">
              <span className="text-base font-bold text-[#664D00]">استكشف المواد الدراسية</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#664D00] mb-4">مواد دراسية متنوعة</h2>
            <p className="text-[#664D00] text-lg max-w-2xl mx-auto">
              نقدم مجموعة واسعة من المواد الدراسية لمختلف المراحل التعليمية بأسلوب مبسط وممتع
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Subject Card 1 */}
            <motion.div 
              className="bg-[#FFF8E1] rounded-2xl overflow-hidden shadow-lg border-2 border-[#FFCC00]/30 group hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="h-32 bg-[#FFCC00] relative">
                <div className="absolute -bottom-8 left-6 w-16 h-16 bg-[#664D00] rounded-2xl shadow-lg flex items-center justify-center transform rotate-12">
                  <span className="text-white text-3xl font-bold transform -rotate-12">ر</span>
                </div>
              </div>
              <div className="p-6 pt-12">
                <h3 className="text-2xl font-bold text-[#664D00] mb-2">الرياضيات</h3>
                <p className="text-[#664D00]/80 mb-6">
                  جبر، هندسة، إحصاء، حساب مثلثات وغيرها من فروع الرياضيات بطريقة سهلة وممتعة.
                </p>
                <Link href="/subjects/math" className="inline-flex items-center font-bold text-[#664D00] group-hover:text-[#8B6B00]">
                  استكشف المادة
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Subject Card 2 */}
            <motion.div 
              className="bg-[#FFF8E1] rounded-2xl overflow-hidden shadow-lg border-2 border-[#FFCC00]/30 group hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="h-32 bg-[#FFCC00] relative">
                <div className="absolute -bottom-8 left-6 w-16 h-16 bg-[#664D00] rounded-2xl shadow-lg flex items-center justify-center transform rotate-12">
                  <span className="text-white text-3xl font-bold transform -rotate-12">ع</span>
                </div>
              </div>
              <div className="p-6 pt-12">
                <h3 className="text-2xl font-bold text-[#664D00] mb-2">العلوم</h3>
                <p className="text-[#664D00]/80 mb-6">
                  فيزياء، كيمياء، أحياء، علوم أرض مع تجارب تفاعلية وشروحات مبسطة.
                </p>
                <Link href="/subjects/science" className="inline-flex items-center font-bold text-[#664D00] group-hover:text-[#8B6B00]">
                  استكشف المادة
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Subject Card 3 */}
            <motion.div 
              className="bg-[#FFF8E1] rounded-2xl overflow-hidden shadow-lg border-2 border-[#FFCC00]/30 group hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="h-32 bg-[#FFCC00] relative">
                <div className="absolute -bottom-8 left-6 w-16 h-16 bg-[#664D00] rounded-2xl shadow-lg flex items-center justify-center transform rotate-12">
                  <span className="text-white text-3xl font-bold transform -rotate-12">ل</span>
                </div>
              </div>
              <div className="p-6 pt-12">
                <h3 className="text-2xl font-bold text-[#664D00] mb-2">اللغة العربية</h3>
                <p className="text-[#664D00]/80 mb-6">
                  نحو، صرف، بلاغة، أدب، نصوص وتدريبات لغوية لتنمية مهاراتك اللغوية.
                </p>
                <Link href="/subjects/arabic" className="inline-flex items-center font-bold text-[#664D00] group-hover:text-[#8B6B00]">
                  استكشف المادة
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/subjects">
              <motion.button 
                className="px-8 py-3 bg-[#FFCC00]/20 text-[#664D00] rounded-xl font-bold border-2 border-[#FFCC00] hover:bg-[#FFCC00]/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                عرض جميع المواد
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Bold Yellow */}
      <section id="features" className="py-20 px-6 md:px-10 bg-[#664D00]">
        <div className="max-w-7xl mx-auto relative">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full"></div>
          
          <motion.div 
            className="text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white/10 px-4 py-2 rounded-full mb-4">
              <span className="text-base font-bold text-white/90">لماذا تختار منصتنا؟</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">ميزات تجعلنا الاختيار الأفضل</h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              نسعى دائماً لتقديم تجربة تعليمية فريدة تلبي احتياجات الطلاب وتساعدهم على تحقيق أهدافهم
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="size-16 flex items-center rounded-2xl justify-center mb-6 bg-[#FFCC00] transform -rotate-6 shadow-lg">
                <BookOpenIcon size={32} className="text-[#664D00] transform rotate-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">محتوى تعليمي عالي الجودة</h3>
              <p className="text-white/80 leading-relaxed">
                محتوى معد بعناية من قبل خبراء تعليميين متخصصين، يتوافق مع المناهج الدراسية ويقدم المعلومات بطريقة مبسطة وممتعة.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="size-16 flex items-center rounded-2xl justify-center mb-6 bg-[#FFCC00] transform -rotate-6 shadow-lg">
                <QuestionMarkIcon size={32} className="text-[#664D00] transform rotate-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">تفاعل مباشر وإجابات فورية</h3>
              <p className="text-white/80 leading-relaxed">
                إمكانية طرح الأسئلة والحصول على إجابات فورية من خلال نظام المساعدة الذكي، بالإضافة إلى نظام تدريب تفاعلي.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="size-16 flex items-center rounded-2xl justify-center mb-6 bg-[#FFCC00] transform -rotate-6 shadow-lg">
                <UserIcon size={32} className="text-[#664D00] transform rotate-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">تعلم مخصص لاحتياجاتك</h3>
              <p className="text-white/80 leading-relaxed">
                نظام يتكيف مع مستوى الطالب واحتياجاته الفردية، ويقدم توصيات مخصصة وخطط تعليمية تناسب نمط تعلمه.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New Design */}
      <section className="py-20 px-6 md:px-10 bg-[#FFFDE7] overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-[#664D00]/5 skew-y-3 transform -translate-y-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-[#664D00]/5 -skew-y-3 transform translate-y-10"></div>
        <div className="absolute top-1/4 right-0 w-32 h-32 bg-[#FFCC00]/20 rounded-full -translate-x-20"></div>
        <div className="absolute bottom-1/4 left-0 w-20 h-20 bg-[#FFCC00]/30 rounded-full translate-x-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#FFCC00]/20 px-4 py-2 rounded-full mb-4">
              <span className="text-base font-bold text-[#664D00]">آراء الطلاب</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#664D00] mb-4">ماذا قال طلابنا عنا</h2>
            <p className="text-[#664D00] text-lg max-w-2xl mx-auto">
              نفخر بآراء طلابنا والنجاحات التي حققوها من خلال منصتنا التعليمية
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white p-8 rounded-3xl shadow-lg border-2 border-[#FFCC00]/30 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-6 right-6">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 18.6667C9.33333 20.1395 8.1395 21.3333 6.66667 21.3333C5.19384 21.3333 4 20.1395 4 18.6667C4 17.1938 5.19384 16 6.66667 16V12C3.05448 12 0 15.0545 0 18.6667C0 22.2789 3.05448 25.3333 6.66667 25.3333C10.2789 25.3333 13.3333 22.2789 13.3333 18.6667V12H9.33333V18.6667ZM25.3333 18.6667C25.3333 20.1395 24.1395 21.3333 22.6667 21.3333C21.1938 21.3333 20 20.1395 20 18.6667C20 17.1938 21.1938 16 22.6667 16V12C19.0545 12 16 15.0545 16 18.6667C16 22.2789 19.0545 25.3333 22.6667 25.3333C26.2789 25.3333 29.3333 22.2789 29.3333 18.6667V12H25.3333V18.6667Z" fill="#FFCC00"/>
                </svg>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="size-16 rounded-full bg-[#FFCC00]/20 flex items-center justify-center font-bold text-[#FFCC00] text-xl mr-3">
                  أ
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#664D00]">أحمد السعيد</h4>
                  <p className="text-[#664D00]/70 text-sm">طالب في الصف الثالث الثانوي</p>
                </div>
              </div>
              
              <div className="flex mb-4 text-[#FFCC00]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
              </div>
              
              <p className="text-[#664D00] leading-relaxed text-lg">
                "منصة تعلّم ساعدتني كثيراً في فهم المواد الصعبة مثل الفيزياء والرياضيات. أسلوب الشرح ممتاز والأمثلة التفاعلية سهّلت عليّ استيعاب المفاهيم المعقدة."
              </p>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white p-8 rounded-3xl shadow-lg border-2 border-[#FFCC00]/30 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-6 right-6">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 18.6667C9.33333 20.1395 8.1395 21.3333 6.66667 21.3333C5.19384 21.3333 4 20.1395 4 18.6667C4 17.1938 5.19384 16 6.66667 16V12C3.05448 12 0 15.0545 0 18.6667C0 22.2789 3.05448 25.3333 6.66667 25.3333C10.2789 25.3333 13.3333 22.2789 13.3333 18.6667V12H9.33333V18.6667ZM25.3333 18.6667C25.3333 20.1395 24.1395 21.3333 22.6667 21.3333C21.1938 21.3333 20 20.1395 20 18.6667C20 17.1938 21.1938 16 22.6667 16V12C19.0545 12 16 15.0545 16 18.6667C16 22.2789 19.0545 25.3333 22.6667 25.3333C26.2789 25.3333 29.3333 22.2789 29.3333 18.6667V12H25.3333V18.6667Z" fill="#FFCC00"/>
                </svg>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="size-16 rounded-full bg-[#FFCC00]/20 flex items-center justify-center font-bold text-[#FFCC00] text-xl mr-3">
                  س
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#664D00]">سارة أحمد</h4>
                  <p className="text-[#664D00]/70 text-sm">طالبة في الصف الأول الثانوي</p>
                </div>
              </div>
              
              <div className="flex mb-4 text-[#FFCC00]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
              </div>
              
              <p className="text-[#664D00] leading-relaxed text-lg">
                "المنصة رائعة! أحب كثيراً نظام التمارين التفاعلية والاختبارات التي تساعدني على معرفة نقاط قوتي وضعفي. المدرسون متميزون وطريقة الشرح ممتازة."
              </p>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div 
              className="bg-white p-8 rounded-3xl shadow-lg border-2 border-[#FFCC00]/30 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-6 right-6">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 18.6667C9.33333 20.1395 8.1395 21.3333 6.66667 21.3333C5.19384 21.3333 4 20.1395 4 18.6667C4 17.1938 5.19384 16 6.66667 16V12C3.05448 12 0 15.0545 0 18.6667C0 22.2789 3.05448 25.3333 6.66667 25.3333C10.2789 25.3333 13.3333 22.2789 13.3333 18.6667V12H9.33333V18.6667ZM25.3333 18.6667C25.3333 20.1395 24.1395 21.3333 22.6667 21.3333C21.1938 21.3333 20 20.1395 20 18.6667C20 17.1938 21.1938 16 22.6667 16V12C19.0545 12 16 15.0545 16 18.6667C16 22.2789 19.0545 25.3333 22.6667 25.3333C26.2789 25.3333 29.3333 22.2789 29.3333 18.6667V12H25.3333V18.6667Z" fill="#FFCC00"/>
                </svg>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="size-16 rounded-full bg-[#FFCC00]/20 flex items-center justify-center font-bold text-[#FFCC00] text-xl mr-3">
                  م
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#664D00]">محمد العربي</h4>
                  <p className="text-[#664D00]/70 text-sm">ولي أمر</p>
                </div>
              </div>
              
              <div className="flex mb-4 text-[#FFCC00]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
              </div>
              
              <p className="text-[#664D00] leading-relaxed text-lg">
                "لاحظت تحسناً كبيراً في مستوى ابني بعد استخدامه منصة تعلّم. المحتوى آمن وموثوق والتقارير الدورية تساعدني على متابعة تقدمه في المواد المختلفة."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Bold and Fun */}
      <section id="how-it-works" className="py-20 px-6 md:px-10 bg-[#FFF8E1] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#FFCC00]/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#FFCC00]/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#FFCC00]/30 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#FFCC00]/20 px-4 py-2 rounded-full mb-4">
              <span className="text-base font-bold text-[#664D00]">كيف تعمل المنصة</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#664D00] mb-4">رحلة التعلم معنا بسيطة وممتعة</h2>
            <p className="text-[#664D00] text-lg max-w-3xl mx-auto">
              خطوات سهلة تمكنك من بدء رحلتك التعليمية والاستفادة القصوى من منصتنا
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-28 h-4 bg-[#FFCC00] hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-16 relative z-10">
              {/* Step 1 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="size-24 flex items-center justify-center rounded-3xl mx-auto bg-[#FFCC00] mb-8 text-4xl font-black text-[#664D00] shadow-lg rotate-3">
                  1
                </div>
                <h3 className="text-2xl font-bold text-[#664D00] mb-4 text-center">سجل في المنصة</h3>
                <p className="text-[#664D00] leading-relaxed text-center">
                  قم بإنشاء حساب جديد في منصة تعلّم واختر المرحلة الدراسية والمواد التي تهتم بها
                </p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="size-24 flex items-center justify-center rounded-3xl mx-auto bg-[#FFCC00] mb-8 text-4xl font-black text-[#664D00] shadow-lg -rotate-3">
                  2
                </div>
                <h3 className="text-2xl font-bold text-[#664D00] mb-4 text-center">اختر المحتوى المناسب</h3>
                <p className="text-[#664D00] leading-relaxed text-center">
                  استعرض المناهج والدروس المتاحة واختر ما يناسب احتياجاتك التعليمية من شروحات وتمارين
                </p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="size-24 flex items-center justify-center rounded-3xl mx-auto bg-[#FFCC00] mb-8 text-4xl font-black text-[#664D00] shadow-lg rotate-3">
                  3
                </div>
                <h3 className="text-2xl font-bold text-[#664D00] mb-4 text-center">استمتع بتجربة التعلم</h3>
                <p className="text-[#664D00] leading-relaxed text-center">
                  ابدأ في التعلم من خلال الدروس التفاعلية، حل التمارين، اطرح الأسئلة واحصل على مساعدة فورية
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-[#664D00] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              ابدأ رحلة التعلم الممتعة مع منصة تعلّم اليوم
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              انضم إلى آلاف الطلاب الذين يستمتعون بتجربة تعليمية مميزة ويحققون نتائج مبهرة مع منصتنا
            </p>
            
            <div className="flex flex-col md:flex-row gap-5 justify-center">
              {chatId ? (
                <motion.button 
                  onClick={handleStartNow}
                  className="px-12 py-5 bg-[#FFCC00] text-[#664D00] rounded-xl font-black transition-all text-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">سجل الآن مجاناً</span>
                  <span className="absolute top-0 left-0 right-0 bottom-0 bg-white -z-0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </motion.button>
              ) : (
                <div className="px-12 py-5 bg-[#FFCC00] text-[#664D00] rounded-xl font-bold text-xl shadow-md opacity-75">
                  سجل الآن مجاناً
                </div>
              )}
              
              <Link href="#features">
                <motion.button 
                  className="px-12 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold transition-all text-xl hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  اكتشف المزيد
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}