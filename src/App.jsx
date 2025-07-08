import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  function counter() {
    setCount(count + 1);
  }

  function handleStrike() {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <p
        onClick={handleStrike}
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {count}
      </p>
      <button onClick={counter}>+</button>
      <button onClick={counter}>-</button>
    </>
  );
}

export default App;
