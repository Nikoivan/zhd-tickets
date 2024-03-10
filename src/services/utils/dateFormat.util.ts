import { FullDate } from '../calendar/getCalendarCells';

type InputValueType = {
	value: string;
	date: FullDate;
};

export function formatDateToInputValue(incomeValue: string): InputValueType {
	let formatValue = incomeValue.replace('/', '');
	if (formatValue.match('/')) {
		formatValue = formatValue.replace('/', '');
	}

	const date: FullDate = { date: null, month: null, year: null };

	if (formatValue.length === 1) {
		date.date = formatValue.slice(0, 1);
	}
	if (formatValue.length >= 2) {
		date.date = formatValue.slice(0, 2);
	}
	if (formatValue.length >= 3) {
		date.month = formatValue.slice(2, 3);
	}
	if (formatValue.length >= 4) {
		date.month = formatValue.slice(2, 4);
	}
	if (formatValue.length > 4) {
		date.year = `${formatValue.slice(4)}`;
	}

	return {
		value: `${date.date || ''}${date.month ? '/' : ''}${date.month || ''}${date.year ? '/' : ''}${date.year || ''}`,
		date,
	};
}
