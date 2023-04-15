import axios from 'axios';
import React, { useState } from 'react';
import { fetchUserDetails } from 'Apis'
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

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
                    console.log(result)
                    localStorage.setItem("auth-token", JSON.stringify(result.token));
                    localStorage.setItem("user", JSON.stringify(result.username));
                    Swal.fire({
                        title: 'Đăng nhập thành công!',
                        text: 'Chào mừng đến với website của Gearvn!',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                if (window.location.pathname !== '/login') {
                                    window.location.reload();
                                } else {
                                    navigate(-1);
                                }
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
                            <input name="form_type" type="hidden" defaultValue="customer_login" />
                            <input name="utf8" type="hidden" defaultValue="✓" />
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                                <input required type="email" onKeyDown={handleOnKeyDown} defaultValue="" name="customer[email]" id="customer_email" placeholder="Email" className="text form-control" aria-describedby="basic-addon1" onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, username: e.target.value }))} />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                <input required type="password" onKeyDown={handleOnKeyDown} defaultValue="" name="customer[password]" id="customer_password" placeholder="Mật khẩu" className="text form-control" size={16} onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, password: e.target.value }))} />
                            </div>
                            <div className="action_bottom">
                                <button className="btn" value="Đăng nhập" onClick={getStateInputFormLogin} >Đăng nhập</button>
                            </div>
                            <div className="req_pass">
                                <a href="#" onclick="showRecoverPasswordForm();return false;">Quên mật khẩu?</a>
                                hoặc <NavLink to="/register" title="Đăng ký">Đăng ký</NavLink>
                            </div>
                            <input id="26610ad1e0e645fb853c5335676a0c27" name="g-recaptcha-response" type="hidden" defaultValue="03AFY_a8Un7hcxQyE4-mDjvKT655e0fC37cb8VfqO8C3kQcM_ImY_lBfI8mKxupH25QiRKiZ9ZsEAGQiEqLzY4_LuKl4HUsMmliNYxzCakJ_QYGhG_Uip1BIkdLAJFF20MMMVLtodgAlPv8HvtjktraQmREwtAJIIHiU1qNOcpEvBmULeyu0SHHAm8NwnEfvn7ne3clFz7GL8uejgslKl7aHOsdIp4a5-M8VZMQ12ahVid_Qy51rd1fvHej4Qsv9oQiB7KUqsKXd9yIc0SYy1rTO2p6Us77zumOdO8bTxavcVzUJVdta1Utzz6WESvJ8mpjuNFrTiN3sJ3NVPftqHLVLhuM5lY2VMsDnYX3LPaqkUcNtLuc-rTdJK0pMlYGZlJYGGvnjUofB_uMkHiQnm21JeiHNv_UgNGl_vyN0NQF2nTpuHyH2TnaPtpauP2oWsjsP2wAep4ArlbMztPzntaiT1txwWKhCptkm5QnmPkZ37wr-758-WoLE_DlnWXmy4qkzz64rdOpPiI" />
                        </div>
                    </div>
                    <div id="recover-password" style={{ display: 'none' }} className="userbox">
                        <div className="accounttype">
                            <h2>Phục hồi mật khẩu</h2>
                        </div>
                        <div >
                            <input name="form_type" type="hidden" defaultValue="recover_customer_password" />
                            <input name="utf8" type="hidden" defaultValue="✓" />
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                                <input required type="email" defaultValue name="email" id="recover-email" placeholder="Email" className="text form-control" aria-describedby="basic-addon1" />
                            </div>
                            <div className="action_bottom">
                                <input className="btn" type="submit" defaultValue="Gửi" />
                            </div>
                            <div className="req_pass">
                                <a href="#" onclick="hideRecoverPasswordForm();return false;">Hủy</a>
                            </div>
                            <input id="11bd9d81983247fc81a39caa196c5981" name="g-recaptcha-response" type="hidden" defaultValue="03AFY_a8Vyygdn_4tWYyoEcLc-oXYXBviYfSJiQ_1IP8NSsLv8h-HIzc1m-0irq7m1GyXKxBxI6vars9Z_uxLqSHHbl1Sz190YR-g5NaAR1r5_QAmX7v0yoMQbRaNNcxwOIvGfB851ifjJN63iQoZ_g7-iBSJobd49xp66GZGcB5P7lbxPyLfYrlqYuNX3zhm8zqpR92Hvj24eRG9Fj45eiktxCma1_kSwbh1ZgkdDVRxaDILEJIaEoA1JSZyusW7LLIjQ3716Jxlf1AEOUMYYQ9nU0MkoFWPpSyI6Yr6pcdJClSCLRQ-rAzx0UrRNjlX0Unl38yzX06aSEqboFuD62xMl_MibICzFGkt3O4ipjCmwA-U5AbRhHGi3N53GNTTgyUZ739FIaHpl44Cka5k6d3i5kQeeLuYZEhDdRtPpTF5QnKp4IZ0eNL4ssgR_0NVnEXybHKNxKZM2Hs8-KwohNHnGjWDD69aqf3tm2n1mTzr3XmP4xOq9KkICkJaIuGICN_Q6OUzqBOML" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
