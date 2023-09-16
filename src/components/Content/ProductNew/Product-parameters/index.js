import React from 'react';

const Index = (props) => {
    const formatter = new Intl.NumberFormat('en-US')
    const { product, checkArrayOrder } = props
    const statusOrder = () => {
        checkArrayOrder(product)
    }
    const sumStarProduct = () => {
        const sum = product.rating.reduce((accumulator, item) => {
            return accumulator + item.star;
        }, 0);
        return sum
    }
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= Math.round(sumStarProduct() / 5) ? 'fa fa-star checked' : 'fa fa-star';
            stars.push(
                <span
                    key={i}
                    className={starClass}
                    data-rating={i}
                    style={{ padding: "0px 5px" }}
                ></span>
            );
        }
        return stars;
    };
    return (
        <div className="col-sm-6 col-xs-12 product_parameters">
            <h1 className="product_name">
                {product.nameProduct}
            </h1>
            <p>{renderStars()} <span style={{ fontSize: '15px' }}>{product.rating.length} reviews - {product.sold} sold - {product.view} views</span>
            </p>
            <h1 style={{display:'flex', alignItems:'center'}}>
                <span className="product_sale_price" style={{ color: '#ffbd59' }}>{formatter.format(product.nowPrice)} VNĐ</span>
                &ensp;
                <span className="product_price" style={{ color: 'grey', fontSize:'17px' }}><del>{formatter.format(product.realPrice)} VNĐ</del></span>
                <span style={{border: '1px solid #ffbd59', borderRadius: '5px', padding:'5px', margin:'0 0 0 10px', fontSize:'13px'}}>- {product.percent}%</span>
            </h1>
            <p>
                <span style={{ fontSize: '18px' }}>
                    ✔&nbsp;Genuine 24 months warranty.&nbsp;</span>
            </p>
            <p>
                <span style={{ fontSize: '18px' }}>
                    ✔ Support renewal for 7 days.&nbsp;</span>
            </p>
            <p>
                <span style={{ fontSize: '18px' }}>
                    ✔ Windows copyright integrated.&nbsp;</span>
            </p>
            <p>
                <span style={{ fontSize: '18px' }}>
                    ✔ Free shipping nationwide.</span>
            </p>
            <hr />
            <p>
                <span style={{ color: '#ffbd59' }}>
                    <span style={{ fontSize: '18px' }}>
                        <u>
                            <strong>
                                PRESENT:</strong>
                        </u>
                    </span>
                </span>
            </p>
            {product.gift.map((item, index) => {
                return <p key={index}>
                    <span style={{ fontSize: '18px' }}>

                        <strong>
                            ⭐ - {item}</strong>

                    </span>
                </p>
            })}
            <p>
                <span style={{ fontSize: '18px' }}>
                    <span style={{ color: '#ffbd59' }}>
                        <strong>
                            <u>
                                PROMOTION WHEN BUYING INCLUDED:&nbsp;</u>
                        </strong>
                    </span>
                </span>
            </p>
            <p>
                {product.gift_buy.map((item, index) => {
                    return <span style={{ fontSize: '18px' }} key={index}>
                        🎁 - {item}<br />
                    </span>
                })}
            </p>
            <hr />
            <p>
                <span style={{ fontSize: '18px' }}>
                    <strong>
                        <span style={{ color: '#ffbd59' }}>
                            Support MPOS (Credit Card), HDSAISON</span>
                    </strong>
                </span>
            </p>
            <p>
                <strong>
                </strong>
            </p>
            <strong>
                <div className="clearfix" />
                <div className="form-group">
                    <button onClick={statusOrder}>Add to cart</button>
                </div>
            </strong>
        </div>
    );
}

export default Index;
