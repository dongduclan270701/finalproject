import axios from 'axios';
import React, { useState } from 'react';
import { fetchUserDetails } from 'Apis'
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'assets/scss/Header/login.css'
import 'assets/scss/Header/header.css'
import logo from 'assets/images/logo-brand.png'
const Index = () => {
    const navigate = useNavigate()
    const [inputForm, setInputForm] = useState({ username: "", password: "" })
    const [submitForm, setSubmitForm] = useState(false)
    const getStateInputFormLogin = async () => {
        fetchUserDetails(inputForm.username, inputForm.password)
            .then(result => {
                if (result === 'Email không tồn tại') {
                    Swal.fire({
                        title: 'Đăng nhập thất bại!',
                        text: 'Email này không tồn tại, vui lòng thử lại!',
                        icon: 'error',
                        confirmButtonText: 'OK!'
                    })
                }
                else if (result === 'Mật khẩu không chính xác') {
                    Swal.fire({
                        title: 'Đăng nhập thất bại!',
                        text: 'Mật khẩu không đúng, vui lòng thử lại!',
                        icon: 'error',
                        confirmButtonText: 'OK!'
                    })
                }
                else {
                    console.log(window.location.pathname)
                    localStorage.setItem("auth-token-user", JSON.stringify(result.token));
                    localStorage.setItem("user", JSON.stringify(result.user));
                    Swal.fire({
                        title: 'Đăng nhập thành công!',
                        text: 'Chào mừng đến với website của Gearvn!',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                navigate('/')
                                window.location.reload();
                            }
                        })
                        .catch((error) => {
                            Swal.fire({
                                title: 'Ops! Không kết nối được đến server',
                                text: 'Có vẻ như đường truyền của bạn có vấn đề, thử kiểm tra lại xem!',
                                icon: 'error',
                                confirmButtonText: 'OK!'
                            })
                        })
                }
            })
            .catch(err => {
                Swal.fire({
                    title: 'Ops! Không kết nối được đến server',
                    text: 'Có vẻ như đường truyền của bạn có vấn đề, thử kiểm tra lại xem!',
                    icon: 'error',
                    confirmButtonText: 'OK!'
                })
            })
    }
    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            getStateInputFormLogin()
        }
    }
    return (
        <div className="noindex">
            <div className="container1" id="layout-page-login">
                <div id="customer-login">
                    <span className="header-contact header-page clearfix">
                        <h1 id="title-login">Đăng nhập</h1>
                    </span>
                    <div id="login" className="userbox">
                        <div className="accounttype">
                            <h2 className="title" />
                        </div>
                        <div id="customer_login">
                            <input name="form_type" type="hidden" value="customer_login" />
                            <input name="utf8" type="hidden" value="✓" />
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                                <input style={{ height: "auto", fontSize: "inherit" }} required type="email" onKeyDown={handleOnKeyDown} value="" name="customer[email]" id="customer_email" placeholder="Email" className="text form-control" aria-describedby="basic-addon1" onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, username: e.target.value }))} />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                <input style={{ height: "auto", fontSize: "inherit" }} required type="password" onKeyDown={handleOnKeyDown} value="" name="customer[password]" id="customer_password" placeholder="Mật khẩu" className="text form-control" size={16} onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, password: e.target.value }))} />
                            </div>
                            <div className="action_bottom">
                                <button className="btn" value="Đăng nhập" onClick={getStateInputFormLogin} >Đăng nhập</button>
                            </div>
                            <div className="req_pass">
                                <a href="#" onclick="showRecoverPasswordForm();return false;">Quên mật khẩu?</a>
                                hoặc <NavLink to="/register" title="Đăng ký">Đăng ký</NavLink>
                            </div>
                            <input id="26610ad1e0e645fb853c5335676a0c27" name="g-recaptcha-response" type="hidden" value="03AFY_a8Un7hcxQyE4-mDjvKT655e0fC37cb8VfqO8C3kQcM_ImY_lBfI8mKxupH25QiRKiZ9ZsEAGQiEqLzY4_LuKl4HUsMmliNYxzCakJ_QYGhG_Uip1BIkdLAJFF20MMMVLtodgAlPv8HvtjktraQmREwtAJIIHiU1qNOcpEvBmULeyu0SHHAm8NwnEfvn7ne3clFz7GL8uejgslKl7aHOsdIp4a5-M8VZMQ12ahVid_Qy51rd1fvHej4Qsv9oQiB7KUqsKXd9yIc0SYy1rTO2p6Us77zumOdO8bTxavcVzUJVdta1Utzz6WESvJ8mpjuNFrTiN3sJ3NVPftqHLVLhuM5lY2VMsDnYX3LPaqkUcNtLuc-rTdJK0pMlYGZlJYGGvnjUofB_uMkHiQnm21JeiHNv_UgNGl_vyN0NQF2nTpuHyH2TnaPtpauP2oWsjsP2wAep4ArlbMztPzntaiT1txwWKhCptkm5QnmPkZ37wr-758-WoLE_DlnWXmy4qkzz64rdOpPiI" />
                        </div>
                    </div>
                    <div id="recover-password" style={{ display: 'none' }} className="userbox">
                        <div className="accounttype">
                            <h2>Phục hồi mật khẩu</h2>
                        </div>
                        <div >
                            <input name="form_type" type="hidden" value="recover_customer_password" />
                            <input name="utf8" type="hidden" value="✓" />
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                                <input required type="email" value name="email" id="recover-email" placeholder="Email" className="text form-control" aria-describedby="basic-addon1" />
                            </div>
                            <div className="action_bottom">
                                <input className="btn" type="submit" value="Gửi" />
                            </div>
                            <div className="req_pass">
                                <a href="#" onclick="hideRecoverPasswordForm();return false;">Hủy</a>
                            </div>
                            <input id="11bd9d81983247fc81a39caa196c5981" name="g-recaptcha-response" type="hidden" value="03AFY_a8Vyygdn_4tWYyoEcLc-oXYXBviYfSJiQ_1IP8NSsLv8h-HIzc1m-0irq7m1GyXKxBxI6vars9Z_uxLqSHHbl1Sz190YR-g5NaAR1r5_QAmX7v0yoMQbRaNNcxwOIvGfB851ifjJN63iQoZ_g7-iBSJobd49xp66GZGcB5P7lbxPyLfYrlqYuNX3zhm8zqpR92Hvj24eRG9Fj45eiktxCma1_kSwbh1ZgkdDVRxaDILEJIaEoA1JSZyusW7LLIjQ3716Jxlf1AEOUMYYQ9nU0MkoFWPpSyI6Yr6pcdJClSCLRQ-rAzx0UrRNjlX0Unl38yzX06aSEqboFuD62xMl_MibICzFGkt3O4ipjCmwA-U5AbRhHGi3N53GNTTgyUZ739FIaHpl44Cka5k6d3i5kQeeLuYZEhDdRtPpTF5QnKp4IZ0eNL4ssgR_0NVnEXybHKNxKZM2Hs8-KwohNHnGjWDD69aqf3tm2n1mTzr3XmP4xOq9KkICkJaIuGICN_Q6OUzqBOML" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
