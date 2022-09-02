import type { NextPage } from "next";
import Head from "next/head";
import { getClient } from "../lib/sanity-server";
import groq from "groq";

// import containers
import { Articles, Footer, Hero, TopArticles } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = ({ posts }) => {

  return (
    <div className="bg-black  px-6 py-10  md:px-24">
      <Head>
        <title>ZHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Hero />
      <TopArticles />
      <Articles posts={posts} />
      <Footer />
    </div>
  );
};

export async function getStaticProps ({ preview = false }) {
  const client = getClient()
  const query = groq`*[_type == "post" ] | order(publishedAt desc)
  {
    _id,
    "username": author->username,
    "categories":categories[]->{_id,title},
    title,
    "mainImage": image.asset,
   "authorImage":author->avatar.asset,
    publishedAt
  }
  `
  const posts = await client.fetch(query)
  return {
    props: {
      posts,
    },
  };
}

export default Home;
