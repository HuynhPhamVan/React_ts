import { Button, Form, Input, message } from 'antd';

import { IProduct } from '../../interfaces/products';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add: React.FC = () => {
	const navigate = useNavigate();
	const [messageApi, contextHolder] = message.useMessage();
	const onFinish = async (values: IProduct) => {
	
			const data = { ...values, categoryId: '642c3484ce80f2f8f722005f' };
			const token = localStorage.getItem('token');
			console.log('🚀 ~ file: Add.tsx:15 ~ onFinish ~ token:', token);
			/* theem san pham */
			alert("Thêm thành công")
			const response = await axios.post(
				`http://localhost:8075/api/products`,
				data,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			);
			
			if (response.data) {
				messageApi.open({
					type: 'success',
					content: 'success',
				});
				navigate('/admin/products');
			}
		} 
		
	
	return (
		<>
			{contextHolder}
			<Form
				name="basic"
				autoComplete="off"
				layout="vertical"
				onFinish={onFinish}
			>
				<Form.Item
					label="product name"
					name="name"
					rules={[
						{ required: true, message: 'Vui lòng nhập tên !' },
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="price"
					name="price"
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập giá!',
						},
					]}
				>
					<Input type="number" />
				</Form.Item>

				<Form.Item
					label="image"
					name="image"
					rules={[
						{
							required: true,
							message: 'vui lòng chọn ảnh!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="description"
					name="description"
					rules={[
						{
							required: true,
							message: 'vui lòng điền mô tả!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						style={{ width: '100%', marginTop: '20px' }}
					>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default Add;
