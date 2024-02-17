import Nav from '../Nav/Nav';
import HeaderWidget from './Widget/Header-Widget';

import './Header.scss';
import '../Title/Title.scss';

const Header = () => {
	return (
		<header className='Header'>
			<Nav />
			<div className='Header-Wrapper'>
				<h1 className='Title'>
					Вся жизнь - <span className='Title_type_bold'>путешествие!</span>
				</h1>
				<HeaderWidget />
			</div>
		</header>
	);
};

export default Header;
