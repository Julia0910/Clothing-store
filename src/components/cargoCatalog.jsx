import React from "react";
import { useHistory } from "react-router-dom";
import { categories } from "../app/api/categories.api";
const CargoCatalog = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/productList");
  };
  return (
    <div>
      <h1>Каталог</h1>
      {categories.map((category) => (
        <div onClick={handleClick} key={category.id}>
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CargoCatalog;
