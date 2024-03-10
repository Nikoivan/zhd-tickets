import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './Nav.css';

const navItems = [
	{
		title: 'О нас',
		to: '/about',
	},
	{
		title: 'Как это работает',
		to: '/howitworks',
	},
	{
		title: 'Отзывы',
		to: '/feedbacks',
	},
	{
		title: 'Контакты',
		to: '/contacts',
	},
];

const Nav = () => (
	<nav className='Nav'>
		<Logo />
		<ul className='Nav-List'>
			{navItems.map((item, id) => (
				<li
					className='Nav-Item'
					key={id}>
					<NavLink
						className='Nav-Link'
						key={id}
						to={item.to}>
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	</nav>
);

export default Nav;
