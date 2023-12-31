import React, { useEffect } from 'react'
import { Header } from '../../components/header/Header'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, } from 'antd';
import { signInApi } from '../../servers/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../../store/config';
import { fetchProfileAction, getUserInfo } from '../../store/reducer/userReducer';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Login: React.FC = () => {
    const dispatch = useDispatch<RootDispatch>();
    const userInfo = useSelector((state: RootState) => state.userReducer.userInfo);

    useEffect(() => {
        dispatch(fetchProfileAction(userInfo.accessToken))
    }, [userInfo.accessToken])

    const onFinish = async (values: any) => {
        const data = {
            email: values.email,
            password: values.password,
        };
        try {
            const result = await signInApi(data);
            dispatch(getUserInfo(result.data.content));
            toast.success('Logged in successfully👌!!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error: any) {
            console.log(error.response.data)
            toast.error(`${error.response.data.message} 🤯`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    };

    return (
        <>
            <div className='container-lg'>
                <Header />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <Link to={"/register"}>register now!</Link>
                        </Form.Item>
                    </Form>
                </div>
                <ToastContainer />
            </div>


        </>
    )
}
