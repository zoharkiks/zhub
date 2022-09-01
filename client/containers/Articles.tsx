import React from "react";
import { ArticleCard } from "../components";

const Articles = ({ posts }) => {
  console.log(posts);

  return (
    <div className="mt-40 grid grid-cols-1 justify-items-center  gap-y-28 md:grid-cols-2 lg:grid-cols-3  ">
      {posts?.map((post) => (
        <ArticleCard post={post} />
      ))}
    </div>
  );
};

export default Articles;
