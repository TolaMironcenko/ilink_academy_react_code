import React from 'react';
import styles from './Fileinput.module.css'
// import Button from '../Button/Button'

const Fileinput = ({ ...props }) => {
	return (
		<div {...props} className={styles.fin}>
			<label styles={{ width: '210px', }} htmlFor="uploadbtn" className={styles.btn2icn}>
				{/* <Button htmlFor="uploadbtn" btntype='button2_icon'>Загрузить фото</Button> */}
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
				Загрузить фото
			</label>
			<input style={{ width: '0', height: '0' }} type='file' name='avatarphoto' id="uploadbtn" />
		</div>
	);
};

export default Fileinput;