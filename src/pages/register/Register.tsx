import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Header } from '../../components/header/Header';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { registerApi } from '../../servers/user';
import { useDispatch } from 'react-redux';
import { RootDispatch } from '../../store/config';
import { getRegisterUser } from '../../store/reducer/userReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
    const dispatch = useDispatch<RootDispatch>();
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        const data = {
            email: values.email,
            password: values.password,
            name: values.name,
            gender: gender,
            phone: values.phone
        };
        try {
            const result = await registerApi(data)
            dispatch(getRegisterUser(result.data.content))
            toast.success('Register success👌!!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/login")
        } catch (error: any) {
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
    }
    const [gender, setGender] = useState(true);

    const onChange = (e: RadioChangeEvent) => {
        setGender(e.target.value);
    };

    return (
        <>
            <Header />
            <div className='container-lg'>
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
                            <Input
                                size='large'
                                prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                size='large'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input
                                size='large'
                                prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
                        </Form.Item>
                        <Form.Item>
                            <Radio.Group onChange={onChange} value={gender}>
                                <Radio value={true}>Male</Radio>
                                <Radio value={false}>Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input
                                size='large'
                                prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <ToastContainer />

            </div>
        </>

    )
}
