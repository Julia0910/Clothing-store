import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import TextField from "./textField";
import SelectField from "./selectField";
import { getCategories, loadCategoriesList } from "../../store/categories";
import { Modal } from "antd";

function EditProduct({ isModalOpen, product, handleClose, handleSubmit }) {
    const [data, setData] = useState(product ?? {});
    const dispatch = useDispatch();

    const categories = useSelector(getCategories());

    useEffect(() => {
        dispatch(loadCategoriesList());
    }, []);

    const handleChange = useCallback((data) => {
        setData((prevState) => ({
            ...prevState,
            [data.name]: data.value,
        }));
    }, []);

    useEffect(() => {
        product && setData(product);
    }, [product]);

    return (
        <Modal
            title="Edit Modal"
            open={isModalOpen}
            onOk={() => handleSubmit(data)}
            onCancel={handleClose}
        >
            <div className="d-flex flex-column justify-content-center">
                <TextField
                    onChange={handleChange}
                    label="id"
                    name="id"
                    value={data.id}
                />
                <TextField
                    onChange={handleChange}
                    label="Название"
                    name="title"
                    value={data.title}
                />
                <SelectField
                    options={categories.map(category => category.type )}
                    label="Категория"
                    name="category"
                    value={data.category}
                    onChange={handleChange}
                />
                <TextField
                    onChange={handleChange}
                    label="Цена"
                    name="price"
                    value={data.price}
                />
                <TextField
                    onChange={handleChange}
                    label="Размер"
                    name="size"
                    value={data.size}
                />
                <TextField
                    onChange={handleChange}
                    label="Описание"
                    name="description"
                    value={data.description}
                />
                <TextField
                    onChange={handleChange}
                    label="Состав"
                    name="structure"
                    value={data.structure}
                />
                {/* <TextField
                    onChange={handleChange}
                    label="Категория"
                    name="category"
                    // value={data.category}
                /> */}
                <TextField
                    onChange={handleChange}
                    label="Картинка"
                    name="image"
                    value={data.image}
                />
            </div>
        </Modal>
    );
}

export default EditProduct;