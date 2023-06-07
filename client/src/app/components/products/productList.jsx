import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../pagination";
import { paginate } from "../../utils/paginate";
import { toNumberField } from "../../utils/cast";
import GroupList from "../groupList";
import SortSelect from "../sortSelect";
import _ from "lodash";
import { getCategories, loadCategoriesList } from "../../store/categories";
import { getProducts, loadProductsList } from "../../store/products";
import "./product.css";

const ProductList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategor, setSelectedCategor] = useState();
    const [sortSign, setSortSign] = useState("priceASC");
    const pageSize = 9;
    const dispatch = useDispatch();

    const categories = useSelector(getCategories());
    const products = useSelector(getProducts());

    useEffect(() => {
        dispatch(loadProductsList());
        dispatch(loadCategoriesList());
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategor]);

    useEffect(() => {
        if (
            products &&
            currentPage > Math.ceil(products.length / pageSize) &&
            currentPage > 1
        ) {
            setCurrentPage(currentPage - 1);
        }
    }, [products, currentPage]);

    if (products === null) return null;

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
        ? products.filter((prod) => prod.category_id === selectedCategor.id)
        : products;

    const count = filteredProduct?.length ?? 0;

    const sortedProduct = [
        {
            value: "priceASC",
            label: "Цена по возрастанию",
            sort: (products) =>
                _.orderBy(toNumberField(products, "price"), ["price"], ["asc"]),
        },
        {
            value: "priceDESC",
            label: "Цена по убыванию",
            sort: (products) =>
                _.orderBy(
                    toNumberField(products, "price"),
                    ["price"],
                    ["desc"]
                ),
        },
    ];

    const handleSort = (item) => {
        setSortSign(item);
    };

    const sort = (productList) => {
        const sortType = sortedProduct.find((item) => item.value === sortSign);
        if (!sortType) return productList;
        return sortType.sort(productList);
    };

    const productCrop = paginate(sort(filteredProduct), currentPage, pageSize);

    return (
        <>
            {productCrop && (
                <div>
                    {categories && (
                        <div>
                            <GroupList
                                items={categories}
                                onClick={handleCategoriClick}
                            />
                            <button onClick={clearFilter}>Смотреть всё</button>
                        </div>
                    )}
                    <SortSelect
                        onSort={handleSort}
                        options={sortedProduct}
                        defaultValue="priceASC"
                    />

                    <div className="product-list">
                        {productCrop &&
                            productCrop.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    {...product}
                                />
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
