import { createSlice } from '@reduxjs/toolkit';
import { FullDate } from '../../services/calendar/getCalendarCells';
import { CalendarScopeAction, ChangeAction } from '../actions/calendarFormActions';
import { CalendarOpenScope } from '../../types/types';
import selectedDateValidation, { selectedReturnDateValidation } from '../../services/validators/selectedDateValidator';
import inputDateValidation from '../../services/validators/inputDateValidation';
import { formatDateToInputValue } from '../../services/utils/dateFormat.util';

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

export type HeaderFormState = {
	calendarScope: CalendarOpenScope;
	valueDates: DateValues;
	anchorEl?: HTMLButtonElement | HTMLInputElement;
	popOverValue: string | null;
};

const initialState: HeaderFormState = {
	calendarScope: calendarInitialScope,
	valueDates: initialValueDates,
	anchorEl: undefined,
	popOverValue: null,
};

export const headerFormSlice = createSlice({
	name: 'headerForm',
	initialState,
	reducers: {
		openCalendar: (state, action: CalendarScopeAction) => {
			state.calendarScope = { isOpen: true, scope: action.payload.scope };
		},
		onSelect: (state, action) => {
			const { event, fullDate } = action.payload;

			state.anchorEl = event.currentTarget;
			if (!state.calendarScope.scope) {
				return;
			}

			if (!selectedDateValidation(fullDate)) {
				state.popOverValue = 'Ошибка при выборе даты';

				return;
			}

			if (
				state.calendarScope.scope === 'returnDate' &&
				!(!!state.valueDates.toDate.date && selectedReturnDateValidation(fullDate, state.valueDates.toDate.date))
			) {
				state.popOverValue = 'Обратная дата, не может быть ранее выбранной даты первичного направления';

				return;
			}

			const newValue = {
				[state.calendarScope.scope]: { value: `${fullDate.date}/${fullDate.month}/${fullDate.year}`, date: fullDate },
			};

			state.valueDates = { ...state.valueDates, ...newValue };

			state.calendarScope = calendarInitialScope;
		},
		onChange: (state, action: ChangeAction) => {
			const { name, value } = action.payload.event.target;
			if (inputDateValidation(value)) {
				state.valueDates = { ...state.valueDates, [name]: formatDateToInputValue(value) };
			}
		},
		clearPopoverValue: (state) => {
			state.popOverValue = null;
		},
	},
});

export const headerFormActions = headerFormSlice.actions;
