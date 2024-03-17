import { FC } from 'react';

import Form from '../../Form/Form';

import './Header-Widget.scss';

export type PropsWithMainPageArg = {
	isMainPage: boolean;
};

const HeaderWidget: FC<PropsWithMainPageArg> = ({ isMainPage }) => (
	<div className={`Header-Widget${isMainPage ? ' Header-Widget_type_main' : ''}`}>
		<Form isMainPage={isMainPage} />
	</div>
);

export default HeaderWidget;
