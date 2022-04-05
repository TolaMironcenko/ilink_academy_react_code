import React from 'react';
import Arrow from '../Arrow/Arrow';
import Button from '../Button/Button';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import Ht from '../Ht/Ht';
import styles from './Reviewes.module.css'
import Slider from '../Slider/Slider';

const Reviewes = ({
	inPage,
	allFeedbacks,
	feedbacks,
	setActive,
	nowSlide,
	setNowSlide
}) => {

	return (
		<div className={styles.Reviewes}>
			<Ht style={{
				lineHeight: '0',
				position: 'absolute',
				top: '50px',
				left: '65px',
			}} tag='h2'>Отзывы</Ht>
			<Button
				onClick={() => setActive(true)}
				style={{
					width: '220px',
					position: 'absolute',
					top: '80px',
					right: '65px',
					zIndex: '5',
				}}
				btntype='button2_icon'>Добавить отзыв</Button>
			<div className={styles.feedbacks}>
				{
					allFeedbacks === 0
						? <Ht tag="h2">пока что нет отзывoв</Ht>
						: feedbacks.map((feedback, i) =>
							<FeedbackCard
								key={i}
								name={feedback.name}
								date={feedback.date}
								style={{ margin: '15px' }}
							>
								{feedback.text}
							</FeedbackCard>
						)
				}
			</div>
			<Slider
				inPage={inPage}
				allFeedbacks={allFeedbacks}
				nowSlide={nowSlide}
				feedbacks={feedbacks}
			/>
			<div className={styles.navigation}>
				<Arrow
					style={{ transform: 'rotate(180deg)', marginRight: '15px' }}
					disabled={
						nowSlide === 1 || allFeedbacks === 0
							? true
							: false
					}
					onClick={() => {
						if (nowSlide - 1 < 1) {
							setNowSlide(0)
						} else {
							setNowSlide(nowSlide - 1)
						}
					}}
				/>
				<Arrow
					disabled={
						nowSlide === Math.ceil(allFeedbacks / inPage) || allFeedbacks === 0
							? true
							: false
					}
					onClick={() => {
						if (nowSlide + 1 >= Math.ceil(allFeedbacks / inPage)) {
							setNowSlide(Math.ceil(allFeedbacks / inPage))
						} else {
							setNowSlide(nowSlide + 1)
						}
					}} />
			</div>
		</div >
	);
};

export default Reviewes;