import moment from 'moment/moment';

export default function getCalendarArr(now: Date) {
	function getWeeksQuantity() {
		const start = new Date(moment().date(1).day(1).format('YYYY-MM-DD')).getTime();
		const end = new Date(moment().endOf('month').day(1).format('YYYY-MM-DD')).getTime();

		const q = 1000 * 60 * 60 * 24 * 7;

		return (end - start) / q + 1;
	}

	const props = {
		firstMonday: moment().date(1).day(1).format('D'),
		weeksQuantity: getWeeksQuantity(),
		lastMonday: moment().endOf('month').day(7).format('D'),
		month: (now.getMonth() + 1).toString(),
		checkdate: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
	};

	const calendarArr = [];
	for (let index = 0; index < props.weeksQuantity; index += 1) {
		const weekArr = [];

		for (let i = 1; i < 8; i += 1) {
			let prop = null;
			const date = moment().date(0).day(i).add(index, 'W').format('D');
			const checkMonth = moment().date(1).day(i).add(index, 'W').format('M');
			const checkDate = moment().date(1).day(i).add(index, 'W').format('YYYY-M-D');

			if (checkMonth !== props.month) {
				prop = 'ui-datepicker-other-month';
			}
			if (checkDate === props.checkdate) {
				prop = 'ui-datepicker-today';
			}
			weekArr.push({ date, prop });
		}
		calendarArr.push(weekArr);
	}

	return calendarArr;
}
