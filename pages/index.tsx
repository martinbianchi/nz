import type { InferGetServerSidePropsType, NextPage } from "next";

import Counter from "../components/Counter";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>New Zealand 2023</title>
        <meta name="description" content="NZ 2023 con the bandwidth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Counter />
      </main>
    </div>
  );
};

export default Home;
