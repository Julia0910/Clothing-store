import React from "react";

const GroupList = ({
    items,
    onClick,
    contentProperty,
    valueProperty,
    onClickButton,
}) => {
    return (
        <div>
            <ul className="nav nav-tabs">
                {Object.keys(items).map((item) => (
                    <li
                        className="nav-item nav-link active "
                        role="button"
                        onClick={() => onClick(items[item])}
                        key={items[item][valueProperty]}
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
                <button
                    className="nav-item nav-link active"
                    onClick={onClickButton}
                >
                    Смотреть всё
                </button>
            </ul>
        </div>
    );
};
GroupList.defaultProps = {
    valueProperty: "id",
    contentProperty: "name",
};

export default GroupList;
