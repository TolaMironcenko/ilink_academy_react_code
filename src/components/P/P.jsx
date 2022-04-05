import React from 'react';
import styles from './P.module.css'

const P = ({children, ...props}) => {
	return (
		<p className={styles.P} {...props}>
			{children}
		</p>
	);
};

export default P;