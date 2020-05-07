import React, { Component } from 'react';
import {
	Text,
	View,
	Image
} from 'react-native';

class About extends Component {
	render(){
		return(
			<View style={{ alignItems: "center"}}>
				<Image 
					style={{ width: "100%", height: "50%" }}
		            source={require('../assets/about.jpg')} />
		        <Image 
					style={{ width: 70, height: 70, textAlign: "center", marginTop: -40 }}
		            source={require('../assets/logo.png')} />
		        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 5 }}>Makanika Dot Com</Text>
				<Text style={{ marginLeft: 10, marginRight: 10, marginTop: 10, color: "#333333" }}>Makanika Dot Com connects motor vehicle owners to automobile service providers, especially garages/mechanics through our website and mobile app. We also connect users to insurance services, fuel, discounts, rewards and gifts.</Text>
				
			</View>
		)
	}
}

export default About;