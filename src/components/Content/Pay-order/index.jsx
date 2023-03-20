import React, { useState, useEffect } from 'react';
import 'assets/scss/Content/Pay-order/Pay-order.scss'
import axios from 'axios';
const Index = () => {
    const [arrayOrder, setArrayOrder] = useState(JSON.parse(localStorage.getItem('orderArray')))
    const [city, setCity] = useState([])
    const [district, setDistrict] = useState([])
    const [commune, setCommune] = useState(undefined)
    const [orderCheckOut, setOrderCheckOut] = useState({
        product: arrayOrder,
        fnameAndlname: "",
        phoneNumber:"",
        address: "",
        city: "",
        district: "",
        commune: "",
        discountCode : "",
})
    useEffect(() => {
        
    }, [arrayOrder]);
    useEffect(() => {
        const getCity = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
                setCity(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getCity()
    }, []);
    useEffect(() => {
        const indexCity = city.findIndex(i => i.Name === orderCheckOut.city)
        if (city.length > 0) {
            setDistrict(city[indexCity].Districts)
        }
        if (city.length > 0 && city[indexCity].Districts.length > 0) {
            const indexDistrices = city[indexCity].Districts.findIndex(i => i.Name === orderCheckOut.district)
            setCommune(city[indexCity].Districts[indexDistrices])
        }
    }, [orderCheckOut]);
    const totalArrayOrder = () => {
        let total = 0;
        arrayOrder.map((item, index) => {
            total += item.nowPrice * item.quantity
        })
        return total
    }
    
    const ResquestCheckOut = () => {

        console.log(orderCheckOut)
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
                                <a href="/cart">Giỏ hàng</a>
                            </li>
                            <li className="breadcrumb-item breadcrumb-item-current">
                                Thông tin giao hàng
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
                                        <h2 className="section-title">Thông tin giao hàng</h2>
                                    </div>
                                    <div className="section-content section-customer-information no-mb">
                                        <input type="hidden" name="checkout_user[email]" defaultValue="dongduclan277@gmail.com" />
                                        <div className="logged-in-customer-information">
                                            {/* <div className="logged-in-customer-information-avatar-wrapper">
                                                <div className="logged-in-customer-information-avatar gravatar" style={{ backgroundImage: 'url(//www.gravatar.com/avatar/e2d3c79e0ca369f29ed6871b7650339f.jpg?s=100&d=blank)', filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="//www.gravatar.com/avatar/e2d3c79e0ca369f29ed6871b7650339f.jpg?s=100&d=blank", sizingMethod="scale")' }} />
                                            </div> */}
                                            {/* <p className="logged-in-customer-information-paragraph">
                                                Đồng Đức Lân (dongduclan277@gmail.com)
                                                <br />
                                                <a href="/account/logout?return_url=%2Fcheckouts%2F00957fc80b8544a1894cfbe21c67a4e5%3Fstep%3D1">Đăng xuất</a>
                                            </p> */}
                                            <p className="section-content-text">
                                                Bạn đã có tài khoản?
                                                <a href="/account/login?urlredirect=%2Fcheckouts%2F00957fc80b8544a1894cfbe21c67a4e5%3Fstep%3D1">Đăng nhập</a>
                                            </p>
                                        </div>
                                        <div className="fieldset">
                                            {/* <div className="field field-show-floating-label">
                                                <div className="field-input-wrapper field-input-wrapper-select">
                                                    <label className="field-label" htmlFor="stored_addresses">Thêm địa chỉ mới...</label>
                                                    <select className="field-input" id="stored_addresses">
                                                        <option value={0} data-properties="{}">Địa chỉ đã lưu trữ</option>
                                                        <option value={1078686050} data-properties="{&quot;id&quot;:1078686050,
																				&quot;last_name&quot;:&quot;Đồng Đức&quot;,
																				&quot;first_name&quot;:&quot;Lân&quot;,
																				&quot;phone&quot;:&quot;0379382992&quot;,
																				&quot;address1&quot;:&quot;Số 69 Trần Nguyên Hãn Tp.Bắc Giang&quot;,
																				&quot;zip&quot;:null,
																				&quot;city&quot;:null,
																				&quot;country&quot;:&quot;Vietnam&quot;,
																				&quot;country_id&quot;:&quot;241&quot;,
																				&quot;province&quot;:&quot;Bắc Giang&quot;,
																				&quot;province_id&quot;:&quot;15&quot;,
																				&quot;district&quot;:&quot;Thành phố Bắc Giang&quot;,
																				&quot;district_id&quot;:&quot;215&quot;,
																				&quot;ward&quot;:null,
																				&quot;wardid&quot;:null,
																				&quot;default&quot;:true}" selected>
                                                            0379382992,
                                                            Số 69 Trần Nguyên Hãn Tp.Bắc Giang,
                                                            Thành phố Bắc Giang,
                                                            Bắc Giang,
                                                            Vietnam
                                                        </option>
                                                        <option value={1078704591} data-properties="{&quot;id&quot;:1078704591,
																				&quot;last_name&quot;:&quot;Đồng Đức&quot;,
																				&quot;first_name&quot;:&quot;Lân&quot;,
																				&quot;phone&quot;:&quot;0379382992&quot;,
																				&quot;address1&quot;:&quot;Số 69, Trần Nguyên Hãn, Tp.Bắc Giang&quot;,
																				&quot;zip&quot;:null,
																				&quot;city&quot;:null,
																				&quot;country&quot;:&quot;Vietnam&quot;,
																				&quot;country_id&quot;:&quot;241&quot;,
																				&quot;province&quot;:&quot;Bắc Giang&quot;,
																				&quot;province_id&quot;:&quot;15&quot;,
																				&quot;district&quot;:&quot;Thành phố Bắc Giang&quot;,
																				&quot;district_id&quot;:&quot;215&quot;,
																				&quot;ward&quot;:null,
																				&quot;wardid&quot;:null,
																				&quot;default&quot;:false}">
                                                            0379382992,
                                                            Số 69, Trần Nguyên Hãn, Tp.Bắc Giang,
                                                            Thành phố Bắc Giang,
                                                            Bắc Giang,
                                                            Vietnam
                                                        </option>
                                                        <option value={1078686327} data-properties="{&quot;id&quot;:1078686327,
																				&quot;last_name&quot;:&quot;Đồng Đức&quot;,
																				&quot;first_name&quot;:&quot;Lân&quot;,
																				&quot;phone&quot;:&quot;0924019420&quot;,
																				&quot;address1&quot;:&quot;Số 69, Trần Nguyên Hãn, Tp.Bắc Giang&quot;,
																				&quot;zip&quot;:null,
																				&quot;city&quot;:null,
																				&quot;country&quot;:&quot;Vietnam&quot;,
																				&quot;country_id&quot;:&quot;241&quot;,
																				&quot;province&quot;:&quot;Bắc Giang&quot;,
																				&quot;province_id&quot;:&quot;15&quot;,
																				&quot;district&quot;:null,
																				&quot;district_id&quot;:null,
																				&quot;ward&quot;:null,
																				&quot;wardid&quot;:null,
																				&quot;default&quot;:false}">
                                                            0924019420,
                                                            Số 69, Trần Nguyên Hãn, Tp.Bắc Giang,
                                                            Bắc Giang,
                                                            Vietnam
                                                        </option>
                                                        <option value={1078686322} data-properties="{&quot;id&quot;:1078686322,
																				&quot;last_name&quot;:&quot;Đồng Đức&quot;,
																				&quot;first_name&quot;:&quot;Lân&quot;,
																				&quot;phone&quot;:&quot;0924019420&quot;,
																				&quot;address1&quot;:&quot;Số 69, Trần Nguyên Hãn, Tp.Bắc Giang&quot;,
																				&quot;zip&quot;:null,
																				&quot;city&quot;:null,
																				&quot;country&quot;:&quot;Vietnam&quot;,
																				&quot;country_id&quot;:&quot;241&quot;,
																				&quot;province&quot;:&quot;Đắk Lắk&quot;,
																				&quot;province_id&quot;:&quot;42&quot;,
																				&quot;district&quot;:null,
																				&quot;district_id&quot;:null,
																				&quot;ward&quot;:null,
																				&quot;wardid&quot;:null,
																				&quot;default&quot;:false}">
                                                            0924019420,
                                                            Số 69, Trần Nguyên Hãn, Tp.Bắc Giang,
                                                            Đắk Lắk,
                                                            Vietnam
                                                        </option>
                                                    </select>
                                                </div>
                                            </div> */}
                                            <div className="field field-required  ">
                                                <div className="field-input-wrapper">
                                                    <label className="field-label" htmlFor="billing_address_full_name">Họ và tên</label>
                                                    <input onChange={(e) => setOrderCheckOut({...orderCheckOut, fnameAndlname: e.target.value})} placeholder="Họ và tên" autoCapitalize="off" spellCheck="false" className="field-input" size={30} type="text" id="billing_address_full_name" name="billing_address[full_name]" autoComplete="false" />
                                                </div>
                                            </div>
                                            <div className="field field-required   ">
                                                <div className="field-input-wrapper">
                                                    <label className="field-label" htmlFor="billing_address_phone">Số điện thoại</label>
                                                    <input  onChange={(e) => setOrderCheckOut({...orderCheckOut, phoneNumber: e.target.value})} autoComplete="false" placeholder="Số điện thoại" autoCapitalize="off" spellCheck="false" className="field-input" size={30} maxLength={15} type="tel" id="billing_address_phone" name="billing_address[phone]" />
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
                                                                <label className="field-label" htmlFor="billing_address_address1">Địa chỉ</label>
                                                                <input onChange={(e) => setOrderCheckOut({...orderCheckOut, address: e.target.value})} placeholder="Địa chỉ" autoCapitalize="off" spellCheck="false" className="field-input" size={30} type="text" id="billing_address_address1" name="billing_address[address1]"  />
                                                            </div>
                                                        </div>
                                                        <input name="selected_customer_shipping_country" type="hidden" defaultValue />
                                                        <input name="selected_customer_shipping_province" type="hidden" defaultValue />
                                                        <input name="selected_customer_shipping_district" type="hidden" defaultValue />
                                                        <input name="selected_customer_shipping_ward" type="hidden" defaultValue />
                                                        <div className="field field-show-floating-label field-required field-third ">
                                                            <div className="field-input-wrapper field-input-wrapper-select">
                                                                <label className="field-label" htmlFor="customer_shipping_province"> Tỉnh / thành</label>
                                                                <select  onChange={(e) => setOrderCheckOut({...orderCheckOut, city: e.target.value, district: "",commune: ""})} className="field-input" id="customer_shipping_province" name="customer_shipping_province">
                                                                    <option data-code="null" value="null">
                                                                        Chọn tỉnh / thành </option>
                                                                    {city && city.map((item,index) => {
                                                                        return <option key={index} value={item.Name}>{item.Name}</option>
                                                                    })}
                                                                    
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="field field-show-floating-label field-required field-third ">
                                                            <div className="field-input-wrapper field-input-wrapper-select">
                                                                <label className="field-label" htmlFor="customer_shipping_district">Quận / huyện</label>
                                                                <select onChange={(e) => setOrderCheckOut({...orderCheckOut, district: e.target.value, commune: ""})} className="field-input" id="customer_shipping_district" name="customer_shipping_district">
                                                                    <option data-code="null" value="null">Chọn quận / huyện</option>
                                                                    {district && district.map((item,index)=> {
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
                                                                <label className="field-label" htmlFor="customer_shipping_ward">Phường / xã</label>
                                                                <select onChange={(e) => setOrderCheckOut({...orderCheckOut, commune: e.target.value})} className="field-input" id="customer_shipping_ward" name="customer_shipping_ward">
                                                                    <option data-code="null" value="null" selected>Chọn phường / xã</option>
                                                                    
                                                                    {commune !== undefined ? commune.Wards.map((item, index) => {
                                                                            return <option key={index} value={item.Name}>{item.Name}</option>
                                                                        }) : null}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div id="div_location_country_not_vietnam" className="section-customer-information ">
                                                            <div className="field field-two-thirds">
                                                                <div className="field-input-wrapper">
                                                                    <label className="field-label" htmlFor="billing_address_city">Thành phố</label>
                                                                    <input placeholder="Thành phố" autoCapitalize="off" spellCheck="false" className="field-input" size={30} type="text" id="billing_address_city" name="billing_address[city]" defaultValue />
                                                                </div>
                                                            </div>
                                                            <div className="field field-third">
                                                                <div className="field-input-wrapper">
                                                                    <label className="field-label" htmlFor="billing_address_zip">Mã bưu chính</label>
                                                                    <input placeholder="Mã bưu chính" autoCapitalize="off" spellCheck="false" className="field-input" size={30} type="text" id="billing_address_zip" name="billing_address[zip]" defaultValue />
                                                                </div>
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
                                                <h2 className="section-title">Phương thức thanh toán</h2>
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
                                                            Là phương thức khách hàng nhận hàng mới trả tiền. Áp dụng với tất cả các đơn hàng trên toàn quốc
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
                                    <button onClick={() => ResquestCheckOut()}  className="step-footer-continue-btn btn">
                                        <span className="btn-content">Hoàn tất đơn hàng</span>
                                        <i className="btn-spinner icon icon-button-spinner" />
                                    </button>
                                
                                <a className="step-footer-previous-link" href="/cart">
                                    Giỏ hàng
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hrv-coupons-popup">
                        <div className="hrv-title-coupons-popup">
                            <p>Chọn giảm giá <span className="count-coupons" /></p>
                            <div className="hrv-coupons-close-popup">
                                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1663 2.4785L15.5213 0.833496L8.99968 7.35516L2.47801 0.833496L0.833008 2.4785L7.35468 9.00016L0.833008 15.5218L2.47801 17.1668L8.99968 10.6452L15.5213 17.1668L17.1663 15.5218L10.6447 9.00016L17.1663 2.4785Z" fill="#424242" />
                                </svg>
                            </div>
                        </div>
                        <div className="hrv-content-coupons-code">
                            <h3 className="coupon_heading">Mã giảm giá của shop</h3>
                            <div className="hrv-discount-code-web">
                            </div>
                            <div className="hrv-discount-code-external">
                            </div>
                        </div>
                    </div>
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
                                            {arrayOrder.map((item,index) => {
                                                return <tr className="product" data-product-id={1044931183} data-variant-id={1099216743} key={index}>
                                                <td className="product-image">
                                                    <div className="product-thumbnail">
                                                        <div className="product-thumbnail-wrapper">
                                                            <img className="product-thumbnail-image" alt="Laptop Acer Aspire 3 A315 59 321N" src="//product.hstatic.net/1000026716/product/gearvn-laptop-acer-aspire-3-a315-59-321n-1_3e1558ea185e42768e0c0367368c2136_small.png" />
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
                                                        <label className="field-label" htmlFor="discount.code">Mã giảm giá</label>
                                                        <input placeholder="Mã giảm giá" className="field-input" data-discount-field="true" autoComplete="false" autoCapitalize="off" spellCheck="false" size={30} type="text" id="discount.code" name="discount.code" />
                                                    </div>
                                                    <button type="submit" className="field-input-btn btn btn-default btn-disabled">
                                                        <span className="btn-content">Sử dụng</span>
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
                                                <td className="total-line-name">Tạm tính</td>
                                                <td className="total-line-price">
                                                    <span className="order-summary-emphasis" data-checkout-subtotal-price-target={1199000000}>
                                                        {totalArrayOrder()}₫
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr className="total-line total-line-shipping">
                                                <td className="total-line-name">Phí vận chuyển</td>
                                                <td className="total-line-price">
                                                    <span className="order-summary-emphasis" data-checkout-total-shipping-target={0}>
                                                        —
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot className="total-line-table-footer">
                                            <tr className="total-line">
                                                <td className="total-line-name payment-due-label">
                                                    <span className="payment-due-label-total">Tổng cộng</span>
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
