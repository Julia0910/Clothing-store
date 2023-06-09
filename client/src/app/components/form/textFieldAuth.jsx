import React from "react";

const TextFieldAuth = ({
    value = "",
    label,
    name,
    onChange,
    className = "",
    type,
    error,
    ...rest
}) => {
    return (
        <div className="mb-3">
            <div className="input-group input-group-sm">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                    {label}
                </span>
                <input
                    type={type}
                    className="form-control"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
            </div>
            {error && <div className="text-danger "><small>{error}</small></div>}
        </div>
    );
};

export default TextFieldAuth;
