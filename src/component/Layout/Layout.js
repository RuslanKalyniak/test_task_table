
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
	return (
		<div className={styles.mainBox}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
