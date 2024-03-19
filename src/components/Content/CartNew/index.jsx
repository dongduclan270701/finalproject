import React, { useState, useEffect, useContext, memo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { StateContext } from 'Context/Context'
import { updateCart } from 'Apis'
import 'assets/scss/Content/Cart/cart.css'
const Index = () => {
    const state = useContext(StateContext)
    const navigate = useNavigate()
    const formatter = new Intl.NumberFormat('en-US')
    const [arrayOrder, setArrayOrder] = useState()
    useEffect(() => {
        document.title = 'Cart'
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
            if (obj === arrayOrder[index]) {
                return { ...obj, quantity: Number(value) }
            }
            return obj;
        });
        updateCart(JSON.parse(localStorage.getItem('user'))[0], newState)
            .then(result => {
                setArrayOrder(newState)
                state.handleUpdateArrayOrder(newState)
            })
            .catch(error => {
                Swal.fire({
                    title: "Ops!",
                    text: "Error connect to server!",
                    icon: 'error',
                    confirmButtonText: 'OK!'
                })
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
                                Swal.fire({
                                    title: "Ops!",
                                    text: "Error connect to server!",
                                    icon: 'error',
                                    confirmButtonText: 'OK!'
                                })
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
            const hasProductWithZeroQuantity = arrayOrder.some(product => product.quantity === 0);
            if(hasProductWithZeroQuantity){
                Swal.fire({
                    title: "Can't get to the checkout page!",
                    text: 'There are products in the cart that do not have quantities, please check!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            }else{
                navigate("/pay-order")
            }
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
        <div className="container1">
            <div id="wrap-cart" className="container1">
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
                                                        <img src={item.img[0]} width={100} alt="" />
                                                    </NavLink>
                                                </div>
                                            </td>
                                            <td className="item play-bold">
                                                <NavLink to={"/products/" + item.src}>
                                                    <strong>{item.nameProduct}</strong>
                                                </NavLink>
                                            </td>
                                            <td className="qty">
                                                <form>
                                                    <div className="input-field" style={{marginTop:0}}>
                                                        <input name='quantity' type="number"
                                                            onChange={e => updateOrderCart(index, e.target.value)} size={4} min={1} value={item.quantity}
                                                            required />
                                                        <label>Quantity</label>
                                                    </div>
                                                </form>
                                            </td>
                                            <td className="price play-bold">{formatter.format(item.nowPrice)} VNĐ</td>
                                            <td className="remove">
                                                <span className="cart" onClick={() => deleteProductInCart(index)}><i className="fa fa-trash" style={{color:'red', fontSize:20}} /></span>
                                            </td>
                                        </tr>
                                    })}
                                    <tr className="summary play-bold">
                                        <td colSpan={4} style={{ fontWeight: 'bold', fontSize: '20px' }}>Total amount:</td>
                                        <td className="price">
                                            <span className="total play-bold">
                                                <strong>{formatter.format(totalArrayOrder())} VNĐ</strong>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="col-md-12 cart-buttons">
                                <div className="buttons">
                                    <button onClick={handlePaymentMethod} id="checkout" name="checkout">Payment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Index);
