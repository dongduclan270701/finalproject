import React from 'react';

const Index = (props) => {
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
                <span style={{ color: '#ff0000' }}>
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
                            {item}</strong>

                    </span>
                </p>
            })}

            <hr />
            <p>
                <span style={{ fontSize: '18px' }}>
                    <span style={{ color: '#ff0000' }}>
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
                        {item}<br />
                    </span>
                })}

            </p>
            <p>
                <span style={{ fontSize: '18px' }}>
                    And there are many other offers. <a href="">
                        <span style={{ color: '#3498db' }}>
                            <strong>
                                VIEW DETAILS NOW</strong>
                        </span>
                    </a>
                </span>
            </p>
            <hr />
            <p>
                <span style={{ fontSize: '18px' }}>
                    <strong>
                        <span style={{ color: '#ff0000' }}>
                            Support MPOS (Credit Card), HDSAISON&nbsp;(</span>
                        <a href="https://gearvn.com/pages/huong-dan-tra-gop">
                            <span style={{ color: '#3498db' }}>
                                See details</span>
                        </a>
                        <span style={{ color: '#ff0000' }}>
                            ).</span>
                    </strong>
                </span>
            </p>
            <p>
                <strong>

                </strong>
            </p>
            <strong>
                <form id="add-item-form-2" name="shoppingCart" action="/cart/add" method="post" encType="multipart/form-data">
                    <div className="product_nav_btn">
                        <div className="product_sales_off pull-left">
                            <span className="price-text">Giá Cũ:</span><span className="product_price"><del>{product.realPrice}₫</del></span><br />
                            <span className="price-text">Giá KM:</span><span className="product_sale_price">{product.nowPrice}₫</span><br />
                        </div>
                    </div>
                    <div className="clearfix" />
                    <div className="form-group">
                        <p id="allowAdd2Cart" className="product_buy_btn btn-success theme_button addtocar" onClick={statusOrder}>Đặt hàng</p>
                    </div>
                </form>
            </strong>
        </div>
    );
}

export default Index;
