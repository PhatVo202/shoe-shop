import React from 'react'
import { Header } from '../../components/header/Header'
import { Product } from '../../pages/product/Product'
import { Carousels } from '../../components/carousel/Carousel'

export const HomeLayout = (): JSX.Element => {
    return (
        <div>
            <Header />
            <Carousels />
            <Product />
        </div>
    )
}
