import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import { toNumberField } from "../utils/cast";
import GroupList from "./groupList";
import api from "../api";
import SortSelect from "./sortSelect";
import _ from "lodash";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categori, setCategori] = useState({});
  const [selectedCategor, setSelectedCategor] = useState();
  const [sortSign, setSortSign] = useState("priceASC");
  const pageSize = 9;

  useEffect(() => {
    api.products.fetchAll().then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    api.categories.fetchAll().then((data) => {
      setCategori(data);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategor]);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleCategoriClick = (item) => {
    setSelectedCategor(item);
  };

  const clearFilter = () => {
    setSelectedCategor();
  };

  const filteredProduct = selectedCategor
    ? product.filter((prod) => prod.category === selectedCategor)
    : product;

  const count = filteredProduct.length;

  const sortedProduct = [
    {
      value: "priceASC",
      label: "Цена по возрастанию",
      sort: (products) => _.orderBy(toNumberField(products, "price"), ["price"], ["asc"]),
    },
    {
      value: "priceDESC",
      label: "Цена по убыванию",
      sort: (products) => _.orderBy(toNumberField(products, "price"), ["price"], ["desc"]),
    },
  ];

  const handleSort = (item) => {
    setSortSign(item);
  };

  const sort = (productList) => {
    const sortType = sortedProduct.find(item => item.value === sortSign);
    if (!sortType) return productList;
    return sortType.sort(productList);
  }

  const productCrop = paginate(sort(filteredProduct), currentPage, pageSize);

  useEffect(() => {
    if (currentPage > Math.ceil(product.length / pageSize) && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [product, currentPage]);

  return (
    <>
      {productCrop && (
        <div>
          {categori && (
            <div>
              <GroupList items={categori} onClick={handleCategoriClick} />
              <button onClick={clearFilter}>Смотреть всё</button>
            </div>
          )}
          <SortSelect
            onSort={handleSort}
            options={sortedProduct}
            defaultValue="priceASC"
          />

          <div className="product-list">
            {productCrop.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};

export default ProductList;
