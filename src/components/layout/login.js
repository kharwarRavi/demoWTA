import React from "react";

const LoginLayout = (props) => {
  return (
    <div className="mainContainer">
      <img className="mainContent" src="" alt="" />
      <div className="loginContainer">
        <p className="heading">PRUDENT TECHNOLOGIES</p>
        {props.children}
      </div>
    </div>
  );
};

export default LoginLayout;
