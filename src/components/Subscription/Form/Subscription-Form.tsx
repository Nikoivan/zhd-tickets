import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import { Popover } from '@mui/material';

import formValidation, { ValidationsTypes } from '../../../services/validators/formValidation.service';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';

import './Subscription-Form.scss';

export type Error = {
	status: boolean;
	message: null | string;
	element: null | Element;
};

const initialError = { status: false, message: null, element: null };

const SubscriptionForm: FC = () => {
	const [value, setValue] = useState<string>('');
	const [error, setError] = useState<Error>(initialError);

	const onClickHandler = useCallback(
		(e: FormEvent<HTMLButtonElement>) => {
			e.preventDefault();

			const { result, message } = formValidation(value, ValidationsTypes.EMAIL);

			if (!result) {
				setError((prev) => ({ ...prev, status: true, message }));
				return;
			}

			// выбрасываем popup об успешности подписки
			// добавляем в массив email для рассылки
		},
		[value]
	);

	return (
		<form
			className='Subscription-Form'
			onSubmit={(e: FormEvent) => {
				e.preventDefault();
			}}>
			{error.status && (
				<Popover
					open={error.status}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
					anchorEl={error.element}>
					<span>{error.message}</span>
				</Popover>
			)}
			<Input
				className='Subscription-Input'
				value={value}
				error={error.status}
				placeholder='email'
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setValue(e.target.value);
					if (!error.element) {
						setError((prev) => ({ ...prev, element: e.target }));
					}
				}}
			/>

			<Button
				className='Subscription-Button'
				onClick={onClickHandler}>
				Отправить
			</Button>
		</form>
	);
};

export default SubscriptionForm;
