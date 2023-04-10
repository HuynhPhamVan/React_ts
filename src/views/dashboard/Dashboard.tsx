import {
	Button,
	Col,
	Image,
	Row,
	Space,
	Table,
	Typography,
	message,
} from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../interfaces/products';
import axios from 'axios';
import { getProducts } from '../../api/products';

const Dashboard: React.FC = () => {
	const navigate = useNavigate();
	const [messageApi, contextHolder] = message.useMessage();
	const columns: ColumnsType<IProduct> = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
	
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price',
		},
	
		{
			title: 'Image',
			dataIndex: 'Image',
			key: 'Image',
			render: (_, record: IProduct) => (
				<Image
					src={record.image}
					alt="image"
					style={{ height: '150px', width: '150px', objectFit: 'cover' }}
				/>
			),
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Link to={`/admin/product/edit/${record._id}`}>
						<Button type="primary">
							<EditOutlined />
						</Button>
					</Link>
					<Button danger onClick={() => handleDelete(record._id)}>
						<DeleteOutlined />
					</Button>
				</Space>
			),
		},
	];
	const [products, setProducts] = useState<IProduct[]>([]);
	const handleDelete = async (id: string) => {
		alert("Bạn có chắc muốn xóa sản phẩm")
		setProducts(products.filter((product) => product._id !== id));
			const response = await axios.delete(
				`http://localhost:8075/api/products/${id}`,
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

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProducts();
				if (response.status === 200) {
					setProducts(
						response.data.map((product: IProduct) => ({
							...product,
							key: product._id,
						}))
					);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, []);
	return (
		<>
			{contextHolder}
			<Row>
				<Col span={24}>
					<Typography.Title level={3}>Quản lý sản phẩm</Typography.Title>
				</Col>
				<Col span={24}>
					<Link to="/admin/product/add">
						<Button type="primary">
							<PlusOutlined />
							Add Products
						</Button>
					</Link>
				</Col>
				<Col span={24} style={{ marginTop: '20px' }}>
					<Table columns={columns} dataSource={products} />
				</Col>
			</Row>
		</>
	);
};

export default Dashboard;
