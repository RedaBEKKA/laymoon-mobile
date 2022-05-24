const SET_USER = 'SET_USER';
const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
const SET_TOKEN = 'SET_TOKEN';
const SET_USER_WALLET_DETAILS = 'SET_USER_WALLET_DETAILS';
const SET_USER_BENEFICIARIES = 'SET_USER_BENEFICIARIES';
const SET_USER_SELECTED_BENEFICIARY = 'SET_USER_SELECTED_BENEFICIARY';
const SET_PROFILE = 'SET_PROFILE';
const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

export const authenticateUser = sessionStorage => ({
  type: AUTHENTICATE_USER,
  payload: sessionStorage,
});

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

export const setUserWalletDetails = walletDetails => ({
  type: SET_USER_WALLET_DETAILS,
  payload: walletDetails,
});

export const setBeneficiaries = beneficiaries => ({
  type: SET_USER_BENEFICIARIES,
  payload: beneficiaries,
});

export const setSelectedBeneficiary = selectedBeneficiary => ({
  type: SET_USER_SELECTED_BENEFICIARY,
  payload: selectedBeneficiary,
});
export const setProfile = profile => ({
  type: SET_PROFILE,
  payload: profile,
});

export const setNotifications = notifications => ({
  type: SET_NOTIFICATION,
  payload: notifications,
});