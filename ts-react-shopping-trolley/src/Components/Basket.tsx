import { IProduct } from "../Interfaces/index";

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
	return <div></div>;
};
