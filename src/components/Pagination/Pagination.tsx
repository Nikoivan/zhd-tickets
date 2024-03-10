import { FC } from 'react';

import './Pagination.scss';

const Pagination: FC = () => (
	<div className='Pagination'>
		<span className='Pagination-Item Pagination-Item_type_active'></span>
		<span className='Pagination-Item'></span>
		<span className='Pagination-Item'></span>
		<span className='Pagination-Item'></span>
		<span className='Pagination-Item'></span>
	</div>
);

export default Pagination;
