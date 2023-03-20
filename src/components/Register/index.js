import axios from 'axios';
import React, { useState } from 'react';

const Index = () => {
    const [inputForm, setInputForm] = useState({ password: "", email: "", phoneNumber:0, fnameAndlname: "",})
    const [submitForm, setSubmitForm] = useState(false)
    const getStateInputForm = async () => {
        // setSubmitForm(!submitForm)
        // await axios.post(`http://localhost:9999/api/register`, inputForm)
        //     .then(result => {
        //         console.log(result)
        //         if (result.data.status === "ok") {
        //             alert("Success")
        //         } else {
        //             alert(result.data.error)
        //         }
        //     }
        //     )
        //     .catch(error => console.log(error))
        console.log(inputForm)
    }
    return (
        // <div>
        //     <div>Form register</div>
        //     username:
        //     <input type="text" placeholder='Name' onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, username: e.target.value }))} />
        //     <br /><br />
        //     password:
        //     <input type="password" placeholder='Password' onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, password: e.target.value }))} />
        //     <br /><br />
        //     <button type='submit' onClick={getStateInputForm}>Submit</button>
        //     <br />
        //     {submitForm === true ? (inputForm.username + " - " + inputForm.password) : null}
        // </div>
        <div className="noindex">
            <div id="layout-page-register" className="container1">
                <span className="header-contact header-page clearfix">
                    <h1 className="title-register">Tạo tài khoản</h1>
                </span>
                <div className="userbox">
                    <div id="create_customer">
                        <input name="form_type" type="hidden" defaultValue="create_customer" />
                        <input name="utf8" type="hidden" defaultValue="✓" />
                        <div id="last_name" className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user" /></span>
                            <input required type="text" defaultValue="" name="customer[last_name]" placeholder="Họ và Tên" id="last_name" className="text form-control" size={30} onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, fnameAndlname: e.target.value }))}/>
                        </div>
                        <div id="email" className="input-group">
                            <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                            <input required type="email" defaultValue="" name="customer[email]" placeholder="email" id="email" className="text form-control" size={30} onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, email: e.target.value }))} />
                        </div>
                        <div id="email" className="input-group">
                            <span className="input-group-addon"><i className="fa fa-phone" /></span>
                            <input required type="text" defaultValue="" name="customer[phone]" placeholder="phone" id="phone" className="text form-control" size={13} onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, phoneNumber: e.target.value }))}/>
                        </div>
                        <div id="password" className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock" /></span>
                            <input required type="password" defaultValue="" name="customer[password]" placeholder="Mật khẩu" id="password" className="text form-control" size={30} onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, password: e.target.value }))}/>
                        </div>
                        <div className="action_bottom">
                            <button className="btn" type="submit" value="Đăng ký" onClick={getStateInputForm}>Đăng ký</button>
                        </div>
                        <div className="req_pass">
                            <a className="come-back" href="/account/login">Quay về</a>
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
