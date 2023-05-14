import React, { useState, useEffect } from 'react';
import { fetchProductCollection } from 'Apis'
import { NavLink, useLocation } from 'react-router-dom';
import ProductDescription from './Product-Description'

const Index = () => {
    const location = useLocation();
    const objParams = location.state;
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
        <div className="noindex">
            <section className="light_section">
                <div id="collection" className="container1">
                    <div className=" banner-collection-header">
                        <NavLink to="" >
                            <img src="https://file.hstatic.net/1000026716/collection/vvb_gearvn1920x450_61fba033031f4d6d97272973a3154f39.jpg" alt="Laptop Asus Vivobook Series" style={{ height: '300px', width: '100%', objectFit: 'contain' }} />
                        </NavLink>
                    </div>
                    <div className="col-sm-12">
                        <h1 className="title-box-collection">
                            {objParams.collection.toUpperCase() + " " + objParams.category.toUpperCase()}
                        </h1>
                        <div className="row">
                            <div className="main-content">
                                <div id="breadcrumb">
                                    <div className="main">
                                        <div className="breadcrumbs container1">
                                            <span className="showHere">You are in: </span><NavLink to="/" className="pathway">Homepage</NavLink>
                                            <span> <i className="fa fa-caret-right" /> {objParams.collection.toUpperCase() + " " + objParams.category.toUpperCase()}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-sm-12 wrap-sort-by">
                                            <div className="browse-tags pull-right">
                                                <span>Soft by:</span>
                                                <span className="custom-dropdown custom-dropdown--white">
                                                    <select className="sort-by custom-dropdown__select custom-dropdown__select--white">
                                                        <option value="manual">Featured products</option>
                                                        <option value="price-ascending">Price: ascending</option>
                                                        <option value="price-descending">Price: descending</option>
                                                        <option value="title-ascending">Name: A-Z</option>
                                                        <option value="title-descending">Name: Z-A</option>
                                                        <option value="created-ascending">Oldest</option>
                                                        <option value="created-descending">Newest</option>
                                                        <option value="best-selling">Best-selling</option>
                                                    </select>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 product-list">
                                    <div className="row content-product-list">
                                        {
                                            Laptop ? Laptop.map((item, index) => {
                                                return <div className="col-sm-3 col-xs-12 padding-none col-fix20" key={index}>
                                                    <div className="product-row">
                                                        {/* <a href={"/products/" + item.src}>
                                                        </a> */}
                                                        <div className="product-row-img">
                                                            <NavLink to={"/products/" + item.src}>
                                                                <img className="product-row-thumbnail" src={item.img[0]} alt={item.nameProduct} />
                                                            </NavLink>
                                                            <div className="product-row-price-hover">
                                                                <NavLink to={"/products/" + item.src}>
                                                                    <div className="product-row-note pull-left">Click to see details</div>
                                                                </NavLink>
                                                                <NavLink to={"/products/" + item.src} className="product-row-btnbuy pull-right">Place an order</NavLink>
                                                            </div>
                                                        </div>
                                                        <h2 className="product-row-name">{item.nameProduct}</h2>
                                                        <div className="product-row-info">
                                                            <div className="product-row-price pull-left"><del>{item.realPrice}₫</del><br /><span className="product-row-sale">{item.nowPrice}₫</span></div>
                                                            {/*<span class="product-row-buyer pull-right"><i class="fa fa-user"></i><br/>185</span>*/}
                                                            <div className="clearfix" />
                                                        </div>
                                                        <div className="new-product-percent">{item.percent}%</div>
                                                    </div>
                                                </div>
                                            })
                                                : null
                                        }
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="text-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End collection info */}
                    {/* Begin no products */}
                    <ProductDescription />
                    {/* End no products */}
                </div>
            </section>
        </div>
    );
}

export default Index;
