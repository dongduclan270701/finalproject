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
        <div className="ladi-wraper" data-padding-top-id="HEADER" data-scroll-padding-top={70} style={{ paddingTop: '70px' }}>
            <HeaderSale/>
            <div id="SECTION511" className="ladi-section">
                <div className="ladi-section-background" />
                <div className="ladi-container" />
            </div>
            <BannerSales />
            <PrLaptop />
            <div id="SECTION526" className="ladi-section">
                <div className="ladi-section-background" />
                <div className="ladi-container" />
            </div>
            <SeriesOneSales />
            <div id="SECTION527" className="ladi-section">
                <div className="ladi-section-background" />
                <div className="ladi-container" />
            </div>
            <SeriesTwoSales />
            <div id="SECTION528" className="ladi-section">
                <div className="ladi-section-background" />
                <div className="ladi-container" />
            </div>
            <SeriesThreeSales />
            <SupportSalse />
            
            <FooterProductSale/>
            <div id="SECTION_POPUP" className="ladi-section">
                <div className="ladi-section-background" />
                <div className="ladi-container">
                    <div id="POPUP269" className="ladi-element ladi-animation">
                        <div className="ladi-popup">
                            <div className="ladi-popup-background" />
                            <NavLink to="" id="BUTTON283" className="ladi-element" data-replace-href="https://gearvn.com/pages/he-thong-showroom-gearvn">
                                <div className="ladi-button">
                                    <div className="ladi-button-background" />
                                    <div id="BUTTON_TEXT283" className="ladi-element ladi-button-headline">
                                        <p className="ladi-headline ladi-transition">Hệ Thống Showroom</p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="" id="BUTTON285" className="ladi-element" data-replace-href="https://gearvn.com/pages/huong-dan-tra-gop">
                                <div className="ladi-button">
                                    <div className="ladi-button-background" />
                                    <div id="BUTTON_TEXT285" className="ladi-element ladi-button-headline">
                                        <p className="ladi-headline ladi-transition">
                                            Mua Hàng Trả Góp
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="" id="BUTTON287" className="ladi-element" data-replace-href="https://gearvn.com/pages/chinh-sach-bao-hanh">
                                <div className="ladi-button">
                                    <div className="ladi-button-background" />
                                    <div id="BUTTON_TEXT287" className="ladi-element ladi-button-headline">
                                        <p className="ladi-headline ladi-transition">
                                            Chính Sách Bảo Hành
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                            <div data-action="true" id="BUTTON289" className="ladi-element">
                                <div className="ladi-button">
                                    <div className="ladi-button-background" />
                                    <div id="BUTTON_TEXT289" className="ladi-element ladi-button-headline">
                                        <p className="ladi-headline ladi-transition">
                                            Thông tin Liên Hệ</p>
                                    </div>
                                </div>
                            </div>
                            <a href="tel:18006975" id="BUTTON291" className="ladi-element">
                                <div className="ladi-button ladi-transition">
                                    <div className="ladi-button-background" />
                                    <div id="BUTTON_TEXT291" className="ladi-element ladi-button-headline">
                                        <p className="ladi-headline">
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
