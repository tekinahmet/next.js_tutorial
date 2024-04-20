import Link from "next/link";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { MdEdit, MdDelete  } from "react-icons/md";
import DeleteProductButton from "./delete-product-button";

const DashboardProducts = ({ products }) => {
	return (
		<Table striped bordered hover responsive>
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Category</th>
					<th>Price</th>
					<th style={{width: "150px"}}></th>
				</tr>
			</thead>
			<tbody>
				{products.map((item, index) => (
					<tr key={item.id}>
						<td>{index + 1}</td>
						<td>{item.title}</td>
						<td>{item.category}</td>
						<td>${item.price}</td>
                        <td>
							<Link className="btn" href={`/dashboard/products/${item.id}`}><MdEdit/></Link>
							<DeleteProductButton id={item.id}/>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default DashboardProducts;