import React, { ReactElement } from "react";
import { IProduct } from "../Interfaces";
import styles from "../Styles/ProductCard.module.css";

interface IProps {
	product: IProduct;
	handleAddToBasket: (product: IProduct) => void;
}

export const ProductCard: React.FC<IProps> = ({
	product,
	handleAddToBasket,
}) => {
	return (
		<div className={styles.container}>
			<img className={styles.img}>{product.image}</img>
			<h2 className={styles.title}>{product.title}</h2>
			<h2 className={styles.price}>{product.price}</h2>
			<h5 className={styles.category}>{product.category}</h5>
			<p className={styles.description}>{product.description}</p>
			<button onClick={() => handleAddToBasket(product)}>Add to Basket</button>
		</div>
	);
};
