/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react'
import { StateContext } from 'Context/Context'
import 'assets/scss/Header/login.css'
import 'assets/scss/Header/header.css'
import logo from 'assets/images/logo-brand.png'
import user from 'assets/images/account.png'
import logout from 'assets/images/exit.png'
import cart from 'assets/images/shopping-cart.png'
import {
    fetchCollecting,
    fetchUserDetails,
    createNewUsers
} from 'Apis'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'assets/scss/Header/login.css'
const Index = () => {
    const state = useContext(StateContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isSignUpForm, setIsSignUpForm] = useState(false)
    const [item, setItem] = useState(null)
    const [account, setAccount] = useState({ username: "", password: "" })
    const [newAccount, setNewAccount] = useState({ password: "", email: "", username: "" })
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen)
    }
    const toggleSignUpForm = () => {
        setIsSignUpForm(!isSignUpForm)
    }

    const handleLogout = () => {
        localStorage.removeItem("auth-token-user");
        localStorage.removeItem("user")
        window.location.reload();
    }
    useEffect(() => {
        fetchCollecting()
            .then(result => {
                setItem(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const getStateInputFormLogin = async (event) => {
        event.preventDefault();
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (re.test(account.username) === false) {
            Swal.fire({
                title: 'Check your Email',
                text: 'Email is incorrect format, please enter the correct email format!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        } else {
            fetchUserDetails(account.username, account.password)
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
    }
    const getStateInputFormRegister = async (event) => {
        event.preventDefault();
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (newAccount.password !== newAccount.rePassword) {
            Swal.fire({
                title: 'Please check your Re-Password',
                text: 'Re-Password does not match password',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        } else if (re.test(newAccount.email) === false) {
            Swal.fire({
                title: 'Check your Email',
                text: 'Email is incorrect format, please enter the correct email format!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        } else if (newAccount.password.length < 8 || /[A-Z]/.test(newAccount.password) === false) {
            Swal.fire({
                title: 'Check your password',
                text: 'Password requires 8 characters or more and has capital letters!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        } else {
            const { rePassword, ...data } = newAccount
            createNewUsers(data)
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
                                    window.location.reload()
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
                    console.log(err)
                })
        }

    }
    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            getStateInputFormLogin()
        }
    }
    return (
        <div className={isPopupOpen ? "show-popup" : ''}>
            <header>
                <nav className="navbar">
                    {/* <span className="hamburger-btn material-symbols-rounded" width={20} onClick={toggleMenu}>☰</span> */}
                    <span className="hamburger-icon hamburger-btn material-symbols-rounded" width={20} height={20} style={{fontSize:30}} onClick={toggleMenu}>&#8801;</span>
                    <NavLink to='/' className="logo">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <ul className={isMenuOpen ? "links show-menu" : "links"}>
                        <span className="close-btn material-symbols-rounded" onClick={toggleMenu}>x</span>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li className="dropdown">
                            <a href={''}>Portfolio</a>
                            <ul className="dropdown-menu">
                                {item ? item.map((item, index) => {
                                    return <li key={index}>
                                        <a href={''}>{item.name}</a>
                                        <ul className="submenu-menu">
                                            {item.category[0].collecting.map((category, index) => {
                                                return <li key={index}><NavLink to={"/collectionDetail/" + category.name}state={{ category: category.name, collection: item.name.toLowerCase() }}>{category.name}</NavLink></li>
                                            })}
                                        </ul>
                                    </li>
                                }) : null}
                            </ul>
                        </li>
                        <li><NavLink to={'/guarantee'}>Guarantee</NavLink></li>
                        <li><NavLink to={'/instalment'}>Instalment</NavLink></li>
                        <li><NavLink to={'/hotline'}>About us</NavLink></li>
                    </ul>
                    {JSON.parse(localStorage.getItem('auth-token-user')) ?
                        <span className="logged-btn">
                            <NavLink className="logged-content" to="/account">
                                <img alt="" width={25} height={25} src={user} />
                                <div className="logged-text">{
                                    JSON.parse(localStorage.getItem('user'))[1]
                                }</div>
                            </NavLink>|
                            <NavLink to={'/cart'}  className="cart-content">
                                <div className="number">{state.arrayOrder.length}</div>
                                <img alt="" width={25} height={25} src={cart} />
                            </NavLink>|
                            <a onClick={handleLogout} className="logout-content">
                                <img alt="" width={25} height={25} src={logout} />
                            </a>
                        </span>
                        :
                        <button className="login-btn" onClick={togglePopup}>LOG IN</button>
                    }
                </nav>
            </header>
            <div className="blur-bg-overlay" />
            <div className={isSignUpForm ? "form-popup show-signup" : "form-popup"}>
                <span className="close-btn material-symbols-rounded" onClick={togglePopup}>x</span>
                <div className="form-box login">
                    <div className="form-details">
                        <h2>Welcome Back</h2>
                        <p>Please log in using your personal information to stay connected with us.</p>
                    </div>
                    <div className="form-content">
                        <h2>LOGIN</h2>
                        <form>
                            <div className="input-field">
                                <input name='email' type="email" onChange={(e) => setAccount((account) => ({ ...account, username: e.target.value }))} required />
                                <label>Email</label>
                            </div>
                            <div className="input-field">
                                <input name='password' type="password" onKeyDown={event => handleOnKeyDown(event)} onChange={(e) => setAccount((account) => ({ ...account, password: e.target.value }))} required />
                                <label>Password</label>
                            </div>
                            <a href={''} className="forgot-pass-link">Forgot password?</a>
                            <button onClick={event => getStateInputFormLogin(event)}>Log In</button>
                        </form>
                        <div className="bottom-link">
                            Don't have an account?
                            <a id="signup-link" onClick={toggleSignUpForm}>Signup</a>
                        </div>
                    </div>
                </div>
                <div className="form-box signup">
                    <div className="form-details">
                        <h2>Create Account</h2>
                        <p>To become a part of our community, please sign up using your personal information.</p>
                    </div>
                    <div className="form-content">
                        <h2>SIGNUP</h2>
                        <form >
                            <div className="input-field">
                                <input name='username' type="text" onChange={(e) => setNewAccount((newAccount) => ({ ...newAccount, username: e.target.value }))} required />
                                <label>Username</label>
                            </div>
                            <div className="input-field">
                                <input name='email' type="email" onChange={(e) => setNewAccount((newAccount) => ({ ...newAccount, email: e.target.value }))} required />
                                <label>Email</label>
                            </div>
                            <div className="input-field">
                                <input name='password' type="password" onChange={(e) => setNewAccount((newAccount) => ({ ...newAccount, password: e.target.value }))} required />
                                <label>Password</label>
                            </div>
                            <div className="input-field">
                                <input name='rePassword' type="password" onKeyDown={event => handleOnKeyDown(event)} onChange={(e) => setNewAccount((newAccount) => ({ ...newAccount, rePassword: e.target.value }))} required />
                                <label>Re-Password</label>
                            </div>
                            <div className="policy-text">
                                <input type="checkbox" id="policy" />
                                <label htmlFor="policy">
                                    I agree the
                                    <a href={''} className="option">Terms &amp; Conditions</a>
                                </label>
                            </div>
                            <button onClick={event => getStateInputFormRegister(event)}>Sign Up</button>
                        </form>
                        <div className="bottom-link">
                            Already have an account?
                            <a id="signup-link" onClick={toggleSignUpForm}>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
