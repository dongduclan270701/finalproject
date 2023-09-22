import React, { useState, useEffect, useContext, memo } from 'react';
import {
    fetchProductCollection,
    fetchFilterProduct
} from 'Apis'
import { NavLink, useLocation } from 'react-router-dom';
import { StateContext } from 'Context/Context'
import goods2 from 'assets/images/gigabyte.webp';
import 'assets/scss/Content/Goods/goods.css'
const Index = () => {
    const state = useContext(StateContext)
    const location = useLocation();
    const objParams = location.state;
    const formatter = new Intl.NumberFormat('en-US')
    const [goods, setGoods] = useState(null)
    const [listFilter, setListFilter] = useState([])
    const [filter, setFilter] = useState({ sort: 'none', collection: '', category: ['', '', '', '', ''], minPrice: 0, maxPrice: 90000000 })
    useEffect(() => {
        setGoods(null)
        const clickedItem = state.category.find((item) => item.name === objParams.nameCategory);
        if (clickedItem) {
            setListFilter(clickedItem.category.slice(2, clickedItem.category.length));
            const findBrand = clickedItem.category[0].collecting.find((item) => item.name === objParams.category);
            const mer = [findBrand].concat(clickedItem.category.slice(2, clickedItem.category.length))
            const updatedMer = mer.map(item => {
                if (item.category) {
                    item.collecting = item.category;
                    delete item.category;
                }
                return item;
            });
            setListFilter(updatedMer)
        }
        setFilter((prevFilter) => ({
            ...prevFilter,
            collection: objParams.nameCollection,
            category: [objParams.category, ...prevFilter.category.slice(1)],
        }));
        fetchProductCollection({ category: objParams.category, collection: objParams.nameCollection }, 1)
            .then(result => {
                setGoods(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [objParams, state])
    const handleChangeFilter = (e) => {
        const { name, value } = e.target
        const formattedValue = value.replace(/\D/g, '')
        if (name === 'Brand') {
            setFilter((prevFilter) => ({
                ...prevFilter,
                category: [
                    prevFilter.category[0],
                    value,
                    ...prevFilter.category.slice(2),
                ],
            }));
        } else if (name === 'CPU') {
            setFilter((prevFilter) => ({
                ...prevFilter,
                category: [
                    prevFilter.category[0],
                    prevFilter.category[1],
                    value,
                    ...prevFilter.category.slice(3),
                ],
            }));
        } else if (name === 'GPU') {
            setFilter((prevFilter) => ({
                ...prevFilter,
                category: [
                    prevFilter.category[0],
                    prevFilter.category[1],
                    prevFilter.category[2],
                    value,
                    ...prevFilter.category.slice(4),
                ],
            }));
        } else if (name === 'Category') {
            setFilter((prevFilter) => ({
                ...prevFilter,
                category: [
                    prevFilter.category[0],
                    prevFilter.category[1],
                    prevFilter.category[2],
                    prevFilter.category[3],
                    value,
                    ...prevFilter.category.slice(5),
                ],
            }));
        } else {
            setFilter({ ...filter, [name]: name === 'minPrice' || name === 'maxPrice' ? formattedValue : value })
        }
    }
    const handleBlurFilter = (e) => {
        const { name, value } = e.target;
        const formattedValue = value.replace(/\D/g, '');
        setFilter({ ...filter, [name]: formattedValue });
    };
    const handleSubmitFilter = () => {
        setGoods(null)
        fetchFilterProduct(filter)
            .then(result => {
                setGoods(result.data)
            }) 
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="container">
            {/* <div className=" banner-collection-header">
                <NavLink to="" >
                    <img src="https://file.hstatic.net/1000026716/collection/vvb_gearvn1920x450_61fba033031f4d6d97272973a3154f39.jpg" alt="goods Asus Vivobook Series" style={{ height: '300px', width: '100%', objectFit: 'contain' }} />
                </NavLink>
            </div> */}
            <div className="col-sm-12 list-goods">
                <h1 className="title-box-collection">
                    {objParams.collection.toUpperCase() + " " + objParams.category.toUpperCase()}
                </h1>
                <div className="main-content-goods">
                    <div className='row' style={{ display: "flex" }}>
                        <div className='col-md-12' id="breadcrumb">
                            <div className="main">
                                <div className="breadcrumbs href-here">
                                    <span className="showHere">You are in: </span><NavLink to="/" className="pathway" style={{ color: "rgb(245 53 74)" }}>Homepage</NavLink>
                                    <span> <i className="fa fa-caret-right" /> {objParams.collection.toUpperCase() + " " + objParams.category.toUpperCase()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 wrap-sort-by">
                                    <div className="col-md-2 browse-tags pull-left">
                                        <span className="custom-dropdown custom-dropdown--white">
                                            <form>
                                                <div className='row select-field'>
                                                    <div className='col-12'>
                                                        <select className="field-input" style={{ padding: 15 }} onChange={e => handleChangeFilter(e)} name="sort">
                                                            <option data-code="null" value="none">
                                                                Select Sort </option>
                                                            <option value="asc">Price: ascending</option>
                                                            <option value="desc">Price: descending</option>
                                                            {/* <option value="title-ascending">Name: A-Z</option>
                                                            <option value="title-descending">Name: Z-A</option>
                                                            <option value="created-ascending">Oldest</option>
                                                            <option value="created-descending">Newest</option>
                                                            <option value="best-selling">Best-selling</option> */}
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </span>
                                    </div>
                                    {listFilter && listFilter.map((item, index) => {
                                        return <div key={index} className="col-md-2 browse-tags pull-left">
                                            <span className="custom-dropdown custom-dropdown--white">
                                                <form>
                                                    <div className='row select-field'>
                                                        <div className='col-12'>
                                                            <select className="field-input" style={{ padding: 15 }} onChange={e => handleChangeFilter(e)} name={item.src ? 'Brand' : item.name}>
                                                                <option data-code="null" value="">
                                                                    Select {item.name} </option>
                                                                {item ? item.collecting.map((item1, index) => {
                                                                    return <option key={index} value={item1.name}>{item1.name}</option>
                                                                }) : null}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                            </span>
                                        </div>
                                    })}
                                    <fieldset className="col-md-3 filter-price">
                                        <div className="price-field">
                                            <input type="range" min={0} max={400000000} name='minPrice' onChange={e => handleChangeFilter(e)} value={filter.minPrice} id="lower" />
                                            <input type="range" min={0} max={400000000} name='maxPrice' onChange={e => handleChangeFilter(e)} value={filter.maxPrice} id="upper" />
                                        </div>
                                        <div className="price-wrap">
                                            <div className="price-container">
                                                <div className="price-wrap-1">
                                                    <input id="one" type="text" min={0} max={400000000} onBlur={handleBlurFilter} name='minPrice' onChange={e => handleChangeFilter(e)} value={formatter.format(filter.minPrice)} style={{ color: 'white' }} />
                                                </div>
                                                <div className="price-wrap_line">-</div>
                                                <div className="price-wrap-2">
                                                    <input id="two" type="text" min={0} max={400000000} onBlur={handleBlurFilter} name='maxPrice' onChange={e => handleChangeFilter(e)} value={formatter.format(filter.maxPrice)} style={{ color: 'white' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className='col-md-1'>
                                        <div className='button-show'>
                                            <button type='button' onClick={handleSubmitFilter}>Filter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 product-list">
                            <div className='row d-flex goods'>
                                {
                                    goods ? goods.map((item, index) => {
                                        return <div className='col-md-3 mt-4 mb-4 goods-single' key={index}>
                                            <div className='goods-card'>
                                                <div className='goods-single-content'>
                                                    <img src={item.img[0]} alt='' />
                                                    <h1 style={{ fontSize: 13 }}>{item.nameProduct}</h1>
                                                    <h1 style={{ fontSize: 13 }}>{formatter.format(item.nowPrice)} VNĐ</h1>
                                                    <NavLink to={"/products/" + item.src} state={{ collection: item.collection}}><button type='button' style={{ color: "white" }}>Show</button></NavLink>
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

export default memo(Index);
