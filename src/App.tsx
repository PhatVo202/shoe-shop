import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from './store/config';
import { HomeLayout } from './layouts/home/HomeLayout';
import { fetchProductAction } from './store/reducer/productReducer';

function App() {
  const dispatch = useDispatch<RootDispatch>();
  // const products = useSelector((state: RootState) => state.productReducer.products)
  // useEffect(() => {
  //   dispatch(fetchProductAction())
  // }, [])

  // console.log(products)
  // console.log(products.content)

  return (
    <div className="App">
      <HomeLayout />
    </div>
  );
}

export default App;
