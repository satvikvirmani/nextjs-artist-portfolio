import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import { motion } from "framer-motion";

import Head from "next/head";
import { data } from "../mock/mock";

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.name} - Contact</title>
      </Head>
      <motion.div layout>
        <Layout>
          <Navbar />
          <Contact />
          <Footer />
        </Layout>
      </motion.div>
    </>
  );
}
