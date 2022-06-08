import { IProduct } from "../Interfaces";

interface IProps {
	product: IProduct;
	handleAddToBasket: (product: IProduct) => void;
}

export const ProductCard: React.FC<IProps> = ({
	product,
	handleAddToBasket,
}) => {
	return (
		<div className="w-80 m-8 my-10 bg-red-400">
			<div className="max-h-75 w-fit p-8 border-8">
				<img className="rounded-lg" src={product.image}></img>
			</div>
			<div>
				<h2>{product.title}</h2>
				<h2>£{product.price}</h2>
				<h3>{product.category}</h3>
				<p>{product.description}</p>
				<button onClick={() => handleAddToBasket(product)}>
					Add to Basket
				</button>
			</div>
		</div>
	);
};
