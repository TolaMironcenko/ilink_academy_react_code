import React from 'react';
import styles from './Ht.module.css'

const Ht = ({tag, children, ...props}) => {
	switch (tag) {
		case 'h1':
			return <h1 {...props} className={styles.h1}>{children}</h1>;
		case 'h2':
			return <h2 {...props} className={styles.h2}>{children}</h2>;
		case 'h3':
			return <h3 {...props} className={styles.h3}>{children}</h3>;
		case 'h4':
			return <h4 {...props} className={styles.h3}>{children}</h4>;
		default:
			return <></>;
	}
};

export default Ht;