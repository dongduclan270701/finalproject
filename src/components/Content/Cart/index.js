import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { StateContext } from 'Context/Context'
import { updateCart } from 'Apis'

const Index = () => {
    const state = useContext(StateContext)
    const navigate = useNavigate()
    const [arrayOrder, setArrayOrder] = useState()
    useEffect(() => {
        setArrayOrder(state.arrayOrder)
    }, [state.arrayOrder])
    const totalArrayOrder = () => {
        let total = 0;
        arrayOrder && arrayOrder.map((item, index) => {
            return total += item.nowPrice * item.quantity
        })
        return total
    }
    const updateOrderCart = (index, value) => {
        const newState = arrayOrder.map(obj => {
            // 👇️ if id equals 2, update country property
            if (obj === arrayOrder[index]) {
                return { ...obj, quantity: Number(value) }
            }
            // 👇️ otherwise return the object as is
            return obj;
        });
        // localStorage.setItem("orderArray", JSON.stringify(newState))
        updateCart(JSON.parse(localStorage.getItem('user'))[0], newState)
            .then(result => {
                setArrayOrder(newState)
                state.handleUpdateArrayOrder(newState)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const deleteProductInCart = (index) => {
        Swal.fire({
            title: 'Delete product?',
            text: 'Do you want to remove the product from the shopping cart?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        })
            .then(result => {
                if (result.isConfirmed) {
                    const indexArray = arrayOrder.indexOf(arrayOrder[index]);
                    if (indexArray > -1) {
                        const newArrayOrder = [...arrayOrder]
                        newArrayOrder.splice(indexArray, 1);
                        updateCart(JSON.parse(localStorage.getItem('user'))[0], newArrayOrder)
                            .then(result => {
                                setArrayOrder(newArrayOrder)
                                state.handleUpdateArrayOrder(newArrayOrder)
                                Swal.fire({
                                    title: 'Successfully deleted the product!',
                                    text: 'The product has been removed from the cart!',
                                    icon: 'success',
                                    confirmButtonText: 'OK!'
                                })
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
                }
            })
            .catch(err => {
                return err
            })

    }
    const handlePaymentMethod = () => {
        if (arrayOrder.length > 0) {
            navigate("/pay-order")
        }
        else {
            Swal.fire({
                title: "Can't get to the checkout page!",
                text: 'You have no products in your shopping cart!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
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
                                    <h1 className="title-card">Cart</h1>
                                </div>
                                <div id="cartFormPage">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <th className="image">Image</th>
                                                <th className="item">Product Name</th>
                                                <th className="qty">Quantity</th>
                                                <th className="price">Price</th>
                                                <th className="remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {arrayOrder && arrayOrder.map((item, index) => {
                                                return <tr key={index}>
                                                    <td className="image">
                                                        <div className="product_image">
                                                            <NavLink to={"/products/" + item.src}>
                                                                <img src={item.img[0]} width={150} alt="" />
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
                                                        <p className="cart" onClick={() => deleteProductInCart(index)}><i className="fa fa-trash" /></p>
                                                    </td>
                                                </tr>
                                            })}

                                            <tr className="summary">
                                                <td colSpan={4} style={{ fontWeight: 'bold', fontSize: '20px' }}>Total amount:</td>
                                                <td className="price">
                                                    <span className="total">
                                                        <strong>{totalArrayOrder()}₫</strong>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="invoice-block">
                                        <div className="bill-info">
                                            <div className="r-bill">
                                                <div className="checkbox">
                                                    <input type="hidden" name="attributes[invoice]" id="re-checkbox-bill" defaultValue="no" />
                                                    <input type="checkbox" id="checkbox-bill" defaultValue="yes" name="regular-checkbox" className="regular-checkbox" />
                                                    <label htmlFor="checkbox-bill" className="box">
                                                        <span><svg width="12px" height="9px" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1" /></svg></span>
                                                    </label>
                                                    <label htmlFor="checkbox-bill" className="title">Generate an invoice for the order</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 inner-left inner-right">
                                        <div className="checkout-buttons clearfix" />
                                    </div>
                                    <div className="col-md-6 cart-buttons inner-right inner-left">
                                        <div className="buttons">
                                            <button onClick={handlePaymentMethod} id="checkout" name="checkout" value>Payment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
