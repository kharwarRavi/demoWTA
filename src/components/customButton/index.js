import React from "react";

const CustomButton = ({ size, variant, children }) => {
  return (
    <button className={`btn-${variant} btn-${size}`}>{children}</button>
  );
};
export default CustomButton;
