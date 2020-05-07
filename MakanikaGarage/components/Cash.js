import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

class Cash extends Component {
	componentDidMount(){

	}

	sendToSlack(e) {
    	fetch(`http://hooks.slack.com/services/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`, {
		body: "{\"text\":\"Hello, the endgame bruh!\"}",
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: "POST"
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
			console.log("fsfdfsdfsfsf",err)
		});
  	}




	render(){
		return(
			<TouchableOpacity
				style={{ backgroundColor: "#800000" }}
				onPress={this.sendToSlack}>
            	<Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
			</TouchableOpacity>
		)
	}
}

export default Cash;