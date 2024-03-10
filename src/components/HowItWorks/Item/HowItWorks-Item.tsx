import { FC } from 'react';

import './HowItWorks-Item.scss';

export type HowItWorksItemProps = {
	title: string;
	url: string;
};

const HowItWorksItem: FC<HowItWorksItemProps> = ({ title, url }) => (
	<li className='HowItWorks-Item'>
		<div>
			<img
				src={url}
				alt={title}
				className='HowItWorks-Image'
			/>
		</div>
		<div className='HowItWorks-ItemTitleWrap'>
			<span className='HowItWorks-ItemTitle'>{title}</span>
		</div>
	</li>
);

export default HowItWorksItem;
