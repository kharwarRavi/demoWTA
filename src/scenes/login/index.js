import React from "react";
import CustomButton from "../../components/customButton";
import LoginLayout from "../../components/layout/login";
import TextField from "../../components/textField";

const Login = (props) => {
  return (
    <LoginLayout>
      <div className="loginContent">
        <p className="loginText">Login to the Dashboard</p>
        <TextField type="text" label="Username" />
        <TextField type="password" label="Password" />
        <p
          className="forgotPassword"
          onClick={() => props.history.push("forgot-password")}
        >
          Forget Password
        </p>
      </div>
      <div className="LoginFooter">
        <CustomButton size="lg" variant="default">
          NEW? SIGNUP
        </CustomButton>
        <CustomButton size="lg" variant="primary">
          LOGIN NOW
        </CustomButton>
      </div>
    </LoginLayout>
  );
};

export default Login;
