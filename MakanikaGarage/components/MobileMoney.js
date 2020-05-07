import React, { Component } from 'react';
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class MobileMoney extends Component {

	state = {
		phoneNumber: "",
		phoneNumberError: false,
		spinner: false,
	}

	handleSubmit = () => {

		const amount = this.state.amount;
	    const phoneNumber = this.state.phoneNumber;

	    if (this.state.phoneNumber) {
	      this.setState({ phoneNumberError: false })
	    }else {
	      this.setState({ phoneNumberError: true })
	    }

	    if (this.state.phoneNumber){

	    	this.setState({spinner: !this.state.spinner});

	    	const phone_number_with_code = "+256"+phoneNumber.substr(phoneNumber.length - 9);
	    	const paymentBody = {
				"phonenumber": phone_number_with_code,
				"amount": this.props.navigation.state.params.amount,
				"currency":"UGX",
				"description":"Per diem",
				"callback_url":"https://makanika.com",
				"send_instructions": "True"
			}

			fetch(`https://app.beyonic.com/api/collectionrequests`, {
				method: 'POST',
				headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Token ' + 'c3b0db492778f6dbbbaf7a7918bcea3fe5922c33'
			},
				body: JSON.stringify(paymentBody),
			})
			.then(response => {
				return response.json();
			})
			.then(responseData => {
				return responseData;
			})
			.then(data => {
				console.log("<<<<<<<<<<<.......amount......>>>>>>>>>>>>>", data);
			})
			.catch(err => {
				console.log(err)
			});
	    }
	}

	render(){

		console.log("<<<<<<<<<<.......mmmmmmm.......>>>>>>>>>>", this.props.navigation.state.params.amount, this.props.navigation.state.params.token, this.props.navigation.state.params.user_id)

		return(
			<View style={styles.container}>
				<Spinner
					visible={this.state.spinner}
					textContent={'Waiting for payment...'}
					textStyle={styles.spinnerText}
				/>
			    <View style={styles.form}>
		            <View>
						<Text style={styles.phonenumberText}>
							Phone Number
						</Text>
						<TextInput 
							style={styles.textInput}
							maxLength={10}
							autoCapitalize="none"
							onChangeText={phoneNumber => this.setState({ phoneNumber })}
							value={this.state.phoneNumber}>
						</TextInput>
						{
							this.state.phoneNumberError &&
							<Text style={styles.error}>Phone number is required</Text>
						}
					</View>

					<TouchableOpacity 
						onPress={this.handleSubmit}
						style={styles.button} >
						<Text style={{ color: "#FFF", fontWeight: "bold" }}>Submit</Text>
					</TouchableOpacity>

				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	form: {
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
	},
	button: {
		marginLeft: 12,
		marginRight: 12,
		backgroundColor: "#cc142d",
		borderRadius: 4,
		height: 40,
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center"
	},
	textInput: {
		borderBottomColor: "#030303",
		borderBottomWidth: 0.5,
		marginRight: 12,
		marginLeft: 12 
	},
	phonenumberText: {
		marginRight: 12,
		marginLeft: 12
	},
	error: {
		color: "#FF0000", 
		fontSize: 12, 
		marginLeft: 12
	},
	spinnerText: {
		fontSize: 14,
		color: "#FFFFFF",
	}
});

export default MobileMoney;