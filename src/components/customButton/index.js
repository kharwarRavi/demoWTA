import React from "react";

const CustomButton = ({ size, variant }) => {
  return (
    <button className={`btn-${variant} btn-${size}`}>{props.children}</button>
  );
};
export default CustomButton;
