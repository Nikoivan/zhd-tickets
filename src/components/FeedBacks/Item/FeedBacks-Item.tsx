import { FC } from 'react';

import './FeedBacks-Item.scss';

export type FeedBacksItemProps = {
	name: string;
	content: string;
	image: string;
};

const FeedBacksItem: FC<FeedBacksItemProps> = ({ name, content, image }) => (
	<li className='FeedBacks-Item'>
		<img
			className='FeedBacks-ItemImage'
			src={image}
		/>
		<div className='FeedBacks-ContentWrap'>
			<span className='FeedBacks-AuthorName'>{name}</span>
			<div className='FeedBacks-ItemContentWrap'>
				<span className='FeedBacks-ItemContent_type_quotes'>&#10077;</span>
				<p className='FeedBacks-ItemContent'>
					{content}
					<span className='FeedBacks-ItemContent_type_quotes'> &#10078;</span>
				</p>
			</div>
		</div>
	</li>
);

export default FeedBacksItem;
