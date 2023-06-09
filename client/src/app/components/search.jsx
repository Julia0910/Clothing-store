import React, { useState, useEffect } from "react";
import { getProducts, loadProductsList } from "../store/products";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./products/productCard";
import { Modal } from "antd";

const Search = ({ isModalOpen, handleCloseModal, handleOk }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const products = useSelector(getProducts());

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductsList());
    }, [dispatch]);

    useEffect(() => {
        const results =
            products?.filter((product) =>
                product.title.toLowerCase().includes(searchTerm)
            ) ?? [];
        setSearchResults(results);
    }, [searchTerm, products]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <>
            <Modal
                title="Поиск"
                open={isModalOpen}
                onCancel={handleCloseModal}
                onOk={handleOk}
                footer={null}
                width={"100%"}
                style={{ top: 80 }}
            >
                <form className="d-flex modal-title fs-5" role="search">
                    <input
                        className="input-modal"
                        type="search"
                        placeholder="Поиск по названию"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </form>
                <div className="search-block">
                    {searchTerm.length !== 0 && searchResults
                        ? searchResults.map((product) => (
                              <div onClick={handleOk}>
                                  <ProductCard
                                      key={product.id}
                                      product={product}
                                      {...product}
                                  />
                              </div>
                          ))
                        : null}
                </div>
            </Modal>
        </>
    );
};

export default Search;
