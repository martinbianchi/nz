import React, { useState, useEffect } from "react";
import Image from "next/image";

import { photos } from "./photos";

const styles = {
  text: {
    alignText: "center",
  },
};

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
      <div>
        {photos.map((photo) => (
          <Image
            src={photo}
            height={150}
            width={150}
            className="photo"
            alt="photo"
            key={photo.slice(5)}
          />
        ))}
      </div>
      <p className="title">Viajamos en {counter} dias</p>
    </div>
  );
};

export default Counter;
