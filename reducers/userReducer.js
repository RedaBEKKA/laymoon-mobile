const SET_USER = 'SET_USER';
const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
const SET_TOKEN = 'SET_TOKEN';
const SET_USER_WALLET_DETAILS = 'SET_USER_WALLET_DETAILS';
const SET_USER_BENEFICIARIES = 'SET_USER_BENEFICIARIES';
const SET_USER_SELECTED_BENEFICIARY = 'SET_USER_SELECTED_BENEFICIARY';
const SET_PROFILE = 'SET_PROFILE';
const SET_NOTIFICATION = 'SET_NOTIFICATION';
const initialState = {
  user: {},
  sessionStorage: {},
  token: '',
  walletDetails: {},
  beneficiaries: [],
  selectedBeneficiary: {},
  profile: {},
  notifications: []
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        sessionStorage: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER_WALLET_DETAILS:
      return {
        ...state,
        walletDetails: action.payload,
      };
    case SET_USER_BENEFICIARIES:
      return {
        ...state,
        beneficiaries: action.payload,
      };
    case SET_USER_SELECTED_BENEFICIARY:
      return {
        ...state,
        selectedBeneficiary: action.payload,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;