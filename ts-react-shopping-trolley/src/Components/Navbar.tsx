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
		<div className="fixed top-0 w-screen h-20 bg-stone-700 flex items-center justify-between pr-10 pl-2">
			<h1 className="text-7xl text-white">Typesafesbury's</h1>
			<Drawer
				basketItems={basketItems}
				handleAddToBasket={handleAddToBasket}
				handleRemoveFromBasket={handleRemoveFromBasket}
			/>
		</div>
	);
};

export default Navbar;
