import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Basket } from "./Basket";
import { IProduct } from "../Interfaces/index";

interface IProps {
	basketItems: IProduct[];
	handleAddToBasket: (product: IProduct) => void;
	handleRemoveFromBasket: (id: number) => void;
}

function Drawer({ basketItems }) {
	const [basketShow, setBasketShow] = useState(false);

	return (
		<div>
			<button onClick={() => setBasketShow(true)}>Open</button>
			<Offcanvas show={basketShow} onHide={() => setBasketShow(false)}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Basket
						basketItems={basketItems}
						handleAddToBasket={handleAddToBasket}
						handleRemoveFromBasket={handleRemoveFromBasket}
					/>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
}

export default Drawer;
