import { Button, Checkbox, Form, Input } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const submit = () => {
    alert("yes");
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={submit}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Пожалуйста введите имя пользователя")]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Пожалуйста введите пароль")]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
