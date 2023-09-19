import React, { useState, useEffect, useContext } from 'react';
import ProductParameters from './Product-parameters'
import ProductThumbnail from './Product-thumbnail'
import TabPanelCharacter from './TabPanel-character'
import TabPanelDetails from './TabPanel-reviews'
import TabPanelExchange from './TabPanel-Exchange'
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { fetchGoodsByName, updateCart } from 'Apis'
import Swal from 'sweetalert2'
import { StateContext } from 'Context/Context'
const Index = () => {
    const state = useContext(StateContext)
    const params = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState()
    const [activeTable, setActiveTable] = useState(1)
    useEffect(() => {
        fetchGoodsByName(params.src)
            .then(result => {
                setProduct(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    const checkArrayOrder = (product) => {
        if(JSON.parse(localStorage.getItem('user'))) {
            const quantity = 1
            if (state.arrayOrder.length !== 0) {
                array = state.arrayOrder
            } else {
                var array = [];
            }
            function isSame(productCompare) {
                return productCompare.src === product.src;
            }
            const result = array.findIndex(isSame);
            if (result !== -1) {
                Swal.fire({
                    title: 'The product is already in the cart!',
                    text: 'You already have this product in your cart!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            } else {
                array.push({ ...product, quantity });
                updateCart(JSON.parse(localStorage.getItem('user'))[0], array)
                    .then(result => {
                        state.handleUpdateArrayOrder(array)
                        Swal.fire({
                            title: 'Add to cart!',
                            text: 'You have successfully added the product to your cart!',
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
                    })
                    .catch(error => {
                        console.log(error)
                    })
    
            }
        }
        else {
            Swal.fire({
                title: 'You need to login!',
                text: 'Please log in to your account to be able to add products to your cart',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }

    }

    return (
        <div className="noindex">
            <div id="breadcrumb">
                <div className="main">
                    <div className="breadcrumbs container1">
                        <span className="showHere">You are in: </span><NavLink to="/" className="pathway">Homepage</NavLink> <i className="fa fa-caret-right" />
                        <span> {product && product.nameProduct} </span>
                    </div>
                </div>
            </div>
            <div id="mainframe">
                <div className="container1">
                    <div id="maincontent">
                        <div id="system-message-container1">
                            <div id="system-message" />
                        </div>
                        <div className="page_content">
                            <div className="row">
                                {product ? <ProductThumbnail product={product} /> : null}
                                {product ? <ProductParameters product={product} checkArrayOrder={checkArrayOrder} /> : null}
                                <strong>
                                </strong>
                            </div>
                            <strong>
                                <br className="clr" />
                            </strong>
                            <div id="product_content_detail" className="row">
                                <strong>
                                </strong>
                                <div id="product_left" className="col-md-12 col-xs-12">
                                    <strong>
                                    </strong>
                                    <div role="tabpanel">
                                        <strong>
                                            {/* Nav tabs */}
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li role="presentation" onClick={() => setActiveTable(1)} className={activeTable === 1 ? "active" : null}><a href="#chitiet" aria-controls="chitiet" role="tab" data-toggle="tab">Product Description</a></li>
                                                <li role="presentation" onClick={() => setActiveTable(2)} className={activeTable === 2 ? "active" : null}><a href="#tabReviews" aria-controls="tabReviews" role="tab" data-toggle="tab">Product Reviews</a></li>
                                                <li role="presentation" onClick={() => setActiveTable(3)} className={activeTable === 3 ? "active" : null}><a href="#tabExchange" aria-controls="tabExchange" role="tab" data-toggle="tab">Exchange between buyer and shop</a></li>
                                            </ul>
                                            {/* Tab panes */}
                                        </strong>
                                        <div className="tab-content">
                                            <strong>

                                            </strong>
                                            {product ? <TabPanelCharacter product={product} /> : null}
                                            {product ? <TabPanelDetails product={product} /> : null}
                                            {product ? <TabPanelExchange product={product} /> : null}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="scrollup" href="#">Scroll</a>
        </div>
    );
}

export default Index;
