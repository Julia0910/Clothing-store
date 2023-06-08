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
        <div class="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
                {label}
            </span>
            <input
                type="text"
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
