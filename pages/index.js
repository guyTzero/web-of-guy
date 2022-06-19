import React, { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  const [x, xx] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You clicked ${count} times`);
    console.log(`You clicked ${x} times`);
    // document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => xx(x + 1)}>Click me</button>
    </div>
  );
}
