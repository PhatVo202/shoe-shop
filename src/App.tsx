import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from './store/config';
import { HomeLayout } from './layouts/home/HomeLayout';
import { fetchProductAction } from './store/reducer/productReducer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';

function App() {
  const dispatch = useDispatch<RootDispatch>();
  // const products = useSelector((state: RootState) => state.productReducer.products)
  // useEffect(() => {
  //   dispatch(fetchProductAction())
  // }, [])

  // console.log(products)
  // console.log(products.content)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
