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
        <div className="md-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                className=""
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

// export default React.memo(SelectField);
export default SelectField;
