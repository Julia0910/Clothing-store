import React from "react";

function TextField({
    value = "",
    label,
    name,
    onChange,
    className = "",
    type,
    ...rest
}) {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
                {label}
            </span>
            <input
                type={type}
                className="form-control"
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                {...rest}
            />
        </div>
    );
}

export default React.memo(TextField);
