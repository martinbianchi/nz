import React, { useEffect, useState } from "react";
import Image from "next/image";
import { photos } from "../src/photos";
import { moveAvatars } from "../src/moveAvatars";
// import { Countdown } from "./Countdown";
import dynamic from "next/dynamic";

const Countdown = dynamic(
  async () => {
    const mod = await import("./Countdown");
    return mod.Countdown;
  },
  { ssr: false }
);

const Counter = () => {
  const [hasClass, setHasClass] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHasClass((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    moveAvatars();
  }, []);

  return (
    <div>
      <div>
        {photos.map((photo) => (
          <div
            className="photo_container  rotate-scale-down"
            key={photo.slice(5)}
          >
            <Image
              src={photo}
              className="photo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="photo"
            />
          </div>
        ))}
      </div>
      <div
        className={["counter_container"]
          .concat(hasClass ? ["shake-lr"] : [])
          .join(" ")}
      >
        <p className="title">Viajamos en </p>
        <Countdown />
      </div>
    </div>
  );
};

export default Counter;
