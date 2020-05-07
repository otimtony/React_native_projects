import { GET_PAYMENTS, GET_PAYMENT } from './actionTypes';

const payments = [
    {
      id: "1",
      amount: "30000",
      date: "23/12/19",
      vehicle: "Rav 4 L",
      description: "Brakes can't work anymore",
      rating: "3.1"
    },
    {
      id: "2",
      amount: "55000",
      date: "23/12/19",
      vehicle: "Toyata Tundra",
      description: "Engine and broken radio",
      rating: "4.5"
    },
    {
      id: "3",
      amount: "41000",
      date: "23/12/19",
      vehicle: "BMW X6",
      description: "This is just a test description",
      rating: "2.5"
    },
    {
      id: "4",
      amount: "10000",
      date: "23/12/19",
      vehicle: "Benz Kompressor",
      description: "Last place to be me is the game",
      rating: "3.5"
    }
]

export const getPayments = () => dispatch => {
	return {
        type: GET_PAYMENTS,
        payload: payments
    }
};