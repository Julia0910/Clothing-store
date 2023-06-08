import React from "react";
import { Select } from "antd";

const SortSelect = ({ onSort, options, defaultValue }) => {
  
  const handleChange = (value) => {
    onSort(value);
  };

  return (
    <div className="sort-select">
      <Select
        defaultValue={defaultValue}
        style={{
          width: 200,
        }}
        onChange={handleChange}
        options={[
          {
            label: "Цена",
            options: options,
          },
        ]}
      />
    </div>
  );
};

export default SortSelect;
