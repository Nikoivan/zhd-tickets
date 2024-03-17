import { ChangeEvent, SyntheticEvent } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';

import { FullDate } from '../../services/calendar/getCalendarCells';

type CalendarScopePayload = {
	scope: string;
};

type SelectPayload = { event: SyntheticEvent<HTMLButtonElement | HTMLInputElement>; fullDate: FullDate };

type ChangePayload = { event: ChangeEvent<HTMLInputElement> };

export type CalendarScopeAction = PayloadAction<CalendarScopePayload>;
export type SelectAction = PayloadAction<SelectPayload>;
export type ChangeAction = PayloadAction<ChangePayload>;
