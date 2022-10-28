
import Theme from "../Theme";
import styles from "./Header.module.scss";
function Header({}) {

	return (
		<div className={styles.headerBox}>
			<div className={styles.headerBox__theme}>
				<Theme />
			</div>
			<div className={styles.headerBox__title}>
				<h1>
					{'Frontend Engineer Case Study'}
				</h1>
			</div>
		</div>
	);
}


export default Header;
