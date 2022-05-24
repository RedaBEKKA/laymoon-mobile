// import {CARD_CHANGE} from '../constants';
const SET_CARD = 'SET_CARD';
const SET_CARD_LIMIT_ATM_WEEKLY = 'SET_CARD_LIMIT_ATM_WEEKLY';
const SET_CARD_LIMIT_ATM_DAILY = 'SET_CARD_LIMIT_ATM_DAILY';
const SET_CARD_OPTION_ONLINE = 'SET_CARD_OPTION_ONLINE';
const SET_CARD_DROPDOWN = 'SET_CARD_DROPDOWN';
const SET_CARD_OPTION_ACTIVATE = 'SET_CARD_OPTION_ACTIVATE';

export const setCard = card => ({
  type: SET_CARD,
  payload: card,
});

export const setCardLimitAtmWeek = limitAtmWeek => ({
  type: SET_CARD_LIMIT_ATM_WEEKLY,
  payload: limitAtmWeek,
});

export const setCardLimitAtmDay = limitAtmDay => ({
  type: SET_CARD_LIMIT_ATM_DAILY,
  payload: limitAtmDay,
});

export const setCardOptionOnline = optionOnline => ({
  type: SET_CARD_OPTION_ONLINE,
  payload: optionOnline,
});

export const setCardDropdown = cardDropdown => ({
  type: SET_CARD_DROPDOWN,
  payload: cardDropdown,
});

export const setCardOptionActive = optionActivate => ({
  type: SET_CARD_OPTION_ACTIVATE,
  payload: optionActivate,
});
