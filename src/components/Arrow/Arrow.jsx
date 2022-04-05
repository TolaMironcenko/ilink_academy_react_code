import React from 'react';
import styles from './Arrow.module.css'

const Arrow = ({ ...props }) => {
	return (
		<button
			type='button'
			className={styles.arrowbtn}
			{...props}
		>
			<svg
				width="17"
				height="15"
				viewBox="0 0 17 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15.75 7.72559L0.75 7.72559"
					stroke='#130F26'
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502"
					stroke='#130F26'
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
};

export default Arrow;