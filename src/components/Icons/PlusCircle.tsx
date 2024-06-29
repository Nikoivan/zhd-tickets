import { FC } from 'react';
import { SvgIcon } from '@mui/material';

import { SvgIconLocaleProps } from './svgIcon.model';

const PlusCircle: FC<SvgIconLocaleProps> = ({ fontSize }) => (
	<SvgIcon fontSize={fontSize}>
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M14.9444 8.46381L14.9444 14.9449L8.46329 14.9449C7.8604 14.9449 7.40823 15.3971 7.40823 16C7.40823 16.6029 7.8604 17.0551 8.46329 17.0551L14.9444 17.0551L14.9444 23.5362C14.9444 24.1391 15.3966 24.5913 15.9241 24.5159L16.0748 24.5159C16.6777 24.5159 17.1299 24.0637 17.0546 23.5362L17.0546 17.0551L23.385 17.0551C23.9878 17.0551 24.44 16.6029 24.44 16C24.44 15.3971 23.9878 14.9449 23.385 14.9449L17.0546 14.9449L17.0546 8.46381C17.0546 7.86091 16.6024 7.40874 16.0748 7.4841L15.9241 7.4841C15.3212 7.4841 14.8691 7.93628 14.9444 8.46381Z'
				fill='#FFA800'
			/>
			<circle
				cx='16'
				cy='16'
				r='15'
				stroke='#FFA800'
				strokeWidth='2'
			/>
		</svg>
	</SvgIcon>
);

export default PlusCircle;
