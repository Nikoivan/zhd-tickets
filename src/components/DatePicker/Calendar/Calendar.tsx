import { FC, PointerEvent } from 'react';

import getNewArr, { FullDate } from '../../../services/calendar/getCalendarCells';
import { Button } from '../../Button/Button';

import './Calendar.scss';

export type CalendarFieldProps = {
	date: Date;
	onSelect(e: PointerEvent<HTMLButtonElement>, date: FullDate): void;
};

const Calendar: FC<CalendarFieldProps> = ({ date, onSelect }) => {
	const calendarArr = getNewArr(date);

	return (
		<table className='Calendar'>
			<tbody>
				{calendarArr.map((el, idx) => (
					<tr key={idx}>
						{el.map((item, id) => (
							<td
								key={id}
								className={`Calendar-Cell${item.prop ? ' ' + item.prop : ''}`}>
								<Button
									onClick={(e: PointerEvent<HTMLButtonElement>) => {
										onSelect(e, item.fullDate);
									}}
									type='withoutAll'>
									{item.date}
								</Button>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Calendar;
