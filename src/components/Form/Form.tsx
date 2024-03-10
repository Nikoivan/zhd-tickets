import { ChangeEvent, FC, FormEvent, PointerEvent, useCallback, useState } from 'react';
import { Button, IconButton, Popover, Typography } from '@mui/material';

import changeIconUrl from '../../assets/icons/change.svg';
import locationIconUrl from '../../assets/icons/location.svg';
import dateIconUrl from '../../assets/icons/date.svg';
import selectedDateValidation, { selectedReturnDateValidation } from '../../services/validators/selectedDateValidator';
import { FullDate } from '../../services/calendar/getCalendarCells';
import DatePicker from '../DatePicker/DatePicker';
import { Input } from '../Input/Input';

import './Form.scss';
import inputDateValidation from '../../services/validators/inputDateValidation';
import { formatDateToInputValue } from '../../services/utils/dateFormat.util';

type CalendarOpenScope = {
	isOpen: boolean;
	scope: string | null;
};

type DateValues = {
	toDate: { value: string; date: FullDate | null };
	returnDate: { value: string; date: FullDate | null };
};

const calendarInitialScope = {
	isOpen: false,
	scope: null,
};

const initialValueDates = {
	toDate: { value: '', date: null },
	returnDate: { value: '', date: null },
};

const Form: FC = () => {
	const [calendarScope, setCalendarScope] = useState<CalendarOpenScope>(calendarInitialScope);
	const [valueDates, setValueDates] = useState<DateValues>(initialValueDates);
	const [anchorEl, setAchorEl] = useState<HTMLButtonElement | HTMLInputElement>();
	const [popOverValue, setPopOverValue] = useState<string | null>(null);

	const openCalendar = useCallback((valueName: string) => {
		setCalendarScope({ isOpen: true, scope: valueName });
	}, []);

	const onSelect = useCallback(
		(e: PointerEvent<HTMLButtonElement>, fullDate: FullDate) => {
			setAchorEl(e.currentTarget);
			if (!calendarScope.scope) {
				return;
			}

			if (!selectedDateValidation(fullDate)) {
				setPopOverValue('Ошибка при выборе даты');
				return;
			}

			if (
				calendarScope.scope === 'returnDate' &&
				!(!!valueDates.toDate.date && selectedReturnDateValidation(fullDate, valueDates.toDate.date))
			) {
				setPopOverValue('Обратная дата, не может быть ранее выбранной даты первичного направления');
				return;
			}

			const newValue = {
				[calendarScope.scope]: { value: `${fullDate.date}/${fullDate.month}/${fullDate.year}`, date: fullDate },
			};

			setValueDates((prev) => ({ ...prev, ...newValue }));
			setCalendarScope(calendarInitialScope);
		},
		[calendarScope.scope, valueDates.toDate]
	);

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (inputDateValidation(value)) {
			setValueDates((prev) => ({ ...prev, [name]: formatDateToInputValue(value) }));
		}
	}, []);

	return (
		<form
			className='Form'
			onSubmit={(e: FormEvent) => {
				e.preventDefault();
			}}>
			<div className='Form-Wrapper'>
				<span className='Form-Annotation'>Направление</span>
				<Input
					className='Form-Input Form-Input_type_direction'
					placeholder='Откуда'
					name='from'
					endAdornment={
						<IconButton>
							<img src={locationIconUrl} />
						</IconButton>
					}
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
					name='to'
					endAdornment={
						<IconButton>
							<img src={locationIconUrl} />
						</IconButton>
					}
				/>
			</div>
			<div className='Form-Wrapper'>
				<span className='Form-Annotation'>Дата</span>
				<Input
					className='Form-Input Form-Input_type_date'
					onChange={onChange}
					placeholder='дд/мм/гг'
					name='toDate'
					value={valueDates.toDate.value}
					endAdornment={
						<IconButton
							onClick={() => {
								openCalendar('toDate');
							}}>
							<img src={dateIconUrl} />
						</IconButton>
					}
				/>
				{calendarScope.isOpen && anchorEl && !!popOverValue && (
					<Popover
						className='Form-Popover'
						open={!!popOverValue}
						anchorEl={anchorEl}
						onClose={() => {
							setPopOverValue(null);
						}}>
						<Typography sx={{ color: 'red', p: 1, fontSize: '20px' }}>{popOverValue}</Typography>
					</Popover>
				)}
				{calendarScope.isOpen && <DatePicker onSelect={onSelect} />}
				<Input
					className='Form-Input Form-Input_type_date'
					onChange={onChange}
					placeholder='дд/мм/гг'
					name='returnDate'
					value={valueDates.returnDate.value}
					endAdornment={
						<IconButton
							onClick={() => {
								openCalendar('returnDate');
							}}>
							<img src={dateIconUrl} />
						</IconButton>
					}
				/>
			</div>
			<div className='Form-Wrapper Form-Wrapper_type_end'>
				<Button className='Form-Button Form-Button_type_action'>Найти билеты</Button>
			</div>
		</form>
	);
};

export default Form;
