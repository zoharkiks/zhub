import { Icon } from "@iconify/react";
import React from "react";

import groq from "groq";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity-server";

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { Footer } from "../containers";

const PostComponents = {
  types: {
    image: ({ value }) => {
      return (
        <img className="mt-10" alt={value.alt || " "} src={urlFor(value)} />
      );
    },
  },
  block: {
    h3: ({ children }) => (
      <h1 className="my-8 w-full text-left font-jakarta text-3xl font-bold">
        {children}
      </h1>
    ),
    normal: ({ children }) => (
      <p className="mt-4 text-lg leading-8">{children}</p>
    ),
  },
};

const Details = ({ post }) => {
  console.log(post);

  return (
    <div className="  bg-black px-6  pt-10 font-jakarta md:px-24 ">
      <div className="full-bleed mt-10 flex bg-blue py-8 px-20 text-center text-white ">
        <div className=" grid w-full grid-cols-1 place-items-center space-y-10 md:grid-cols-2">
          <div className="flex w-[75%] flex-col items-center justify-center space-y-4 ">
            <div className="flex flex-row space-x-2">
              {post?.categories.map((category) => (
                <h3
                  key={category._id}
                  className="rounded-full bg-gray px-3 text-lg font-medium"
                >
                  {category.title}
                </h3>
              ))}
            </div>
            <h1 className="text-3xl font-bold leading-[3rem]  lg:text-[2.5rem]">
              {post?.title}
            </h1>
          </div>

          <div className="flex flex-col items-center  space-y-3 md:h-full md:space-y-8">
            <div className="flex w-max items-center justify-between space-x-3 rounded-full bg-white px-4 py-2 drop-shadow-2xl">
              <img
                className="h-10 w-10 rounded-full object-cover object-top  "
                src={urlFor(post?.authorImage)}
                alt="profile"
              />
              <span className="text-sm font-medium text-gray">
                {post?.username}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon className="h-6 w-6" icon="akar-icons:calendar" />
              <span className="w-max text-sm ">
                {new Date(post?.publishedAt).toDateString()}
              </span>
            </div>

            <div className="mt-10 flex space-x-3">
              <EmailShareButton url={`https://localhost:1337alllArticles/$}`}>
                <EmailIcon size={32} round={true} />
              </EmailShareButton>

              <TwitterShareButton url={`https://localhost:1337alllArticles/$}`}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>

              <FacebookShareButton
                url={`https://localhost:1337alllArticles/$}`}
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>

              <WhatsappShareButton
                url={`https://localhost:1337alllArticles/$}`}
              >
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex grid-cols-3 flex-col items-center justify-center text-white  lg:grid">
        <div className="col-span-2 flex flex-col">
          <div className="flex  w-full justify-center  lg:justify-start">
            <img
              className=" h-[24rem] w-max rounded-xl object-contain"
              src={urlFor(post?.mainImage)}
              alt=""
            />
          </div>
          <PortableText value={post?.body} components={PostComponents} />
        </div>
      </div>
      <Footer />

    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]
{
  title,
  "username": author->username,
  "categories":categories[]->{_id,title},
  "mainImage": image.asset,
  "authorImage":author->avatar.asset,
  publishedAt,
  body

}
`;
export async function getStaticPaths() {
  const path = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: path.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(query, { slug: params.slug });
  return {
    props: {
      post,
    },
  };
}
export default Details;
