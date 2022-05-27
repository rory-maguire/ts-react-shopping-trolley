import { useState } from "react";
import { useQuery } from "react-query";
import { IProduct } from "./Interfaces";

//the fetch call will return to us a promise of the IProduct shape

const getItems = async (): Promise<IProduct[]> => {
	const res = await fetch("https://fakestoreapi.com/products");
	const data: IProduct[] = await res.json();
	return data;
};

function App() {
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

	return <div className="App"></div>;
}

export default App;