// const Index = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false)
//     const [isPopupOpen, setIsPopupOpen] = useState(false)
//     const [isSignupForm, setIsSignupForm] = useState(false)
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen)
//     }
//     const togglePopup = () => {
//         setIsPopupOpen(!isPopupOpen)
//     }
//     const toggleSignupForm = () => {
//         setIsSignupForm(!isSignupForm)
//     }
//     return (
//         <div className={isPopupOpen ? "show-popup" : ''}>
//             <header>
//                 <nav className="navbar">
//                     <span className="hamburger-btn material-symbols-rounded" onClick={toggleMenu}>menu</span>
//                     <a href="#" className="logo">
//                         <img src={logo} alt="logo" />
//                         {/* <h2>CodingNepal</h2> */}
//                     </a>
//                     <ul className={isMenuOpen ? "links show-menu" : "links"}>
//                         <span className="close-btn material-symbols-rounded" onClick={toggleMenu}>close</span>
//                         <li><a href="#">Home</a></li>
//                         <li><a href="#">Portfolio</a></li>
//                         <li><a href="#">Courses</a></li>
//                         <li><a href="#">About us</a></li>
//                         <li><a href="#">Contact us</a></li>
//                     </ul>
//                     <button className="login-btn" onClick={togglePopup}>LOG IN</button>
//                 </nav>
                
//             </header>
            
//             <div className="blur-bg-overlay" />
//             <div className={isSignupForm ? "form-popup show-signup" : "form-popup"}>
//                 <span className="close-btn material-symbols-rounded" onClick={togglePopup}>close</span>
//                 <div className="form-box login">
//                     <div className="form-details">
//                         <h2>Welcome Back</h2>
//                         <p>Please log in using your personal information to stay connected with us.</p>
//                     </div>
//                     <div className="form-content">
//                         <h2>LOGIN</h2>
//                         <form action="#">
//                             <div className="input-field">
//                                 <input type="text" required />
//                                 <label>Email</label>
//                             </div>
//                             <div className="input-field">
//                                 <input type="password" required />
//                                 <label>Password</label>
//                             </div>
//                             <a href="#" className="forgot-pass-link">Forgot password?</a>
//                             <button type="submit">Log In</button>
//                         </form>
//                         <div className="bottom-link">
//                             Don't have an account?
//                             <a href="#" id="signup-link" onClick={toggleSignupForm}>Signup</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-box signup">
//                     <div className="form-details">
//                         <h2>Create Account</h2>
//                         <p>To become a part of our community, please sign up using your personal information.</p>
//                     </div>
//                     <div className="form-content">
//                         <h2>SIGNUP</h2>
//                         <form action="#">
//                             <div className="input-field">
//                                 <input type="text" required />
//                                 <label>Enter your email</label>
//                             </div>
//                             <div className="input-field">
//                                 <input type="password" required />
//                                 <label>Create password</label>
//                             </div>
//                             <div className="policy-text">
//                                 <input type="checkbox" id="policy" />
//                                 <label htmlFor="policy">
//                                     I agree the
//                                     <a href="#" className="option">Terms &amp; Conditions</a>
//                                 </label>
//                             </div>
//                             <button type="submit">Sign Up</button>
//                         </form>
//                         <div className="bottom-link">
//                             Already have an account?
//                             <a href="#" id="login-link" onClick={toggleSignupForm}>Login</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Index;
