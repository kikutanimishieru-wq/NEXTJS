import Link from "next/link";
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
  const { title, description, category, image, imageAlt, author, date, slug } = props;

  return (
    <Link href={`/news/${slug}`}>
    <div className="h-[500px] w-[376px] overflow-hidden rounded-[16px] bg-white">
      <img
        src={image}
        alt={imageAlt}
        className="h-[235px] w-full object-cover"
        />

      <div className="space-y-3 px-[25px] py-4">
        <p className="text-[12px] text-[#065F46]">{category}</p>

        <h2 className="text-[20px] text-[#1C1917]">{title}</h2>
        <p className="text-[14px] text-[#57534E]">{description}</p>

        <div className="h-px bg-[#E2E2DA]" />

        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5]">

          </div>

          <div className="flex flex-1 flex-col gap-1">
            <p className="text-[12px] text-[#292524]">{author}</p>
            <p className="text-[11px] text-[#78716C]">{date}</p>
          </div>

          <div className="size-9 shrink-0 rounded-full bg-[#FFF7ED]" />
        </div>
      </div>
    </div>
    </Link>
  );
};
