import React, { useState, useEffect, useContext } from 'react';
import 'assets/scss/Content/Pay-order/Pay-order.scss'
import axios from 'axios';
import { createOrderByCustomer } from 'Apis'
import Swal from 'sweetalert2'
import { useNavigate, NavLink } from 'react-router-dom';
import { StateContext } from 'Context/Context'

const Index = () => {
    const state = useContext(StateContext)
    const navigate = useNavigate()
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
                    localStorage.removeItem("orderArray")
                    setOrderCheckOut({
                        product: [],
                        email: "",
                        username: "",
                        phoneNumber: "",
                        address: "",
                        city: "",
                        district: "",
                        commune: "",
                        discountCode: "",
                    })
                    navigate('/cart')
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
        <div className='content'>
            <div className="row">
                <div className="main-pay">
                    <div className="main-header">
                        <a href="/" className="logo">
                            <h1 className="logo-text">GEARVN.COM</h1>
                        </a>
                        <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t\t\t\ta.logo{display: block;}\n\t\t\t\t\t\t\t\t\t\t\t.logo-cus{ \n\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%; padding: 15px 0; \n\t\t\t\t\t\t\t\t\t\t\t\ttext-align: ; \n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t.logo-cus img{ max-height: 4.2857142857em  }\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t.logo-text{\n\t\t\t\t\t\t\t\t\t\t\t\ttext-align: ; \n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t            @media (max-width: 767px){\n\t\t\t\t\t\t\t\t\t\t\t\t.banner a{ display: block; }\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t" }} />
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/cart">Cart</a>
                            </li>
                            <li className="breadcrumb-item breadcrumb-item-current">
                                Delivery information
                            </li>
                        </ul>
                    </div>
                    <div className="main-content">
                        <div id="checkout_order_information_changed_error_message" className="hidden" style={{ marginBottom: '15px' }}>
                            <p className="field-message field-message-error alert alert-danger"><svg x="0px" y="0px" viewBox="0 0 286.054 286.054" style={{ enableBackground: 'new 0 0 286.054 286.054' }} xmlSpace="preserve"> <g> <path style={{ fill: '#E2574C' }} d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236 c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209 S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972 c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723 c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843 C160.878,195.732,152.878,187.723,143.036,187.723z" /> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                                <span>
                                </span>
                            </p>
                        </div>
                        <div className="step">
                            <div className="step-sections steps-onepage" step={1}>
                                <div className="section">
                                    <div className="section-header">
                                        <h2 className="section-title">Delivery information</h2>
                                    </div>
                                    <div className="section-content section-customer-information no-mb">
                                        <input type="hidden" name="checkout_user[email]" defaultValue="dongduclan277@gmail.com" />
                                        <div className="logged-in-customer-information">
                                            {JSON.parse(localStorage.getItem('user')) ? <>
                                                <div className="logged-in-customer-information-avatar-wrapper">
                                                    <div className="logged-in-customer-information-avatar gravatar" style={{ backgroundImage: 'url(//www.gravatar.com/avatar/e2d3c79e0ca369f29ed6871b7650339f.jpg?s=100&d=blank)', filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="//www.gravatar.com/avatar/e2d3c79e0ca369f29ed6871b7650339f.jpg?s=100&d=blank", sizingMethod="scale")' }} />
                                                </div>
                                                <p className="logged-in-customer-information-paragraph">
                                                    {JSON.parse(localStorage.getItem('user'))[1]} ({JSON.parse(localStorage.getItem('user'))[0]})
                                                    <br />
                                                    <NavLink to="/login">Logout</NavLink>
                                                </p>
                                            </>
                                                :
                                                <p className="section-content-text">
                                                    Do you already have an account?
                                                    <NavLink to="/login">Login</NavLink>
                                                </p>
                                            }


                                        </div>
                                        <div className="fieldset">
                                            <div className="field field-required  ">
                                                <div className="field-input-wrapper">
                                                    <label className="field-label" htmlFor="billing_address_full_name">Full name</label>
                                                    <input onChange={(e) => setOrderCheckOut({ ...orderCheckOut, username: e.target.value })} defaultValue={orderCheckOut.username} c autoCapitalize="off" spellCheck="false" className="field-input" size={30} type="text" id="billing_address_full_name" name="billing_address[full_name]" autoComplete="false" />
                                                </div>
                                            </div>
                                            <div className="field field-required   ">
                                                <div className="field-input-wrapper">
                                                    <label className="field-label" htmlFor="billing_address_phone">Phone number</label>
                                                    <input onChange={(e) => setOrderCheckOut({ ...orderCheckOut, phoneNumber: e.target.value })} defaultValue={orderCheckOut.phoneNumber} autoComplete="false" placeholder="Phone number" autoCapitalize="off" spellCheck="false" className="field-input" size={30} maxLength={15} type="tel" id="billing_address_phone" name="billing_address[phone]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-content">
                                        <div className="fieldset">
                                            <form autoComplete="off" id="form_update_shipping_method" className="field default" acceptCharset="UTF-8" method="post">
                                                <input name="utf8" type="hidden" defaultValue="✓" />
                                                <div className="content-box mt0">
                                                    <div id="form_update_location_customer_shipping" className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary " htmlFor="customer_pick_at_location_false">
                                                        <input name="utf8" type="hidden" defaultValue="✓" />
                                                        <div className="order-checkout__loading--box">
                                                            <div className="order-checkout__loading--circle" />
                                                        </div>
                                                        <div className="field field-required  field-show-floating-label">
                                                            <div className="field-input-wrapper">
                                                                <label className="field-label" htmlFor="billing_address_address1">Address</label>
                                                                <input onChange={(e) => setOrderCheckOut({ ...orderCheckOut, address: e.target.value })} defaultValue={orderCheckOut.address} placeholder="Address" autoCapitalize="off" spellCheck="false" className="field-input" size={30} type="text" id="billing_address_address1" name="billing_address[address1]" />
                                                            </div>
                                                        </div>
                                                        <input name="selected_customer_shipping_country" type="hidden" defaultValue />
                                                        <input name="selected_customer_shipping_province" type="hidden" defaultValue />
                                                        <input name="selected_customer_shipping_district" type="hidden" defaultValue />
                                                        <input name="selected_customer_shipping_ward" type="hidden" defaultValue />
                                                        <div className="field field-show-floating-label field-required field-third ">
                                                            <div className="field-input-wrapper field-input-wrapper-select">
                                                                <label className="field-label" htmlFor="customer_shipping_province">City</label>
                                                                <select onChange={(e) => handleChooseCDC(e, "city")} className="field-input" id="customer_shipping_province" name="customer_shipping_province">
                                                                    <option data-code="null" value="null">
                                                                        Select City </option>
                                                                    {city && city.map((item, index) => {
                                                                        return <option key={index} value={item.Name}>{item.Name}</option>
                                                                    })}

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="field field-show-floating-label field-required field-third ">
                                                            <div className="field-input-wrapper field-input-wrapper-select">
                                                                <label className="field-label" htmlFor="customer_shipping_district">District</label>
                                                                <select onChange={(e) => handleChooseCDC(e, "district")} className="field-input" id="customer_shipping_district" name="customer_shipping_district">
                                                                    <option data-code="null" value="null">Select District</option>
                                                                    {district && district.map((item, index) => {
                                                                        return <option key={index} value={item.Name}>{item.Name}</option>
                                                                    })}
                                                                    {/* {console.log(city)} */}
                                                                    {/* {Number(orderCheckOut.city) - 1*1 > -1 && city[(Number(orderCheckOut.city) - 1*1)].Districts.map((item,index) => {
                                                                        return <option key={index} value={item.Name}>{item.Name}</option>
                                                                    })} */}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="field field-show-floating-label field-required  field-third  ">
                                                            <div className="field-input-wrapper field-input-wrapper-select">
                                                                <label className="field-label" htmlFor="customer_shipping_ward">Commune / Ward</label>
                                                                <select onChange={(e) => handleChooseCDC(e, "commune")} className="field-input" id="customer_shipping_ward" name="customer_shipping_ward">
                                                                    <option data-code="null" value="null">Select Commune / Ward</option>
                                                                    {/* {commune !== undefined ? commune.Wards.map((item, index) => {
                                                                        return <option key={index} value={item.Name}>{item.Name}</option>
                                                                    }) : null} */}
                                                                    {commune && commune.map((item, index) => {
                                                                        return <option key={index} value={item.Name}>{item.Name}</option>
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div id="change_pick_location_or_shipping">
                                        <div id="section-payment-method" className="section">
                                            <div className="order-checkout__loading--box">
                                                <div className="order-checkout__loading--circle" />
                                            </div>
                                            <div className="section-header">
                                                <h2 className="section-title">Payment method</h2>
                                            </div>
                                            <div className="section-content">
                                                <div className="content-box">
                                                    <div className="radio-wrapper content-box-row">
                                                        <label className="radio-label" htmlFor="payment_method_id_54606">
                                                            <div className="radio-input payment-method-checkbox">
                                                                <input type-id={1} id="payment_method_id_54606" className="input-radio" name="payment_method_id" type="radio" defaultValue={54606} defaultChecked />
                                                            </div>
                                                            <div className="radio-content-input">
                                                                <img className="main-img" src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4" />
                                                                <div>
                                                                    <span className="radio-label-primary">Thanh toán khi giao hàng (COD)</span>
                                                                    <span className="quick-tagline hidden" />
                                                                    <span className="quick-tagline  hidden ">Buy Now, Pay Later
                                                                    </span></div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="radio-wrapper content-box-row content-box-row-secondary " htmlFor="payment_method_id_54606">
                                                        <div className="blank-slate">
                                                            The method of customers receiving the goods before making payment. Applicable to all orders nationwide
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                            <div className="step-footer" id="step-footer-checkout">

                                <input name="utf8" type="hidden" defaultValue="✓" />
                                <button onClick={() => RequestCheckOut()} className="step-footer-continue-btn btn">
                                    <span className="btn-content">Complete order</span>
                                    <i className="btn-spinner icon icon-button-spinner" />
                                </button>

                                <a className="step-footer-previous-link" href="/cart">
                                    Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="hrv-coupons-popup">
                        <div className="hrv-title-coupons-popup">
                            <p>Chọn giảm giá <span className="count-coupons" /></p>
                            <div className="hrv-coupons-close-popup">
                                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1663 2.4785L15.5213 0.833496L8.99968 7.35516L2.47801 0.833496L0.833008 2.4785L7.35468 9.00016L0.833008 15.5218L2.47801 17.1668L8.99968 10.6452L15.5213 17.1668L17.1663 15.5218L10.6447 9.00016L17.1663 2.4785Z" fill="#424242" />
                                </svg>
                            </div>
                        </div>
                        <div className="hrv-content-coupons-code">
                            <h3 className="coupon_heading">Discount code của shop</h3>
                            <div className="hrv-discount-code-web">
                            </div>
                            <div className="hrv-discount-code-external">
                            </div>
                        </div>
                    </div> */}
                    <div className="hrv-coupons-popup-site-overlay" />
                    <div className="main-footer footer-powered-by">Powered by Haravan</div>
                </div >
                <div className="sidebar">
                    <div className="sidebar-content-pay">
                        <div className="order-summary order-summary-is-collapsed">
                            <h2 className="visually-hidden">Thông tin đơn hàng</h2>
                            <div className="order-summary-sections">
                                <div className="order-summary-section order-summary-section-product-list" data-order-summary-section="line-items">
                                    <table className="product-table">
                                        <thead>
                                            <tr>
                                                <th scope="col"><span className="visually-hidden">Hình ảnh</span></th>
                                                <th scope="col"><span className="visually-hidden">Mô tả</span></th>
                                                <th scope="col"><span className="visually-hidden">Số lượng</span></th>
                                                <th scope="col"><span className="visually-hidden">Giá</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {state.arrayOrder && state.arrayOrder.map((item, index) => {
                                                return <tr className="product" data-product-id={1044931183} data-variant-id={1099216743} key={index}>
                                                    <td className="product-image">
                                                        <div className="product-thumbnail">
                                                            <div className="product-thumbnail-wrapper">
                                                                <img className="product-thumbnail-image" alt="Laptop Acer Aspire 3 A315 59 321N" src={item.img[0]} />
                                                            </div>
                                                            <span className="product-thumbnail-quantity" aria-hidden="true">{item.quantity}</span>
                                                        </div>
                                                    </td>
                                                    <td className="product-description">
                                                        <span className="product-description-name order-summary-emphasis">{item.nameProduct}</span>
                                                        <span className="product-description-variant order-summary-small-text">
                                                            {item.nameProduct}
                                                        </span>
                                                    </td>
                                                    <td className="product-quantity visually-hidden">{item.quantity}</td>
                                                    <td className="product-price">
                                                        <span className="order-summary-emphasis">{item.nowPrice}₫</span>
                                                    </td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                                <div className="order-summary-section order-summary-section-discount" data-order-summary-section="discount">
                                    <form id="form_discount_add" acceptCharset="UTF-8" >
                                        <input name="utf8" type="hidden" defaultValue="✓" />
                                        <div className="fieldset">
                                            <div className="field  ">
                                                <div className="field-input-btn-wrapper">
                                                    <div className="field-input-wrapper">
                                                        <label className="field-label" htmlFor="discount.code">Discount code</label>
                                                        <input placeholder="Discount code" className="field-input" data-discount-field="true" autoComplete="false" autoCapitalize="off" spellCheck="false" size={30} type="text" id="discount.code" name="discount.code" />
                                                    </div>
                                                    <button type="submit" className="field-input-btn btn btn-default btn-disabled">
                                                        <span className="btn-content">Apply</span>
                                                        <i className="btn-spinner icon icon-button-spinner" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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
                                                        {totalArrayOrder()}₫
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
                                                    <span className="payment-due-currency">VND</span>
                                                    <span className="payment-due-price" data-checkout-payment-due-target={1199000000}>
                                                        {totalArrayOrder()}₫
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
                </div>

            </div>
        </div >
    );
}

export default Index;
