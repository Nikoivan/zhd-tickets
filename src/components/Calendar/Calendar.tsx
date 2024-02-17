import moment from 'moment/moment';
import 'moment/locale/ru';

import { FC } from 'react';
import CalendarField from './Field/Calendar-Field';

const Calendar: FC = () => {
	const date = new Date();

	return (
		<div className='ui-datepicker'>
			<div className='ui-datepicker-material-header'>
				<div className='ui-datepicker-material-day'>{moment().format('dddd')}</div>
				<div className='ui-datepicker-material-date'>
					<div className='ui-datepicker-material-day-num'>{moment().date()}</div>
					<div className='ui-datepicker-material-month'>{moment().format('MMMM')}</div>
					<div className='ui-datepicker-material-year'>{moment().format('YYYY')}</div>
				</div>
			</div>
			<div className='ui-datepicker-header'>
				<div className='ui-datepicker-title'>
					<span className='ui-datepicker-month'>{moment().format('MMMM')}</span>
					&nbsp;
					<span className='ui-datepicker-year'>{moment().format('YYYY')}</span>
				</div>
			</div>
			<table className='ui-datepicker-calendar'>
				<colgroup>
					<col />
					<col />
					<col />
					<col />
					<col />
					<col className='ui-datepicker-week-end' />
					<col className='ui-datepicker-week-end' />
				</colgroup>
				<thead>
					<tr>
						<th
							scope='col'
							title='Понедельник'>
							Пн
						</th>
						<th
							scope='col'
							title='Вторник'>
							Вт
						</th>
						<th
							scope='col'
							title='Среда'>
							Ср
						</th>
						<th
							scope='col'
							title='Четверг'>
							Чт
						</th>
						<th
							scope='col'
							title='Пятница'>
							Пт
						</th>
						<th
							scope='col'
							title='Суббота'>
							Сб
						</th>
						<th
							scope='col'
							title='Воскресенье'>
							Вс
						</th>
					</tr>
				</thead>
				<CalendarField now={date} />
			</table>
		</div>
	);
};
export default Calendar;
