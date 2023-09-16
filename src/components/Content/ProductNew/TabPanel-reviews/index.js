import React, { memo } from 'react';

const Index = ({ product }) => {
    return (
        <div role="tabpanel" className="tab-pane" id="tabReviews">
            {product.rating.map((item, index) => {
                const renderStars = () => {
                    if (product) {
                        const stars = [];
                        for (let i = 1; i <= 5; i++) {
                            const starClass = i <= item.star ? 'fa fa-star checked' : 'fa fa-star';
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
                    }
                };
                return <>
                    <div className="row" style={{ padding: "5px 0 10px 15px" }}>
                        <div className="pro-img"><img src={item.img} alt="" style={{ width: "80px", borderRadius: "50%" }} /></div>
                        <div className="pro-name" style={{ padding: "inherit" }}>
                            <div style={{ paddingBottom: "5px", color: "#838383" }}>{item.username + " ( " + item.email + " )"}</div>
                            <div style={{ paddingBottom: "5px", color: "#838383" }}>{item.time + " " + item.date}</div>
                            <div style={{ paddingBottom: "5px" }}>{renderStars()}</div>
                            <div style={{ fontSize: "15px" }}>{item.content}</div>
                        </div>
                    </div>
                    <hr />
                    </>
            })}
        </div>
    );
}

export default memo(Index);
