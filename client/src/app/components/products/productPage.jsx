import React, { useEffect, useState } from "react";
import api from "../../api";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../app/store/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./product.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { LoadingOutlined } from "@ant-design/icons";

const ProductPage = ({ productId }) => {
    const [product, setProduct] = useState();
    const [selectorSize, setSelectorSize] = useState();
    const dispatch = useDispatch();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const handleClick = () => {
        dispatch(createProduct({ productId, selectorSize }));
    };

    const handleSetSize = (size) => {
        setSelectorSize(size);
    };

    useEffect(() => {
        api.products.getById(productId).then((data) => setProduct(data));
    }, [productId]);

    return (
        <div>
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
                            disabled={!selectorSize}
                            className="style-button"
                            onClick={handleClick}
                        >
                            Добавить в корзину
                        </button>
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
