import React from "react";
import styles from "../Styles/Navbar.module.css";
import Drawer from "../Components/Drawer";
import { IProduct } from "../Interfaces";

interface IProps {
	basketItems: IProduct[];
	handleAddToBasket: (product: IProduct) => void;
	handleRemoveFromBasket: (id: number) => void;
}
const Navbar: React.FC<IProps> = ({ basketItems }) => {
	return (
		<div className={styles.navbarContainer}>
			<h1 className={styles.title}>Typesafesbury's</h1>
			<Drawer
				basketItems={basketItems}
				handleAddToBasket={handleAddToBasket}
				handleRemoveFromBasket={handleRemoveFromBasket}
			/>
		</div>
	);
};

export default Navbar;
