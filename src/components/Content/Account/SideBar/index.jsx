import React from 'react';
import { NavLink } from 'react-router-dom';

const Index = () => {
    return (
        <div className="col-sm-3">
            <div className="profile-sidebar">
                <div className="profile-userpic">
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1681965345/j1szjyhrq29j33gvonnb.jpg" className="img-responsive"
                        alt="Thông tin cá nhân" style={{ width: "131px", height: "131px" }} />
                </div>
                <div className="profile-usertitle">
                    <div className="profile-usertitle-name"> Email: </div>
                    <div className="profile-usertitle-job"> Username: </div>
                </div>
                <div className="profile-userbuttons">
                    <NavLink to=""><button type="button" className="btn btn-secondary btn-sm">Logout</button></NavLink>
                </div>
                <div className="profile-usermenu">
                    <ul className="nav">
                        <li>
                            <NavLink to="/account">
                                <button className="button-profile">
                                    <div className="row row-profile" style={{ margin: "0 auto", padding: "0 40px", width: "100%" }}>
                                        {/* <div className="button-number-profile">1</div> */}
                                        <div className="button-text-profile">Information User</div>
                                    </div>
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="">
                                <button className="button-profile">
                                    <div className="row row-profile" style={{ margin: "0 auto", padding: "0 40px", width: "100%" }}>
                                        {/* <div className="button-number-profile">2</div> */}
                                        <div className="button-text-profile">Update Information</div>
                                    </div>
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="">
                                <button className="button-profile">
                                    <div className="row row-profile" style={{ margin: "0 auto", padding: "0 40px", width: "100%" }}>
                                        {/* <div className="button-number-profile">3</div> */}
                                        <div className="button-text-profile">Notice Board</div>
                                    </div>
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="">
                                <button className="button-profile">
                                    <div className="row row-profile" style={{ margin: "0 auto", padding: "0 40px", width: "100%" }}>
                                        {/* <div className="button-number-profile">4</div> */}
                                        <div className="button-text-profile">Voucher List </div>
                                    </div>
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account/order">
                                <button className="button-profile">
                                    <div className="row row-profile" style={{ margin: "0 auto", padding: "0 40px", width: "100%" }}>
                                        {/* <div className="button-number-profile">4</div> */}
                                        <div className="button-text-profile">Orders List</div>
                                    </div>
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Index;
