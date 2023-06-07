import React, { useEffect, useState } from "react";
import Table from "./table";
import { useDispatch, useSelector } from "react-redux";
import {
    getProducts,
    loadProductsList,
    removeProduct,
    updateProduct,
    createProduct,
} from "../../store/products";
import "./adminPanel.css";
import EditProduct from "./editProduct";
import { Button } from "antd";

const AdminPanel = () => {
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector(getProducts());

    useEffect(() => {
        dispatch(loadProductsList());
    }, [dispatch]);

    const handleClickDelete = (id) => {
        dispatch(removeProduct(id));
    };
    const handleClicEdit = (id) => {
        setSelectedId(id);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (data) => {
        dispatch(selectedId ? updateProduct({ id: selectedId, data }) : createProduct(data));
        setOpen(false);
    };
    const handleAdd = () => {
        setSelectedId(null);
        setOpen(true);
    }

    return (
        <>
            <Button onClick={handleAdd}>Добавить</Button>
            {products && (
                <div className="">
                    <Table
                        array={products}
                        {...products}
                        onClickDelete={handleClickDelete}
                        onClickEdit={handleClicEdit}
                    />
                </div>
            )}
            <EditProduct
                isModalOpen={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                product={selectedId ? products?.find((product) => product._id === selectedId) : {}}
            />
        </>
    );
};

export default AdminPanel;
