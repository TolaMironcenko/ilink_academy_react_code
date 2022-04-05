import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './FeedbackCard.module.css'
import Ht from '../Ht/Ht';
import P from '../P/P'

const FeedbackCard = ({ name, work, date, children, ...props }) => {
	return (
		<div {...props} className={styles.FeedbackCard}>
			<div className={styles.cardhead}>
				<Avatar />
				<div className={styles.info}>
					<Ht style={{ fontSize: '24px', lineHeight: '0' }} tag='h2'>{name}</Ht>
					{
						work ? <span style={{ lineHeight: '0' }}>{work}</span> : <></>
					}
				</div>
				<span className={styles.date}>{date}</span>
			</div>
			<P style={{
				fontFamily: 'Gilroy',
				fontStyle: 'normal',
				fontWeight: '400',
				fontSize: '14px',
				lineHeight: '22px'
			}}>{children}</P>
		</div>
	);
};

export default FeedbackCard;