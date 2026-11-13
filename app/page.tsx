import data from "@/data/news.json";
import { ArticleCard } from "@/componets/ArticleCard";
import { Metadata } from "next";

const firstArtictle = data[0];

export const generateMetadata: Metadata = {
  openGraph: {
    title: "The Daily — A fresh perspective",
    description:
      "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
    type: "website",
    siteName: "The Daily",
    images: [{ url: firstArtictle.image, alt: firstArtictle.imageAlt }],
  },
};

const HomePage = () => {
  return (
    <div>
      <header>
        <div className="mb-6 flex items-end justify-between gap-5">
          <div className="flex flex-col">
            <p className="text-[10px] text-[#C44724]">STAY CURIOUS</p>
            <p className="text-[36px] text-[#22241F]">The latest stories.</p>
          </div>
          <p className="text-[12px] text-[#65675F] mt-[58px]">
            Big ideas. Fresh voices. Worth your time.
          </p>
        </div>
      </header>

      <div className="w-[1184px] h-[1px] bg-[#E2E2DA] mt-[24px] "></div>
      <div className="w-[588px] h-[61px] flex gap-1 items-center">
        <div className="w-[80px] h-[37px] rounded-[4px] bg-[#22241F] flex justify-center items-center mt-[12px]">
          <p className="text-[12px] text-[#FFFFFF]">All stories</p>
        </div>

        <div className="flex  gap-[16px] mt-[12px] ml-[10px]">
          <p className="text-[12px] text-[#65675F]">World</p>
          <p className="text-[12px] text-[#65675F]">Technology</p>
          <p className="text-[12px] text-[#65675F]">Culture</p>
          <p className="text-[12px] text-[#65675F]">Travel</p>
          <p className="text-[12px] text-[#65675F]">Design</p>
          <p className="text-[12px] text-[#65675F]">Science</p>
          <p className="text-[12px] text-[#65675F]">Business</p>
        </div>
      </div>
      <p className="text-[12px] text-[#65675F] mt-[20px] mb-[20px]">
        20 stories to explore
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>

      <footer></footer>
    </div>
  );
};

export default HomePage;
