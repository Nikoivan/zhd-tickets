import { createBrowserRouter } from 'react-router-dom';
import PageIndex from '../Pages/IndexPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <PageIndex />,
	},
]);

export default router;
