import { FC, PointerEvent, useCallback, useState } from 'react';
import { IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

import Calendar from './Calendar/Calendar';
import { FullDate } from '../../services/calendar/getCalendarCells';

import './DatePicker.scss';

const months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
];

const getDate = () => {
	const date = new Date();
	return new Date(date.setDate(1));
};

export type DatePickerProps = {
	onSelect(e: PointerEvent<HTMLButtonElement>, fullDate: FullDate): void;
};

const DatePicker: FC<DatePickerProps> = ({ onSelect }) => {
	const [currentMonth, setCurrentMonth] = useState<Date>(getDate());

	const nextMonth = useCallback(() => {
		const newDate = new Date(currentMonth.setMonth(currentMonth.getMonth() + 1));

		setCurrentMonth(new Date(newDate));
	}, [currentMonth]);

	const previousMonth = useCallback(() => {
		const newDate = new Date(currentMonth.setMonth(currentMonth.getMonth() - 1));

		setCurrentMonth(new Date(newDate));
	}, [currentMonth]);

	return (
		<div className='DatePicker'>
			<div className='DatePicker-Header'>
				<IconButton
					onClick={previousMonth}
					className='DatePicker-Previous'>
					<ArrowLeft />
				</IconButton>
				<span className='DatePicker-MonthTitle'>{months[currentMonth.getMonth()]}</span>
				<IconButton
					onClick={nextMonth}
					className='DatePicker-Next'>
					<ArrowRight />
				</IconButton>
			</div>
			<Calendar
				date={currentMonth}
				onSelect={onSelect}
			/>
		</div>
	);
};
export default DatePicker;
