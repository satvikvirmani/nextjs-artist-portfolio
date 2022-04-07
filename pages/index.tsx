import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Showcase } from "../components/Showcase";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Sell } from "../components/Sell";

import { motion } from "framer-motion";

import Head from "next/head";
import { data } from "../mock/mock";

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <motion.div layout>
        <Layout>
          <Navbar />
          <Hero />
          <Showcase limit={true} />
          <Contact />
          <Footer />
        </Layout>
      </motion.div>
    </>
  );
}
