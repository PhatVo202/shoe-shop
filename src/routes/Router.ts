import React from 'react'
import { useRoutes } from 'react-router-dom'
import { HomeLayout } from '../layouts/home/HomeLayout';


export const Router = () => {
  const routing = useRoutes([
    {
        path:"/",
        
    }
  ]);
  return routing;
}
