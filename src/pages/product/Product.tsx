import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootDispatch, RootState } from '../../store/config'
import { fetchKeyProductAction, fetchProductAction } from '../../store/reducer/productReducer'

import { Button, Card, Space, Typography } from 'antd';
const { Text, Link } = Typography;

export const Product = (): JSX.Element => {
    const products = useSelector((state: RootState) => state.productReducer.products);
    const dispatch = useDispatch<RootDispatch>();
    const { Meta } = Card;
    useEffect(() => {
        dispatch(fetchProductAction())
    }, [])
    console.log(products)
    const renderCard = () => {
        return products?.map((shoe, index) => {
            return <div className="col-3 my-4" key={index}>
                <Card
                    hoverable
                    cover={<img alt="example" src={shoe.image} />}
                >
                    <Meta title={shoe.name} description={shoe.description.length > 100 ? shoe.description.substring(0, 100) + "..." : shoe.description} />
                    <Text type="danger"><h4 style={{ color: "#ff4d4f" }}>${shoe.price}</h4></Text>

                    <Button block>
                        Mua ngay
                    </Button>

                </Card>
            </div>
        })
    }
    const handleSelectedType = (keyword: string) => {
        dispatch(fetchKeyProductAction(keyword))
    }
    return (
        <>
            <div className="container">
                <button onClick={() => handleSelectedType("adidas")} className='btn btn-primary'>Adidas</button>
                <button onClick={() => handleSelectedType("nike")} className='btn btn-success'>Nike</button>
                <button onClick={() => handleSelectedType("vans")} className='btn btn-primary'>Vans</button>
                <button onClick={() => handleSelectedType("converse")} className='btn btn-success'>Converse</button>
                <div className="row">

                    {renderCard()}
                </div>
            </div >
        </>
    )
}
