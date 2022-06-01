import React from "react";
import styles from "../Styles/Navbar.module.css";

interface IProps {
	handleShowBasket: () => void;
}

const Navbar: React.FC<IProps> = ({ handleShowBasket }) => {
	return (
		<div className={styles.navbarContainer}>
			<nav>
				<a href=""></a>
			</nav>
		</div>
	);
};

export default Navbar;
