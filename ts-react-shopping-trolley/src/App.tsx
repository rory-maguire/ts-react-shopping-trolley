import { useState } from "react";
import { useQuery } from "react-query";
import Offcanvas from "react-bootstrap/Offcanvas";

import styles from "./Styles/App.module.css";

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
	const [basketShow, setBasketShow] = useState(false);

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
			<div className={styles.main}>
				{data?.map((product) => (
					<div key={product.id} className={styles.cardContainer}>
						<ProductCard
							product={product}
							handleAddToBasket={handleAddToBasket}
						/>
					</div>
				))}

				{/* <button onClick={() => setBasketShow(true)}>Open Basket</button>

				<Offcanvas onHide={() => setBasketShow(false)}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Offcanvas</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						Some text as placeholder. In real life you can have the elements you
						have chosen. Like, text, images, lists, etc.
					</Offcanvas.Body>
				</Offcanvas>

				<Basket
					basketItems={basketItems}
					handleAddToBasket={handleAddToBasket}
					handleRemoveFromBasket={handleRemoveFromBasket}
				/> */}
			</div>
		</>
	);
}

export default App;
