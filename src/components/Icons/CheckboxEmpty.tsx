import { FC } from 'react';
import { SvgIcon } from '@mui/material';
import { SvgIconLocaleProps } from './svgIcon.model';

const CheckboxEmpty: FC<SvgIconLocaleProps> = ({ fontSize }) => (
	<SvgIcon fontSize={fontSize}>
		<svg
			width='28'
			height='28'
			viewBox='0 0 28 28'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<rect
				x='0.5'
				y='0.5'
				width='27'
				height='27'
				rx='4.5'
				fill='white'
				stroke='#928F94'
			/>
		</svg>
		;
	</SvgIcon>
);

export default CheckboxEmpty;
