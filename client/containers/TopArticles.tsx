import React from "react";
import { TopArticle } from "../components";

const TopArticles = ({posts}) => {
  return (
    <div className="flex flex-col items-center font-jakarta mt-20">
<h1 className="text-white font-bold text-2xl mb-5 md:text-[1.75rem] lg:text-[2rem]">Articles</h1>
     <TopArticle post={posts}/>
    </div>
  );
};

export default TopArticles;
