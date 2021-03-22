import React from "react";
import CustomButton from "../../components/customButton";
import LoginLayout from "../../components/layout/login";
import TextField from "../../components/textField";
import { loginSaga } from "../../store/sagas";

const Login = (props) => {
  const handleLogin = () => {
    loginSaga()
  };

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
        <CustomButton
          className="btn-lg btn-default"
          onClick={() => props.history.push("/signup")}
        >
          NEW? SIGNUP
        </CustomButton>
        <CustomButton className="btn-lg btn-primary" onClick={handleLogin}>
          LOGIN NOW
        </CustomButton>
      </div>
    </LoginLayout>
  );
};

export default Login;
