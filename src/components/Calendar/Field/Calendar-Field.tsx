import { FC } from 'react';
import getCalendarArr from '../../../services/getCalendarArr';

export type CalendarFieldProps = {
	now: Date;
};

const CalendarField: FC<CalendarFieldProps> = ({ now }) => {
	const calendarArr = getCalendarArr(now);
	console.log(calendarArr);
	return (
		<tbody>
			{calendarArr.map((el, idx) => (
				<tr key={idx}>
					{el.map((item, id) => (
						<td
							key={id}
							className={item.prop ? item.prop : ''}>
							{item.date}
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export default CalendarField;
