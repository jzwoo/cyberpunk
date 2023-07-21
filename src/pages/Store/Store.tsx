import React, {useEffect, useState} from "react";
import {getAllProducts} from "../../api/requests";
import APIv1 from "../../api/types";
import Gallery from "../../components/Gallery/Gallery";
import FilterBar from "../../components/FIlterBar/FilterBar";
import "./Store.css";

const Store: React.FC = () => {
    const [products, setProducts] = useState<APIv1.Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<APIv1.Product[]>([]);

    useEffect(() => {
        let cancel = false;
        getAllProducts().then((res) => {
            if (res.status === 200 && !cancel) {
                setProducts(res.data);
                setFilteredProducts(res.data);
            }
        }).catch((err) => {
            console.log(err);
        })

        return () => {
            cancel = true;
        }
    }, []);

    const onSearch = (value?: string) => {
        if (value) {
            const filteredProducts = products.filter((product) => product.name.includes(value));
            setFilteredProducts(filteredProducts);
        } else {
            setFilteredProducts(products);
        }
    }

    return (
        <div className="products-container">
            <FilterBar onEnter={onSearch} placeholder="Search"/>

            <Gallery products={filteredProducts}/>
        </div>
    );
};

export default Store;