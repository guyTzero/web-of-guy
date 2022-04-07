import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import helper from "../helper/global";
import { useEffect, useState } from "react";
const Topbar = dynamic(() => import("../components/topbar"));

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  async function g_get() {
    try {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let result = await res.json();
      if (result) {
        console.log("result", result);
        let all = [];
        for (let i = 0; i < result.results.length; i++) {
          try {
            let _res = await fetch(
              `https://pokeapi.co/api/v2/pokemon/` + result.results[i].name,
              {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            );
            let _result = await _res.json();
            if (_result) {
              console.log("_result", _result);
              all.push(_result);
            }
          } catch (e) {
            console.log(e);
          }
        }
        setData(all);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    g_get();
  }, []);
  return (
    <div>
      <Head>
        <title>guy-t-zero</title>
        <meta name="description" content="Guy-T-Zero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{/* <Topbar /> */}</div>
      <div style={{ float: "left" }}>
        {data.map((val, index) => (
          <div key={index}>
            <p>{val.name}</p>
            <img src={val.sprites.front_default} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
