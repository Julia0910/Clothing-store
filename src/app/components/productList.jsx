import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import GroupList from "./groupList";
import api from "../api";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categori, setCategori] = useState({});
  const [selectedCategor, setSelectedCategor] = useState();
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
  const productCrop = paginate(filteredProduct, currentPage, pageSize);

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
