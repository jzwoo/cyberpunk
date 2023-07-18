import React, {useEffect, useState} from "react";
import {getAllProducts} from "../../api/requests";
import APIv1 from "../../api/types";
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

    const image1 = "image1.jpg"
    const image2 = "image2.jpg"
    const image3 = "image3.jpg"
    const image4 = "image4.jpg"
    const image5 = "image5.jpg"
    const image6 = "image6.jpg"

    return (
        <div className="products-container">
            <div className="gallery-container">
                <img className="images" src={image1}/>
                <img className="images" src={image2}/>
                <img className="images" src={image3}/>
                <img className="images" src={image4}/>
                <img className="images" src={image5}/>
                <img className="images" src={image6}/>

                <img className="images" src={image2}/>
                <img className="images" src={image3}/>
                <img className="images" src={image1}/>
                <img className="images" src={image6}/>
                <img className="images" src={image4}/>
                <img className="images" src={image5}/>
            </div>
        </div>
    )
}

export default Store;
