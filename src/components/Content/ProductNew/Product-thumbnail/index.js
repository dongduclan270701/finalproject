import React, { useState,useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Index = (props) => {
    const product = props
    const [listImage, setListImage ] = useState([])
    useEffect(() => {
        setListImage(product.product.img)
    }, [product.product.img]);
    return (
        <div className="col-sm-6 col-xs-12 product_thumbnail">
            <Carousel>
                {listImage.map((item,index) => {
                    return <div key={index}>
                    <img alt="" src={item} />
                </div>
                })}
            </Carousel>
        </div>
    );
}

export default Index;
