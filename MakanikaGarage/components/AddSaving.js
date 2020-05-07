import React, { Component } from 'react';
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { addSavingAction } from '../actions/addSavingAction';

class Feedback extends Component {

	state = {
		amount: "",
		amountError: false,
		spinner: false,
	}

	handleSave = () => {

	    const amount = this.state.amount;

	    if (this.state.amount) {
	      this.setState({ amountError: false })
	    }else {
	      this.setState({ amountError: true })
	    }

	    if (this.state.amount){

	  //   	const paymentBody = {
			// 	"phonenumber": '+256703948764',
			// 	"amount": amount,
			// 	"currency":"UGX",
			// 	"description":"Per diem",
			// 	"callback_url":"https://makanika.com",
			// 	"send_instructions": "True"
			// }

	  //   	fetch(`https://app.beyonic.com/api/collectionrequests`, {
			// 	method: 'POST',
			// 	headers: {
			// 	Accept: 'application/json',
			// 	'Content-Type': 'application/json',
			// 	'Authorization': 'Token ' + 'c3b0db492778f6dbbbaf7a7918bcea3fe5922c33'
			// },
			// 	body: JSON.stringify(paymentBody),
			// })
			// .then(response => {
			// 	return response.json();
			// })
			// .then(responseData => {
			// 	return responseData;
			// })
			// .then(data => {
			// 	console.log("<<<<<<...data....>>>>>>>", data);
			// })
			// .catch(err => {
			// 	console.log(err)
			// });


	    	this.props.addSavingAction(amount)

	    	// this.props.navigation.navigate('MobileMoneyVisaOptions', {
	    	// 	'amount': amount,
	    	// 	'token': this.props.navigation.state.params.token,
	    	// 	'user_id': this.props.navigation.state.params.user_id
	    	// });
	    }
	}

	render(){
		return(
			<View style={styles.container}>
				<Spinner
					visible={this.state.spinner}
					textContent={'Waiting for payment...'}
					textStyle={styles.spinnerText}
				/>
			    <View style={styles.form}>
		            <View>
						<Text style={styles.amountText}>
							Amount
						</Text>
						<TextInput 
							multiline = {true}
							style={styles.textInput}
							autoCapitalize="none"
							onChangeText={amount => this.setState({ amount })}
							value={this.state.amount}>
						</TextInput>
						{
							this.state.amountError &&
							<Text style={styles.error}>Amount is required</Text>
						}
					</View>

					<TouchableOpacity 
						onPress={this.handleSave}
						style={styles.button} >
						<Text style={{ color: "#FFF", fontWeight: "bold" }}>Send</Text>
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
		marginLeft: 12,
		paddingLeft: -10 
	},
	amountText: {
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


export default connect(null, { addSavingAction })(Feedback);