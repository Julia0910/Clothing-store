import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProductById } from "../../../app/store/products";
import { addProductToCart } from "../../../app/store/cart";
import { getIsLoggedIn } from "../../../app/store/users";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "antd";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./product.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { LoadingOutlined } from "@ant-design/icons";

const ProductPage = ({ productId }) => {
    const [selectorSize, setSelectorSize] = useState();
    const [open, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const history = useHistory();

    const product = useSelector(getProductById(productId));
    const isLogin = useSelector(getIsLoggedIn());

    const handleClick = () => {
        dispatch(addProductToCart({ productId, size: selectorSize }));
        setModalOpen(true);
    };

    const handleSetSize = (size) => {
        setSelectorSize(size);
    };
    const handleCancel = () => {
        setModalOpen(false);
    };
    const handleClickCart = () => {
        history.push("/shoppingCart");
    };

    return (
        <div className="container">
            {product ? (
                <>
                    <div className="product-container">
                        <Swiper
                            direction="vertical"
                            grid={{ fill: "column" }}
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            autoHeight={false}
                            className="productSwiper"
                        >
                            {product.image.map((img) => (
                                <SwiperSlide key={img}>
                                    <img src={img} alt="not img" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            navigation={false}
                            thumbs={{
                                swiper:
                                    thumbsSwiper && !thumbsSwiper.destroyed
                                        ? thumbsSwiper
                                        : null,
                            }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {product.image.map((img) => (
                                <SwiperSlide key={img}>
                                    <img src={img} alt="not img" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="style-info">
                        <h2 className="style-h1">{product.title}</h2>
                        <h3 className="style-price">{`${product.price} P.`}</h3>
                        <h6>размеры</h6>
                        {product.size.map((size) => (
                            <div
                                key={size}
                                onClick={() => handleSetSize(size)}
                                className={`style-size ${
                                    size === selectorSize ? "style-active" : ""
                                }`}
                            >
                                <span>{size}</span>
                            </div>
                        ))}
                        <div className="style-description">
                            <h6>Описание</h6>
                            <span>{product.description}</span>
                        </div>
                        <div className="style-structure">
                            <h6>Состав</h6>
                            <span>{product.structure}</span>
                        </div>
                        <button
                            disabled={!selectorSize || !isLogin}
                            className="style-button"
                            onClick={handleClick}
                        >
                            Добавить в корзину
                        </button>
                        {!isLogin && (
                            <div>
                                <b>
                                    Чтобы добавить товар в корзину,
                                    авторизуйтесь{" "}
                                </b>
                                <small>
                                    <sup>
                                        <i class="bi bi-asterisk"></i>
                                    </sup>
                                </small>
                            </div>
                        )}
                        <Modal
                            title="Товар успешно добавлен в корзину"
                            open={open}
                            footer={null}
                            closable={false}
                        >
                            <button
                                onClick={() => handleClickCart()}
                                className="style-button"
                            >
                                Перейти в корзину
                            </button>
                            <button
                                onClick={handleCancel}
                                className="style-button-2"
                            >
                                Продолжить покупки
                            </button>
                        </Modal>
                    </div>
                </>
            ) : (
                <h1>
                    <LoadingOutlined />
                </h1>
            )}
        </div>
    );
};

export default ProductPage;
