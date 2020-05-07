import { GET_TOKEN } from './actionTypes';

export const getToken = async () => {
	try {
		let user = await AsyncStorage.getItem('user');
		let parsed = JSON.parse(user);
		const token = parsed.token
		dispatch({
			type: GET_TOKEN,
			payload: token,
		})
	}
	catch (error){
		alert(error);
	}
}

