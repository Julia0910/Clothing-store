import React from "react";

const Table = ({ array, onClickDelete, onClickEdit }) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Категория</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Размеры</th>
                        <th scope="col">Описание</th>
                        <th scope="col">Состав</th>
                        <th scope="col">Картинки</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((arr) => (
                        <tr>
                            <td>{arr.id} </td>
                            <td>{arr.title} </td>
                            <td>{arr.category}</td>
                            <td>{arr.price} </td>
                            <td>{arr.size.map((siz) => siz)}</td>
                            <td>
                                <div className="description">
                                    {arr.description}
                                </div>{" "}
                            </td>
                            <td>{arr.structure}</td>
                            <td>
                                <div className="images">
                                    {arr.image?.join(" ")}
                                </div>
                            </td>
                            <td>
                                <i
                                    className="bi bi-pencil icons"
                                    role="button"
                                    onClick={() => onClickEdit(arr._id)}
                                ></i>
                                <i
                                    className="bi bi-trash icons"
                                    role="button"
                                    onClick={() => onClickDelete(arr._id)}
                                ></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
