import React from 'react';
import {Form, Input} from "antd";
import {Button, Block} from "../../../components";
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {validateField} from "../../../utils/helpers";

const LoginForm = props => {
    const {
        values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            isSubmitting
    } = props;
        return (
            <div>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item
                            validateStatus={validateField('email', touched, errors)}
                            help={!touched.email ? '' : errors.email}
                            hasFeedback
                        >
                            <Input
                                id='email'
                                prefix={<MailOutlined className="site-form-item-icon" />}
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={validateField('password', touched, errors)}
                            help={!touched.password ? '' : errors.password}
                            hasFeedback
                        >
                            <Input
                                id='password'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="password"
                                size='large'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item>
                            {isSubmitting && !isValid && <span>Error</span>}
                            <Button
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                size='large'
                            >
                                Login
                            </Button>
                        </Form.Item>
                        <Link className='auth--register-link' to='/register'>
                            Registration
                        </Link>
                    </Form>
                </Block>
            </div>
        )
};

export default LoginForm;
