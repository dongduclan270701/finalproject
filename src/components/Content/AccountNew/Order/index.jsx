import React, { useState, useEffect, memo } from 'react';
import { NavLink } from 'react-router-dom';
const Index = (props) => {
    const { user } = props
    const formatter = new Intl.NumberFormat('en-US')
    const [listOrder, setListOrder] = useState(null)
    const [listOrderNew, setListOrderNew] = useState(null)
    const [displayCount, setDisplayCount] = useState(5);
    const [step, setStep] = useState(0)
    const [searchOrder, setSearchOrder] = useState('')
    const stepStatusMapping = [
        ['Ordered', 'Payment information confirmed'],
        ['Delivered to the carrier', 'Being transported'],
        ['Delivery successful'],
        ['Cancel', 'Delivery failed'],
    ]
    useEffect(() => {
        if (user) {
            setDisplayCount(5)
            const filteredOrders = user.orders.filter(item => stepStatusMapping[step].includes(item.status));
            setListOrder(filteredOrders)
            setListOrderNew(filteredOrders)
            document.title = `Orders`
        }
    }, [user, step])
    const handleScroll = () => {
        setDisplayCount(displayCount + 5)
    }
    const handleChangeStepProcess = (step) => {
        setStep(step)
    }
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        const foundOrders = listOrder.filter(order => order.orderId.includes(searchOrder.toLowerCase()));
        setListOrderNew(foundOrders)
    }
    const handleChangeSearch = (e) => {
        setSearchOrder(e.target.value)
    }
    return (
        <div className="col-sm-9">
            <div className="profile-content">
                {listOrderNew ? <div className="user-page">
                    <div className='row' style={{ margin: 0, display: 'flex', textAlign: 'center' }}>
                        <div className={step === 0 ? 'col-3 step-process-active' : 'col-3 step-process'} onClick={() => handleChangeStepProcess(0)}>Processing <span style={{ display: step === 0 ? 'contents' : 'none', color: 'red' }}> ({listOrder.length})</span></div>
                        <div className={step === 1 ? 'col-3 step-process-active' : 'col-3 step-process'} onClick={() => handleChangeStepProcess(1)}>Delivery<span style={{ display: step === 1 ? 'contents' : 'none', color: 'red' }}> ({listOrder.length})</span></div>
                        <div className={step === 2 ? 'col-3 step-process-active' : 'col-3 step-process'} onClick={() => handleChangeStepProcess(2)}>Successful<span style={{ display: step === 2 ? 'contents' : 'none', color: 'red' }}> ({listOrder.length})</span></div>
                        <div className={step === 3 ? 'col-3 step-process-active' : 'col-3 step-process'} onClick={() => handleChangeStepProcess(3)}>Cancel<span style={{ display: step === 3 ? 'contents' : 'none', color: 'red' }}> ({listOrder.length})</span></div>
                    </div>
                    <form className='row' style={{ margin: 0 }}>
                        <div className="input-field play-bold" style={{ width: '90%' }}>
                            <input name='nameProduct' onChange={(e) => handleChangeSearch(e)} type="text" style={{ borderRadius: '15px 0 0 15px' }} required />
                            <label>Order ID</label>
                        </div>
                        <div className="input-field" style={{ width: '10%', display: 'flex' }}>
                            <button style={{ margin: 0, padding: 0, borderRadius: '0 15px 15px 0' }} onClick={handleSubmitSearch}><i className="fa fa-search" /></button>
                        </div>
                    </form>
                    {listOrderNew.slice(0, displayCount).map((item, index) => {
                        return <div key={index}>
                            <div className="row" style={{ padding: "0px 20px 10px 20px" }}>
                                <div className="col-6 order-id play-bold">ID: {item.orderId}</div>
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
                                                    <div style={{ color: "#c3c300", width: "unset" }}>In process</div>
                                                    :
                                                    <div style={{ color: "#5d5dd9", width: "unset" }}>In process</div>
                                    }
                                    <div style={{ padding: "0 10px 0 10px", width: "unset" }}>|</div>
                                    <div style={{ width: "unset" }}>{item.status}</div>
                                </div>
                            </div>
                            <div className="row" style={{ padding: "0px 20px 10px 20px" }}>
                                <div className="col-8" style={{ margin: "auto", display: 'flex' }}>
                                    <div className="pro-img"><img src={item.product[0].img[0]} alt="" style={{ width: "80px", borderRadius: "3px" }} /></div>
                                    <div className="pro-name" style={{ padding: "inherit", marginTop: "15px" }}>
                                        <div className='play-bold'>{item.product[0].nameProduct}</div>
                                        <div>x {item.product[0].quantity}</div>
                                    </div>
                                </div>
                                <div className="col-4 play-bold" style={{ textAlign: "right", margin: "auto", color: "" }}> {formatter.format(item.product[0].quantity * item.product[0].nowPrice)} VNĐ</div>
                            </div>
                            <div className='play-bold' style={{ textAlign: "right", margin: "auto", color: "", padding: "0px 20px 10px 20px" }}>Total: {formatter.format(item.sumOrder + item.ship)} VNĐ</div>
                            <div className="row" style={{ margin: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <NavLink to={"/account/order/" + item.orderId} style={{ textDecoration: 'none' }}>
                                    <div className='button-show-order'>
                                        <button type='button play-bold'>SHOW</button>
                                    </div>
                                </NavLink>
                            </div>
                            <hr style={{ border: '1px solid #4b93f8' }} />
                        </div>
                    })}
                    {listOrder.length === listOrderNew.slice(0, displayCount).length || listOrderNew.length < displayCount ?
                        null
                        :
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <div className='button-show-order' style={{}}>
                                <button type="button" className="btn btn-secondary btn-sm play-bold" style={{ display: 'flex', }} onClick={handleScroll}>MORE</button>
                            </div>
                        </div>
                    }
                </div>
                    :
                    <div style={{ width: "100%", display: 'flex' }}><div className="lds-hourglass"></div></div>
                }
            </div>
        </div>
    );
}

export default memo(Index);
