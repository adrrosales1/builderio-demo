"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

function Counter2({ initialCount = 99 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 2);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 2);
  };

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter2;
