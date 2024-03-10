import { FC } from 'react';

import WrapperTypeFlex from '../Wrapper/type/Wrapper_type_flex';
import HowItWorksItem from './Item/HowItWorks-Item';
import { Button } from '../Button/Button';

import monitorUrl from '../../assets/icons/monitor.svg';
import blocksUrl from '../../assets/icons/blocks.svg';
import globalUrl from '../../assets/icons/global.svg';

import './HowItWorks.scss';

const howItWorksData = [
	{
		title: 'Удобный заказ на сайте',
		url: monitorUrl,
	},
	{
		title: 'Нет необходимости ехать в офис',
		url: blocksUrl,
	},
	{
		title: 'Огромный выбор направлений',
		url: globalUrl,
	},
];

const HowItWorks: FC = () => (
	<div className='HowItWorks'>
		<WrapperTypeFlex>
			<h3 className='HowItWorks-Title'>Как это работает</h3>
			<Button>Узнать больше</Button>
		</WrapperTypeFlex>
		<ul className='HowItWorks-List'>
			{howItWorksData.map((item, idx) => (
				<HowItWorksItem
					key={idx}
					{...item}
				/>
			))}
		</ul>
	</div>
);

export default HowItWorks;
