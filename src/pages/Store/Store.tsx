import React, {useEffect, useState} from "react";
import {getAllProducts} from "../../api/requests";
import APIv1 from "../../api/types";
import Gallery from "../../components/Gallery/Gallery";
import "./Store.css";

const Store: React.FC = () => {
    const [products, setProducts] = useState<APIv1.Product[]>([]);

    useEffect(() => {
        let cancel = false;
        getAllProducts().then((res) => {
            if (res.status === 200 && !cancel) setProducts(res.data);
        }).catch((err) => {
            console.log(err);
        })

        return () => {
            cancel = true;
        }
    }, []);

    return (
        <div className="products-container">
            <Gallery products={products}/>
        </div>
    );
};

export default Store;