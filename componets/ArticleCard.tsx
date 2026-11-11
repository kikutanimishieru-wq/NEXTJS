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
  const { title, description, category, image, imageAlt, author, date, slug } =
    props;

  const initials = author
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <Link href={`/news/${slug}`}>
      <div className="h-[500px] w-[376px] overflow-hidden rounded-[16px] bg-white">
      <div className="relative">
        <img
          src={image}
          alt={imageAlt}
          className="h-[235px] w-full object-cover"
        />

        <p className="absolute left-3 top-3 rounded-md bg-white px-3 py-1 text-[12px] text-[#065F46]">
          {category}
          </p>
        <p className="absolute left-3 top-50 px-3 py-1 text-[12px] text-[#FFFFFF]">
          1 min read
        </p>

      </div>

        <div className="space-y-3 px-[25px] py-4">
          

          <h2 className="text-[20px] text-[#1C1917] font-bold">{title}</h2>
          <p className="text-[14px] text-[#57534E]">{description}</p>

          <div className="h-px bg-[#E2E2DA]" />

          <div className="flex items-center gap-3">
            <div className=" w-[40px] h-[40px] flex  items-center justify-center rounded-full bg-[#ECFDF5]">
              <span className="text-[12px] text-[#065F46] font-bold">{initials}</span>
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
