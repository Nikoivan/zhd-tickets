import { FC } from 'react';
import { SvgIcon } from '@mui/material';

import { SvgIconLocaleProps } from './svgIcon.model';

const ArrowLeftYellow: FC<SvgIconLocaleProps> = ({ ...props }) => (
	<SvgIcon {...props}>
		<svg
			width='76'
			height='60'
			viewBox='0 0 76 60'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M71 0C73.7612 0 76 2.23859 76 5V55C76 57.7614 73.7612 60 71 60H5C2.23877 60 0 57.7614 0 55V5C0 2.23859 2.23877 0 5 0H71ZM33.6372 32.8239V40C30.0566 36.6445 26.4414 33.2558 23 30.0664C26.4761 26.7774 30.0566 23.3887 33.6719 20V27.5747H53V32.8239H33.6372Z'
				fill='#FFA800'
			/>
		</svg>
	</SvgIcon>
);

export default ArrowLeftYellow;
