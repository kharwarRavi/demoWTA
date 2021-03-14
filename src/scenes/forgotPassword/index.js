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
          <p className="forgotPassword">Enter Password</p>
        </div>
      </div>
      <div className="LoginFooter">
        <CustomButton size="lg" variant="default">
          CANCEL
        </CustomButton>
        <CustomButton size="lg" variant="primary">
          RESET
        </CustomButton>
      </div>
    </LoginLayout>
  );
};

export default ForgotPassword;
