import React from "react";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";

const ProductDetails = ({ params, searchParams }) => {
	console.log(searchParams);
	console.log(params);

	if (params.id > 100) notFound();

	return (
		<div>
			<PageHeader title="Product Detail" />
		</div>
	);
};

export default ProductDetails;
