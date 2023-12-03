import React, { useState, useEffect, useContext, memo } from 'react';
import 'assets/scss/Content/Pay-order/Pay-order.scss'
import axios from 'axios';
import { createOrderByCustomer, updateCart, createNoticeByCustomer } from 'Apis'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { StateContext } from 'Context/Context'
import location from 'assets/images/location.png'
import box from 'assets/images/box.png'
const Index = () => {
    const state = useContext(StateContext)
    const navigate = useNavigate()
    const formatter = new Intl.NumberFormat('en-US')
    const [city, setCity] = useState([])
    const [district, setDistrict] = useState([])
    const [commune, setCommune] = useState(undefined)
    const [orderCheckOut, setOrderCheckOut] = useState(JSON.parse(localStorage.getItem('user')) ? {
        product: state.arrayOrder,
        email: JSON.parse(localStorage.getItem('user'))[0],
        username: JSON.parse(localStorage.getItem('user'))[1],
        phoneNumber: JSON.parse(localStorage.getItem('user'))[2],
        address: JSON.parse(localStorage.getItem('user'))[3],
        city: "",
        district: "",
        commune: "",
        discountCode: [],
        shipping_process: [],
        method_payment: "Payment on delivery",
        ship: 30000,
        sumOrder: 0,
        status: 'Ordered',
    } :
        {
            product: state.arrayOrder,
            email: "",
            username: "",
            phoneNumber: "",
            address: "",
            city: "",
            district: "",
            commune: "",
            discountCode: [],
            shipping_process: [],
            method_payment: "Thanh toán khi nhận hàng",
            ship: 30000,
            sumOrder: 0,
            status: 'Ordered',

        }
    )
    const [orderSuccessful, setOrderSuccessful] = useState(null)
    const [step, setStep] = useState(1)
    const totalSteps = 4
    const nextStep = () => {
        if (step + 1 === 3) {
            if (orderCheckOut.address === "") {
                Swal.fire({
                    title: "You haven't entered enough information!",
                    text: 'Please enter an address!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            }
            else if (orderCheckOut.phoneNumber === null) {
                Swal.fire({
                    title: "You haven't entered enough information!",
                    text: 'Please enter the delivery phone number!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            }
            else if (orderCheckOut.phoneNumber.length !== 10) {
                Swal.fire({
                    title: "You haven't entered enough information!",
                    text: 'Please enter the correct phone number format!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            }
            else if (orderCheckOut.city === "") {
                Swal.fire({
                    title: "You haven't entered enough information!",
                    text: 'Please select Province / City!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            }
            else if (orderCheckOut.district === "") {
                Swal.fire({
                    title: "You haven't entered enough information!",
                    text: '"Please select District!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            }
            else if (orderCheckOut.commune === "") {
                Swal.fire({
                    title: "You haven't entered enough information!",
                    text: 'Please select Ward/Commune!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            }
            else if (orderCheckOut.product === null || orderCheckOut.product.length < 1) {
                Swal.fire({
                    title: "You don't have any products yet.!",
                    text: 'The product should be chosen before placing an order!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            }
            else {
                setStep(step + 1);
            }
        } else if (step + 1 === 2) {
            if (orderCheckOut.product === null || orderCheckOut.product.length < 1) {
                Swal.fire({
                    title: "You don't have any products yet.!",
                    text: 'The product should be chosen before placing an order!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            }
            else {
                setStep(step + 1);
            }
        } else {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };
    useEffect(() => {
        document.title = 'Payment'
        const getCity = async () => {
            try {
                await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
                    .then(result => {
                        setCity(result.data)
                    })

            } catch (error) {
                console.log(error)
            }
        }
        getCity()
        if(orderCheckOut.product.length === 0){
            navigate('/cart')
        }
    }, [orderCheckOut]);
    const totalArrayOrder = () => {
        let total = 0;
        state.arrayOrder && state.arrayOrder.map((item, index) => {
            total += item.nowPrice * item.quantity
        })
        return total
    }

    const totalArrayOrderSuccessful = () => {
        let total = 0;
        orderSuccessful && orderSuccessful.product.map((item, index) => {
            total += item.nowPrice * item.quantity
        })
        return total
    }

    const handleChooseCDC = (e, nameTypeChoose) => {
        if (nameTypeChoose === 'city') {
            const indexCity = city.findIndex(i => i.Name === e.target.value)
            setOrderCheckOut({ ...orderCheckOut, city: e.target.value, district: "", commune: "" })
            setDistrict(city[indexCity].Districts)
        }
        if (nameTypeChoose === 'district') {
            setOrderCheckOut({ ...orderCheckOut, district: e.target.value, commune: "" })
            const indexCity = city.findIndex(i => i.Name === orderCheckOut.city)
            const indexDistrict = city[indexCity].Districts.findIndex(i => i.Name === e.target.value)
            setCommune(city[indexCity].Districts[indexDistrict].Wards)
        }
        if (nameTypeChoose === 'commune') {
            setOrderCheckOut({ ...orderCheckOut, commune: e.target.value })
        }

    }

    const RequestCheckOut = () => {
        const date = new Date();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const time = `${hours}:${minutes}`;
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const today = `${year}-${month}-${day}`;
        if (orderCheckOut.address === "") {
            Swal.fire({
                title: "You haven't entered enough information!",
                text: 'Please enter an address!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (orderCheckOut.phoneNumber === null) {
            Swal.fire({
                title: "You haven't entered enough information!",
                text: 'Please enter the delivery phone number!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (orderCheckOut.phoneNumber.length !== 10) {
            Swal.fire({
                title: "You haven't entered enough information!",
                text: 'Please enter the correct phone number format!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (orderCheckOut.city === "") {
            Swal.fire({
                title: "You haven't entered enough information!",
                text: 'Please select Province / City!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (orderCheckOut.district === "") {
            Swal.fire({
                title: "You haven't entered enough information!",
                text: '"Please select District!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (orderCheckOut.commune === "") {
            Swal.fire({
                title: "You haven't entered enough information!",
                text: 'Please select Ward/Commune!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (orderCheckOut.product === null || orderCheckOut.product.length < 1) {
            Swal.fire({
                title: "You don't have any products yet.!",
                text: 'The product should be chosen before placing an order!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else {
            Swal.fire({
                title: 'Loading...',
                html: 'Please wait...',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
            const newData = {
                ...orderCheckOut,
                shipping_process: [{ time: time, date: today, content: 'Ordered' }],
                sumOrder: totalArrayOrder(),
                createDate: today
            }
            createOrderByCustomer(newData)
                .then(result => {
                    nextStep()
                    setOrderSuccessful(result)
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
                    updateCart(JSON.parse(localStorage.getItem('user'))[0], [])
                        .then(result => {
                            state.handleUpdateArrayOrder([])
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    Swal.fire({
                        title: 'Order placed successfully!',
                        text: 'The order has been placed successfully.!',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                })
                .catch(error => {
                    Swal.fire({
                        title: 'Order failed!',
                        text: 'The connection to the server seems to have a problem!',
                        icon: 'error',
                        confirmButtonText: 'OK!'
                    })
                    console.log(error)
                })
        }
    }
    const handleNavigateOrder = () => {
        navigate('/account/order/' + orderSuccessful.orderId)
    }
    return (
        <div className='container' id='payment'>
            <div className="row pay-content">
                <div className="step-indicator">
                    {Array.from({ length: totalSteps }, (_, index) => (
                        <React.Fragment key={index}>
                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <div className={`step-circle ${step >= index + 1 ? 'completed' : ''}`}>
                                    {index + 1}
                                </div>
                                {index + 1 === 1 && <p style={{ width: '120px', textAlign: 'center', margin: 0 }}>Cart</p>}
                                {index + 1 === 2 && <p style={{ width: '120px', textAlign: 'center', margin: 0 }}>Information</p>}
                                {index + 1 === 3 && <p style={{ width: '120px', textAlign: 'center', margin: 0 }}>Payment</p>}
                                {index + 1 === 4 && <p style={{ width: '120px', textAlign: 'center', margin: 0 }}>Complete</p>}
                            </div>
                            {index < totalSteps - 1 && <div className={`step-line ${step > index + 1 ? 'completed' : ''}`}></div>}
                        </React.Fragment>
                    ))}
                </div>
                {step === 1 && <div className="col-md-8 sidebar">
                    <div className="sidebar-content-pay">
                        <div className="order-summary order-summary-is-collapsed">
                            <div className="order-summary-sections">
                                <div className="order-summary-section order-summary-section-product-list" data-order-summary-section="line-items">
                                    <table className="product-table">
                                        <thead>
                                            <tr>
                                                <th scope="col"><span className="visually-hidden">Image</span></th>
                                                <th scope="col"><span className="visually-hidden">Product</span></th>
                                                <th scope="col"><span className="visually-hidden">Quantity</span></th>
                                                <th scope="col"><span className="visually-hidden">Price</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {state.arrayOrder && state.arrayOrder.map((item, index) => {
                                                return <tr className="" data-product-id={1044931183} data-variant-id={1099216743} key={index}>
                                                    <td className="">
                                                        <div className="">
                                                            <div className="">
                                                                <img className="" alt="Laptop Acer Aspire 3 A315 59 321N" width={75} src={item.img[0]} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="">
                                                        <span className="">{item.nameProduct}</span>
                                                    </td>
                                                    <td className="">{item.quantity}</td>
                                                    <td className="">
                                                        <span className="">{formatter.format(item.nowPrice)} VNĐ</span>
                                                    </td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <hr style={{ borderTop: "2px solid rgb(240 61 118)" }} />
                                <div className="order-summary-section order-summary-section-total-lines payment-lines" data-order-summary-section="payment-lines">
                                    <table className="total-line-table">
                                        <thead>
                                            <tr>
                                                <th scope="col"><span className="visually-hidden">Mô tả</span></th>
                                                <th scope="col"><span className="visually-hidden">Giá</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="total-line total-line-subtotal">
                                                <td className="total-line-name">Temporary</td>
                                                <td className="total-line-price">
                                                    <span className="order-summary-emphasis" data-checkout-subtotal-price-target={1199000000}>
                                                        {formatter.format(totalArrayOrder())} VNĐ
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr className="total-line total-line-shipping">
                                                <td className="total-line-name">Transport fee</td>
                                                <td className="total-line-price">
                                                    <span className="order-summary-emphasis" data-checkout-total-shipping-target={0}>
                                                        30,000 VNĐ
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot className="total-line-table-footer">
                                            <tr className="total-line">
                                                <td className="total-line-name payment-due-label">
                                                    <span className="payment-due-label-total">Total amount</span>
                                                </td>
                                                <td className="total-line-name payment-due">
                                                    <span className="payment-due-price" data-checkout-payment-due-target={1199000000}>
                                                        {formatter.format(totalArrayOrder() + 30000)} VNĐ
                                                    </span>
                                                    <span className="checkout_version" data_checkout_version={4}>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className='button-step'>
                                <div></div>
                                <button onClick={nextStep} className="button-step-next-content">Next &gt;</button>
                            </div>
                        </div>
                    </div>
                </div>}
                {step === 2 && <div className="col-md-8 main-pay">
                    <div className="main-content">
                        <div className="step">
                            <div className="step-sections steps-onepage">
                                <div className="section">
                                    <div className="section-content section-customer-information no-mb">
                                        <input type="hidden" name="checkout_user[email]" value="dongduclan277@gmail.com" />
                                        <form>
                                            <div className="input-field">
                                                <input name='fullName' type="text" onChange={(e) => setOrderCheckOut({ ...orderCheckOut, username: e.target.value })} value={orderCheckOut.username} required />
                                                <label>Full Name</label>
                                            </div>
                                            <div className="input-field">
                                                <input name='phoneNumber' type="tel" onChange={(e) => setOrderCheckOut({ ...orderCheckOut, phoneNumber: e.target.value })} value={orderCheckOut.phoneNumber} required />
                                                <label>Phone Number</label>
                                            </div>
                                            <div className="input-field">
                                                <input name='address' type="text" onChange={(e) => setOrderCheckOut({ ...orderCheckOut, address: e.target.value })} value={orderCheckOut.address} required />
                                                <label>Address</label>
                                            </div>
                                            <div className='row select-field'>
                                                <div className='col-4'>
                                                    <select onChange={(e) => handleChooseCDC(e, "city")} value={orderCheckOut.city} className="field-input" id="customer_shipping_province" name="customer_shipping_province" required>
                                                        <option data-code="" value="">
                                                            Select City </option>
                                                        {city && city.map((item, index) => {
                                                            return <option key={index} value={item.Name}>{item.Name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className='col-4'>
                                                    <select onChange={(e) => handleChooseCDC(e, "district")} value={orderCheckOut.district} className="field-input" id="customer_shipping_district" name="customer_shipping_district" required>
                                                        <option data-code="" value="">Select District</option>
                                                        {district && district.map((item, index) => {
                                                            return <option key={index} value={item.Name}>{item.Name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className='col-4'>
                                                    <select onChange={(e) => handleChooseCDC(e, "commune")} value={orderCheckOut.commune} className="field-input" id="customer_shipping_ward" name="customer_shipping_ward" required>
                                                        <option data-code="" value="">Select Ward</option>
                                                        {commune && commune.map((item, index) => {
                                                            return <option key={index} value={item.Name}>{item.Name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='button-step'>
                                        <button onClick={prevStep} className="button-step-pre-content">&lt; Previous</button>
                                        <button onClick={nextStep} className="button-step-next-content">Next &gt;</button>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div >}
                {step === 3 &&
                    <>
                        <div className="col-md-8 main-pay">
                            <div className="main-content">
                                <div className="step">
                                    <div className="step-sections steps-onepage">
                                        <div className="section">
                                            <div className="section-content section-customer-information no-mb">
                                                <div className='row' style={{ margin: 0 }}>
                                                    <img src={location} alt='' style={{ width: '30px', height: '30px', filter: 'invert(1)', margin: '5px 0 5px 0' }} />
                                                    <div style={{ padding: '0 10px 0 10px' }}>
                                                        <div style={{ padding: '', fontWeight: 'bold', fontSize: 18 }}>Delivery information</div>
                                                        <div>{orderCheckOut.email}</div>
                                                        <div>{orderCheckOut.username} || {orderCheckOut.phoneNumber}</div>
                                                        <div>{orderCheckOut.address}, {orderCheckOut.commune}, {orderCheckOut.district}, {orderCheckOut.city}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            </div>
                            <hr style={{ borderTop: "2px solid rgb(240 61 118)" }} />
                        </div >
                        <div className="col-md-8 sidebar">
                            <div className="sidebar-content-pay">
                                <div className="order-summary order-summary-is-collapsed">
                                    <div className="order-summary-sections">
                                        <div className="order-summary-section order-summary-section-product-list" data-order-summary-section="line-items">
                                            <table className="product-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"><span className="visually-hidden">Image</span></th>
                                                        <th scope="col"><span className="visually-hidden">Product</span></th>
                                                        <th scope="col"><span className="visually-hidden">Quantity</span></th>
                                                        <th scope="col"><span className="visually-hidden">Price</span></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {state.arrayOrder && state.arrayOrder.map((item, index) => {
                                                        return <tr className="" data-product-id={1044931183} data-variant-id={1099216743} key={index}>
                                                            <td className="">
                                                                <div className="">
                                                                    <div className="">
                                                                        <img className="" alt="Laptop Acer Aspire 3 A315 59 321N" width={75} src={item.img[0]} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="">
                                                                <span className="">{item.nameProduct}</span>
                                                            </td>
                                                            <td className="">{item.quantity}</td>
                                                            <td className="">
                                                                <span className="">{formatter.format(item.nowPrice)} VNĐ</span>
                                                            </td>
                                                        </tr>
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        <hr style={{ borderTop: "2px solid rgb(240 61 118)" }} />
                                        <div className="order-summary-section order-summary-section-total-lines payment-lines" data-order-summary-section="payment-lines">
                                            <table className="total-line-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"><span className="visually-hidden">Mô tả</span></th>
                                                        <th scope="col"><span className="visually-hidden">Giá</span></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="total-line total-line-subtotal">
                                                        <td className="total-line-name">Temporary</td>
                                                        <td className="total-line-price">
                                                            <span className="order-summary-emphasis" data-checkout-subtotal-price-target={1199000000}>
                                                                {formatter.format(totalArrayOrder())} VNĐ
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr className="total-line total-line-shipping">
                                                        <td className="total-line-name">Transport fee</td>
                                                        <td className="total-line-price">
                                                            <span className="order-summary-emphasis" data-checkout-total-shipping-target={0}>
                                                                30,000₫
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="total-line-table-footer">
                                                    <tr className="total-line">
                                                        <td className="total-line-name payment-due-label">
                                                            <span className="payment-due-label-total">Total amount</span>
                                                        </td>
                                                        <td className="total-line-name payment-due">
                                                            <span className="payment-due-price" data-checkout-payment-due-target={1199000000}>
                                                                {formatter.format(totalArrayOrder() + 30000)} VNĐ
                                                            </span>
                                                            <span className="checkout_version" data_checkout_version={4}>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className='button-step'>
                                    <button onClick={prevStep} className="button-step-pre-content">&lt; Previous</button>
                                    <div className='button-complete'>
                                        <button onClick={RequestCheckOut} className="button-complete-content">Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {step === 4 &&
                    <>
                        <div className="col-md-8 main-pay">
                            <div className="main-content">
                                <div className="step">
                                    <div className="step-sections steps-onepage">
                                        <div className="section">
                                            <div className="section-content section-customer-information no-mb">
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            </div>
                            <div className="main-content">
                                <div className="step">
                                    <div className="step-sections steps-onepage">
                                        <div className="section">
                                            <div className="section-content section-customer-information no-mb">
                                                <div className='row' style={{ margin: 0 }}>
                                                    <img src={box} alt='' style={{ width: '30px', height: '30px', filter: 'invert(1)', margin: '5px 0 5px 0' }} />
                                                    <div style={{ padding: '0 10px 0 10px' }}>{console.log(orderSuccessful)}
                                                        <div style={{ padding: '', fontWeight: 'bold', fontSize: 18 }}>ID: {orderSuccessful && orderSuccessful.orderId}</div>
                                                        <div>{orderSuccessful && orderSuccessful.shipping_process[0].date} - {orderSuccessful && orderSuccessful.shipping_process[0].time} : {orderSuccessful && orderSuccessful.shipping_process[0].content}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            </div>
                            <div className="main-content">
                                <div className="step">
                                    <div className="step-sections steps-onepage">
                                        <div className="section">
                                            <div className="section-content section-customer-information no-mb">
                                                <div className='row' style={{ margin: 0 }}>
                                                    <img src={location} alt='' style={{ width: '30px', height: '30px', filter: 'invert(1)', margin: '5px 0 5px 0' }} />
                                                    <div style={{ padding: '0 10px 0 10px' }}>
                                                        <div style={{ padding: '', fontWeight: 'bold', fontSize: 18 }}>Delivery information</div>
                                                        <div>{orderSuccessful && orderSuccessful.email}</div>
                                                        <div>{orderSuccessful && orderSuccessful.username} | {orderSuccessful && orderSuccessful.phoneNumber}</div>
                                                        <div>{orderSuccessful && orderSuccessful.address}, {orderSuccessful && orderSuccessful.commune}, {orderSuccessful && orderSuccessful.district}, {orderSuccessful && orderSuccessful.city}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            </div>
                            <hr style={{ borderTop: "2px solid rgb(240 61 118)" }} />
                        </div >
                        <div className="col-md-8 sidebar">
                            <div className="sidebar-content-pay">
                                <div className="order-summary order-summary-is-collapsed">
                                    <div className="order-summary-sections">
                                        <div className="order-summary-section order-summary-section-product-list" data-order-summary-section="line-items">
                                            <table className="product-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"><span className="visually-hidden">Image</span></th>
                                                        <th scope="col"><span className="visually-hidden">Product</span></th>
                                                        <th scope="col"><span className="visually-hidden">Quantity</span></th>
                                                        <th scope="col"><span className="visually-hidden">Price</span></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orderSuccessful && orderSuccessful.product.map((item, index) => {
                                                        return <tr className="" data-product-id={1044931183} data-variant-id={1099216743} key={index}>
                                                            <td className="">
                                                                <div className="">
                                                                    <div className="">
                                                                        <img className="" alt="Laptop Acer Aspire 3 A315 59 321N" width={75} src={item.img[0]} />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="">
                                                                <span className="">{item.nameProduct}</span>
                                                            </td>
                                                            <td className="">{item.quantity}</td>
                                                            <td className="">
                                                                <span className="">{formatter.format(item.nowPrice)} VNĐ</span>
                                                            </td>
                                                        </tr>
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        <hr style={{ borderTop: "2px solid rgb(240 61 118)" }} />
                                        <div className="order-summary-section order-summary-section-total-lines payment-lines" data-order-summary-section="payment-lines">
                                            <table className="total-line-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"><span className="visually-hidden">Mô tả</span></th>
                                                        <th scope="col"><span className="visually-hidden">Giá</span></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="total-line total-line-subtotal">
                                                        <td className="total-line-name">Temporary</td>
                                                        <td className="total-line-price">
                                                            <span className="order-summary-emphasis" data-checkout-subtotal-price-target={1199000000}>
                                                                {formatter.format(totalArrayOrderSuccessful())} VNĐ
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr className="total-line total-line-shipping">
                                                        <td className="total-line-name">Transport fee</td>
                                                        <td className="total-line-price">
                                                            <span className="order-summary-emphasis" data-checkout-total-shipping-target={0}>
                                                                30,000 VNĐ
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="total-line-table-footer">
                                                    <tr className="total-line">
                                                        <td className="total-line-name payment-due-label">
                                                            <span className="payment-due-label-total">Total amount</span>
                                                        </td>
                                                        <td className="total-line-name payment-due">
                                                            <span className="payment-due-price" data-checkout-payment-due-target={1199000000}>
                                                                {formatter.format(totalArrayOrderSuccessful() + 30000)} VNĐ
                                                            </span>
                                                            <span className="checkout_version" data_checkout_version={4}>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className='button-step'>
                                    <button onClick={() => { navigate('/') }} className="button-step-pre-content">Home</button>
                                    <div className='button-complete'>
                                        <button onClick={handleNavigateOrder} className="button-complete-content">Check order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div >
    );
}

export default memo(Index);
