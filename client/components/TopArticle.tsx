import React from "react";
import { urlFor } from "../lib/sanity";
import { useRouter } from "next/router";
import { PortableText } from "@portabletext/react";

const PostComponents = {
  types: {
    image: ({ value } ) => {
      return (
        <img
          className="mt-10 hidden "
          alt={value.alt || " "}
          src={urlFor(value)}
        />
      );
    },
  },
  block: {
    h3: ({ children }) => <h1 className="hidden">{children}</h1>,
    normal: ({ children }) => (
      <p className="mt-4 text-center w-[20rem] md:w-[30rem] lg:w-[40rem]  truncate text-lg leading-8 text-white">
        {children}
      </p>
    ),
  },
};

const TopArticle = ({ post }) => {
  console.log(post[0].slug);

  const { authorImage, username, title, mainImage, slug, body } = post[0];
  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(36,96,247,0.6449930313922444) 100%) , url(${urlFor(
          mainImage
        )})`,
      }}
      className="mt-6 flex w-full flex-col items-center  space-y-8 rounded-2xl bg-white bg-cover bg-center  py-20 px-10 text-center font-jakarta md:bg-top"
    >
      <div className="flex w-max items-center justify-between space-x-3 rounded-full bg-white px-4  py-2 drop-shadow-lg">
        <img
          className="h-12 w-12 rounded-full object-cover object-top "
          src={urlFor(authorImage)}
          alt=""
        />
        <span className="font-medium text-gray">{username}</span>
      </div>
      <h2 className="text-2xl font-bold text-white  md:text-[2rem] lg:text-[2.25rem]">
        {title}
      </h2>

      <div className="flex  flex-col justify-center items-center">
        <PortableText value={body} components={PostComponents} />

        <span
          onClick={() => router.push(`/${slug}`)}
          className="cursor-pointer font-bold text-blue underline underline-offset-4 "
        >
          Read More.
        </span>
      </div>
    </div>
  );
};

export default TopArticle;
