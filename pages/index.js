import { useState, useEffect } from "react";

const App = () => {
  const useDebouncedEffect = (effect, deps, delay) => {
    useEffect(() => {
      const handler = setTimeout(() => effect(), delay);

      return () => clearTimeout(handler);
    }, [...(deps || []), delay]);
  };
  const [value, setValue] = useState(0);

  useDebouncedEffect(() => console.log(value), [value], 1000);

  return <button onClick={() => setValue(value + 1)}>{value}</button>;
};

export default App;
