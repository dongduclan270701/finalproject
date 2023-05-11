import React from 'react';
import 'assets/scss/Header/Header-guarantee.scss'
import FooterProductSale from 'components/Footer/Footer-product-sale';
import HeaderGuarantee from './Header'
import BannerGuarantee from './Banner'
import StepOneGuarantee from './Step-one'
import StepTwoGuarantee from './Step-two'
import StepThreeGuarantee from './Step-three'
import ListGuarantee from './List-guarantee'
import HotlineGuarantee from './Hotline-guarantee'
const Index = () => {
    return (
        <div className="laid-wraper">
            <HeaderGuarantee />
            <BannerGuarantee />
            <StepOneGuarantee />
            <StepTwoGuarantee />
            <StepThreeGuarantee />
            <ListGuarantee />
            <HotlineGuarantee />
            <div id="SECTION968" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container">
                    <div id="HEADLINE969" className="laid-element">
                        <h3 className="laid-headline">
                            GEARVN CHÂN THÀNH CẢM ƠN QUÝ KHÁCH&nbsp;</h3>
                    </div>
                    <div id="HEADLINE972" className="laid-element">
                        <h3 className="laid-headline">
                            Chính sách bảo hành được GearVN cập nhật vào ngày 01/07/2021<br />
                        </h3>
                    </div>
                </div>
            </div>
            <FooterProductSale/>
            <div id="SECTION_POPUP" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container" />
            </div>
        </div>

    );
}

export default Index;
