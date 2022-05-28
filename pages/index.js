import { useState, useEffect } from "react";
import global from "../helper/global";

const App = () => {
  useEffect(() => {
    console.log("-------------");
    console.log(global.longestPalindrome("cbbd"));
  }, []);

  function longestPalindrome(string) {
    if (!string) return;

    let ll = 0;
    let rr = 0;

    for (let i = 0; i < string.length; i++) {
      for (let j of [i, i + 1]) {
        for (let l = i, r = j; string[l] && string[l] === string[r]; l--, r++) {
          [ll, rr] = r - l + 1 > rr - ll + 1 ? [l, r] : [ll, rr];
        }
      }
    }
    return string.substring(ll, rr + 1);
  }

  return (
    <div>
      <div>xxx</div>
    </div>
  );
};

export default App;
