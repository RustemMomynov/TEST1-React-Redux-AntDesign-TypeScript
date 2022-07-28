import { Button, Checkbox, DatePicker, Form, Input } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";

const EventForm: FC = () => {
  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item
        label="Описание события"
        name="discription"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Дата события">
        <DatePicker />
      </Form.Item>
    </Form>
  );
};

export default EventForm;
