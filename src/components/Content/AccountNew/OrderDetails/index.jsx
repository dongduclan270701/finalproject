import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOrderInformation } from 'Apis'
import logoWarning from 'assets/images/warning.png';
import Process from 'assets/images/box.png'
import Delivery from 'assets/images/delivery.png'
import Correct from 'assets/images/correct.png'
import Rating from './Rating'
import ShowRating from './ShowRating'
const Index = () => {
    const formatter = new Intl.NumberFormat('en-US')
    const navigate = useNavigate()
    const params = useParams()
    const [order, setOrder] = useState()
    const [steps, setSteps] = useState([
        "Ordered",
        "Payment information confirmed",
        "Delivered to the carrier",
        "Being transported",
        "Delivery successful",
    ]);
    const [shipProcess, setShipProcess] = useState([])
    const [currentStep, setCurrentStep] = useState(0);
    const [toggleRate, setToggleRate] = useState(false);
    const [toggleShowRate, setToggleShowRate] = useState(false);
    const handleToggleShow = () => setToggleRate(!toggleRate);
    const handleToggleShowRate = () => setToggleShowRate(!toggleShowRate);
    useEffect(() => {
        fetchOrderInformation(params.id)
            .then(result => {
                console.log(result)
                setOrder(result)
                setShipProcess(result.shipping_process.reverse())
                if (result.status === "Cancel") {
                    setSteps([
                        "Ordered",
                        "Cancel"
                    ])
                    setCurrentStep(1)
                }
                else if (result.status === 'Ordered') {
                    setCurrentStep(0)
                }
                else if (result.status === 'Payment information confirmed') {
                    setCurrentStep(1)
                }
                else if (result.status === 'Delivered to the carrier') {
                    setCurrentStep(2)
                }
                else if (result.status === 'Being transported') {
                    setCurrentStep(3)
                }
                else if (result.status === 'Delivery successful') {
                    setCurrentStep(4)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const sumDiscountListProduct = () => {
        let sumDiscountListProduct = 0
        order && order.discountCode.map((item) => {
            sumDiscountListProduct += item.amount
        })
        return sumDiscountListProduct
    }
    return (
        <>
            <div className="col-sm-9" style={{ borderRadius: "15px", fontSize: "15px" }}>
                <div className="row" style={{ padding: "20px", fontSize: "15px" }}>
                    <div className="col-3" onClick={() => navigate(-1)} style={{ cursor: "pointer" }}> {"< "} Back</div>
                    <div className="col-9 row" style={{ display: "flex", flexDirection: "row-reverse", padding: "0" }}>
                        <div style={{ width: "unset" }}>ID: <span style={{ color: "green" }}>{order && order.orderId}</span></div>
                        <div style={{ padding: "0 10px 0 10px", width: "unset" }}>|</div>
                        {order && order.status !== "Delivery successful" ? <div style={{ color: "#5d5dd9", width: "unset" }}>In process</div>
                            :
                            <div style={{ color: "green", width: "unset" }}>Complete</div>}
                        <div style={{ padding: "0 10px 0 10px", width: "unset" }}>|</div>
                        <div style={{ width: "unset" }}>{order && order.status}</div>
                    </div>
                </div>
                <hr style={{ border: '1px solid #ffbd59' }} />
                <div className="progress-bar-process">
                    {steps.map((step, index) => (
                        <div key={index} className={`col-2 step ${currentStep === index ? "active" : ""}`}>
                            <div className="circle">{index + 1}</div>
                            <div className="label">{step}</div>
                            {index <= steps.length - 1 && <div className="line"></div>}
                        </div>
                    ))
                    }
                </div>
                {order && order.status !== 'Delivery successful' && <div className="row" style={{ height: "50px", padding: "0 15px", alignItems: "center",  }}>
                    <div className='col-12' style={{ margin: "0", padding: "0" }}>
                        You can check the goods after payment.
                    </div>
                </div>}
                {order && order.status === 'Delivery successful' && order.statusReview.status === false && <div className="row" style={{
                    height: "50px", padding: "0 15px", alignItems: "center",
                }}>
                    <div className="col-8" style={{ margin: "0", padding: "0" }}>
                        You have received your order, please rate your goods
                    </div>
                    <div className="col-4" style={{ display: "flex", flexDirection: "row-reverse" }}>
                        {/* <button className="btn btn-secondary btn-sm" onClick={handleToggleShow}>Rate goods</button> */}
                        <div className='button-show-order'>
                            <button type='button' onClick={handleToggleShow}>Rate goods</button>
                        </div>
                    </div>
                </div>
                }
                {order && order.status === 'Delivery successful' && order.statusReview.status === true && <div className="row" style={{
                    height: "50px", padding: "0 15px", alignItems: "center",
                }}>
                    <div className="col-8" style={{ margin: "0", padding: "0" }}>
                        You have rated the product of the order
                    </div>
                    <div className="col-4" style={{ display: "flex", flexDirection: "row-reverse" }}>
                        <div className='button-show-order'>
                            <button type='button' onClick={handleToggleShowRate}>Review</button>
                        </div>
                    </div>
                </div>
                }
                <hr style={{ border: '1px solid #ffbd59' }} />
                <div className='row' style={{ padding: "15px 0px" }}>
                    <div className="col-lg-6 ">
                        <h4>Delivery address</h4>
                        <p>Purchaser: {order && order.username}</p>
                        <p>Email: {order && order.email}</p>
                        <p>(+84) {order && order.phoneNumber}</p>
                        <p>{order && order.address + ", " + order.commune + ", " + order.district + ", " + order.city}</p>
                    </div>
                    <div className="col-lg-6">
                        {shipProcess.map((item, index) => (
                            <div className='row' style={{ margin: 'auto' }} key={index}>
                                <img alt="" src={
                                    item.content === "Ordered" ? Process :
                                        item.content === "Payment information confirmed" ? Process :
                                            item.content === "Being transported" ? Delivery :
                                                item.content === "Delivered to the carrier" ? Delivery : Correct} style={{ width: "25px", padding: "0", filter: "invert(100%)" }} />
                                <p style={{ paddingLeft: "15px", margin: 0, width: "370px", whiteSpace: "nowrap", wordWrap: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>{item.time} - {item.date} - {item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr style={{ border: '1px solid #ffbd59' }} />
                {order && order.product.map((item, index) => {
                    return <div style={{ borderBottom: "1px solid #e1dfdf" }} key={index}>
                        <div className="row" style={{ margin: "0px", padding: "10px 0px" }}>
                            <div className="col-8" style={{ padding: "0", margin: "auto", display: 'flex' }}>
                                <div className="pro-img"><img src={item.img[0]} alt="" style={{ width: "80px", borderRadius: "3px" }} /></div>
                                <div className="pro-name" style={{ padding: "inherit", marginTop: "15px" }}>
                                    <div style={{ padding: "0px 10px" }}>{item.nameProduct}</div>
                                    <div style={{ padding: "10px 10px" }}>x {item.quantity}</div>
                                </div>
                            </div>
                            <div className="col-4" style={{ textAlign: "right", margin: "auto", color: "red" }}>{formatter.format(item.quantity * item.nowPrice)} VNĐ</div>
                        </div>
                    </div>
                })}
                <div className="row" style={{ margin: "0", padding: 0, alignItems: "center", borderBottom: "1px solid #e1dfdf" }}>
                    <div className="col-8" style={{ height: "50px", display: "flex", justifyContent: "end", borderRight: "1px solid #e1dfdf", alignItems: "center" }}>
                        Total amount of goods
                    </div>
                    <div className="col-4" style={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "end" }}>
                        {order && formatter.format(order.sumOrder)} VNĐ
                    </div>
                </div>
                <div className="row" style={{ margin: "0", padding: 0, alignItems: "center", borderBottom: "1px solid #e1dfdf" }}>
                    <div className="col-8" style={{ height: "50px", display: "flex", justifyContent: "end", borderRight: "1px solid #e1dfdf", alignItems: "center" }}>
                        Shipping fee
                    </div>
                    <div className="col-4" style={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "end" }}>
                        {order && formatter.format(order.ship)} VNĐ
                    </div>
                </div>
                <div className="row" style={{ margin: "0", padding: 0, alignItems: "center", borderBottom: "1px solid #e1dfdf" }}>
                    <div className="col-8" style={{ height: "50px", display: "flex", justifyContent: "end", borderRight: "1px solid #e1dfdf", alignItems: "center" }}>
                        Discount
                    </div>
                    <div className="col-4" style={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "end" }}>
                        {formatter.format(sumDiscountListProduct())} VNĐ
                    </div>
                </div>
                <div className="row" style={{ margin: "0", padding: 0, alignItems: "center", borderBottom: "1px solid #e1dfdf" }}>
                    <div className="col-8" style={{ height: "50px", display: "flex", justifyContent: "end", borderRight: "1px solid #e1dfdf", alignItems: "center" }}>
                        Into money
                    </div>
                    <div className="col-4" style={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "end", color: "#fa577a", fontSize: "20px" }}>
                        {order && formatter.format(order.sumOrder + order.ship - sumDiscountListProduct())} VNĐ
                    </div>
                </div>
                <div className="row" style={{ height: "50px", padding: "0 15px", margin: 0, alignItems: "center", borderBottom: "1px solid #e1dfdf", }}>
                    <img src={logoWarning} alt="" style={{ width: "20px", padding: "0" }} />
                    <p style={{ margin: "0" }}>
                        Please pay <span style={{ color: '#fa577a' }}>{order && formatter.format(order.sumOrder + order.ship - sumDiscountListProduct())} VNĐ</span> upon receipt.
                    </p>
                </div>
                <div className="row" style={{ margin: "0", padding: 0, alignItems: "center" }}>
                    <div className="col-8" style={{ height: "50px", display: "flex", justifyContent: "end", borderRight: "1px solid #e1dfdf", alignItems: "center" }}>
                        Payment methods
                    </div>
                    <div className="col-4" style={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "end" }}>
                        Payment on delivery
                    </div>
                </div>
            </div>
            <Rating toggleRate={toggleRate} onHandleToggleShow={handleToggleShow} order={order} />
            <ShowRating toggleShowRate={toggleShowRate} onHandleToggleShowRate={handleToggleShowRate} order={order} />
        </>
    );
}

export default Index;
