import { REGISTER_USER, LOGIN_USER } from './actionTypes';

export const register = (signUpData) => dispatch => {

	fetch('https://makanika-api.herokuapp.com/api/v1/users/auth/register/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpData),
    })
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      return responseData;
    })
    .then(data => {
      console.log(data);
      this.props.navigation.navigate('Login')
    })
    .catch(err => {
      console.log(err)
    });

};