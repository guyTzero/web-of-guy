import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import helper from "../helper/global";
import { useEffect, useState } from "react";
const Topbar = dynamic(() => import("../components/topbar"));

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    helper.calcEquation();
  }, []);
  return <div>guy</div>;
};

export default Home;
