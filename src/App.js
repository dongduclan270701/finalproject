import './App.css';
import React, { useState, useContext, memo } from 'react';
import HeaderMain from 'components/Header/Header-main'
import Login from 'components/Login'
import Register from 'components/Register'
import Banner from 'components/Content/Banner'
import Footer from 'components/Footer/Footer-main'
import Homepage from 'components/Content/Homepage'
import ProductSale from 'components/Pages/Product-sale'
import Installment from 'components/Pages/Installment'
import Guarantee from 'components/Pages/Guarantee'
import Pay from 'components/Pages/Pay'
import Ship from 'components/Pages/Ship'
import Showroom from 'components/Pages/Showroom'
import Hotline from 'components/Pages/Hotline'
import CollectionDetail from 'components/Content/Collection-Detail'
import CollectionNoDetail from 'components/Content/Collection-NoDetail'
import Product from 'components/Content/Product'
import Cart from 'components/Content/Cart'
import PayOrder from 'components/Content/Pay-order'
import Account from 'components/Content/Account'
import Order from 'components/Content/Information-order'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import 'assets/scss/Header/Header-main.scss'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <HeaderMain /><Banner/>
            <Homepage/>
            <Footer/>
          </>
        } />
        <Route path='/login' element={
          JSON.parse(localStorage.getItem('auth-token-user'))?
          <Navigate to={-1} />
          :
          <>
            <HeaderMain /><Banner/>
            <Login/>
            <Footer/>
          </>
        } />
        <Route path='/register' element={
          JSON.parse(localStorage.getItem('auth-token-user'))?
          <Navigate to={-1} />
          :
          <>
            <HeaderMain /><Banner/>
            <Register/>
            <Footer/>
          </>
        } />
        <Route path='/account' element={
          JSON.parse(localStorage.getItem('auth-token-user')) ?
          <>
          <HeaderMain /><Banner/>
            <Account/>
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
        <Route path='/collectionNoDetail/:codeCollectionNoDetail' element={
          <>
            <HeaderMain /><Banner/>
            <CollectionNoDetail />
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
        } />
        
      </Routes>

    </Router>
  );
}

export default memo(App);