import { FC } from 'react';
import { useLocation } from 'react-router';

import Nav from '../Nav/Nav';
import HeaderWidget from './Widget/Header-Widget';

import './Header.scss';
import '../Title/Title.scss';
import StepsBar from '../StepsBar/StepsBar';

const Header: FC = () => {
	const location = useLocation();
	const isMainPage = location.pathname === '/';

	return (
		<header className={`Header${isMainPage ? ' Header_type_main' : ''}`}>
			<Nav />
			<div className={`Header-Wrapper${isMainPage ? ' Header-Wrapper_type_main' : ''}`}>
				{isMainPage && (
					<h1 className='Title Header-Title'>
						Вся жизнь - <span className='Title_type_bold'>путешествие!</span>
					</h1>
				)}
				<HeaderWidget isMainPage={isMainPage} />
			</div>
			{!isMainPage && <StepsBar />}
		</header>
	);
};

export default Header;
