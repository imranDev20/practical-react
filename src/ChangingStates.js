import { useEffect, useState } from "react";
import "./ChangingStates.css";

function ChangingStates() {
  const [count, setCount] = useState(0);
  //   const count = 0;

  function countUp() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    console.log("rendered");

    setCount((count) => count + 1);
  }, []);

  return (
    <div className="count">
      <p>Count: {count}</p>

      <button onClick={countUp}>Increment</button>
    </div>
  );
}

export default ChangingStates;
