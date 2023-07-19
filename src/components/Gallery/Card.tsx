import React from "react";
import APIv1 from "../../api/types";
import "./Card.css";

export interface CardProps {
    product: APIv1.Product
    width: number
}

const Card: React.FC<CardProps> = (prop) => {
    const {product, width} = prop;

    return (
        <div style={{width, height: width / product.image.aspectRatio}} className="card">
            <img src={product.image.url} alt="product"/>
        </div>
    )
}

export default Card;