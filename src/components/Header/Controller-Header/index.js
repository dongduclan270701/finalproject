import React, { useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { StateContext } from 'Context/Context'
const Index = () => {
    const state = useContext(StateContext)
    const hanldLogout = () => {
        localStorage.removeItem("auth-token-user");
        localStorage.removeItem("user")
        window.location.reload();
    }
    return (
        <div className="headerxxx">
            <div className="container1 gearvn-content-section">
                <div className="row">
                    <div className="left_header" style={{ zIndex: 997 }}>
                        <a href="/" className="hidden-xsx logo-big">
                            <img src="//theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=34146" title="GEARVN PC HIGH-END & GAMING GEAR" alt="gearvn" />
                        </a>
                        <a href="/" className="hidden-sm hidden-md hidden-lg logo-small">
                            <img alt="" id="logo-xxx" src="//theme.hstatic.net/1000026716/1000440777/14/logo-icon-01.svg?v=34146" />
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
                                {JSON.parse(localStorage.getItem('auth-token-user')) ?
                                    <>
                                        <Link className="gearvn-header-top-item" to="/register">
                                            <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=34146" />
                                            <div className="header-right-description">
                                                <div className="gearvn-text">{
                                                    JSON.parse(localStorage.getItem('user'))[1]
                                                }</div>
                                            </div>
                                        </Link>
                                        <button onClick={hanldLogout} className="gearvn-header-top-item">
                                            <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/ak2.png?v=35775" />
                                            <div className="header-right-description">
                                                <div className="gearvn-text">Logout</div>
                                            </div>
                                        </button>
                                    </>
                                    :
                                    <>
                                        <Link className="gearvn-header-top-item" to="/register">
                                            <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=34146" />
                                            <div className="header-right-description">
                                                <div className="gearvn-text">Sign up</div>
                                            </div>
                                        </Link>
                                        <Link className="gearvn-header-top-item" to="/login">
                                            <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=34146" />
                                            <div className="header-right-description">
                                                <div className="gearvn-text">Sign in</div>
                                            </div>
                                        </Link>
                                    </>
                                }

                                <Link className="gearvn-header-top-item" to="/product-sales">
                                    <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/ak4.png?v=34146" />
                                    <div className="header-right-description">
                                        <div className="gearvn-text">sales promotion</div>
                                    </div>
                                </Link>
                                <Link className="gearvn-cart gearvn-header-top-item rela" to="/cart">
                                    <div className="number">{state.arrayOrder.length}</div>
                                    <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/ak5.png?v=34146" />
                                    <div className="header-right-description">
                                        <div className="gearvn-text">cart</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="gearvn-info-top">
                            <ul>
                                <li>
                                    <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/tongdai-icon.png?v=34146" />
                                    <span>
                                        <NavLink to="/hotline" style={{ color: '#ea1c00' }}>
                                            Switchboard
                                        </NavLink>
                                    </span>
                                </li>
                                <li>
                                    <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/youtube.png?v=34146" />
                                    <span>
                                        <NavLink to="/video" style={{ color: '#ea1c00' }}>
                                            Videos
                                        </NavLink>
                                    </span>
                                </li>
                                <li>
                                    <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/gNewsFavIco.png?v=34146" />
                                    <span>
                                        <NavLink to="/news" style={{ color: '#ea1c00' }}>
                                            Tech news
                                        </NavLink>
                                    </span>
                                </li>
                                <li>
                                    <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/logo_hr.png?v=34146" />
                                    <span>
                                        <NavLink to="/recruitment" style={{ color: '#ea1c00' }}>
                                            Hire
                                        </NavLink>
                                    </span>
                                </li>
                                <li>
                                    <img alt="" src="https://file.hstatic.net/200000397757/file/car-dealer_97df9ccd23f243e3a4da757eb19afe6c.png" />
                                    <span>
                                        <NavLink to="/showroom" style={{ color: '#ea1c00' }}>
                                            Showroom system
                                        </NavLink>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="gearvn-info-top-mobile">
                        <span><NavLink style={{ color: '#ea1c00' }} href /></span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Index;
