import React from "react";
import CustomButton from "../../components/customButton";
import LoginLayout from "../../components/layout/login";
import TextField from "../../components/textField";

const ResetPassword = () => {
  return (
    <LoginLayout>
      <div className="loginContent">
        <p className="loginText">Enter New Password</p>
        <p className="forgotPassword">
          Your password must contain atleast 12 characters with alphabets &
          numbericals
        </p>
        <TextField type="password" label="Password" />
        <TextField type="password" label="Verify Password" />
      </div>
      <div className="LoginFooter">
        <CustomButton size="lg" variant="default">
          CANCEL
        </CustomButton>
        <CustomButton size="lg" variant="primary">
          SAVE
        </CustomButton>
      </div>
    </LoginLayout>
  );
};

export default ResetPassword;
