import React from 'react';
import { NavLink } from 'react-router-dom';

const Index = () => {
    return (
        <div className="col-sm-3">
            <div className="profile-sidebar">
                <div className="profile-userpic">
                    <img src={JSON.parse(localStorage.getItem('user'))[4]} className="img-responsive"
                        alt="Information" style={{ width: "131px", height: "131px" }} />
                </div>
                <div className="profile-usertitle">
                    <div className="profile-usertitle-name play-bold">{JSON.parse(localStorage.getItem('user'))[0]}</div>
                </div>
                <div className="profile-userbuttons">
                    {/* <button>Logout</button> */}
                    <i className="fa-solid fa-right-from-bracket" style={{ cursor:'pointer', fontSize: '20px', padding:'10px 0 10px 0', color: 'rgb(255, 0, 63)'}}/>
                </div>
                {/* <hr style={{border:'1px solid rgb(54 54 54)'}}/> */}
                <div className="profile-usermenu play-bold">
                    <ul className="nav">
                        <li>
                            <NavLink to="/account" end>
                                <div className='button-show'>
                                    <button type='button'>INFORMATION</button>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account/updatePassword">
                                <div className='button-show'>
                                    <button type='button'>CHANGE PASSWORD</button>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <div className='button-show'>
                                    <button type='button'>VOUCHER</button>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account/notification">
                                <div className='button-show'>
                                    <button type='button'>NOTIFICATION</button>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account/order">
                                <div className='button-show'>
                                    <button type='button'>ORDERS</button>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <hr style={{border:'1px solid rgb(54 54 54)'}}/> */}
            </div>
        </div>
    );
}

export default Index;
