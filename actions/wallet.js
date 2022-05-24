const SET_WALLET = 'SET_WALLET';
const SET_TRANSACTION = 'SET_TRANSACTION';

export const setWallets = wallets => ({
  type: SET_WALLET,
  payload: wallets,
});
export const setTransactions = transactions => ({
  type: SET_TRANSACTION,
  payload: transactions,
});
