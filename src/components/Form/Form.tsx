import { Button, Input } from '@mui/material';

import changeIconUrl from '../../assets/icons/change.svg';

import './Form.scss';

const Form = () => (
	<form className='Form'>
		<span className='Form-Annotation'>Направление</span>
		<div className='Form-Wrapper'>
			<Input
				className='Form-Input Form-Input_type_direction'
				placeholder='Откуда'
			/>
			<Button className='Form-Button Form-Button_type_swap'>
				<img
					src={changeIconUrl}
					alt='change-button'
				/>
			</Button>
			<Input
				className='Form-Input Form-Input_type_direction'
				placeholder='Куда'
			/>
		</div>
		<span className='Form-Annotation'>Дата</span>
		<div className='Form-Wrapper'>
			<Input className='Form-Input Form-Input_type_date' />
			<Input className='Form-Input Form-Input_type_date' />
		</div>
		<div className='Form-Wrapper Form-Wrapper_type_end'>
			<Button className='Form-Button Form-Button_type_action'>Найти билеты</Button>
		</div>
	</form>
);

export default Form;
