import './App.css';
import React, { useState, useContext, memo } from 'react';
// import HeaderMain from 'components/Header/Header-main'
import Login from 'components/Login'
// import Register from 'components/Register'
// import Banner from 'components/Content/Banner'
// import Footer from 'components/Footer/Footer-main'
// import Homepage from 'components/Content/Homepage'
// import ProductSale from 'components/Pages/Product-sale'
// import Installment from 'components/Pages/Installment'
// import Guarantee from 'components/Pages/Guarantee'
// import Pay from 'components/Pages/Pay'
// import Ship from 'components/Pages/Ship'
// import Showroom from 'components/Pages/Showroom'
// import Hotline from 'components/Pages/Hotline'
// import CollectionDetail from 'components/Content/Collection-Detail'
// import Product from 'components/Content/Product'
// import Cart from 'components/Content/Cart'
// import PayOrder from 'components/Content/Pay-order'
// import Account from 'components/Content/Account'
// import Order from 'components/Content/Information-order'
// import Rating from 'components/Content/Account/OrderDetails/Rating'
import Header from 'components/Header'
import Homepage from 'components/Content/HomePageNew'
import Footer from 'components/Footer'
import Cart from 'components/Content/CartNew'
import PayOrder from 'components/Content/Pay-orderNew'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Homepage />
            <Footer />
          </>
        } />
        <Route path='/cart' element={
          <>
            <Header />
            <Cart />
            <Footer />
          </>
        } />
        <Route path='/pay-order' element={
          <>
            <Header />
            <PayOrder />
            <Footer />
          </>
        } />
        {/* <Route path='/' element={
          <>
            <HeaderMain /><Banner/>
            <Homepage/>
            <Footer/>
          </>
        } /> */}
        {/* <Route path='/login' element={
          JSON.parse(localStorage.getItem('auth-token-user'))?
          <Navigate to={-1} />
          :
          <>
            <Login/>
          </>
        } /> */}
        {/* <Route path='/register' element={
          JSON.parse(localStorage.getItem('auth-token-user'))?
          <Navigate to={-1} />
          :
          <>
            <Register/>
          </>
        } />
        <Route path='/account' element={
          JSON.parse(localStorage.getItem('auth-token-user')) ?
          <>
          <HeaderMain /><Banner/>
            <Account Fragment="Information"/>
            <Footer/>
          </>
          :
          <>
            <HeaderMain /><Banner/>
            <Login/>
            <Footer/>
          </>
        } />
        <Route path='/account/order' element={
          JSON.parse(localStorage.getItem('auth-token-user')) ?
          <>
          <HeaderMain /><Banner/>
            <Account Fragment="Order"/>
            <Footer/>
          </>
          :
          <>
            <HeaderMain /><Banner/>
            <Login/>
            <Footer/>
          </>
        } />
        <Route path='/account/order/:id' element={
          JSON.parse(localStorage.getItem('auth-token-user')) ?
          <>
          <HeaderMain />
          <Banner/>
            <Account Fragment="OrderDetails"/>
            
            <Footer/>
          </>
          :
          <>
            <HeaderMain /><Banner/>
            <Login/>
            <Footer/>
          </>
        } />
        <Route path='/information-order' element={
          <>
          <HeaderMain /><Banner/>
            <Order/>
            <Footer/>
          </>
        } />
        <Route path='/cart' element={
          <>
            <HeaderMain /><Banner/>
            <Cart/>
            <Footer/>
          </>
        } />
        <Route path='/pay-order' element={
          <>
            <PayOrder/>
          </>
        } />
        <Route path='/collectionDetail/:codeCollectionDetail' element={
          <>
            <HeaderMain /><Banner/>
            <CollectionDetail />
            <Footer/>
          </>
        } />
        <Route path='/products/:src' element={
          <>
            <HeaderMain /><Banner/>
            <Product />
            <Footer/>
          </>
        } />
        <Route path='/product-sales' element={
          <>
            <ProductSale/>
          </>
        } />
        <Route path='/installment' element={
          <>
            <Installment/>
          </>
        } />
        <Route path='/guarantee' element={
          <>
            <Guarantee/>
          </>
        } />
        <Route path='/pay' element={
          <>
            <Pay/>
          </>
        } />
        <Route path='/ship' element={
          <>
            <Ship/>
          </>
        } />
        <Route path='/showroom' element={
          <>
            <Showroom/>
          </>
        } />
        <Route path='/hotline' element={
          <>
            <Hotline/>
          </>
        } /> */}

      </Routes>

    </Router>
  );
}

export default memo(App);