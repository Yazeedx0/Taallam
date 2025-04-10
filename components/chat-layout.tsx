import Header from "./header";
import { LessonNavigation } from "./lesson-navigation";
import { SelectionProvider } from "@/context/selection-context";
import { SelectionPopup } from "./selection-popup";

interface ChatLayoutProps {
  children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <SelectionProvider>
      <div dir="rtl" className="min-h-screen max-h-screen h-screen flex flex-col overflow-hidden bg-[#FFFDE7] font-noto-sans">
        <Header />
        
        <div className="flex flex-grow h-[calc(100vh-4rem)] mt-16 overflow-hidden">
          {/* Right side - Chat Interface */}
          <div className="w-full md:w-1/2 h-full flex flex-col border-l border-[#FFCC00]/20 bg-[#FFFDE7] shadow-sm overflow-hidden">
            <div className="p-3 border-b border-[#FFCC00]/20 shrink-0 bg-gradient-to-r from-[#FFF8E1] to-[#FFFBE0]">
              <h2 className="text-lg font-bold text-[#664D00] flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FFCC00]"></span>
                محادثتك مع تعلّم
              </h2>
            </div>
            <div className="flex-grow flex flex-col overflow-hidden">
              {children}
            </div>
          </div>
          
          {/* Left side - Lesson Content */}
          <div className="hidden md:flex md:w-1/2 h-full flex-col bg-white overflow-hidden border-r border-[#FFCC00]/20">
            <LessonNavigation />
          </div>
        </div>
        
        {/* Selection popup appears when text is selected */}
        <SelectionPopup />
      </div>
    </SelectionProvider>
  );
}
