import React, {useState} from "react";
import APIv1 from "../../../api/types";
import "./Card.css";

export interface CardProps {
    product: APIv1.Product
    width: number
}

const Card: React.FC<CardProps> = (prop) => {
    const {product, width} = prop;

    const [loading, setLoading] = useState(true);

    return (
        <div style={{width, height: width / product.image.aspectRatio}} className="card">
            {loading && <div style={{color: "black"}}>loading...</div>}
            <img
                src={product.image.url}
                alt={product.name}
                onLoad={() => setLoading(false)}
                style={{display: loading ? 'none' : 'block'}}
            />
        </div>
    )
}

export default Card;