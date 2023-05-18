import React from "react";

const GroupList = ({ items, onClick, contentProperty, valueProperty }) => {
  
  return (
    <div>
      <ul>
        {Object.keys(items).map((item) => (
          <li
            role="button"
            onClick={() => onClick(items[item])}
            key={items[item][valueProperty]}
          >
            {items[item][contentProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};
GroupList.defaultProps = {
  valueProperty: "id",
  contentProperty: "name",
};

export default GroupList;
