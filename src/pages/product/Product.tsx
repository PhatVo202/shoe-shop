import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootDispatch, RootState } from '../../store/config'
import { fetchKeyProductAction, fetchProductAction } from '../../store/reducer/productReducer'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Button, Card, Segmented, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { Text, Link } = Typography;

export const Product: React.FC = () => {
    const products = useSelector((state: RootState) => state.productReducer.products);
    const dispatch = useDispatch<RootDispatch>();
    const { Meta } = Card;
    useEffect(() => {
        dispatch(fetchProductAction())
    }, [])

    const [clickedHearts, setClickedHearts] = useState(Array(products.length).fill(false));
    const handleHeartClick = (index: number) => {
        const newClickedHearts = [...clickedHearts];
        newClickedHearts[index] = !newClickedHearts[index]; // Đảo ngược trạng thái click của sản phẩm tương ứng
        setClickedHearts(newClickedHearts);
    };

    const renderCard = () => {
        return products?.map((shoe, index) => {
            return <div className="col-3 my-4" key={index} style={{ position: "relative" }}>
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
                <span style={{ position: "absolute", top: 10, right: 25, cursor: "pointer", fontSize: "20px" }}>
                    <FontAwesomeIcon style={clickedHearts[index] ? { color: "red" } : { color: "gray" }} onClick={() => handleHeartClick(index)} icon={faHeart} />
                </span>
            </div>
        })
    }
    const handleSelectedType = (keyword: string) => {
        dispatch(fetchKeyProductAction(keyword))
    }

    return (
        <>

            <div className="container">
                <Segmented className='mt-3' size="large" options={['nike', 'adidas', 'vans', 'converse']} onChange={(e) => handleSelectedType(e.toString())} />
                {/* <button onClick={() => handleSelectedType("adidas")} className='btn btn-primary'>Adidas</button>
                <button onClick={() => handleSelectedType("nike")} className='btn btn-success'>Nike</button>
                <button onClick={() => handleSelectedType("vans")} className='btn btn-primary'>Vans</button>
                <button onClick={() => handleSelectedType("converse")} className='btn btn-success'>Converse</button> */}
                <div className="row">

                    {renderCard()}
                </div>
            </div >
        </>
    )
}
