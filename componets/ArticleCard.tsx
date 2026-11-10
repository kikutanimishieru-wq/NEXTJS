
import React from "react";
type ArticleCardType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};

export const ArticleCard = (props: ArticleCardType) => {
  const { title, description, category, image, imageAlt, author, date } = props
}


export const ArticleCard = () => {
    return <div className="w-[376px] h-[500px] rounded-[16px] bg-[#FFFFFF]">
        <img src="./" alt="" />
        <div className="w-[326px] h-[114px] gap-3">
            <p className="text-[20px] text-[#1C1917]">The future of cities is greener than you think</p>
            <p className="text-[14px] text-[#57534E]">From rooftop gardens to car-free streets, a quieter urban revolution is taking root.</p>
        </div>
        <div className="w-[326px] h-[1px] bg-[#E2E2DA]"></div>
        <div className="w-[326px] h-[40px] flex gap-3">
            <div className="w-[40px] h-[40px] rounded-[100px] bg-[#ECFDF5] flex justify-center items-center">
                <p className="text-[12px] text-[#065F46]">AM</p>
            </div>

            <div className="w-[226px] h-[37px]  flex flex-col gap-1">
                <p className="text-[12px] text-[#292524]">Alex Morgan</p>
                <p className="text-[11px] text-[#78716C]">Nov 4, 2026</p>
            </div>

             <div className="w-[36px] h-[36px] rounded-[100px] bg-[#FFF7ED]"></div>
     </div>
    </div>;
};
