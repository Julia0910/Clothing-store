import React from "react";

function TextareaField({ value = "", label, name, onChange, ...rest }) {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div class="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
                {label}
            </span>
            <div className="input-group">
                <textarea
                    className="form-control"
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    {...rest}
                ></textarea>
            </div>
        </div>
    );
}

// export default React.memo(TextareaField);
export default TextareaField;
