import React from "react";
import { IProduct } from "../Interfaces";

interface IProps {
	product: IProduct;
	handleAddToBasket: (product: IProduct) => void;
	handleRemoveFromBasket: (id: number) => void;
}
export const BasketItem: React.FC<IProps> = () => {
	return <div></div>;
};

export default BasketItem;
