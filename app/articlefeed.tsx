"use client"

import data from "@/data/news.json";
import {userState, MouseEvent} from "react"

const categories = ["All stories", ...new Set(data.map((article))=> article.category))];

const Home = () => {
    const [category, SetCategory] = userState("All stories");
}

const handClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.id);
};
const filtered = data.filter((article) => article.category === category);
    return (
        <div className="px-30 space-x-3">
            {categories.map((category) => (
                <button id={category} onClick={handClick} key={cate} className="{``}">
                    {category}
                </button>
            ))}
        </div>
            
    )
    
