import React from "react";
import { useState } from "react";

//components
import { Basket } from "./Basket";

//interfaces
import { IProduct } from "../Interfaces/index";

import Offcanvas from "react-bootstrap/Offcanvas";

interface IProps {
	basketItems: IProduct[];
	handleAddToBasket: (product: IProduct) => void;
	handleRemoveFromBasket: (id: number) => void;
}

const Drawer: React.FC<IProps> = ({
	basketItems,
	handleRemoveFromBasket,
	handleAddToBasket,
}) => {
	const [show, setShow] = useState(false);
	const handleShow = () => {
		setShow(true);
	};
	const handleClose = () => {
		setShow(false);
	};

	return (
		<div>
			<button onClick={handleShow}>Open</button>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Basket</Offcanvas.Title>
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
};

export default Drawer;
