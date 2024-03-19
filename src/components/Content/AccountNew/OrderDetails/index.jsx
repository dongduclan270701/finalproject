import React, { useState, useEffect, memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOrderInformation, fetchCancelOrder, createNoticeByCustomer } from 'Apis'
import logoWarning from 'assets/images/warning.png';
import Process from 'assets/images/box.png'
import Delivery from 'assets/images/delivery.png'
import Correct from 'assets/images/correct.png'
import Rating from './Rating'
import ShowRating from './ShowRating'
import Swal from 'sweetalert2'
const Index = () => {
    const formatter = new Intl.NumberFormat('en-US')
    const navigate = useNavigate()
    const params = useParams()
    const [order, setOrder] = useState(null)
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
    const [isCancelForm, setIsCancelForm] = useState(false)
    const handleToggleShow = () => setToggleShowRate(!toggleShowRate);
    const handleToggleShowRate = () => setToggleShowRate(!toggleShowRate);
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const time = `${hours}:${minutes}`;
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const today = `${year}-${month}-${day}`;
    useEffect(() => {
        setOrder(null)
        document.title = `KTECH`
        fetchOrderInformation(params.id)
            .then(result => {
                setOrder(result)
                setShipProcess(result.shipping_process)
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
                else if (result.status === 'Delivery failed') {
                    setSteps([
                        "Ordered",
                        "Payment information confirmed",
                        "Delivered to the carrier",
                        "Being transported",
                        "Delivery failed",
                    ])
                    setCurrentStep(4)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [params])

    const sumDiscountListProduct = () => {
        let sumDiscountListProduct = 0
        order && order.discountCode.map((item) => {
            sumDiscountListProduct += item.amount
        })
        return sumDiscountListProduct
    }

    const handleOpenCancel = () => {
        setIsCancelForm(!isCancelForm)
    }
    const handleSubmitCancel = () => {
        const newOrder = {
            ...order,
            status: 'Cancel',
            shipping_process: [
                { time: time, date: today, content: 'Cancel' },
                ...order.shipping_process
            ]
        }
        if (order.reasonCancel === '') {
            Swal.fire({
                title: 'Missing!',
                text: 'You have to enter your reason cancel order',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        } else {
            Swal.fire({
                title: 'Do you agree to cancel order??',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Accept',
                cancelButtonText: 'Decline',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Updating...',
                        html: 'Please wait...',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading()
                        }
                    });
                    fetchCancelOrder(order.orderId, newOrder)
                        .then(result => {
                            Swal.fire({
                                title: 'Successfully!',
                                text: 'You have successfully edited your order status',
                                icon: 'success',
                                confirmButtonText: 'OK!'
                            })
                            createNoticeByCustomer({
                                product: result.product[0],
                                email: result.email,
                                time: time,
                                date: today,
                                content: 'Order placed successfully, please wait for order confirmation',
                                status: result.status,
                                orderId: result.orderId,
                                createDate: today
                            })
                                .then(result => {
                                    console.log(result)
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                            setOrder(result)
                            setShipProcess(result.shipping_process)
                            setSteps([
                                "Ordered",
                                "Cancel"
                            ])
                            setCurrentStep(1)
                        })
                        .catch(error => {
                            Swal.fire({
                                title: `Error ${error.response.status}`,
                                text: 'There seems to be a problem with the connection to the server, please try again later',
                                icon: 'error',
                                confirmButtonText: 'OK!'
                            })
                            console.log(error)
                        })
                }
            })
        }
    }
    return (
        <>
            {order ? <><div className="col-sm-9 order-detail" style={{ borderRadius: "15px", fontSize: "15px" }}>
                <div className="row" style={{ padding: "20px", fontSize: "15px" }}>
                    <div className="col-3 play-bold" onClick={() => navigate(-1)} style={{ cursor: "pointer" }}> {"< "} Back</div>
                    <div className="col-9 row" style={{ display: "flex", flexDirection: "row-reverse", padding: "0" }}>
                        <div style={{ width: "unset" }}>ID: <span style={{ color: "green" }}>{order && order.orderId}</span></div>
                        <div style={{ padding: "0 10px 0 10px", width: "unset" }}>|</div>
                        {order && order.status === "Delivery successful" ? <div style={{ color: "green", width: "unset" }}>Complete</div>
                            :
                            order.status === "Delivery failed" ? <div style={{ color: "red", width: "unset" }}>Failed</div>
                                :
                                order.status === "Cancel" ? <div style={{ color: "red", width: "unset" }}>Cancel</div> : <div style={{ color: "#5d5dd9", width: "unset" }}>In process</div>}
                        <div style={{ padding: "0 10px 0 10px", width: "unset" }}>|</div>
                        <div style={{ width: "unset" }}>{order && order.status}</div>
                    </div>
                </div>
                <hr style={{ border: '1px solid #4b93f8' }} />
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
                {order && order.status !== 'Delivery successful' && <div className="row" style={{ height: "50px", padding: "0 15px", alignItems: "center", }}>
                    <div className='col-12 play-bold' style={{ margin: "0", padding: "0" }}>
                        You can check the goods after payment.
                    </div>
                </div>}
                {order && order.status === 'Delivery successful' && order.statusReview.status === false && <div className="row" style={{
                    height: "50px", padding: "0 15px", alignItems: "center",
                }}>
                    <div className="col-8 play-bold" style={{ margin: "0", padding: "0" }}>
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
                    <div className="col-8 play-bold" style={{ margin: "0", padding: "0" }}>
                        You have rated the product of the order
                    </div>
                    <div className="col-4" style={{ display: "flex", flexDirection: "row-reverse" }}>
                        <div className='button-show-order'>
                            <button type='button' onClick={handleToggleShowRate}>Review</button>
                        </div>
                    </div>
                </div>
                }
                <hr style={{ border: '1px solid #4b93f8' }} />
                <div className='row' style={{ padding: "15px 0px" }}>
                    <div className="col-lg-6 ">
                        <h4 className='play-bold'>Delivery address</h4>
                        <p>Purchaser: {order && order.username}</p>
                        <p>Email: {order && order.email}</p>
                        <p>(+84) {order && order.phoneNumber}</p>
                        <p>{order && order.address + ", " + order.commune + ", " + order.district + ", " + order.city}</p>
                    </div>
                    <div className="col-lg-6 order-shipping">
                        {shipProcess.map((item, index) => (
                            <div className='row' style={{ margin: 'auto', display:'flex', alignItems:'center' }} key={index}>
                                {
                                    item.content === "Ordered" ? <i className='fa fa-boxes-stacked' style={{ width: "25px", padding: "0"}} /> :
                                        item.content === "Payment information confirmed" ? <i className='fa fa-boxes-stacked' style={{ width: "25px", padding: "0"}} /> :
                                            item.content === "Being transported" ? <i className='fa fa-truck' style={{width: "25px", padding: "0"}}/> :
                                                item.content === "Delivered to the carrier" ? <i className='fa fa-truck-ramp-box' style={{ width: "25px", padding: "0"}}/> : <i className='fa-solid fa-check' style={{ width: "25px", padding: "0"}} />}
                                {/* <img alt="" src= style={{ width: "25px", padding: "0", filter: "invert(100%)" }} /> */}
                                <p className='order-shipping-list' style={{ paddingLeft: "15px", margin: 0, width: "90%", whiteSpace: "nowrap", wordWrap: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>{item.time} - {item.date} - {item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr style={{ border: '1px solid #4b93f8' }} />
                {order && order.product.map((item, index) => {
                    return <div style={{ borderBottom: "1px solid #a1bde4a5" }} key={index}>
                        <div className="row" style={{ margin: "0px", padding: "10px 0px" }}>
                            <div className="col-8" style={{ padding: "0", margin: "auto", display: 'flex' }}>
                                <div className="pro-img"><img src={item.img[0]} alt="" style={{ width: "80px", borderRadius: "3px" }} /></div>
                                <div className="pro-name" style={{ padding: "inherit", marginTop: "15px" }}>
                                    <div className='play-bold' style={{ padding: "0px 10px" }}>{item.nameProduct}</div>
                                    <div style={{ padding: "10px 10px" }}>x {item.quantity}</div>
                                </div>
                            </div>
                            <div className="col-4 play-bold" style={{ textAlign: "right", margin: "auto"}}>{formatter.format(item.quantity * item.nowPrice)} VNĐ</div>
                        </div>
                    </div>
                })}
                <div className="row" style={{ margin: "0", padding: 0, alignItems: "center", borderBottom: "1px solid #a1bde4a5" }}>
                    <div className="col-8 play-bold" style={{ height: "50px", display: "flex", justifyContent: "end", borderRight: "1px solid #a1bde4a5", alignItems: "center" }}>
                        Total amount of goods
                    </div>
                    <div className="col-4 play-bold" style={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "end" }}>
                        {order && formatter.format(order.sumOrder)} VNĐ
                    </div>
                </div>
                <div className="row" style={{ margin: "0", padding: 0, alignItems: "center", borderBottom: "1px solid #a1bde4a5" }}>
                    <div className="col-8 play-bold" style={{ height: "50px", display: "flex", justifyContent: "end", borderRight: "1px solid #a1bde4a5", alignItems: "center" }}>
                        Shipping fee
                    </div>
                    <div className="col-4 play-bold" style={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "end" }}>
                        {order && formatter.format(order.ship)} VNĐ
                    </div>
                </div>
                <div className="row" style={{ margin: "0", padding: 0, alignItems: "center", borderBottom: "1px solid #a1bde4a5" }}>
                    <div className="col-8 play-bold" style={{ height: "50px", display: "flex", justifyContent: "end", borderRight: "1px solid #a1bde4a5", alignItems: "center" }}>
                        Discount
                    </div>
                    <div className="col-4 play-bold" style={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "end" }}>
                        {formatter.format(sumDiscountListProduct())} VNĐ
                    </div>
                </div>
                <div className="row" style={{ margin: "0", padding: 0, alignItems: "center", borderBottom: "1px solid #a1bde4a5" }}>
                    <div className="col-8 play-bold" style={{ height: "50px", display: "flex", justifyContent: "end", borderRight: "1px solid #a1bde4a5", alignItems: "center" }}>
                        Total
                    </div>
                    <div className="col-4 play-bold" style={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "end", fontSize: "20px" }}>
                        {order && formatter.format(order.sumOrder + order.ship - sumDiscountListProduct())} VNĐ
                    </div>
                </div>
                <div className="row" style={{ height: "50px", padding: "0 15px", margin: 0, alignItems: "center", borderBottom: "1px solid #a1bde4a5", }}>
                    <img src={logoWarning} alt="" style={{ width: "20px", padding: "0" }} />
                    <p style={{ margin: "0" }}>
                        Please pay <span className='play-bold' style={{ color: '#fa577a' }}>{order && formatter.format(order.sumOrder + order.ship - sumDiscountListProduct())} VNĐ</span> upon receipt.
                    </p>
                </div>
                <div className="row" style={{ margin: "0", padding: 0, alignItems: "center" }}>
                    <div className="col-8 play-bold" style={{ height: "50px", display: "flex", justifyContent: "end", borderRight: "1px solid #a1bde4a5", alignItems: "center" }}>
                        Payment methods
                    </div>
                    <div className="col-4 play-bold" style={{ display: "flex", height: "50px", alignItems: "center", justifyContent: "end" }}>
                        Payment on delivery
                    </div>
                </div>
                {order && order.status === 'Ordered' ? <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='col-md-4 button-show-order'>
                        <button type='button' onClick={handleOpenCancel} style={{width:'100%'}}>Cancel</button>
                        {isCancelForm && <form className='row'  style={{width:'100%'}} >
                            <div className='col-9' style={{ padding: 0 }}>
                                <div className="input-field" style={{ margin: 0 }}>
                                    <input style={{borderRadius: '15px 0 0 15px'}} name='reasonCancel' value={order.reasonCancel} onChange={e => setOrder({ ...order, reasonCancel: e.target.value })} />
                                    <label>Reason cancel</label>
                                </div>
                            </div>
                            <div className='col-3' style={{ padding: 0 }}>
                                <button style={{ padding:15, margin: 0, borderRadius: '0 15px 15px 0', background: '#4b93f8', color:'white' }} type='button' onClick={handleSubmitCancel}>Send</button>
                            </div>
                        </form>}
                    </div>
                </div> : null}
            </div></> : <div className="col-sm-9 order-detail" style={{ borderRadius: "15px", fontSize: "15px" }}><div style={{ width: "100%", display: 'flex' }}><div className="lds-hourglass"></div></div></div>}

            {/* <Rating toggleRate={toggleRate} onHandleToggleShow={handleToggleShow} order={order} /> */}
            <ShowRating toggleShowRate={toggleShowRate} onHandleToggleShowRate={handleToggleShowRate} order={order} />
        </>
    );
}

export default memo(Index);
