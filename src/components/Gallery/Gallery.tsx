import React, {useEffect, useState} from "react";
import APIv1 from "../../api/types";
import Card from "./Card";
import {CardProps} from "./Card";
import "./Gallery.css"

interface GalleryProps {
    products: APIv1.Product[]
}

const Gallery: React.FC<GalleryProps> = (props) => {
    const {products} = props;

    const [rows, setRows] = useState<CardProps[][]>([]);

    useEffect(() => {
        processProducts();
    }, [products])

    const processProducts = () => {
        const fixedHeight = 200;
        const margin = 6;
        const viewportWidth = window.innerWidth - 80;

        let currentWidth = 0;
        const rows: CardProps[][] = [];
        let row: CardProps[] = [];
        const rowWidths: number[] = [];

        products.forEach((product) => {
            const productImageAspectRatio = product.image.aspectRatio;

            const targetWidth = fixedHeight * productImageAspectRatio;
            row.push({product: product, width: targetWidth});

            const totalWidth = targetWidth + margin;
            currentWidth += totalWidth;
            if (currentWidth >= viewportWidth) {
                rows.push(row);
                rowWidths.push(currentWidth);

                row = [];
                currentWidth = 0;
            }
        });

        if (row.length > 0) {
            rows.push(row);
            rowWidths.push(currentWidth);
        }

        for (let i = 0; i < rows.length; i++) {
            const currRow = rows[i];
            const spacesLength = currRow.length * margin;

            const targetRowWidth = rowWidths[i] - spacesLength;
            const targetViewPortWidth = viewportWidth - spacesLength;
            const scale = targetViewPortWidth / targetRowWidth;

            currRow.forEach((cardProp) => {
                cardProp.width *= scale;
            });
        }

        setRows(rows);
    };

    return (
        <div className="gallery">
            {rows.map((row) => {
                return row.map((cardProps, key) => {
                    return (
                        <Card product={cardProps.product} width={cardProps.width} key={key}/>
                    )
                })
            })}
        </div>
    )
}

export default Gallery;