import React from "react";
import { Card } from "antd";
import { useHistory } from "react-router-dom";

const { Meta } = Card;
const ProductCard = ({ image, title, price }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(history.location.pathname + "/productId");
  };
  return (
    <>
      <Card
        onClick={handleClick}
        hoverable
        style={{
          width: 340,
        }}
        cover={<img alt="example" src={image[0]} />}
      >
        <Meta title={title} description={`${price} р.`} />
      </Card>
    </>
  );
};

export default ProductCard;
