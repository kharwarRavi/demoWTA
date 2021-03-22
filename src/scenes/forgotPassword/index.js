import React from "react";
import CustomButton from "../../components/customButton";
import LoginLayout from "../../components/layout/login";
import TextField from "../../components/textField";

const ForgotPassword = (props) => {
  return (
    <LoginLayout>
      <div className="loginContent">
        <p className="loginText">Forgot Password?</p>
        <TextField type="text" label="Username" />
        <div className="linkContent">
          <p
            className="forgotPassword"
            onClick={() => props.history.push("reset-password")}
          >
            Resend Link
          </p>
          <p className="forgotPassword" onClick={() => props.history.push("/")}>Enter Password</p>
        </div>
      </div>
      <div className="LoginFooter">
        <CustomButton className="btn-lg btn-default">
          CANCEL
        </CustomButton>
        <CustomButton className="btn-lg btn-primary">
          RESET
        </CustomButton>
      </div>
    </LoginLayout>
  );
};

export default ForgotPassword;
