import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FocusState = {
	dateInFocus: boolean;
	returnDateInFocus: boolean;
};

export enum InFocusTypes {
	DATE_TO = 'dateInFocus',
	DATE_FROM = 'returnDateInFocus',
}

export type HeaderFormState = {
	from: string;
	to: string;
	date: string;
	returnDate: string;
	inFocus: FocusState;
};

const initFocus: FocusState = {
	dateInFocus: false,
	returnDateInFocus: false,
};

const initialState: HeaderFormState = {
	from: '',
	to: '',
	date: '',
	returnDate: '',
	inFocus: initFocus,
};

export const headerFormSlice = createSlice({
	name: 'headerForm',
	initialState,
	reducers: {
		switchPlaces: (state) => {
			const from = state.from;

			state.from = state.to;
			state.to = from;
		},
		setDateInFocus: (state, action: PayloadAction<{ dateType: InFocusTypes }>) => {
			state.inFocus = initFocus;
			state.inFocus[action.payload.dateType] = true;
		},
	},
});

export const headerFormActions = headerFormSlice.actions;
