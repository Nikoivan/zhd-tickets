import { FC } from 'react';
import { Outlet } from 'react-router';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout: FC = () => (
	<>
		<Header />
		<main className='Main'>
			<Outlet />
		</main>
		<Footer />
	</>
);

export default Layout;
