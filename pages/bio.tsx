import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Bio } from "../components/Bio";
import { Footer } from "../components/Footer";

import { motion } from "framer-motion";

import Head from "next/head";
import { data } from "../mock/mock";

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.name} - Bio</title>
      </Head>
      <motion.div layout>
        <Layout>
          <Navbar />
          <Bio />
          <Footer />
        </Layout>
      </motion.div>
    </>
  );
}
