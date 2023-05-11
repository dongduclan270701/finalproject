import React from 'react';
import Order from './Order'
import { NavLink } from 'react-router-dom';
const Index = () => {
    return (
        <div className="noindex">
            <div className="container1">
                <div id="layout-page" className="">
                    {/* <span className="header-contact header-page clearfix">
                        <h1>Tài khoản của bạn</h1>
                    </span> */}
                    {/* <div className="container" style={{ maxWidth: "1120px" }}> */}
                    {/* <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}> */}
                    <div className="row profile">
                        <div className="col-sm-3">
                            <div className="profile-sidebar">
                                <div className="profile-userpic">
                                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1681965345/j1szjyhrq29j33gvonnb.jpg" className="img-responsive"
                                        alt="Thông tin cá nhân" style={{ width: "131px", height: "131px" }} />
                                </div>
                                {/* <div className="profile-usertitle">
                                            <div className="profile-usertitle-name"> UserID: </div>
                                            <div className="profile-usertitle-job"> UserName: </div>

                                        </div> */}
                                <div className="profile-userbuttons">
                                    <NavLink to=""><button type="button" className="btn btn-secondary btn-sm">Thoát ra</button></NavLink>
                                </div>
                                <div className="profile-usermenu">
                                    <ul className="nav">
                                        <li>
                                            <button className="button-profile">
                                                <div className="row row-profile" style={{ margin: "0 auto", padding:"0 40px",width:"100%" }}>
                                                    {/* <div className="button-number-profile">1</div> */}
                                                    <div className="button-text-profile">Thông tin cá nhân</div>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="button-profile">
                                                <div className="row row-profile" style={{ margin: "0 auto", padding:"0 40px",width:"100%" }}>
                                                    {/* <div className="button-number-profile">2</div> */}
                                                    <div className="button-text-profile">Cập nhật thông tin</div>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="button-profile">
                                                <div className="row row-profile" style={{ margin: "0 auto", padding:"0 40px",width:"100%" }}>
                                                    {/* <div className="button-number-profile">3</div> */}
                                                    <div className="button-text-profile">Thông báo</div>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="button-profile">
                                                <div className="row row-profile" style={{ margin: "0 auto", padding:"0 40px",width:"100%" }}>
                                                    {/* <div className="button-number-profile">4</div> */}
                                                    <div className="button-text-profile">Kho voucher</div>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="button-profile">
                                                <div className="row row-profile" style={{ margin: "0 auto", padding:"0 40px",width:"100%" }}>
                                                    {/* <div className="button-number-profile">4</div> */}
                                                    <div className="button-text-profile">Đơn hàng</div>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <Order />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
