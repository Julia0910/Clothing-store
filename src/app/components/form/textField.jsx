import React from "react";

const TextField = (name, value, onChange, label) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          type={name}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
        
      </div>
    </div>
  );
};

export default TextField;
