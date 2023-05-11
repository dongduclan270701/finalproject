import FooterProductSale from 'components/Footer/Footer-product-sale';
import HeaderSale from 'components/Header/Header-sale';
import React from 'react';
import 'assets/scss/Header/Header-sale.scss'
import BannerSales from './Banner'
import PrLaptop from './Pr-laptop'
import SeriesOneSales from './Series-one'
import SeriesTwoSales from './Series-two'
import SeriesThreeSales from './Series-three'
import SupportSalse from './Support'
import { NavLink } from 'react-router-dom';
const Index = () => {
    return (
        <div className="laid-wraper" data-padding-top-id="HEADER" data-scroll-padding-top={70} style={{ paddingTop: '70px' }}>
            <HeaderSale/>
            <div id="SECTION511" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container" />
            </div>
            <BannerSales />
            <PrLaptop />
            <div id="SECTION526" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container" />
            </div>
            <SeriesOneSales />
            <div id="SECTION527" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container" />
            </div>
            <SeriesTwoSales />
            <div id="SECTION528" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container" />
            </div>
            <SeriesThreeSales />
            <SupportSalse />
            
            <FooterProductSale/>
            <div id="SECTION_POPUP" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container">
                    <div id="POPUP269" className="laid-element laid-animation">
                        <div className="laid-popup">
                            <div className="laid-popup-background" />
                            <NavLink to="" id="BUTTON283" className="laid-element" data-replace-href="https://gearvn.com/pages/he-thong-showroom-gearvn">
                                <div className="laid-button">
                                    <div className="laid-button-background" />
                                    <div id="BUTTON_TEXT283" className="laid-element laid-button-headline">
                                        <p className="laid-headline laid-transition">Hệ Thống Showroom</p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="" id="BUTTON285" className="laid-element" data-replace-href="https://gearvn.com/pages/huong-dan-tra-gop">
                                <div className="laid-button">
                                    <div className="laid-button-background" />
                                    <div id="BUTTON_TEXT285" className="laid-element laid-button-headline">
                                        <p className="laid-headline laid-transition">
                                            Mua Hàng Trả Góp
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="" id="BUTTON287" className="laid-element" data-replace-href="https://gearvn.com/pages/chinh-sach-bao-hanh">
                                <div className="laid-button">
                                    <div className="laid-button-background" />
                                    <div id="BUTTON_TEXT287" className="laid-element laid-button-headline">
                                        <p className="laid-headline laid-transition">
                                            Chính Sách Bảo Hành
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                            <div data-action="true" id="BUTTON289" className="laid-element">
                                <div className="laid-button">
                                    <div className="laid-button-background" />
                                    <div id="BUTTON_TEXT289" className="laid-element laid-button-headline">
                                        <p className="laid-headline laid-transition">
                                            Thông tin Liên Hệ</p>
                                    </div>
                                </div>
                            </div>
                            <a href="tel:18006975" id="BUTTON291" className="laid-element">
                                <div className="laid-button laid-transition">
                                    <div className="laid-button-background" />
                                    <div id="BUTTON_TEXT291" className="laid-element laid-button-headline">
                                        <p className="laid-headline">
                                            ☎&nbsp; Hotline: 1800 6975</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
