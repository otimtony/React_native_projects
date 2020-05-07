import { GET_QUOTE } from './actionTypes';
import { HOST } from '../utils/utils';

const getQuoteAction = (token, quoteInsuranceBody) => dispatch => {
  console.loe("<<<<<<<<<<<<<............>>>>>>>>>>>>>", token, quoteInsuranceBody)

	// const quotationData = {
	// 	"amount": amount,
 //    "garage_description": description,
	// 	"status": 'completed',
	// }

 //  fetch(`${HOST}/api/v1/garage_requests/${id}/`, {
 //    method: 'PATCH',
 //    headers: {
 //      Accept: 'application/json',
 //      'Content-Type': 'application/json',
 //    },
 //    body: JSON.stringify(quotationData),
 //  })
 //  .then(response => {
 //    return response.json();
 //  })
 //  .then(responseData => {
 //    return responseData;
 //  })
 //  .then(data => {
 //    console.log("<<<<<<<<<<<.......amount......>>>>>>>>>>>>>", data);
 //  })
 //  .catch(err => {
 //    console.log(err)
 //  });
}

export default getQuoteAction;