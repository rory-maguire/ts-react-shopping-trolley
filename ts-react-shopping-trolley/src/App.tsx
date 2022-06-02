import { useState } from "react";
import { useQuery } from "react-query";

import styles from "./Styles/App.module.css";

//components
import { ProductCard } from "./Components/ProductCard";
import Navbar from "./Components/Navbar";

//interfaces
import { IProduct } from "./Interfaces";

//the fetch call will return to us a promise of the IProduct shape (array)

const getItems = async (): Promise<IProduct[]> => {
	const res = await fetch("https://fakestoreapi.com/products");
	const data: IProduct[] = await res.json();
	return data;
};

function App() {
	const [basketItems, setBasketItems] = useState<IProduct[]>([]);
	const { data, isLoading, error } = useQuery<IProduct[]>("Products", getItems);

	const handleAddToBasket = (item: IProduct) => null;
	const handleRemoveFromBasket = () => null;

	//iterate through the selected items and find total cost
	const totalBasketPrice = (items: IProduct[]): number => {
		return items.reduce((prev: number, item) => prev + item.price, 0);
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Something went wrong...</div>;
	}

	return (
		<>
			<Navbar
				basketItems={basketItems}
				handleAddToBasket={handleAddToBasket}
				handleRemoveFromBasket={handleRemoveFromBasket}
			/>
			<div className={styles.main}>
				{data?.map((product) => (
					<div key={product.id} className={styles.cardContainer}>
						<ProductCard
							product={product}
							handleAddToBasket={handleAddToBasket}
						/>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
