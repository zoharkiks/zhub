import type { NextPage } from "next";
import Head from "next/head";

// import containers
import { Footer, Hero, TopArticles } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-black  h-screen px-6 py-10  md:px-14">
      <Head>
        <title>Your App Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Navbar />
      <Hero />
      <TopArticles/>
      <Footer />
    </div>
  );
};

export default Home;
