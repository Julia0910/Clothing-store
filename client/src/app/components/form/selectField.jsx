import React from "react";

const SelectField = ({
    value = "default",
    label,
    onChange,
    options,
    name,
    defaultOption = "Выберите...",
    ...rest
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    if (!options) return null;
    const optionsArray =
        typeof options === "object" && !Array.isArray(options)
            ? Object.values(options)
            : options;

    return (
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor={name}>
            {label}
            </label>
            <select
                className="form-select"
                id={name}
                onChange={handleChange}
                value={value}
                name={name}
                {...rest}
            >
                <option disabled value="default">
                    {defaultOption}
                </option>
                {optionsArray.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
