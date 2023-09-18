import React, { useState, useEffect } from 'react';
import { fetchUserOrderDetails } from 'Apis'
import { NavLink } from 'react-router-dom';
const Index = (props) => {
    const { user } = props
    const formatter = new Intl.NumberFormat('en-US')
    const [listOrder, setListOrder] = useState(null)
    const [listOrderNew, setListOrderNew] = useState(null)
    const [displayCount, setDisplayCount] = useState(5);
    useEffect(() => {
        if (user) {
            setListOrder(user.orders)
            const orders = user.orders.slice(0, displayCount)
            setListOrderNew(orders)
        }
    }, [user])
    const handleScroll = () => {
        setDisplayCount(displayCount + 5)
        setListOrderNew(listOrder.slice(0, displayCount + 5))
    }
    return (
        <div className="col-sm-9">
            <div className="profile-content">
                {listOrderNew ? <div className="user-page">
                    <h1 className="postname">
                        Order Management
                    </h1>
                    <hr style={{ border: '1px solid rgb(245 53 74)' }} />
                    {listOrderNew && listOrderNew.map((item, index) => {
                        return <div key={index}>

                            <div className="row" style={{ padding: "0px 20px 10px 20px" }}>
                                <div className="col-6 order-id">ID: {item.orderId}</div>
                                <div className="col-6 row" style={{ display: "flex", flexDirection: "row-reverse", padding: "0" }}>
                                    {item.status === "Delivery successful" ?
                                        <div style={{ color: "green", width: "unset" }}>Complete</div>
                                        :
                                        item.status === "Cancel" ?
                                            <div style={{ color: "red", width: "unset" }}>Cancel</div>
                                            :
                                            item.status === "Delivery failed" ?
                                                <div style={{ color: "red", width: "unset" }}>Delivery failed</div>
                                                :
                                                item.status === "Ordered" ?
                                                    <div style={{ color: "yellow", width: "unset" }}>In process</div>
                                                    :
                                                    <div style={{ color: "#5d5dd9", width: "unset" }}>In process</div>
                                    }
                                    <div style={{ padding: "0 10px 0 10px", width: "unset" }}>|</div>
                                    <div style={{ width: "unset" }}>{item.status}</div>
                                </div>
                            </div>
                            <div className="row" style={{ padding: "0px 20px 10px 20px" }}>
                                <div className="col-8" style={{ margin: "auto", display: 'flex' }}>
                                    <div className="pro-img"><img src={item.product[0].img} alt="" style={{ width: "80px", borderRadius: "3px" }} /></div>
                                    <div className="pro-name" style={{ padding: "inherit", marginTop: "15px" }}>
                                        <div>{item.product[0].nameProduct}</div>
                                        <div>x {item.product[0].quantity}</div>
                                    </div>
                                </div>
                                <div className="col-4" style={{ textAlign: "right", margin: "auto", color: "" }}> {formatter.format(item.product[0].quantity * item.product[0].nowPrice)} VNĐ</div>
                            </div>
                            <div style={{ textAlign: "right", margin: "auto", color: "", padding: "0px 20px 10px 20px" }}>Total: {formatter.format(item.sumOrder + item.ship)} VNĐ</div>
                            <div className="row" style={{ margin: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <NavLink to={"/account/order/" + item.orderId}>
                                    <div className='button-show-order'>
                                        <button type='button'>View order details</button>
                                    </div>
                                </NavLink>
                            </div>
                            <hr style={{ border: '1px solid rgb(68 51 26)' }} />
                        </div>
                    })}
                    {listOrder && listOrderNew && listOrder.length === listOrderNew.length ?
                        null
                        :
                        <div className='button-show-order'>
                            <button type="button" className="btn btn-secondary btn-sm" style={{ display: 'flex', }} onClick={handleScroll}>Show More</button>
                        </div>
                    }
                </div>
                    :
                    <div style={{ width: "100%", display: 'flex' }}><div class="lds-hourglass"></div></div>
                }
            </div>
        </div>
    );
}

export default Index;
