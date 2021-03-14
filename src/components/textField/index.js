import React, { useState, Fragment } from "react";

const TextField = ({ type, label = null, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (onChange) onChange(inputValue);
  };

  return (
    <Fragment>
      {label && <p className="labelText">{label}</p>}
      <input
        type={type}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        class="inputclass"
      />
    </Fragment>
  );
};
export default TextField;
