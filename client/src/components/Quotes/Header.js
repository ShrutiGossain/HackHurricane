import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Header = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="grid grid-cols-12 justify-center items-center bg-gradient-to-b from-[#f0f0f0] to-white rounded-full p-16 m-4">
      <span className="col-span-12 text-center text-5xl font-bold capitalize">
        Daily Motivation
      </span>
      <Confetti width={width} height={height} confettiSource={{x:125 , y:0, w:0 , h:0}} />
    </div>
  );
};

export default Header;
