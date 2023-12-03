import './App.css';
import React, { memo } from 'react';
import Header from 'components/Header'
import Homepage from 'components/Content/HomePageNew'
import Footer from 'components/Footer'
import Cart from 'components/Content/CartNew'
import PayOrder from 'components/Content/Pay-orderNew'
import CollectionDetail from 'components/Content/Collection-DetailNew'
import Product from 'components/Content/ProductNew'
import Account from 'components/Content/AccountNew'
import Hotline from 'components/Content/About'
import Instalment from 'components/Content/Instalment'
import Guarantee from 'components/Content/Guarantee'
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
        <Route path='/collectionDetail/:collection/:codeCollectionDetail' element={
          <>
            <Header />
            <CollectionDetail />
            <Footer />
          </>
        } />
        <Route path='/products/:collection/:src' element={
          <>
            <Header />
            <Product />
            <Footer />
          </>
        } />
        <Route path='/account' element={
          <>
            <Header />
            <Account Fragment="Information" />
            <Footer />
          </>
        } />
        <Route path='/account/notification' element={
          <>
            <Header />
            <Account Fragment="Notification" />
            <Footer />
          </>
        } />
        <Route path='/account/order' element={
          <>
            <Header />
            <Account Fragment="Order" />
            <Footer />
          </>
        } />
        <Route path='/account/order/:id' element={
          <>
            <Header />
            <Account Fragment="OrderDetails" />
            <Footer />
          </>
        } />
        <Route path='/account/updatePassword' element={
          <>
            <Header />
            <Account Fragment="UpdatePassword" />
            <Footer />
          </>
        } />
        <Route path='/hotline' element={
          <>
            <Header />
            <Hotline />
            <Footer />
          </>
        } />
        <Route path='/instalment' element={
          <>
            <Header />
            <Instalment />
            <Footer />
          </>
        } />
        <Route path='/guarantee' element={
          <>
            <Header />
            <Guarantee />
            <Footer />
          </>
        } />
      </Routes>

    </Router>
  );
}

export default memo(App);