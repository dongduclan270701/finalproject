import React, { useState, useEffect } from 'react';
import { fetchUserOrderDetails } from 'Apis'
import { NavLink } from 'react-router-dom';
const Index = () => {
    const [listOrder, setListOrder] = useState()
    const [listOrderNew, setListOrderNew] = useState()
    const [displayCount, setDisplayCount] = useState(5);
    useEffect(() => {
        fetchUserOrderDetails(JSON.parse(localStorage.getItem('user'))[0])
            .then(result => {
                setListOrder(result.orders)
                const orders = result.orders.slice(0, displayCount)
                setListOrderNew(orders)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    const handleScroll = () => {
        setDisplayCount(displayCount + 5)
        setListOrderNew(listOrder.slice(0, displayCount + 5))
    };
    return (
        <div className="profile-content">
            <div className="user-page">
                <h1 className="postname">
                Order Management
                </h1>
                {listOrderNew && listOrderNew.map((item, index) => {
                    return <React.Fragment key={index}>
                        <hr />
                        <div className="row" style={{ padding: "0px 20px 10px 20px" }}>
                            <div className="col-6">Order: {item.orderId}</div>
                            <div className="col-6 row" style={{ display: "flex", flexDirection: "row-reverse", padding: "0" }}>
                                {item.status !== "Delivery successful" ? <div style={{ color: "#5d5dd9" }}>In process</div>
                                    :
                                    <div style={{ color: "green" }}>Complete</div>}
                                <div style={{ padding: "0 10px 0 10px" }}>|</div>
                                <div>{item.status}</div>
                            </div>
                        </div>
                        <div className="row" style={{ padding: "0px 20px 10px 20px" }}>
                            <div className="col-8" style={{ margin: "auto" }}>
                                <div className="pro-img"><img src={item.product[0].img} alt="" style={{ width: "80px", borderRadius: "3px" }} /></div>
                                <div className="pro-name" style={{ padding: "inherit", marginTop: "15px" }}>
                                    <div>{item.product[0].nameProduct}</div>
                                    <div>x {item.product[0].quantity}</div>
                                </div>
                            </div>
                            <div className="col-4" style={{ textAlign: "right", margin: "auto", color: "red" }}> {item.product[0].quantity * item.product[0].nowPrice}₫</div>
                        </div>
                        <div style={{ textAlign: "right", margin: "auto", color: "red", padding: "0px 20px 10px 20px" }}>Total: {item.sumOrder + item.ship} ₫</div>
                        <div className="row" style={{ padding: "0px 20px 10px 20px" }}>
                            <div className="profile-userbuttons">
                                <NavLink to="">
                                    <button type="button" className="btn btn-secondary btn-sm">View order details</button>
                                </NavLink>
                            </div>
                        </div>
                    </React.Fragment>
                })}
                {listOrder && listOrderNew && listOrder.length === listOrderNew.length ? null : <button type="button" className="btn btn-secondary btn-sm" style={{ display: 'flex', margin: '0 auto' }} onClick={handleScroll}>More</button>}
            </div>
        </div>
    );
}

export default Index;
