import { FC } from 'react';

import './StepsBar-Item.scss';

export type StepsBarItemProps = {
	count: number;
	title: string;
	isActive: boolean;
};

const StepsBarItem: FC<StepsBarItemProps> = ({ count, title, isActive }) => (
	<li className={`StepsBar-Item${isActive ? ' StepsBar-Item_type_active' : ''}`}>
		<span className='StepsBar-Count'>{count}</span>
		<span className='StepsBar-ItemTitle'>{title}</span>
	</li>
);

export default StepsBarItem;
