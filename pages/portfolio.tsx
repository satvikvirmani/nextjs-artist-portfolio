import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Showcase } from "../components/Showcase";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";
import { data } from "../mock/mock";

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.name} - Portfolio</title>
      </Head>
      <motion.div layout>
        <Layout>
          <Navbar />
          <Showcase limit={false} />
          <Footer />
        </Layout>
      </motion.div>
    </>
  );
}
