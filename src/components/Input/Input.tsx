import { FC } from 'react';
import { Input, InputProps } from '@mui/material';

import './Input.scss';

const InputElement: FC<InputProps> = ({ onChange, className, ...props }) => (
	<Input
		className={`Input${className ? ' ' + className : null}`}
		onChange={onChange}
		{...props}
	/>
);

export { InputElement as Input };
