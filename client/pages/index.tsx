import type { NextPage } from "next";
import Head from "next/head";
import { getClient } from "../lib/sanity-server";
import groq from "groq";

// import containers
import { Articles, Footer, Hero, TopArticles } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = ({ posts,categories }) => {

  return (
    <div className="bg-black  px-6 py-10  md:px-24">
      <Head>
        <title>ZHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Hero />
      <TopArticles posts={posts} />
      <Articles posts={posts} />
      <Footer />
    </div>
  );
};

export async function getStaticProps ({ preview = false }) {
  const client = getClient()
  const postQuery = groq`*[_type == "post" ] | order(publishedAt desc)
  {
    _id,
    "username": author->username,
    "categories":categories[]->{_id,title},
    title,
    "mainImage": image.asset,
   "authorImage":author->avatar.asset,
    publishedAt,
    "slug":slug.current,
    body
  }
  `
  // const categoryQuery = groq`*[_type == "category"] order(publishedAt desc)
  // {
  //   categories[]

  // }  `
  
  const posts = await client.fetch(postQuery)
  // const categories = await client.fetch(categoryQuery)
  return {
    props: {
      posts,
      // categories
    },
  };
}

export default Home;
