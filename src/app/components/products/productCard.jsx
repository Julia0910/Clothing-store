import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const ProductCard = ({ product, image, title, price }) => {
  return (
    <>
      <Link to={`/catalog/${product.id}`}>
        <Card
          hoverable
          style={{
            width: 340,
          }}
          cover={<img alt="example" src={image[0]} />}
        >
          <Meta title={title} description={`${price} р.`} />
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;
