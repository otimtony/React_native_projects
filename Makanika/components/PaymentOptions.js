import React from 'react'
import { ListItem } from 'react-native-elements'
import { 
	AppRegistry, 
	StyleSheet, 
	FlatList, 
	Text, 
	View, 
	Alert, 
	Platform,
	Image, 
	ScrollView,
	TouchableOpacity,
	SafeAreaView
} from 'react-native';
import Dialog from "react-native-dialog";
import { connect } from 'react-redux';

import { 
  Dimensions,
  ImageBackground } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Divider from 'react-native-divider';
import AsyncStorage from '@react-native-community/async-storage';

const Messages = [
	{
		garage: 'Ivans garage', 
		pic: require('../assets/logo.png'),
		amount: 'UGX 20,0000',
		date: '12/12/2019'
	},
	{
		garage: 'Best garage uganda',
		pic: require('../assets/logo.png'),
		amount: 'UGX 140,000',
		date: '12/12/2019'
	},
	{
		garage: 'Land Rover Discovery',
		pic: require('../assets/logo.png'),
		amount: 'UGX 53,000',
		date: '12/12/2019'
	}
]

class PaymentOptions extends React.Component {

	constructor(props){
		super(props);
	}

	render() {

		const items = [
			{ 
				title: 'Mobile Money', 
				icon: require('../assets/mobile_money.png'),
				name: 'MobileMoney',
			}, 
			{ 
				title: 'Card', 
				icon: require('../assets/card.png'),
				name: 'Card',
			}
		];

		return (
			<View style={styles.container}>
        		<FlatGrid
					itemDimension={150}
					items={items}
					style={styles.gridView}
					renderItem={({ item, index }) => (
						<TouchableOpacity id={item.title}
							onPress={() => this.props.navigation.navigate(item.name, { order: this.props.navigation.state.params.order })}>
							<View style={[styles.itemContainer, { backgroundColor: "#FFFFFF" }]}>
								<Image 
								source={item.icon}
								style={styles.icon}/>
								<Text style={styles.itemName}>{item.title}</Text>
							</View>
						</TouchableOpacity>
          			)}
        		/>
        	</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#F0F0F0",
		height: 580,
	},
	gridView: {
		backgroundColor: "#F0F0F0",
		flex: 1,
	},
	itemContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		padding: 10,
		height: 100,
	},
	itemName: {
		marginTop: 5,
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 20,
	},
	icon: {
		width: 50,
		height: 50,
		marginTop: 20,
	},
});

export default PaymentOptions;