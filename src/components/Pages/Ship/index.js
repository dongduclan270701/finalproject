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
        <div className="ladi-wraper">
            <HeaderShip />
            <BannerShip />
            <LocationShip />
            <ShipIn />
            <ShipOut />
            <Details />
            <FooterProductSale/>
            <div id="SECTION_POPUP" className="ladi-section">
                <div className="ladi-section-background" />
                <div className="ladi-container" />
            </div>
        </div>

    );
}

export default Index;
