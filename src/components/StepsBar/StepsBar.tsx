import { FC } from 'react';

import StepsBarItem, { StepsBarItemProps } from './Item/StepsBar-Item';

import './StepsBar.scss';
import getStepsBarItemActive from '../../services/utils/stepsBar.util';

const steps: Omit<StepsBarItemProps, 'isActive'>[] = [
	{ count: 1, title: 'Билеты' },
	{ count: 2, title: 'Пассажиры' },
	{ count: 3, title: 'Оплата' },
	{ count: 4, title: 'Проверка' },
];

const StepsBar: FC = () => (
	<ul className='List StepsBar'>
		{steps.map((step, idx) => (
			<StepsBarItem
				{...step}
				isActive={getStepsBarItemActive(step.title)}
				key={idx}
			/>
		))}
	</ul>
);

export default StepsBar;
