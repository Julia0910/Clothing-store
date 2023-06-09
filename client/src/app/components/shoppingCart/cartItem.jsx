import React from "react";
import "./cart.css";
const CartItems = ({
    image,
    title,
    size,
    price,
    id,
    count,
    handleClick,
    handleIncrement,
    handleDicrement,
}) => {
    return (
        <div className="card mb-3 cart-item">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        className="img-fluid rounded-start style-img"
                        src={image[0]}
                        alt="not img"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <i
                            className="bi bi-trash icons style-icon"
                            role={"button"}
                            onClick={() => handleClick(id)}
                        ></i>
                    </div>
                    <p className="card-text">{size}</p>
                    <h3>{`${price} Р.`}</h3>
                    <i
                        className="bi bi-dash icons"
                        role={"button"}
                        onClick={() =>
                            handleDicrement({ id, count: count - 1 })
                        }
                    ></i>
                    <span>{count}</span>
                    <i
                        className="bi bi-plus icons"
                        role={"button"}
                        onClick={() =>
                            handleIncrement({ id, count: count + 1 })
                        }
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
