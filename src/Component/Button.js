import React from "react";

// Button
const Button = ({ setCelebrants, setData }) => {
  const checkCelebrants = () => {
    setData(0);
    setCelebrants([]);
  };
  return (
    <div className="button-ctn">
      <button onClick={checkCelebrants}>clear all</button>
    </div>
  );
};

export default Button;
