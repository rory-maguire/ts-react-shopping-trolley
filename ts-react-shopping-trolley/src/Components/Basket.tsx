import { IProduct } from "../Interfaces/index";
import { ProductCard } from "./ProductCard";

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
			<>
				{basketItems.length === 0 ? <p>Basket is empty...</p> : null}
				{basketItems.map((product) => {
					return (
						<ProductCard
							product={product}
							handleAddToBasket={handleAddToBasket}
							key={product.id}
						/>
					);
				})}
			</>
		</div>
	);
};
