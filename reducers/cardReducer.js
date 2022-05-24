// import {CARD_CHANGE} from '../constants';
const SET_CARD = 'SET_CARD';
const SET_CARD_LIMIT_ATM_WEEKLY = 'SET_CARD_LIMIT_ATM_WEEKLY';
const SET_CARD_LIMIT_ATM_DAILY = 'SET_CARD_LIMIT_ATM_DAILY';
const SET_CARD_OPTION_ONLINE = 'SET_CARD_OPTION_ONLINE';
const SET_CARD_DROPDOWN = 'SET_CARD_DROPDOWN';
const SET_CARD_OPTION_ACTIVATE = 'SET_CARD_OPTION_ACTIVATE';
const initialState = {
  card: {},
  limitAtmDay: 0,
  limitAtmWeek: 0,
  optionOnline: 0,
  cardDropdown: [],
  optionActivate: false
};
const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD:
      return {
        ...state,
        card: action.payload,
      };
    case SET_CARD_LIMIT_ATM_WEEKLY:
      return {
        ...state,
        limitAtmWeek: action.payload,
      };
    case SET_CARD_LIMIT_ATM_DAILY:
      return {
        ...state,
        limitAtmDay: action.payload,
      };
    case SET_CARD_OPTION_ONLINE:
      return {
        ...state,
        optionOnline: action.payload,
      };
    case SET_CARD_DROPDOWN:
      return {
        ...state,
        cardDropdown: action.payload,
      };
    case SET_CARD_OPTION_ACTIVATE:
      return {
        ...state,
        optionActivate: action.payload,
      };
    default:
      return state;
  }
};

export default cardReducer;
