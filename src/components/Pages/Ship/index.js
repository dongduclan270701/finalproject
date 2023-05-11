import React from 'react';
import 'assets/scss/Header/Header-ship.scss'
import FooterProductSale from 'components/Footer/Footer-product-sale';
import HeaderShip from './Header'
import BannerShip from './Banner'
import LocationShip from './Location'
import ShipIn from './Ship-in'
import ShipOut from './Ship-out'
import Details from './Detail'
const Index = () => {
    return (
        <div className="laid-wraper">
            <HeaderShip />
            <BannerShip />
            <LocationShip />
            <ShipIn />
            <ShipOut />
            <Details />
            <FooterProductSale/>
            <div id="SECTION_POPUP" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container" />
            </div>
        </div>

    );
}

export default Index;
