import { Layout } from "../components/Layout";
import { LoginForm } from "../components/LoginForm";

import { motion } from "framer-motion";

import Head from "next/head";
import { data } from "../mock/mock";

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.name} - Admin</title>
      </Head>
      <motion.div layout>
        <Layout>
          <LoginForm />
        </Layout>
      </motion.div>
    </>
  );
}
