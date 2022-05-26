import "./App.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { IProduct } from "./Interfaces";

//the fetch call will return to us a promise of the IProduct shape

const getItems = async (): Promise<IProduct> => {
	const res = await fetch("https://fakestoreapi.com/products");
	const data: IProduct = await res.json();
	return data;
};

function App() {
	return <div className="App"></div>;
}

export default App;
