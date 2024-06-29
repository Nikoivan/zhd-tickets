import { FC } from 'react';
import { SvgIcon } from '@mui/material';
import { SvgIconLocaleProps } from './svgIcon.model';

const ArrowRightFilled: FC<SvgIconLocaleProps> = ({ ...props }) => (
	<SvgIcon {...props}>
		<svg
			width='30'
			height='20'
			viewBox='0 0 30 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M19.3627 20C19.3627 17.8073 19.3627 15.3821 19.3627 12.8239C12.8621 12.8239 6.46582 12.8239 0 12.8239C0 11.0299 0 9.36877 0 7.57475C6.32677 7.57475 12.7231 7.57475 19.3279 7.57475C19.3279 4.91694 19.3279 2.42525 19.3279 0C22.9432 3.3887 26.5238 6.77741 30 10.0664C26.5585 13.2558 22.9432 16.6445 19.3627 20Z'
				fill='#FFA800'
				fillOpacity='0.79'
			/>
		</svg>
	</SvgIcon>
);

export default ArrowRightFilled;
