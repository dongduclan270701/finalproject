import React from 'react';
import { NavLink } from 'react-router-dom';

const Index = () => {
    return (
        <div className="col-sm-3">
            <div className="profile-sidebar">
                <div className="profile-userpic">
                    <img src={JSON.parse(localStorage.getItem('user'))[4]} className="img-responsive"
                        alt="Thông tin cá nhân" style={{ width: "131px", height: "131px" }} />
                </div>
                <div className="profile-usertitle">
                    <div className="profile-usertitle-name">{JSON.parse(localStorage.getItem('user'))[0]}</div>
                </div>
                <div className="profile-userbuttons">
                    <button>Logout</button>
                </div>
                <hr style={{border:'1px solid rgb(54 54 54)'}}/>
                <div className="profile-usermenu">
                    <ul className="nav">
                        <li>
                            <NavLink to="/account" end>
                                <div className='button-show'>
                                    <button type='button'>Information User</button>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account/updatePassword">
                                <div className='button-show'>
                                    <button type='button'>Update Password</button>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <div className='button-show'>
                                    <button type='button'>Voucher List</button>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account/notification">
                                <div className='button-show'>
                                    <button type='button'>Notification</button>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account/order">
                                <div className='button-show'>
                                    <button type='button'>Orders List</button>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <hr style={{border:'1px solid rgb(54 54 54)'}}/>
            </div>
        </div>
    );
}

export default Index;
