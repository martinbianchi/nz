import type { InferGetServerSidePropsType, NextPage } from "next";

import Counter from "../components/Counter";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import { remainingDaysTillBrc2022 } from "../utils";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      remainingDays: remainingDaysTillBrc2022(),
    },
  };
};

const Home: NextPage = ({
  remainingDays,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bari 2022</title>
        <meta name="description" content="Bari 2022 con the bandwidth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Counter remainingDays={remainingDays} />
      </main>
    </div>
  );
};

export default Home;
