import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListCategoryProduct from './list-category-product';

const Index = () => {

    return (
        <div className="gearvn-content-section padding-10-0 hidden-xs hidden-sm container1">
            <div className="content-flex top-header-bar">
                <span className="style-nav-fix hidden"><i className="fa fa-bars" /> Product portfolio</span>
                <div className="fixed-nav">
                    <span className="fixed-menu style-nav-fix "><i className="fa fa-bars" /> Product portfolio</span>
                    {/*MENU LEFT*/}
                    {/* <span class="click-list"><i class="fa fa-bars"></i> Product portfolio</span> */}
                    <div className="gearvn-header-menu freez">
                        <div className="cat-menu gearvn-cat-menu">
                            <nav id="megamenu-nav-freez" className="megamenu-nav">
                                <ol className="megamenu-nav-primary responsive" id="megamenu-nav-main-2" >
                                    <ListCategoryProduct/>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/*MENU LEFT*/}
                </div>

                <Link to="/pay" className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                    <div className="xxxkt">
                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/xk2.png?v=34146" />
                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/xk2s.png?v=34146" />
                    </div>
                    PAYMENT GUIDE
                </Link>
                <Link to="/installment" className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                    <div className="xxxkt">
                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/xk3.png?v=34146" />
                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/xk3s.png?v=34146" />
                    </div>
                    PAYMENT INSTRUCTIONS
                </Link>
                <Link to="/guarantee" className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                    <div className="xxxkt">
                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/xk4.png?v=34146" />
                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/xk4s.png?v=34146" />
                    </div>
                    WARRANTY POLICY
                </Link>
                <Link to="/ship" className="gearvn-header-navigation-item recently-product-item header-navigation-recently-products ">
                    <div className="xxxkt">
                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/xk5.png?v=34146" />
                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/xk5s.png?v=34146" />
                    </div>
                    SHIPPING POLICY
                </Link>
            </div>
        </div>
    );
}

export default Index;
