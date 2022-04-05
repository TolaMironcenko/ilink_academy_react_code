import React from 'react';
import styles from './Slider.module.css'
import classnames from 'classnames';

const Slider = ({ inPage, allFeedbacks, feedbacks, nowSlide }) => {
	const pageNumber = []

	for (let i = 1; i <= Math.ceil(allFeedbacks / inPage); i++) {
		pageNumber.push(i)
	}

	return (
		<div
			className={styles.slider}
			style={
				feedbacks === []
					? { display: "none" }
					: { display: "flex" }
			}>
			{
				pageNumber.map(number => (
					<div
						className={
							nowSlide === number
								? classnames(styles.slide, styles.active)
								: styles.slide
						}
						key={number}
					>
					</div>
				))
			}
		</div>
	);
};

export default Slider;