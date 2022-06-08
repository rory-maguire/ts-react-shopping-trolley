import React from "react";
import Drawer from "../Components/Drawer";
import { IProduct } from "../Interfaces";

interface IProps {
	basketItems: IProduct[];
	handleAddToBasket: (product: IProduct) => void;
	handleRemoveFromBasket: (id: number) => void;
}
const Navbar: React.FC<IProps> = ({
	basketItems,
	handleAddToBasket,
	handleRemoveFromBasket,
}) => {
	return (
		<div>
			<h1 className="text-emerald-500">Typesafesbury's</h1>
			<Drawer
				basketItems={basketItems}
				handleAddToBasket={handleAddToBasket}
				handleRemoveFromBasket={handleRemoveFromBasket}
			/>
		</div>
	);
};

export default Navbar;
