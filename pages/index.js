import { useState, useEffect } from "react";
import global from "../helper/jsPlay_II";

const App = () => {
  useEffect(() => {
    global.makeTree();
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div style={{ flex: 1, backgroundColor: "green" }}>
          <div style={{ height: 100, margin: 10, backgroundColor: "pink" }}>
            {" "}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "yellow",
            flexDirection: "column",
            display: "flex",
            margin: 10,
          }}
        >
          <div style={{}}>
            <p>asdasdsd</p>
            <p>asdasdsd</p>
            <p>asdasdsd</p>
          </div>
          <div
            style={{
              height: "100%",
              backgroundColor: "orange",
              overflow: "scroll",
            }}
          >
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
          </div>
          <div style={{ height: "100%", backgroundColor: "greenyellow" }}>
            asdasdsd
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          display: "flex",
          marginTop: 100,
        }}
      >
        <div style={{ flex: 1, backgroundColor: "green" }}>
          <div style={{ height: 100, margin: 10, backgroundColor: "pink" }}>
            {" "}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "yellow",
            flexDirection: "column",
            display: "flex",
            margin: 10,
          }}
        >
          <div style={{}}>
            <p>asdasdsd</p>
          </div>
          <div
            style={{
              height: "100%",
              backgroundColor: "orange",
              overflow: "scroll",
            }}
          >
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
            sadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsdasadasdsda
          </div>
          <div style={{ height: "100%", backgroundColor: "greenyellow" }}>
            asdasdsd
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
