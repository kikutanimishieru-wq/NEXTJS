import data from "@/data/news.json";
import { notFound } from "next/navigation";

type ArticleDetailpageType = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
  return data.map((article) => ({
    slug: article.slug,
  }));
};

const ArticleDetailpage = async ({ params }: ArticleDetailpageType) => {
  const { slug } = await params;

  const foundArticle = data.find(
    (article) => article.slug === slug
  );

  if (!foundArticle) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[900px] px-6 py-12">
      <p className="text-[10px] text-[#065F46]">
        {foundArticle.category}
      </p>
      <p className="text-[#65675F] text-[11px]">
        —   THE DAILY
      </p>

      <h1 className="mt-4 text-[60px] text-[#0C0A09]">
        {foundArticle.title}
      </h1>

      <p className="mt-4 text-[20px] text-[#57534E]">
        {foundArticle.description}
      </p>

      <div className="mt-6 flex gap-4 text-sm text-gray-500">
        <span className="text-[14px] text-[#22241F]">{foundArticle.author}</span>
        <span className="t">{foundArticle.date}</span>
      </div>

      <img
        src={foundArticle.image}
        alt={foundArticle.imageAlt}
        className="mt-8 w-full rounded-xl"
      />

      <div className="mt-8 space-y-5">
        {foundArticle.content.map((paragraph, index) => (
          <p key={index} className="text-lg leading-8">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
};

export default ArticleDetailpage;