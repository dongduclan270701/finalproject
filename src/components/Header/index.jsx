/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react'
import { StateContext } from 'Context/Context'
import 'assets/scss/Header/login.css'
import 'assets/scss/Header/header.css'
import logo from 'assets/images/logo-brand.png'
import logo1 from 'assets/images/logo-brand1.png'
import goods2 from 'assets/images/gigabyte.webp';
import user from 'assets/images/account.png'
import logout from 'assets/images/exit.png'
import cart from 'assets/images/shopping-cart.png'
import logoSearch from 'assets/images/search.png'
import {
    fetchCollecting,
    fetchUserDetails,
    createNewUsers,
    fetchSearchProduct
} from 'Apis'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'assets/scss/Header/login.css'
const Index = () => {
    const formatter = new Intl.NumberFormat('en-US')
    const navigate = useNavigate()
    const state = useContext(StateContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isSignUpForm, setIsSignUpForm] = useState(false)
    const [isPortfolio, setIsPortfolio] = useState(1)
    const [category, setCategory] = useState([])
    const [searchCategory, setSearchCategory] = useState([])
    const [searchCollection, setSearchCollection] = useState()
    const [item, setItem] = useState(null)
    const [account, setAccount] = useState({ username: "", password: "" })
    const [newAccount, setNewAccount] = useState({ password: "", email: "", username: "" })
    const [isSearch, setIsSearch] = useState(false)
    const [goodsSearch, setGoodsSearch] = useState([])
    const [dataSearch, setDataSearch] = useState({ collection: '', category: '', nameProduct: '' })
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        setIsPortfolio(1)
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
        navigate('/')
    }
    useEffect(() => {
        fetchCollecting()
            .then(result => {
                setItem(result)
                state.handleUpdateCategory(result)
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
            Swal.fire({
                title: 'Loading...',
                html: 'Please wait...',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
            fetchUserDetails(account.username, account.password)
                .then(result => {
                    if (result === 'Email does not exist') {
                        Swal.fire({
                            title: 'Login failed!',
                            text: 'This email does not exist, please try again!',
                            icon: 'error',
                            confirmButtonText: 'OK!'
                        })
                    }
                    else if (result === 'incorrect password') {
                        Swal.fire({
                            title: 'Login failed!',
                            text: 'Password is incorrect, please try again!',
                            icon: 'error',
                            confirmButtonText: 'OK!'
                        })
                    }
                    else {
                        localStorage.setItem("auth-token-user", JSON.stringify(result.token));
                        localStorage.setItem("user", JSON.stringify(result.user));
                        Swal.fire({
                            title: 'Logged in successfully!',
                            text: 'Welcome to the website!',
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
                                    title: 'Ops! Unable to connect to the server',
                                    text: 'Looks like your connection has a problem, try checking again!',
                                    icon: 'error',
                                    confirmButtonText: 'OK!'
                                })
                            })
                    }
                })
                .catch(err => {
                    Swal.fire({
                        title: 'Ops! Unable to connect to the server',
                        text: 'Looks like your connection has a problem, try checking again!',
                        icon: 'error',
                        confirmButtonText: 'OK!'
                    })
                })
        }
    }
    const getStateInputFormRegister = async (event) => {
        event.preventDefault();
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const time = `${hours}:${minutes}`;
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const today = `${year}-${month}-${day}`;
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
            Swal.fire({
                title: 'Loading...',
                html: 'Please wait...',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
            const { rePassword, ...data } = newAccount
            const newDate = {...data, createdDate:today, lastLogin:{time: time, date:today}}
            createNewUsers(newDate)
                .then(result => {
                    if (result === 'Email already exists') {
                        Swal.fire({
                            title: 'Registration failed!',
                            text: 'This email already exists, please try again!',
                            icon: 'error',
                            confirmButtonText: 'OK!'
                        })
                    } else {
                        localStorage.setItem("auth-token-user", JSON.stringify(result.token));
                        localStorage.setItem("user", JSON.stringify(result.user));
                        Swal.fire({
                            title: 'Sign Up Success!',
                            text: 'Welcome to website!',
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
                                    title: 'Ops! Unable to connect to the server',
                                    text: 'Looks like your connection has a problem, try checking again!',
                                    icon: 'error',
                                    confirmButtonText: 'OK!'
                                })
                            })
                    }
                })
                .catch(err => {
                    Swal.fire({
                        title: 'Ops! Unable to connect to the server',
                        text: 'Looks like your connection has a problem, try checking again!',
                        icon: 'error',
                        confirmButtonText: 'OK!'
                    })
                    console.log(err)
                })
        }

    }
    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            getStateInputFormLogin()
        }
    }
    const handleChoosePortfolio = () => {
        setIsPortfolio(isPortfolio + 1)
    }
    const handleChoosePortfolioCategory = (name) => {
        setIsPortfolio(isPortfolio + 1)
        const clickedItem = item.find((item) => item.name === name);
        if (clickedItem) {
            setCategory(clickedItem.category[0].collecting);
        }
    }
    const handleBackPortfolio = () => {
        setIsPortfolio(isPortfolio - 1)
    }
    const handleSearch = () => {
        setIsSearch(!isSearch)
    }
    const handleChangeSearch = (e) => {
        const { name, value } = e.target
        console.log(value)
        const clickedItem = item.find((item) => item.name === value);
        if (clickedItem) {
            setSearchCategory(clickedItem.category[0].collecting);
        }
        setDataSearch({ ...dataSearch, [name]: value })
    }
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        if (dataSearch.collection === '') {
            Swal.fire({
                title: 'Missing!',
                text: 'Please choice your collection want to search!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        } else if (dataSearch.nameProduct === '') {
            Swal.fire({
                title: 'Missing!',
                text: 'Please enter your goods want to search!',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        } else {
            setGoodsSearch(null)
            fetchSearchProduct(dataSearch)
                .then(result => {
                    setGoodsSearch(result.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    return (
        <div className={isPopupOpen ? "show-popup" : ''}>
            <header>
                <nav className="navbar">
                    <span className="hamburger-icon hamburger-btn material-symbols-rounded" width={20} height={20} style={{ fontSize: 30 }} onClick={toggleMenu}>&#8801;</span>
                    <NavLink to='/' className="logo">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <NavLink to='/' className="logo-res">
                        <img src={logo1} alt="logo" />
                    </NavLink>
                    <ul className={isMenuOpen ? "links show-menu" : "links"}>
                        {isPortfolio > 1 ? <span className="back-btn material-symbols-rounded" onClick={handleBackPortfolio}>&lt;</span> : null}
                        <span className="close-btn material-symbols-rounded" onClick={toggleMenu}>x</span>
                        <li className={isPortfolio === 2 || isPortfolio === 3 ? 'active-portfolio-true' : isPortfolio === 1 ? 'active-portfolio-false' : null}>
                            <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
                        </li>
                        <li className="dropdown" >
                            <a onClick={handleChoosePortfolio} href className={isPortfolio === 2 || isPortfolio === 3 ? 'active-portfolio-true' : isPortfolio === 1 ? 'active-portfolio-false' : null}>Product <span className='button-portfolio-website'>&gt;</span></a>
                            <ul className={isPortfolio === 2 || isPortfolio === 3 ? 'dropdown-menu deactivate-portfolio-true' : 'dropdown-menu deactivate-portfolio-false'} >
                                {item ? item.slice(0, isPortfolio === 3 ? 1 : item.length).map((item, index) => {
                                    return <li key={index} >
                                        <a onClick={() => handleChoosePortfolioCategory(item.name)} href className={isPortfolio === 3 ? 'active-portfolioCategory-true' : 'active-portfolioCategory-false'}>{item.name}</a>
                                        <ul className={'submenu-menu'}>
                                            {item.category[0].collecting.map((category, index) => {
                                                return <li key={index}>
                                                    <NavLink to={"/collectionDetail/" + category.name} state={{ category: category.name, collection: item.name.toLowerCase(), nameCategory: item.name, nameCollection: item.src }}>{category.name}</NavLink>
                                                </li>
                                            })}
                                        </ul>
                                        <ul className={isPortfolio === 3 ? 'active-submenu-menu-responsive' : 'submenu-menu-responsive'}>
                                            {category.map((category, index) => {
                                                return <li key={index}>
                                                    <NavLink onClick={toggleMenu} to={"/collectionDetail/" + category.name} state={{ category: category.name, collection: item.name.toLowerCase(), nameCategory: item.name, nameCollection: item.src }}>{category.name}</NavLink>
                                                </li>
                                            })}
                                        </ul>
                                        {/* <span className='button-portfolio'>&gt;</span> */}
                                    </li>
                                }) : null}
                            </ul>
                        </li>
                        <li className={isPortfolio === 2 || isPortfolio === 3 ? 'active-portfolio-true' : isPortfolio === 1 ? 'active-portfolio-false' : null}><NavLink to={'/guarantee'} onClick={toggleMenu}>Guarantee</NavLink></li>
                        <li className={isPortfolio === 2 || isPortfolio === 3 ? 'active-portfolio-true' : isPortfolio === 1 ? 'active-portfolio-false' : null}><NavLink to={'/instalment'} onClick={toggleMenu}>Instalment</NavLink></li>
                        <li className={isPortfolio === 2 || isPortfolio === 3 ? 'active-portfolio-true' : isPortfolio === 1 ? 'active-portfolio-false' : null}><NavLink to={'/hotline'} onClick={toggleMenu}>About us</NavLink></li>
                        <li className={isPortfolio === 2 || isPortfolio === 3 ? 'active-portfolio-true' : isPortfolio === 1 ? 'active-portfolio-false' : null}>
                            <img className='search-icon' src={logoSearch} alt='' onClick={handleSearch} />
                        </li>
                    </ul>
                    {JSON.parse(localStorage.getItem('auth-token-user')) ?
                        <span className="logged-btn">
                            <NavLink className="logged-content" to="/account">
                                <img alt="" width={25} height={25} src={user} />
                                <div className="logged-text">{
                                    JSON.parse(localStorage.getItem('user'))[1]
                                }</div>
                            </NavLink>|
                            <NavLink to={'/cart'} className="cart-content">
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
            <div id="myOverlay" className="overlay" style={{ display: isSearch ? 'block' : 'none' }}>
                <span className="closebtn" onClick={handleSearch} title="Close Overlay">×</span>
                <div className="overlay-content">
                    <form>
                        <div className='row'>
                            <div className="col-md-12" style={{ width: '50%', margin:20 }}>
                                <h1>Search</h1>
                            </div>
                            <div className="col-md-6 select-field" style={{ width: '50%' }}>
                                <select className="field-input" name="collection" onChange={(e) => handleChangeSearch(e)} value={searchCollection} style={{ padding: 15 }}>
                                    <option data-code="null" value="null">
                                        Select collection </option>
                                    {item ? item.map((item, index) => {
                                        return <option key={index} value={item.src}>{item.name}</option>
                                    }) : null}
                                </select>
                            </div>
                            <div className="col-md-6 select-field" style={{ width: '50%' }}>
                                <select className="field-input" onChange={(e) => handleChangeSearch(e)} name="category" style={{ padding: 15 }}>
                                    <option data-code="null" value="">
                                        Select category </option>
                                    {searchCategory.map((item, index) => {
                                        return <option key={index} value={item.name}>{item.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="input-field">
                            <input name='nameProduct' onChange={(e) => handleChangeSearch(e)} type="text" required />
                            <label>Search name</label>
                            <button onClick={handleSubmitSearch} style={{ margin: 0 }}><i className="fa fa-search" /></button>
                        </div>
                    </form>
                    <div className='row d-flex goods-search'>
                        {goodsSearch ? goodsSearch.map((item, index) => {
                            return <div key={index} className='col-md-3 mt-4 mb-4 goods-search-single'>
                                <div className='goods-search-card'>
                                    <div className='goods-search-single-content'>
                                        <img src={goods2} alt='' />
                                        <h1 style={{ fontSize: 13 }}>{item.nameProduct}</h1>
                                        <h1 style={{ fontSize: 13 }}>{formatter.format(item.nowPrice)} VNĐ</h1>
                                        <NavLink to={"/products/" + item.src}><button type='button' style={{ color: "white" }} onClick={handleSearch}>Show</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        }) : <div class="lds-hourglass"></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
