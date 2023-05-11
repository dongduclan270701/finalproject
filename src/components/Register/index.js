import axios from 'axios';
import React, { useState } from 'react';
import { createNewUsers } from 'Apis'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Index = () => {
    const navigate = useNavigate()
    const [inputForm, setInputForm] = useState({ password: "", email: "", username: ""})
    const [submitForm, setSubmitForm] = useState(false)
    const getStateInputForm = async () => {
        createNewUsers(inputForm)
            .then(result => {
                if (result === 'Email đã tồn tại') {
                    Swal.fire({
                        title: 'Đăng ký thất bại!',
                        text: 'Email này đã tồn tại, vui lòng thử lại!',
                        icon: 'error',
                        confirmButtonText: 'OK!'
                    })
                } else {
                    localStorage.setItem("auth-token-user", JSON.stringify(result.token));
                    localStorage.setItem("user", JSON.stringify(result.user));
                    Swal.fire({
                        title: 'Đăng ký thành công!',
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
            .catch(err =>{
                console.log(err)
            })
    }
    return (
        <div className="noindex">
            <div id="layout-page-register" className="container1">
                <span className="header-contact header-page clearfix">
                    <h1 className="title-register">Tạo tài khoản</h1>
                </span>
                <div className="userbox">
                    <div id="create_customer" style={{display:"flex",margin:"0 auto", flexDirection:"column"}}>
                        <input name="form_type" type="hidden" defaultValue="create_customer" />
                        <input name="utf8" type="hidden" defaultValue="✓" />
                        <div id="last_name" className="input-group" style={{width:"100%"}}>
                            <span className="input-group-addon"><i className="fa fa-user" /></span>
                            <input required type="text" defaultValue="" name="customer[last_name]" placeholder="Họ và Tên" id="last_name" className="text form-control" size={30} onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, username: e.target.value }))}/>
                        </div>
                        <div id="email" className="input-group" style={{width:"100%"}}>
                            <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                            <input required type="email" defaultValue="" name="customer[email]" placeholder="Email" id="email" className="text form-control" size={30} onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, email: e.target.value }))} />
                        </div>
                        <div id="password" className="input-group" style={{width:"100%"}}>
                            <span className="input-group-addon"><i className="fa fa-lock" /></span>
                            <input required type="password" defaultValue="" name="customer[password]" placeholder="Mật khẩu" id="password" className="text form-control" size={30} onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, password: e.target.value }))}/>
                        </div>
                        <button className="btn" type="submit" value="Đăng ký" onClick={getStateInputForm}>Đăng ký</button>
                        <div className="action_bottom">
                            
                            <NavLink to="/login">Đã có tài khoản</NavLink>
                        </div>
                        
                        <input id="c355808e0a4249ea9c3d176345bcb95a" name="g-recaptcha-response" type="hidden" defaultValue="03AFY_a8U7U0AY8uFs02Ngt70hcqgXJDnuWFRaPI3yiqpfccPzyGbWZR-Zyar2rAfas0eIKivY89ZvGvtqBxPVlFwFGsgf6z69GZXqJKdbWFBHMARBctkH_T56i8mCBhgWn1j59pTF3kuX-X0bm5XoDBhr1TPkKHIHtxyNUJvCR6TqznoDXHizsTbouMW9fm_wJ3XfMUMiHm7cz2RK8joAp1zFlbzh9Fp8a9xOMWkObvea9EH9dZg-9Yybj76MtIWyZtYwn4GmaIvAAy8rGNVBI1jLrZXosF15mvc6wQ_cQgCY_bYVPW14UxQfAR0xTblyCVoL7gqzDmgErCdh_wlPA_-MQFe1mTXCUyFGSz5pyUCTPQjrgnuaBjCadX53JoNFHYEHNYx_7mKP_gIHDrFrYb5Yp2RGd1A-DgDhDj9l807kpX476reLh0Irbl4QCyV6wpb5lDbqBBPflVICYN-HMAZcUplvqKDAzRazs_pNTYtye6S1tf60CRSfk9TyXb4sWhP-CMb_WInF" />
                        </div>
                </div>
            </div>{/* #register */}
            {/* #customer-register */}
        </div>
    );
}

export default Index;
