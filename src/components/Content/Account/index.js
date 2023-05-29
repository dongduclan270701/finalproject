import React from 'react';
import Order from './Order'
import OrderDetails from './OrderDetails'
import Information from './Information'
import SideBar from './SideBar'
const Index = (props) => {
    const {Fragment} = props
    return (
        <div className="noindex" style={{backgroundColor:"#fff"}}>
            <div className="container1">
                <div id="layout-page" className="">
                    <div className="row profile">
                        <SideBar />
                        {Fragment === "Order" && <Order />}
                        {Fragment === "OrderDetails" && <OrderDetails />}
                        {Fragment === "Information" && <Information />}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
