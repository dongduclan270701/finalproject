import React from 'react';
import 'assets/scss/Header/Header-hotline.scss'
import FooterProductSale from 'components/Footer/Footer-product-sale';
import HeaderHotline from './Header'
import BannerHotline from './Banner'
import ListShowroom from './List-showroom'
const Index = () => {
    return (
        <div className="laid-wraper" data-padding-top-id="SECTION414" data-scroll-padding-top={70} style={{ paddingTop: '70px' }}>
            <HeaderHotline />
            <BannerHotline />
            <ListShowroom />
            <FooterProductSale/>
            <div id="SECTION_POPUP" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container" />
            </div>
        </div>

    );
}

export default Index;
