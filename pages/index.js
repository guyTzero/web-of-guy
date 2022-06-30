import React, { useState, useEffect } from "react";

export default function App() {
  useEffect(() => {}, []);

  return (
    <div
      style={{
        backgroundColor: "red",
        top:0,
        left:0,
        position:'absolute',
        height: "100vh",
        width:"100vw",
        overflow:'auto'
      }}
    >
      
     
     {[...Array(100)].map(() => <div style={{backgroundColor:"yellow",height:100,width:100,margin:10}}/>)}   
    

    </div>
  );
}
