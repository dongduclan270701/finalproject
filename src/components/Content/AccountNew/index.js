import React from 'react';
import Order from './Order'
import OrderDetails from './OrderDetails'
import Information from './Information'
import SideBar from './SideBar'
import 'assets/scss/Content/Account/account.css'
const Index = (props) => {
    const { Fragment } = props
    return (
        <div id="layout-page" className="">
            <div className="row profile">
                <SideBar />
                {Fragment === "Order" && <Order />}
                {Fragment === "OrderDetails" && <OrderDetails />}
                {Fragment === "Information" && <Information />}
            </div>
        </div>
    );
}

export default Index;
