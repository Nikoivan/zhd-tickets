import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FC, FormEvent, PointerEvent, useCallback } from 'react';
import { Button, IconButton, Popover, Typography } from '@mui/material';

import changeIconUrl from '../../assets/icons/change.svg';
import locationIconUrl from '../../assets/icons/location.svg';
import dateIconUrl from '../../assets/icons/date.svg';
import { headerFormActions } from '../../redux/slices/headerFormSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { FullDate } from '../../services/calendar/getCalendarCells';
import DatePicker from '../DatePicker/DatePicker';
import { Input } from '../Input/Input';

import './Form.scss';
import { PropsWithMainPageArg } from '../Header/Widget/Header-Widget';

const Form: FC<PropsWithMainPageArg> = ({ isMainPage }) => {
	const { calendarScope, valueDates, anchorEl, popOverValue } = useAppSelector((store) => store.headerForm);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const openCalendar = useCallback(
		(valueName: string) => {
			dispatch(headerFormActions.openCalendar({ scope: valueName }));
		},
		[dispatch]
	);

	const onSelect = useCallback(
		(event: PointerEvent<HTMLButtonElement | HTMLInputElement>, fullDate: FullDate) => {
			dispatch(headerFormActions.onSelect({ event, fullDate }));
		},
		[dispatch]
	);

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			dispatch(headerFormActions.onChange({ event }));
		},
		[dispatch]
	);

	const clearPopover = useCallback(() => {
		dispatch(headerFormActions.clearPopoverValue());
	}, [dispatch]);

	const onClickHandler = useCallback(() => {
		navigate('/train');
	}, [navigate]);

	console.log(isMainPage);

	return (
		<form
			className={`Form${isMainPage ? ' Form_type_main' : ''}`}
			onSubmit={(e: FormEvent) => {
				e.preventDefault();
			}}>
			<div className='Form-Wrapper_type_entity'>
				<span className={`Form-Annotation${isMainPage ? ' Form-Annotation_type_main' : ''}`}>Направление</span>
				<div className={`Form-Wrapper${isMainPage ? ' Form-Wrapper_type_main' : ''}`}>
					<Input
						className='Form-Input'
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
						className='Form-Input'
						placeholder='Куда'
						name='to'
						endAdornment={
							<IconButton>
								<img src={locationIconUrl} />
							</IconButton>
						}
					/>
				</div>
			</div>
			<div className='Form-Wrapper_type_entity'>
				<span className={`Form-Annotation${isMainPage ? ' Form-Annotation_type_main' : ''}`}>Дата</span>
				<div className={`Form-Wrapper${isMainPage ? ' Form-Wrapper_type_main' : ''}`}>
					<Input
						className='Form-Input'
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
							onClose={clearPopover}>
							<Typography sx={{ color: 'red', p: 1, fontSize: '20px' }}>{popOverValue}</Typography>
						</Popover>
					)}

					{calendarScope.isOpen && <DatePicker onSelect={onSelect} />}

					<Input
						className='Form-Input'
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
				<div className={`Form-Wrapper_type_end${isMainPage ? ' Form-Wrapper_type_mainEnd' : ''}`}>
					<Button
						className='Form-Button Form-Button_type_action'
						onClick={onClickHandler}>
						Найти билеты
					</Button>
				</div>
			</div>
		</form>
	);
};

export default Form;
