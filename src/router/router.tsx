import { createBrowserRouter } from 'react-router-dom';
import Index from '../Pages/Index';
import Layout from '../components/Layout/Layout';
import ChoiceTrain from '../Pages/ChoiceTrain';
import ChoicePlaces from '../Pages/ChoicePlaces';
import Passangers from '../Pages/Passangers';
import Payment from '../Pages/Payment';
import ConfirmOrder from '../Pages/ConfirmOrder';
import Success from '../Pages/Succeess';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Index /> },
			{ path: 'train', element: <ChoiceTrain /> },
			{ path: 'places', element: <ChoicePlaces /> },
			{ path: 'passangers', element: <Passangers /> },
			{ path: 'payment', element: <Payment /> },
			{ path: 'confirm', element: <ConfirmOrder /> },
			{ path: 'success', element: <Success /> },
		],
	},
]);

export default router;
