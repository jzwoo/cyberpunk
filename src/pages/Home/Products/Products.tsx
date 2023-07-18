import React, {useEffect, useState} from "react";
import {getAllProducts} from "../../../api/requests";
import APIv1 from "../../../api/types";
import "./Products.css";

const Products: React.FC = () => {
    const [products, setProducts] = useState<APIv1.Product[]>([]);

    useEffect(() => {
        let cancel = false;
        getAllProducts().then((res) => {
            if (res.status === 200 && !cancel) setProducts(res.data);
        }).catch((err) => {
            console.log(err);
        })

        return () => {
            let cancel = true;
        }
    }, []);

    return (
        <div id="products" className="products-container">
            {products.map((product) => {
                return <div>{product.name}</div>
            })}
        </div>
    )
}

export default Products;