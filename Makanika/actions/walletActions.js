import { TOP_UP, SEND_PAYMENTS, SHARE_BALANCE  } from './actionTypes';

export const topUp = (amount) => dispatch => {
	alert(amount.amount);
};


export const sendPayments = (sendPaymentAmountData) => dispatch => {
	alert(sendPaymentAmountData.amount);
};


export const shareBalance = (shareBalanceData) => dispatch => {
	alert(shareBalanceData.phoneNumber);
};
