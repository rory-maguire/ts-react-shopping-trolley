import { IProduct } from "../Interfaces/index";
import { Routes, Route, Link } from "react-router-dom";

interface IProps {
	basketItems: IProduct[];
	handleAddToBasket: (product: IProduct) => void;
	handleRemoveFromBasket: (id: number) => void;
}

export const Basket: React.FC<IProps> = ({
	basketItems,
	handleAddToBasket,
	handleRemoveFromBasket,
}) => {
	return (
		<div>
			<Link to="/Home">Home</Link>
		</div>
	);
};
