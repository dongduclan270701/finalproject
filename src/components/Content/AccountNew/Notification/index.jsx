import React, { useState, useEffect } from 'react';
import { fetchNoticeByCustomer } from 'Apis'
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/banner-about.png'
const Index = (props) => {
    const { user } = props
    const [listNotice, setListNotice] = useState(null)
    useEffect(() => {
        if (user) {
            fetchNoticeByCustomer(user.email)
                .then(result => {
                    setListNotice(result)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [user])
    const handleReadNotice = (orderId) => {
        console.log(orderId)
    }
    return (
        <div className="col-sm-9">
            <div className="profile-content"><div className="user-page">
                {listNotice ? listNotice.map((item, index) => {
                    return <NavLink to={'/account/order/'+item.orderId} style={{textDecoration:'none'}} onClick={() => handleReadNotice(item.orderId)}>
                        <div className={item.isRead ? "row notice" : "row notice-unread"} key={index}>
                            <div className="col-12" style={{ margin: "0", display: 'flex', alignItems: 'center' }}>
                                <div className="pro-img"><img src={logo} alt="" style={{ width: "80px", borderRadius: "3px" }} /></div>
                                <div className="pro-name" style={{ padding: "inherit" }}>
                                    <div>Your order: {item.status}</div>
                                    <div>{item.content}</div>
                                    <div>{item.time} {item.date}</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                })
                    :
                    <div style={{ width: "100%", display: 'flex' }}><div className="lds-hourglass"></div></div>
                }</div>
            </div>
        </div>
    );
}

export default Index;
