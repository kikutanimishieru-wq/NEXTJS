import data from "@/data/news.json";
import { ArticleCard } from "@/componets/ArticleCard";

const HomePage = () => {
  return (
    <div>
      <header>
        <div className="w-[1184px] h-[75px] flex flex-col justify-between">
          <p className="text-[10px] text-[#C44724]">STAY CURIOUS</p>
          <p className="text-[36px] text-[#22241F]">The latest stories.</p>
        </div>
        <p className="text-[12px] text-[#65675F]">
          Big ideas. Fresh voices. Worth your time.
        </p>
      </header>

      <div className="w-[1184px] h-[1px] bg-[#E2E2DA] "></div>
      <div className="w-[588px] h-[61px] flex gap-1 items-center">
        <div className="w-[80px] h-[37px] rounded-[4px] bg-[#22241F] flex justify-center items-center">
          <p className="text-[12px] text-[#FFFFFF]">All stories</p>
        </div>

        <p className="text-[12px] text-[#65675F]">World</p>
        <p className="text-[12px] text-[#65675F]">Technology</p>
        <p className="text-[12px] text-[#65675F]">Culture</p>
        <p className="text-[12px] text-[#65675F]">Travel</p>
        <p className="text-[12px] text-[#65675F]">Design</p>
        <p className="text-[12px] text-[#65675F]">Science</p>
        <p className="text-[12px] text-[#65675F]">Business</p>
      </div>

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
