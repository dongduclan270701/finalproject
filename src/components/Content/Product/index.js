import React, { useState, useEffect, useContext } from 'react';
import ProductParameters from './Product-parameters'
import ProductThumbnail from './Product-thumbnail'
import TabPanelCharacter from './TabPanel-character'
import TabPanelDetails from './TabPanel-details'
import TabPanelHrvProductTabs from './TabPanel-HrvProductTabs'
import { useParams, useNavigate } from 'react-router-dom';
import { fetchLaptopCollectingByName } from 'Apis'
import Swal from 'sweetalert2'
import { StateContext } from 'Context/Context'
const Index = () => {
    const state = useContext(StateContext)
    const params = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState()
    useEffect(() => {
        fetchLaptopCollectingByName(params.src)
            .then(result => {
                setProduct(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    const checkArrayOrder = (product) => {
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
                title: 'Sản phẩm đã trong giỏ hàng!',
                text: 'Bạn đã có sản phẩm này trong giỏ hàng rồi bạn ơi!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        } else {
            array.push({ ...product, quantity });
            state.handleUpdateArrayOrder(array)
            // localStorage.setItem("orderArray", JSON.stringify(array));
            // alert product add to cart successfully
            Swal.fire({
                title: 'Thêm vào giỏ hàng!',
                text: 'Bạn đã thêm sản phẩm vào giỏ hàng thành công!',
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
        }

    }

    return (
        <div className="noindex">
            <div id="breadcrumb">
                <div className="main">
                    <div className="breadcrumbs container1">
                        <span className="showHere">Bạn đang ở: </span><a href="/" className="pathway">Trang chủ</a> <i className="fa fa-caret-right" />
                        <span><a href="/collections/laptop-asus-hoc-tap-va-lam-viec">Laptop Asus</a> <i className="fa fa-caret-right" /> Laptop Asus Vivobook 15 X515EA BR2045W</span>
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
                                {product ? <ProductThumbnail product={product} /> : null }
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
                                                <li role="presentation" className="active"><a href="#chitiet" aria-controls="chitiet" role="tab" data-toggle="tab">Mô tả sản phẩm</a></li>
                                                <li role="presentation"><a href="#dacdiem" aria-controls="dacdiem" role="tab" data-toggle="tab">Đặc điểm nổi bật</a></li>
                                                <li role="presentation"><a href="#hrvproducttabs" aria-controls="dacdiem" role="tab" data-toggle="tab">Thông tin bảo hành</a></li>
                                            </ul>
                                            {/* Tab panes */}
                                        </strong>
                                        <div className="tab-content">
                                            <strong>

                                            </strong>
                                            {product ? <TabPanelCharacter product={product} /> : null}
                                            {product ? <TabPanelDetails product={product} /> : null}
                                            {product ? <TabPanelHrvProductTabs product={product} /> : null}

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
