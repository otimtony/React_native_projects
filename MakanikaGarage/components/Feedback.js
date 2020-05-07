import React, { Component } from 'react';
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class Feedback extends Component {

	state = {
		message: "",
		messageError: false,
		spinner: false,
	}

	handleSend = () => {

	    const message = this.state.message;

	    if (this.state.message) {
	      this.setState({ messageError: false })
	    }else {
	      this.setState({ messageError: true })
	    }

	    if (this.state.message){
	    	const phonenumber = this.props.navigation.state.params.phonenumber;
	    	const email = this.props.navigation.state.params.email;
	    	const username = this.props.navigation.state.params.username;

	    	const feedbackBody = {
	    		'text': message + ' - sent by ' + phonenumber + ' (' + email + ')'
	    	}

	    	console.log("<<<<<<<<<<<<.............>>>>>>>>>>>>>", feedbackBody)

			fetch(`https://hooks.slack.com/services/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`, {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(feedbackBody),
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
		return(
			<View style={styles.container}>
				<Spinner
					visible={this.state.spinner}
					textContent={'Waiting for payment...'}
					textStyle={styles.spinnerText}
				/>
			    <View style={styles.form}>
		            <View>
						<Text style={styles.messageText}>
							Message
						</Text>
						<TextInput 
							multiline = {true}
							style={styles.textInput}
							autoCapitalize="none"
							onChangeText={message => this.setState({ message })}
							value={this.state.message}>
						</TextInput>
						{
							this.state.messageError &&
							<Text style={styles.error}>Message is required</Text>
						}
					</View>

					<TouchableOpacity 
						onPress={this.handleSend}
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
	messageText: {
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

export default Feedback;