import React from "react";

function TextField({
    value = "",
    label,
    name,
    onChange,
    className = "",
    ...rest
}) {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="">
            <label htmlFor={name} className="">
                {label}
            </label>
            <div className="">
                <input
                    type="text"
                    className=""
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    {...rest}
                />
            </div>
        </div>
    );
}


export default React.memo(TextField);