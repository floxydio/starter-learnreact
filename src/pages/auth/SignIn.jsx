import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import ContainerCenter from '../../components/ContainerCenter';
import { routerPages } from '../../navigator/Router';

export default function Signin() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <ContainerCenter>
                <Form
                    name="basic"

                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <p style={{
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>Username</p>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >

                        <Input />
                    </Form.Item>
                    <p style={{
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>Password</p>
                    <Form.Item
                        name="password"

                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <p>Dont have an account? <span onClick={() => {
                        routerPages.navigate("/sign-up")
                    }} style={{
                        fontWeight: 'bold',
                        color: '#4096FF',
                        cursor: 'pointer'
                    }}>Sign Up</span></p>
                    <Form.Item
                    >
                        <Button style={{
                            height: 50,
                            width: "100%",
                            borderRadius: 10,
                            marginTop: 20,
                            marginRight: 'auto'

                        }} type="primary" htmlType="submit" >
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>

            </ContainerCenter>

        </>
    )
}
