import React from 'react';
import 'assets/scss/Header/Header-pay.scss'
import FooterProductSale from 'components/Footer/Footer-product-sale';
import HeaderPay from './Header'
import BannerPay from './Banner'
import MethodPay from './Method-pay'
import ExamsPay from './Examp'
import LocationPay from './Location'
import MethodMoMoPay from './Method-momo'
import MethodZaloPay from './Method-zalo'
import NotePay from './Note'
const Index = () => {
    return (
        <div className="ladi-wraper">
            <HeaderPay />
            <BannerPay />
            <MethodPay />
            <ExamsPay />
            <LocationPay />
            <MethodMoMoPay />
            <MethodZaloPay />
            <NotePay />
            <div id="SECTION61" className="ladi-section">
                <div className="ladi-section-background ladi-lazyload" />
                <div className="ladi-container">
                    <div id="HEADLINE123" className="ladi-element">
                        <h3 className="ladi-headline ladi-lazyload">
                            E-mail: <span style={{ fontWeight: 'bold' }}>
                                cskh@gearvn.com</span>
                            &nbsp; &nbsp; &nbsp; &nbsp;•&nbsp; &nbsp; &nbsp; &nbsp;Hotline:  <span style={{ fontWeight: 'bold' }}>
                                1800.6975</span>
                        </h3>
                    </div>
                    <div id="HEADLINE125" className="ladi-element">
                        <h3 className="ladi-headline ladi-lazyload">
                            <span style={{ fontWeight: 700 }}>
                                Cần hỗ trợ thêm thông tin, Quý khách có thể liên hệ :&nbsp;</span>
                            <br />
                        </h3>
                    </div>
                </div>
            </div>
            <FooterProductSale/>
            <div id="SECTION_POPUP" className="ladi-section">
                <div className="ladi-section-background ladi-lazyload" />
                <div className="ladi-container" />
            </div>
        </div>

    );
}

export default Index;
