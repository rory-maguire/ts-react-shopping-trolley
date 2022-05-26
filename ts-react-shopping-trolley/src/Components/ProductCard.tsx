import React from "react";
import { IProduct } from "../Interfaces";

interface IProps {
	products: IProduct[];
	handleAddToBasket: (product: IProduct) => void;
}

export const ProductCard: React.FC<IProps> = ({
	products,
	handleAddToBasket,
}) => {
	return <div>ProductCard</div>;
};
