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
			<div className={styles.cardUpper}>
				<img src={product.image} className={styles.img}></img>
			</div>
			<div className={styles.cardLower}>
				<h2 className={styles.title}>{product.title}</h2>
				<h2 className={styles.price}>£{product.price}</h2>
				<h3 className={styles.category}>{product.category}</h3>
				<p className={styles.description}>{product.description}</p>
				<button onClick={() => handleAddToBasket(product)}>
					Add to Basket
				</button>
			</div>
		</div>
	);
};
