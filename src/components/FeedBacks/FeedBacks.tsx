import { FC } from 'react';
import * as data from '../../assets/feedbacks/feedbacks.json';
import FeedBacksItem from './Item/FeedBacks-Item';

import './FeedBacks.scss';
import Pagination from '../Pagination/Pagination';

const feedbacks = data.feedbacks;

const FeedBacks: FC = () => (
	<div className='FeedBacks'>
		<h3 className='FeedBacks-Title'>Отзывы</h3>
		<ul className='FeedBacks-List'>
			{feedbacks.map((item, idx) => (
				<FeedBacksItem
					{...item}
					key={idx}
				/>
			))}
		</ul>
		<Pagination />
	</div>
);

export default FeedBacks;
