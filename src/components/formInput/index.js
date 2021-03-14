import React, { useState } from "react";

const FormInput = ({ type, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (onChange) onChange(inputValue);
  };

  return (
    <input
      type={type}
      value={inputValue}
      name="input-form"
      onChange={handleChange}
      class="inputclass"
    />
  );
};
export default FormInput;
