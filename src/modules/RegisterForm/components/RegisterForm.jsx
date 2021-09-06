import React from 'react';
import {Form, Input} from "antd";
import {Button, Block} from "../../../components";
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {validateField} from "../../../utils/helpers";

const success = false;

const RegisterForm = props => {
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
            <div className='auth__top'>
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                { !success ? (
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
                        <Form.Item>
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                type="user"
                                placeholder="Your Name"
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
                        <Form.Item
                            validateStatus={validateField('password', touched, errors)}
                            help={!touched.password ? '' : errors.password}
                            hasFeedback
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password2"
                                placeholder="Again password"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item>
                            {isSubmitting && !isValid && <span>Error!</span>}
                            <Button
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                size='large'
                            >
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link className='auth--register-link' to='/login'>
                            Войти в аккаунт
                        </Link>
                    </Form>
                ) : (
                    <div className='auth__success-block'>
                        <div><InfoCircleOutlined /></div>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На вашу почту отправленно письмо с подтверждением аккаунта.</p>
                    </div>
                )}
            </Block>
        </div>
    )
};

export default RegisterForm;
