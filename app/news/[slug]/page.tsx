import { notFound } from "next/navigation";
import type { Metadata } from "next";
import articles from "@/data/news.json";
import { ArticleCard } from "@/componets/ArticleCard";

type ArticleDetailpageType = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ArticleDetailpageType): Promise<Metadata> {
  const { slug } = await params;

  const foundArticle = articles.find((article) => article.slug === slug);

  if (!foundArticle) {
    notFound();
  }

  return {
    title: foundArticle.title,
    description: foundArticle.description,
  };
}

export const generateStaticParams = () => {
  return articles.map((article) => ({
    slug: article.slug,
  }));
};

const ArticleDetailpage = async ({ params }: ArticleDetailpageType) => {
  const { slug } = await params;

  const foundArticle = articles.find((article) => article.slug === slug);

  if (!foundArticle) {
    notFound();
  }

  const related = articles.filter(
    (element) =>
      foundArticle.category === element.category &&
      foundArticle.id !== element.id,
  );

  const initials = foundArticle.author
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12">
      <div className="flex items-center gap-[5.5px]">
        <div className="w-[62px] h-[27px] rounded-[100px] bg-[#ECFDF5] flex justify-center items-center">
          <p className="text-[10px] text-[#065F46] font-bold">
            {foundArticle.category}
          </p>
        </div>

        <p className="text-[#65675F] text-[11px]">— THE DAILY</p>
      </div>

      <h1 className="mt-[20px] text-[60px] font-bold text-[#0C0A09]">
        {foundArticle.title}
      </h1>

      <p className="mt-[16px] text-[20px] text-[#57534E]">
        {foundArticle.description}
      </p>

      <div className="flex items-center gap-[30px] mt-[32px]">
        <div className="flex flex-1 gap-5">
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#ECFDF5]">
            <span className="text-[12px] text-[#065F46] font-bold">
              {initials}
            </span>
          </div>

          <div className="text-[10px] text-[#65675F] flex flex-col font-semibold">
            written by
            <span className="text-[14px] text-[#22241F] font-bold">
              {foundArticle.author}
            </span>
          </div>
        </div>

        <div className="text-[10px] text-[#65675F] flex flex-col font-semibold">
          PUBLISHED
          <span className="text-[14px] text-[#22241F]">
            {foundArticle.date}
          </span>
        </div>

        <div className="text-[10px] text-[#65675F] flex flex-col font-semibold">
          READING TIME
          <span className="text-[14px] text-[#22241F]">1 MIN READ</span>
        </div>
      </div>

      <img
        src={foundArticle.image}
        alt={foundArticle.imageAlt}
        className="mt-[40px] w-full h-[514.78px] rounded-[24px]"
      />

      <div className="w-full max-w-[768px] h-[596px] border rounded-[16px] bg-[#FFFFFF] flex flex-col mt-[56px] mx-auto">
        <p className="text-[10px] text-[#C44724] ml-[40px] mt-[40px]">
          ━━ THE STORY
        </p>

        <div className="mt-[32px] ml-[40px] space-y-5">
          {foundArticle.content.map((paragraph, index) => (
            <p key={index} className="text-lg leading-8">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="text-[16px] text-[#C44724] flex justify-center mt-[24px]">
          • • •
        </p>
      </div>

      <p className="text-[11px] text-[#65675F] flex justify-center mt-[24px]">
        Fictional sample story · The Daily learning edition
      </p>

      <div className="w-full max-w-[694px] h-[98px] rounded-[16px] flex justify-between items-center bg-[#FFF7ED] mx-auto mt-[48px]">
        <div className="flex flex-col ml-6">
          <p className="text-[18px] text-[#22241F] ">
            A little more curiosity?
          </p>

          <p className="text-[14px] text-[#65675F]">
            Your next good read is just around the corner.
          </p>
        </div>

        <div className="w-[98px] h-[37px] rounded-[100px] bg-[#22241F] flex justify-center items-center mr-6">
          <p className="text-[12px] text-[#FFFFFF]">All stories ↗</p>
        </div>
      </div>

      <div className="mt-7 mb-7 flex flex-col ">
        <p className="text-[10px] text-[#C44724] mb-2 font-bold">
          KEEP YOUR CURIOSITY GOING
        </p>

        <p className="text-[30px] text-[#22241F] font-bold">
          More to discover.
        </p>
      </div>

      <div className="flex gap-10 mt-[32px] mb-[64px]">
        {related.map((relatedArticle) => (
          <ArticleCard key={relatedArticle.id} {...relatedArticle} />
        ))}
      </div>
    </main>
  );
};

export default ArticleDetailpage;
