import type { InferGetServerSidePropsType, NextPage } from "next";

import Counter from "../components/Counter";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bari 2022</title>
        <meta name="description" content="Bari 2022 con the bandwidth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Counter />
      </main>
    </div>
  );
};

export default Home;
