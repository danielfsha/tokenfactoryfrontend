import React from "react";

const Switch = ({ isActive, toggle }) => {
  return (
    <div
      className={`
        relative bg-white/5 border border-white/5 w-10 h-6 rounded-full transition-all
        ${
          isActive &&
          "bg-gradient-to-b from-green-400 via-green-400 to-green-600"
        }`}
      onClick={() => toggle()}
    >
      <div
        className={`
        absolute top-[50%] left-1 translate-y-[-50%] bg-white border border-white/5 w-4 h-4 rounded-full transition-all
        ${isActive && "translate-x-4"}`}
      ></div>
    </div>
  );
};

export default Switch;
