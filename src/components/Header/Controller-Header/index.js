import React from 'react';
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className="headerxxx">
            <div className="container1 gearvn-content-section">
                <div className="row">
                    <div className="left_header" style={{ zIndex: 997 }}>
                        <a href="/" className="hidden-xsx logo-big">
                            <img src="//theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=34146" title="GEARVN PC HIGH-END & GAMING GEAR" alt="gearvn" />
                        </a>
                        <a href="/" className="hidden-sm hidden-md hidden-lg logo-small">
                            <img id="logo-xxx" src="//theme.hstatic.net/1000026716/1000440777/14/logo-icon-01.svg?v=34146" />
                        </a>
                        <div className="sidebar-search hidden-md hidden-lg" style={{ flex: 1, marginLeft: '15px', marginRight: '56px' }}>
                            <div className="gearvn-search-block-mobile">
                                <form className="search_bar" action="/search">
                                    <input type="text" name="q" placeholder="Nhập mã hoặc tên sản phẩm" style={{ width: '92%' }} />
                                    <button type="submit" value="Search">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="right_header">
                        <div className="pd5 fl1 ">
                            <div id="search">
                                <div className="search">
                                    <form id="searchbox" className="popup-content ultimate-search" action="/search" method="get" role="search">
                                        <input name="q" type="text" placeholder="Nhập mã hoặc tên sản phẩm..." className="inputbox search-query" autoComplete="off" />
                                        <button type="submit" className="btn-search btn btn-link"><span className="fa fa-search" aria-hidden="true" /></button>
                                        <input type="hidden" className="collection_id" defaultValue="(collectionid:product>=0)" />
                                        <input type="hidden" className="collection_handle" defaultValue="all" />
                                        <input type="hidden" className="collection_name" defaultValue="all" />
                                    </form>
                                </div>
                                {/* */}
                            </div>
                        </div>
                        <div className="pdl0 fl1 ">
                            <div className="gearvn-right-top-block">
                            
                                <Link className="gearvn-header-top-item" to="/register">
                                    <img src="//theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=34146" />
                                    <div className="header-right-description">
                                        <div className="gearvn-text">Đăng ký</div>
                                    </div>
                                </Link>
                                <Link className="gearvn-header-top-item" to="/login">
                                    <img src="//theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=34146" />
                                    <div className="header-right-description">
                                        <div className="gearvn-text">Đăng nhập</div>
                                    </div>
                                </Link>
                                <Link className="gearvn-header-top-item" to="/product-sales">
                                    <img src="//theme.hstatic.net/1000026716/1000440777/14/ak4.png?v=34146" />
                                    <div className="header-right-description">
                                        <div className="gearvn-text">khuyến mãi</div>
                                    </div>
                                </Link>
                                <Link className="gearvn-cart gearvn-header-top-item rela" to="/">
                                    <div className="number">0</div>
                                    <img src="//theme.hstatic.net/1000026716/1000440777/14/ak5.png?v=34146" />
                                    <div className="header-right-description">
                                        <div className="gearvn-text">giỏ hàng </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="gearvn-info-top">
                        <ul>
                            <li>
                                <img src="//theme.hstatic.net/1000026716/1000440777/14/tongdai-icon.png?v=34146" />
                                <span>
                                    <Link to="/hotline">
                                        <a style={{ color: '#ea1c00' }} >
                                            Tổng đài
                                        </a>
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <img src="//theme.hstatic.net/1000026716/1000440777/14/youtube.png?v=34146" />
                                <span>
                                    <Link to="/video">
                                        <a style={{ color: '#ea1c00' }} >
                                            Videos
                                        </a>
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <img src="//theme.hstatic.net/1000026716/1000440777/14/gNewsFavIco.png?v=34146" />
                                <span>
                                    <Link to="/news">
                                        <a style={{ color: '#ea1c00' }} >
                                            Tin công nghệ
                                        </a>
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <img src="//theme.hstatic.net/1000026716/1000440777/14/logo_hr.png?v=34146" />
                                <span>
                                    <Link to="/recruitment">
                                        <a style={{ color: '#ea1c00' }} >
                                            Tuyển dụng
                                        </a>
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <img src="https://file.hstatic.net/200000397757/file/car-dealer_97df9ccd23f243e3a4da757eb19afe6c.png" />
                                <span>
                                    <Link to="/showroom">
                                        <a style={{ color: '#ea1c00' }} >
                                            Hệ thống showroom
                                        </a>
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    
                    <div className="gearvn-info-top-mobile">
                        <span><a style={{ color: '#ea1c00' }} href /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
