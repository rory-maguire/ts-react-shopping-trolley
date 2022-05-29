import { useState } from "react";
import { useQuery } from "react-query";
import { Routes, Route, Link } from "react-router-dom";

//components
import { Basket } from "./Components/Basket";
import { ProductCard } from "./Components/ProductCard";

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

	console.log(data);
	const handleAddToBasket = () => {};
	const handleRemoveFromBasket = () => {};

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Something went wrong...</div>;
	}

	return (
		<>
			<nav>
				<Link to="/basket">Basket</Link>
			</nav>
			<div>
				{data?.map((product) => (
					<div key={product.id}>
						<ProductCard
							product={product}
							handleAddToBasket={handleAddToBasket}
						/>
					</div>
				))}
				<Routes>
					<Route
						path="basket"
						element={
							<Basket
								basketItems={basketItems}
								handleAddToBasket={handleAddToBasket}
								handleRemoveFromBasket={handleRemoveFromBasket}
							/>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
