import React, { useEffect, useState } from 'react'
import { Header } from '../../components/header/Header'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { fetchProfileApi, signInApi } from '../../servers/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../../store/config';
import { fetchProfileAction, getUserInfo, removeUseInfo } from '../../store/reducer/userReducer';
export const Login: React.FC = () => {
    const [state, setState] = useState()
    const dispatch = useDispatch<RootDispatch>();
    const userInfo = useSelector((state: RootState) => state.userReducer.userInfo);

    // const accessToken: string = userInfo.accessToken
    // console.log(accessToken)
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
            // dispatch(fetchProfileAction(userInfo.accessToken))
        } catch (error) {
            notification.error({
                message: "Error email or password"
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
                            <Button type='default'>Register</Button>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </>
    )
}
