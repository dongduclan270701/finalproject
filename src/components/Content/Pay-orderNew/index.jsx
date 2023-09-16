import React, { useState, useEffect, useContext } from 'react';
import 'assets/scss/Content/Pay-order/Pay-order.scss'
import axios from 'axios';
import { createOrderByCustomer, updateCart } from 'Apis'
import Swal from 'sweetalert2'
import { useNavigate, NavLink } from 'react-router-dom';
import { StateContext } from 'Context/Context'
// import 'assets/scss/Content/Pay-order/pay-order.css'
const Index = () => {
    const state = useContext(StateContext)
    const navigate = useNavigate()
    const formatter = new Intl.NumberFormat('en-US')
    // const [arrayOrder, setArrayOrder] = useState(JSON.parse(localStorage.getItem('orderArray')))
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
        method_payment: "Thanh toán khi nhận hàng",
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
    useEffect(() => {
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
    }, []);
    const totalArrayOrder = () => {
        let total = 0;
        state.arrayOrder && state.arrayOrder.map((item, index) => {
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
        const minutes = date.getMinutes();
        const hours = date.getHours();
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
            const newData = {
                ...orderCheckOut,
                shipping_process: [{ time: time, date: today, content: 'Ordered' }],
                sumOrder: totalArrayOrder(),
            }
            createOrderByCustomer(newData)
                .then(result => {
                    Swal.fire({
                        title: 'Order placed successfully!',
                        text: 'The order has been placed successfully.!',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                        .then(result => {
                            if (result.isConfirmed) {
                                navigate("/cart")
                            }
                        })
                        .catch(err => {
                            return err
                        })
                    updateCart(JSON.parse(localStorage.getItem('user'))[0], [])
                        .then(result => {
                            state.handleUpdateArrayOrder([])
                        })
                        .catch(error => {
                            console.log(error)
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
    return (
        <div className='container'>
            <div className="row pay-content">
                <div className="col-md-6 sidebar">
                    <div className="sidebar-content-pay">
                        <div className="order-summary order-summary-is-collapsed">
                            <h2 className="visually-hidden">Order information</h2>
                            <hr style={{ borderTop: "2px solid rgb(237, 110, 37)" }} />
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
                                <hr style={{ borderTop: "2px solid rgb(237, 110, 37)" }} />
                                <div className="order-summary-section order-summary-section-discount" data-order-summary-section="discount">
                                    <form id="form_discount_add" acceptCharset="UTF-8" >
                                        <input name="utf8" type="hidden" value="✓" />
                                        <div className="fieldset">
                                            <div className="field  ">
                                                <div className="row discount">
                                                    <div className="col-10 input-field discount-input">
                                                        <input name='fullName' type="text" required />
                                                        <label>Discount Code</label>
                                                    </div>
                                                    <button type="col-2 submit" className="col-2">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <hr style={{ borderTop: "2px solid rgb(237, 110, 37)" }} />
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
                    </div>
                    <hr style={{ borderTop: "2px solid rgb(237, 110, 37)" }} />
                </div>

                <div className="col-md-6 main-pay">
                    <div className="main-header">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <NavLink to={"/cart"}>Cart</NavLink>
                            </li>
                            <li className="breadcrumb-item breadcrumb-item-current">
                                Delivery information
                            </li>
                        </ul>
                    </div>
                    <hr style={{ borderTop: "2px solid rgb(237, 110, 37)" }} />
                    <div className="main-content">
                        <div className="step">
                            <div className="step-sections steps-onepage">
                                <div className="section">
                                    <div className="section-content section-customer-information no-mb">
                                        <input type="hidden" name="checkout_user[email]" value="dongduclan277@gmail.com" />
                                        <div className="row customer-information">
                                            <div className="avatar-wrapper">
                                                <img src={JSON.parse(localStorage.getItem('user'))[4]} alt='' />
                                            </div>
                                            <p className="paragraph">
                                                {JSON.parse(localStorage.getItem('user'))[1]} ({JSON.parse(localStorage.getItem('user'))[0]})
                                                <br />
                                            </p>
                                        </div>
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
                                                    <label>City</label>
                                                    <select onChange={(e) => handleChooseCDC(e, "city")} className="field-input" id="customer_shipping_province" name="customer_shipping_province">
                                                        <option data-code="null" value="null">
                                                            Select City </option>
                                                        {city && city.map((item, index) => {
                                                            return <option key={index} value={item.Name}>{item.Name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className='col-4'>
                                                    <label >District</label>
                                                    <select onChange={(e) => handleChooseCDC(e, "district")} className="field-input" id="customer_shipping_district" name="customer_shipping_district">
                                                        <option data-code="null" value="null">Select District</option>
                                                        {district && district.map((item, index) => {
                                                            return <option key={index} value={item.Name}>{item.Name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className='col-4'>
                                                    <label htmlFor="customer_shipping_ward">Ward</label>
                                                    <select onChange={(e) => handleChooseCDC(e, "commune")} className="field-input" id="customer_shipping_ward" name="customer_shipping_ward">
                                                        <option data-code="null" value="null">Select Ward</option>
                                                        {commune && commune.map((item, index) => {
                                                            return <option key={index} value={item.Name}>{item.Name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='button-complete'>
                                        <button onClick={() => RequestCheckOut()} className="button-complete-content">
                                            Complete order
                                        </button>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div >
            </div>
        </div >
    );
}

export default Index;
