import React, { Component } from 'react';
import {
	AppRegistry,
	ScrollView,
	Dimensions,
	Text,
	View,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

class GarageIntro extends Component {
	constructor(props){
		super(props);
		this.state = {
			items: [
				{
					'title': "Request Mechanic",
					'icon': require('../assets/mechanic.png'),
					'description': "Request the nearest mechanic, get your car fixed and rate the mechanic",
				},
				{
					'title': "Request Service",
					'icon': require('../assets/schedule.png'),
					'description': "Request the nearest Service station, get your car fixed, rate the mechanic and cash out",
				},
				{
					'title': "Break Down",
					'icon': require('../assets/towing.png'),
					'description': "Request the nearest breakdown, get your towed to the service station, rate the breakdown and cash out",
				}, 
				{
					'title': "Shop",
					'icon': require('../assets/shop.png'),
					'description': "Order for spare parts from out shop.",
				},
				{
					'title': "Wallet",
					'icon': require('../assets/wallet.png'),
					'description': "Top up to your wallet and go cashless",
				}
			]
		}
	}

	render(){
		let screenWidth = Dimensions.get('window').width;
		let screenHeight = Dimensions.get('window').height;
		const items = this.state.items.map((item) => {
			return (
				<View style={{
					flex: 1,
					width: screenWidth,
					alignItems: 'center',
					marginTop: 20
				}} key={item.title}>
					<Image 
					style={styles.image}
          			resizeMode={"cover"}
					source={item.icon} />
					<Text style={styles.requestMechanic}>{item.title}</Text>
					<Text style={styles.description}>{item.description}</Text>
					<TouchableOpacity 
						style={styles.skipTouchableOpacity}
						onPress={() => this.props.navigation.navigate("Home")}>
						<Text style={styles.skip}>Skip</Text>
					</TouchableOpacity>
				</View>
			)
		})

		return(
			<ScrollView
				horizontal={true}
				pagingEnabled={true}
				showHorizontalScrollIndicator={true}>
				{items}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: "#ecf0f1",
  },
  requestMechanic: {
  	marginTop: 50,
  	fontWeight: "bold",
  	fontSize: 18
  },
  description: {
  	textAlign: 'center',
  	marginTop: 20,
  	paddingLeft: 30,
  	paddingRight: 30,
  },
  skipTouchableOpacity: {
  	backgroundColor: "#FF0000",
  	position: 'absolute',
    bottom:0,
    width: "80%",
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  skip: {
  	padding: 10,
  	color: "#FFFFFF"
  }
});


export default GarageIntro;