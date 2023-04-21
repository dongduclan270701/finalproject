import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Index = () => {
    const navigate = useNavigate();
    const [arrayOrder, setArrayOrder] = useState(JSON.parse(localStorage.getItem('orderArray')))
    useEffect(() => {

    }, [arrayOrder]);
    const totalArrayOrder = () => {
        let total = 0;
        arrayOrder.map((item, index) => {
            total += item.nowPrice * item.quantity
        })
        return total
    }
    const updateOrderCart = (index, value) => {
        console.log(index, value)
        const newState = arrayOrder.map(obj => {
            // 👇️ if id equals 2, update country property
            if (obj === arrayOrder[index]) {
                return { ...obj, quantity: value }
            }
            // 👇️ otherwise return the object as is
            return obj;
        });
        localStorage.setItem("orderArray", JSON.stringify(newState))
        setArrayOrder(newState)
    }
    const deleteProductInCart = (index) => {
        Swal.fire({
            title: 'Xoá sản phẩm?',
            text: 'Bạn có muốn xoá sản phẩm khỏi giỏ hàng không?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Không',
        })
            .then(result => {
                if (result.isConfirmed) {
                    const indexArray = arrayOrder.indexOf(arrayOrder[index]);
                    if (indexArray > -1) {
                        arrayOrder.splice(indexArray, 1);
                    }
                    localStorage.setItem("orderArray", JSON.stringify(arrayOrder))
                    setArrayOrder(arrayOrder)
                    Swal.fire({
                        title: 'Thêm vào giỏ hàng!',
                        text: 'Bạn đã thêm sản phẩm vào giỏ hàng thành công!',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                        .then(result =>{
                            navigate("/cart")
                        })
                        .catch(err =>{
                            return err
                        })
                }
            })
            .catch(err => {
                return err
            })

    }
    return (
        <div className="noindex">
            <div id="mainframe">
                <div className="container1">
                    <div id="wrap-cart" className="container1">
                        {/* Begin empty cart */}
                        <div className="row">
                            <div id="layout-page-card" className="container1">
                                <div className="header-page">
                                    <h1 className="title-card">Giỏ hàng</h1>
                                </div>
                                <form action="/cart" method="post" id="cartformpage">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <th className="image">Sản phẩm</th>
                                                <th className="item">Tên sản phẩm</th>
                                                <th className="qty">Số lượng</th>
                                                <th className="price">Giá tiền</th>
                                                <th className="remove">Xoá</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {arrayOrder.map((item, index) => {
                                                return <tr key={index}>
                                                    <td className="image">
                                                        <div className="product_image">
                                                            <NavLink to={"/products/" + item.src}>
                                                                <img src={item.img[0]} width={150} />
                                                            </NavLink>
                                                        </div>
                                                    </td>
                                                    <td className="item">
                                                        <NavLink to={"/products/" + item.src}>
                                                            <strong>{item.nameProduct}</strong>
                                                        </NavLink>
                                                    </td>
                                                    <td className="qty">
                                                        <input type="number" onChange={e => updateOrderCart(index, e.target.value)} size={4} name="updates[]" min={1} id="updates_1099216743" defaultValue={item.quantity} onfocus="this.select();" className="tc item-quantity" />
                                                    </td>
                                                    <td className="price">{item.nowPrice}₫</td>
                                                    <td className="remove">
                                                        <a className="cart" onClick={() => deleteProductInCart(index)}><i className="fa fa-trash" /></a>
                                                    </td>
                                                </tr>
                                            })}

                                            <tr className="summary">
                                                <td colSpan={4} style={{ fontWeight: 'bold', fontSize: '20px' }}>Tổng tiền:</td>
                                                <td className="price">
                                                    <span className="total">
                                                        <strong>{totalArrayOrder()}₫</strong>
                                                    </span>
                                                </td>
                                            </tr>
                                            {/* Ghi chú */}
                                            <tr className="summary">
                                                <td colSpan={5} style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                                    <div className="cartnote" />
                                                    <textarea id="note" name="note" rows={8} cols={50} placeholder="Ghi chú" style={{ margin: '0px', height: '70px', borderColor: '#6498cd', borderWidth: '1px', width: '92%' }} defaultValue={""} />
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <div className="invoice-block hidden">
                                        <div className="hoadon-info">
                                            <div className="r-bill">
                                                <div className="checkbox">
                                                    <input type="hidden" name="attributes[invoice]" id="re-checkbox-bill" defaultValue="no" />
                                                    <input type="checkbox" id="checkbox-bill" defaultValue="yes" name="regular-checkbox" className="regular-checkbox" />
                                                    <label htmlFor="checkbox-bill" className="box">
                                                        <span><svg width="12px" height="9px" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1" /></svg></span>
                                                    </label>
                                                    <label htmlFor="checkbox-bill" className="title">Xuất hoá đơn cho đơn hàng</label>
                                                </div>
                                                <div className="bill-field">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control val-f check_change" name="attributes[bill_order_company]" defaultValue placeholder="Tên công ty..." />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="number" pattern=".{10,}" onkeydown="return FilterInput(event)" onpaste="handlePaste(event)" className="form-control val-f val-n check_change" name="attributes[bill_order_tax_code]" defaultValue placeholder="Mã số thuế..." />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control val-f check_change" name="attributes[bill_email]" defaultValue placeholder="Email..." />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control val-f check_change" name="attributes[bill_order_address]" defaultValue placeholder="Địa chỉ công ty..." />
                                                    </div>
                                                    <div className="form-btn">
                                                        <a href="javascript:void();" className="button btn-save">Lưu thông tin</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 inner-left inner-right">
                                        <div className="checkout-buttons clearfix" />
                                    </div>
                                    <div className="col-md-6 cart-buttons inner-right inner-left">
                                        <div className="buttons">
                                            <button type="submit" id="checkout" className="button-default" name="checkout" value>Thanh toán</button>
                                            <button type="submit" id="update-cart" className="button-default" name="update" value>Cập nhật</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
