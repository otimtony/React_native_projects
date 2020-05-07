import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';


export default class Home extends Component {

	state = {
		garage_name: "Kasubu Engineering",
		garage_contact_name: "Kamaali Edgar",
		garage_phone_number: "0703948764",
		location: "Kasubu"
	}

	handleCall = () => {
		Alert.alert(this.state.garage_phone_number)
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={ styles.requestContainer }>
					<Text style={styles.makanikaText}>Garage details</Text>
					<Image 
						style={{ width: 70, height: 70, marginTop: 10 }}
						source={require('../assets/logo.png')} />
					<Text style={styles.garageName}>{this.state.garage_name}</Text>
					<Text>{this.state.garage_contact_name}</Text>
					<Text>{this.state.location}</Text>
					<TouchableOpacity 
						style={styles.call} 
						onPress={this.handleCall}>
						<Text style={styles.callText}>Call</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: '#F3F3F3',
	},
	requestContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 250,
		backgroundColor: '#FFFFFF',
	},
	makanikaText: {
		paddingTop: 25, 
	},
	garageName: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	call: {
		marginTop: 10,
	    marginHorizontal: 30,
	    backgroundColor: "#E9446A",
	    borderRadius: 15,
	    height: 30,
	    width: 60,
	    alignItems: "center",
	    justifyContent: "center",
	    marginBottom: 100
	},
	callText: {
		color: "#FFFFFF"
	},
	name:{
		fontWeight: 'bold',
		fontSize:16,
		color:"#FFFFFF",
	},
	profile:{
		backgroundColor: '#F3F3F3',
		marginLeft: 20,
		marginRight: 20,
		marginTop:-120,
	},
	bodyContent: {
		flex: 1,
		alignItems: 'center',
		marginTop: 120,
	},
	name:{
		fontSize:16,
		fontWeight: 'bold',
		color: "#000000",
	},
	email:{
		fontSize:12,
		color: "#000000",
		marginTop:5
	},
	telephone:{
		fontSize:10,
		color: "#000000",
		marginTop:5,
		textAlign: 'center',
		marginBottom: 15,
	}
});