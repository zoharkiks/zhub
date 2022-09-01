import type { NextPage } from "next";
import Head from "next/head";

// import containers
import { Articles, Footer, Hero, TopArticles } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-black  px-6 py-10  md:px-24">
      <Head>
        <title>ZHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Hero />
      <TopArticles/>
      <Articles/>
      <Footer />
    </div>
  );
};

export default Home;
