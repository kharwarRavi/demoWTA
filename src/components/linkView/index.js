import React from "react";
import { Link } from "react-router-dom";

const LinkView = ({ title, ...restProps }) => {
  return <Link {...restProps}>{title}</Link>;
};

export default LinkView;
