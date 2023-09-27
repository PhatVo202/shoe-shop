import React, { useEffect, useState } from 'react';
import "./style.css"
import { Button, Input } from 'antd';
import Search from 'antd/es/input/Search';
import { useDispatch } from 'react-redux';
import { fetchKeyProductAction } from '../../store/reducer/productReducer';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
export const Header = (): JSX.Element => {
    const dispatch = useDispatch();
    const [pinCode, setPinCode] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setPinCode(e.target.value)
    }
    useEffect(() => {
        const getData = setTimeout(() => {
            // dispatch(fetchKeyProductAction(pinCode))
        }, 500);
        return () => clearTimeout(getData)
    }, [pinCode])
    return (
        <div className="container-lg">
            <nav className="navbar navbar-expand-sm navbar-light bg-light ">
                <a className="navbar-brand" href="#">
                    <img width={150} height={100} src="./img/logo.png" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className='mr-1' style={{ position: "relative" }}>
                            {/* <ShoppingCartOutlined size={50} style={{ textAlign: "center", width: 50, height: 50 }} /> */}
                            <FontAwesomeIcon icon={faCartShopping} style={{ color: "ff4d4f" }} size='lg' />
                            <p className='card' style={{ position: "absolute", top: -10, right: 0, width: "1px", height: "1px", color: "black" }}>1</p>
                        </li>
                        <li className="nav-item">
                            <Input.Search placeholder='input' onChange={handleChange} />
                            {/* <Search placeholder="input search text" style={{ width: 200 }} onSearch={handleSearch}
                            /> */}
                        </li>
                        <li className="nav-item ml-2">
                            <Button block>Đăng nhập</Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}
