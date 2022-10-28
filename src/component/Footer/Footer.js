
import Link from "next/link";
import Theme from "../Theme";
import styles from "./Footer.module.scss";

function Footer({}) {

	return (
		<div className={styles.footerBox}>
			<h2>
				{'by Ruslan Kalyniak'}
			</h2>
			<Link href={'https://www.linkedin.com/in/ruslankalyniak/'} >
				<a target="_blank">Linkedin</a>
			</Link>
			<Link href={'https://github.com/RuslanKalyniak'} >
				<a target="_blank">Github</a>
			</Link>
		</div>
	);
}


export default Footer;
