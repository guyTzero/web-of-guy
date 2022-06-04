import { useState, useEffect } from "react";
import global from "../helper/global";

const App = () => {
  useEffect(() => {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];
    let merged = [...arr1, ...arr2];

    console.log("merged", merged);
  }, []);

  return (
    <div>
      <div>xxx</div>
    </div>
  );
};

export default App;
