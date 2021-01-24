import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import { IFormProps } from '../interface/item.interface';

const ItemForm: React.FC<IFormProps> = (props: IFormProps) => {
  const [form] = Form.useForm();

  return (
    <Form
      onFinish={props.onSubmit}
      form={form}
      layout="vertical"
    >
      <Form.Item name="todo" label="Todo" required>
        <Input placeholder="Todo" />
      </Form.Item>
      <Form.Item name="checked" valuePropName="checked">
        <Checkbox>Checked</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default ItemForm;