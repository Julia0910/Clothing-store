import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
 const CargoCard = ({image, title, price }) => {
   return ( <>
     <Card
    hoverable
    style={{
      width: 340,
    }}
    cover={<img alt="example" src={image[0]} />}
  >
    <Meta title={title} description={price} />
  </Card>
   </> );
 }
  
 export default CargoCard;