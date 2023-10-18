import React, {useState, useEffect} from 'react';
import Order from './Order'
import OrderDetails from './OrderDetails'
import Information from './Information'
import UpdatePassword from './ChangePass'
import Notification from './Notification'
import SideBar from './SideBar'
import 'assets/scss/Content/Account/account.css'
import {
    fetchUserOrderDetails
} from 'Apis'
const Index = (props) => {
    const { Fragment } = props
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetchUserOrderDetails(JSON.parse(localStorage.getItem('user'))[0])
            .then(result => {
                setUser(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    const handleChangeUserInformation = (data) => {
        setUser(data)
    }
    return (
        <div id="layout-page" className="">
            <div className="row profile">
                <SideBar />
                {Fragment === "Order" && <Order user={user}/>}
                {Fragment === "OrderDetails" && <OrderDetails />}
                {Fragment === "Notification" && <Notification user={user}/>}
                {Fragment === "Information" && <Information user={user} handleChangeUserInformation={handleChangeUserInformation}/>}
                {Fragment === "UpdatePassword" && <UpdatePassword user={user} handleChangeUserInformation={handleChangeUserInformation}/>}
            </div>
        </div>
    );
}

export default Index;
