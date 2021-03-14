import React, { useState } from "react";

const CustomSelect = ({ data, onSelectChange }) => {
  const [selectedData, updateSelectedData] = useState("");

  const handleChange = (event) => {
    updateSelectedData(event.target.value);
    if (onSelectChange) onSelectChange(selectedData);
  };

  const options = data?.map((data) => (
    <option key={data?.id} value={data?.id}>
      {data?.name}
    </option>
  ));

  return (
    <select
      name="customSearch"
      className="custom-search-select"
      onChange={handleChange}
    >
      <option>Select Item</option>
      {options}
    </select>
  );
};

export default CustomSelect;
