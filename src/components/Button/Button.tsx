import { FC, FormEvent, PropsWithChildren } from 'react';
import Button from '@mui/material/Button';

import './Button.scss';

type ButtonTypes = 'withoutAll';

type ButtonProps = PropsWithChildren & {
	type?: ButtonTypes;
	className?: string;
	onClick(e: FormEvent<HTMLButtonElement>): void;
};

type ButtonClassNameType = {
	className?: string;
	type?: ButtonTypes;
};

function getButtonClassName({ className, type }: ButtonClassNameType): string {
	let startClass = 'Button';

	if (type) {
		startClass = startClass + '_type_' + type;
	}
	if (className) {
		startClass = startClass + ` ${className}`;
	}

	return startClass;
}

const ButtonElement: FC<ButtonProps> = ({ className, children, type, ...props }) => (
	<Button
		className={getButtonClassName({ className, type })}
		{...props}>
		{children}
	</Button>
);

export { ButtonElement as Button };
