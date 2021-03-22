import React from "react";

const CustomButton = ({ children, ...restProps }) => {
  return <button {...restProps}>{children}</button>;
};

export default CustomButton;
