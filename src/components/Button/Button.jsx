import React from 'react';
import styles from './Button.module.css'

const Button = ({ btntype, children, ...props }) => {
	if (btntype === 'button1') {
		return (
			<button className={styles.btn1} {...props}>
				<div className={styles.hr}></div>
				{children}
			</button>
		);
	}
	if (btntype === 'button2') {
		return (
			<button className={styles.btn2} {...props}>
				<div className={styles.hr2}></div>
				{children}
			</button>
		);
	}
	if (btntype === 'button2_icon') {
		return (
			<button className={styles.btn2icn} {...props}>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6.12857 
						6.1286V3.05176e-05H8.17143V6.1286H14.3V8.17146H8.17143V14.3H6.12857V8.17146H0V6.1286H6.12857Z"
						fill="white"
					/>
				</svg>
				{children}
			</button>
		);
	}
};

export default Button;