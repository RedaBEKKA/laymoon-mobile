// import {CARD_CHANGE} from '../constants';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_CHANNELS = 'SET_CHANNELS';
const initialState = {
    messages: [],
    channels: [],
};
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
      case SET_CHANNELS:
      return {
        ...state,
        channels: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
