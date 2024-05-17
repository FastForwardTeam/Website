import { useEffect, useState } from "react";

export const HomeBackground = () => {
  const [height, setHeight] = useState<number>();
  useEffect(() => {
    let bodyRect = document.querySelector("body")?.getBoundingClientRect();

    setHeight(() => bodyRect?.height);
  }, []);

  return (
    <div
      style={{
        height,
      }}
      className="absolute top-0 left-0 w-full overflow-hidden -z-10 animate__animated animate__fadeIn"
    >
      <div className="background absolute top-0 left-0 w-full h-screen flex items-center justify-center -z-10">
        <div className="gradient transition-[width,height]"></div>
      </div>
    </div>
  );
};
