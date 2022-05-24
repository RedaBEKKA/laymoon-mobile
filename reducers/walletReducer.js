const SET_WALLET = 'SET_WALLET';
const SET_TRANSACTION = 'SET_TRANSACTION';

const initialState = {
  wallets: [],
  transactions: [],
};
const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WALLET:
      return {
        ...state,
        wallets: action.payload,
      };
    case SET_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;
