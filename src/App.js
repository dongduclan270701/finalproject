import './App.css';
import React, { useState } from 'react';
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
import {
  BrowserRouter as Router,
  Routes,
  Route
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
          <>
            <HeaderMain /><Banner/>
            <Login/>
            <Footer/>
          </>
        } />
        <Route path='/register' element={
          <>
            <HeaderMain /><Banner/>
            <Register/>
            <Footer/>
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
        <Route path='/products/:codeProduct' element={
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

export default App;