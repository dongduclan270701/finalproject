import React from 'react';
import 'assets/scss/Header/Header-hotline.scss'
import FooterProductSale from 'components/Footer/Footer-product-sale';
import HeaderHotline from './Header'
import BannerHotline from './Banner'
import ListShowroom from './List-showroom'
const Index = () => {
    return (
        <div className="ladi-wraper" data-padding-top-id="SECTION414" data-scroll-padding-top={70} style={{ paddingTop: '70px' }}>
            <HeaderHotline />
            <BannerHotline />
            <ListShowroom />
            <FooterProductSale/>
            <div id="SECTION_POPUP" className="ladi-section">
                <div className="ladi-section-background" />
                <div className="ladi-container" />
            </div>
        </div>

    );
}

export default Index;
