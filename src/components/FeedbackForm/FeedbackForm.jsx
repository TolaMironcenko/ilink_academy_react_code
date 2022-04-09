// import classNames from 'cc/lassnames';
import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import Ht from '../Ht/Ht';
import styles from './FeedbackForm.module.css'
import FileLoader from '../FileLoader/FileLoader'
import Fileinput from '../Fileinput/Fileinput';

const FeedbackForm = ({
	setSuccessFeedback,
	feedbacks,
	setFeedbacks,
	setFlashMessageActive,
	active,
	setActive,
	...props
}) => {

	function padTo2Digits(num) {
		return num.toString().padStart(2, '0');
	}

	function formatDate(date) {
		return [
			padTo2Digits(date.getDate()),
			padTo2Digits(date.getMonth() + 1),
			date.getFullYear(),
		].join('/');
	}

	const [name, setName] = useState('')
	const [text, setText] = useState('')
	const [maxlen, setMaxlen] = useState(0)

	return (
		<div
			{...props}
			className={active
				? classNames(styles.Feedbackform, styles.active)
				: styles.Feedbackform}
			onClick={() => setActive(false)}
		>
			<div
				className={active
					? classNames(styles.formcontent, styles.active)
					: styles.formcontent}
				onClick={(e) => e.stopPropagation()}
			>
				<Ht
					style={{ lineHeight: '0' }}
					tag='h3'
				>
					Отзыв
				</Ht>
				<p>Как вас зовут?</p>
				<div className={styles.photo}>
					<input
						value={name}
						className={styles.inputname}
						type='text'
						placeholder='Имя Фамилия'
						onChange={(e) => { setName(e.target.value) }}
					/>
					<Fileinput style={{ marginTop: '33px' }} />
				</div>
				<FileLoader />
				<p>Все ли вам понравилось?</p>
				<div style={{ position: 'relative' }}>
					<textarea
						value={text}
						className={styles.feedarea}
						cols="30"
						rows="10"
						placeholder='Напишите пару слов о вашем опыте...'
						onChange={(e) => { setText(e.target.value) }}
						onKeyUp={(e) => setMaxlen(e.target.value.length)}
						style={{ resize: 'none', }}
					>
					</textarea>
					<label style={{
						fontFamily: 'Gilroy',
						fontStyle: 'normal',
						fontWeight: '400',
						fontSize: '10px',
						lineHeight: '14px',
						color: '#8A8A8A',
						position: 'absolute',
						bottom: '5px',
						right: '5px',
					}}>{maxlen}/200</label>
				</div>
				<div className={styles.feedsent}>
					<Button onClick={() => {
						setActive(false);
						if (name === '' || text === '') {
							setSuccessFeedback(false);
						} else {
							setFeedbacks([...feedbacks, {
								name: name,
								date: formatDate(new Date()),
								text: text,
							}]);
							setSuccessFeedback(true);
						}
						setFlashMessageActive(true);
						setName('')
						setText('')
						var filedata = document.getElementsByName("avatarphoto");
					}}
						style={{ width: '200px', marginLeft: '0' }}
						btntype='button2'
					>
						Отправить отзыв
					</Button>
					<div className={styles.description}>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12.6117 1.29175H5.38758C2.87008
								1.29175 1.29175 3.07425 1.29175 5.59675V12.4034C1.29175
								14.9259 2.86258 16.7084 5.38758 16.7084H12.6109C15.1367
								16.7084 16.7084 14.9259 16.7084 12.4034V5.59675C16.7084
								3.07425 15.1367 1.29175 12.6117 1.29175Z"
								stroke="#797DDF"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.99552 12.3335V9.00012"
								stroke="#797DDF"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.9916 5.83695H8.99993"
								stroke="#797DDF"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p className={styles.p}>Все отзывы проходят модерацию в течение 2 часов</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedbackForm;
