import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
const Topbar = dynamic(() => import("../components/topbar"));

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>guy-t-zero</title>
        <meta name="description" content="Guy-T-Zero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Topbar />
      </div>
    </div>
  );
};

export default Home;
