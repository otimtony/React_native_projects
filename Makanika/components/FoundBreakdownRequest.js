import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Text, 
	Image, 
	TouchableOpacity, 
	ScrollView, 
	Alert,
	Linking } 
from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

class FoundBreakdownRequest extends Component {
	render(){
		const params = this.props.navigation.state.params.breakdown_request;
		const breakdown_phone_number = params.data.breakdown_agent.breakdown_phone_number;
		const location = params.data.breakdown_agent.breakdown_coordinates.split(',');
		const latitude = parseFloat(location[0]);
		const longitude = parseFloat(location[1]);
		console.log("<<<<<<<<<<..........>>>>>>>>>>", params.data.breakdown_agent.breakdown_coordinates)

		return (
			<View style={styles.container}>
				<MapView
					provider={PROVIDER_GOOGLE} 
					style={styles.map}
					initialRegion={{
					latitude: 0.3419169,
					longitude: 32.592069,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
					}}>
	             	<Marker coordinate={{latitude:latitude, longitude:longitude}}/>
	          	</MapView>
	          	<View style={ styles.requestContainer }>
	          		<Text style={styles.makanikaText}>Breakdown details</Text>
	          		<Image 
						style={{ width: 70, height: 70, marginTop: 10 }}
						source={require('../assets/towing.png')} />
					<Text style={styles.garageName}>{params.data.breakdown_agent.breakdown_name}</Text>
					<Text>{breakdown_phone_number}</Text>
					<Text>{params.data.breakdown_agent.breakdown_address}</Text>
					<TouchableOpacity 
						style={styles.call} 
						onPress={()=>{Linking.openURL('tel:'+breakdown_phone_number);}}>
						<Text style={styles.callText}>Call</Text>
					</TouchableOpacity>
	          	</View>
	        </View>
		)
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
	 map: {
  		...StyleSheet.absoluteFillObject,
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


export default FoundBreakdownRequest;