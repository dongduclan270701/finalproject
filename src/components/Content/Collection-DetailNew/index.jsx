import React, { useState, useEffect } from 'react';
import { fetchProductCollection } from 'Apis'
import { NavLink, useLocation } from 'react-router-dom';
import goods2 from 'assets/images/gigabyte.webp';
import 'assets/scss/Content/Goods/goods.css'
const Index = () => {
    const location = useLocation();
    const objParams = location.state;
    const formatter = new Intl.NumberFormat('en-US')
    const [Laptop, setLaptop] = useState(
    )
    useEffect(() => {
        fetchProductCollection({ category: objParams.category, collection: objParams.collection }, 1)
            .then(result => {
                setLaptop(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [objParams])

    return (
        <div className="container">
            <div className=" banner-collection-header">
                <NavLink to="" >
                    <img src="https://file.hstatic.net/1000026716/collection/vvb_gearvn1920x450_61fba033031f4d6d97272973a3154f39.jpg" alt="Laptop Asus Vivobook Series" style={{ height: '300px', width: '100%', objectFit: 'contain' }} />
                </NavLink>
            </div>
            <div className="col-sm-12 list-goods">
                <h1 className="title-box-collection">
                    {objParams.collection.toUpperCase() + " " + objParams.category.toUpperCase()}
                </h1>
                <div className="main-content-goods">
                    <div className='row' style={{ display: "flex" }}>
                        <div className='col-md-6' id="breadcrumb">
                            <div className="main">
                                <div className="breadcrumbs container1">
                                    <span className="showHere">You are in: </span><NavLink to="/" className="pathway" style={{ color: "rgb(245 53 74)" }}>Homepage</NavLink>
                                    <span> <i className="fa fa-caret-right" /> {objParams.collection.toUpperCase() + " " + objParams.category.toUpperCase()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm-12 wrap-sort-by">
                                    <div className="browse-tags pull-right">
                                        <span className="custom-dropdown custom-dropdown--white">
                                            <form>
                                                <div className='row select-field'>
                                                    <div className='col-12'>
                                                        <label>Sort By</label>
                                                        <select className="field-input" id="customer_shipping_province" name="customer_shipping_province">
                                                            <option data-code="null" value="null">
                                                                Select Sort </option>
                                                            {/* {city && city.map((item, index) => {
                                                                return <option key={index} value={item.Name}>{item.Name}</option>
                                                            })} */}
                                                            <option value="manual">Featured products</option>
                                                            <option value="price-ascending">Price: ascending</option>
                                                            <option value="price-descending">Price: descending</option>
                                                            <option value="title-ascending">Name: A-Z</option>
                                                            <option value="title-descending">Name: Z-A</option>
                                                            <option value="created-ascending">Oldest</option>
                                                            <option value="created-descending">Newest</option>
                                                            <option value="best-selling">Best-selling</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 product-list">
                            <div className='row d-flex goods'>
                                {
                                    Laptop ? Laptop.slice(0,8).map((item, index) => {
                                        return <div className='col-md-3 mt-4 mb-4 goods-single'>
                                            <div className='goods-card'>
                                                <div className='goods-single-content'>
                                                    <img src={goods2} alt='' />
                                                    <h1 style={{ fontSize: 13 }}>{item.nameProduct}</h1>
                                                    <h1 style={{ fontSize: 13 }}>{formatter.format(item.nowPrice)} VNĐ</h1>
                                                    <NavLink to={"/products/" + item.src}><button type='button' style={{ color: "white" }}>Show</button></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                        : <div class="lds-hourglass"></div>
                                }
                            </div>
                            <div className='button-show'>
                                <button type='button'>Show More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
