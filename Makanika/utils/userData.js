import AsyncStorage from '@react-native-community/async-storage';

export const userData = async () => {
	try {
		let user = await AsyncStorage.getItem('user');
		let parsed = JSON.parse(user);
		return parsed;
	}
	catch (error){
		alert(error);
	}

	return parsed;
}