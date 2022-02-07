import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState("");

  useEffect(() => {
    const s = setTimeout(() => {
      const now = new Date().getTime();
      const trip = new Date("3/4/2022").getTime();
      const diff = trip - now;
      const diffCount = Math.floor(diff / (1000 * 60 * 60 * 24));

      setCounter(diffCount.toString());
    }, 1000);

    return () => clearTimeout(s);
  });

  return (
    <div>
      <p>Viajamos en {counter} dias</p>
    </div>
  );
};

export default Counter;
