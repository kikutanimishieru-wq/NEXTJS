import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: {
    default: "The Daily — A fresh perspective",
    template: "%s | The Daily",
  },
  description:
    "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className="scroll-pt-7 scroll-smooth motion-reduce:scroll-auto"
    >
      <body className="bg-paper font-sans text-ink antialiased selection:bg-orange-200">
        <a
          className="absolute -top-20 left-4 z-50 bg-ink p-3.5 text-white focus:top-4"
          href="#main"
        >
          Skip to content
        </a>
        {children}
          <footer>
        <div className="ml-[128px]">
           <p className="text-[10px] text-[#C44724]">KEEP YOUR CURIOSITY GOING</p>
           <p className="text-[30px] text-[#22241F]">More to discover.</p>
        </div>
       


        <div className="w-[300px] h-[133px] flex justify-between items-center ml-[128px]">
           <div className="flex flex-col">
              <p className="text-[30px] text-[#22241F]">the daily ▧</p>
              <p className="text-[12px] text-[#65675F]">
                A fresh perspective. Every day.
              </p>
           </div>
            <p className="text-[12px] text-[#22241F]">Back to top ↑</p>
        
        </div>
       
      </footer>
      </body>

    
    </html>
  );
}
