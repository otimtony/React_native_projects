import React from 'react'

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
import { ListItem } from 'react-native-elements'

class Insurance extends React.Component {
 
	constructor(props){
		super(props);
		this.state = { 

			categories: [
				{ 
					name: 'Approved', 
					icon: require('../assets/policies.png'),
					page: "ApprovedInsurance",
				}, 
				{ 
					name: 'Pending', 
					icon: require('../assets/quotes.png'),
					page: "PendingInsurance",
				},
    		],
		}
	}

	GetGridViewItem (item) {
		Alert.alert(item);
	}

	render() {
		return (
			<SafeAreaView style={{flex: 1}}>
				<View style={styles.Container}>

					<FlatList
						data={ this.state.categories }
						renderItem={({item}) =>
						<View 
							key={item.page}
							style={styles.GridViewBlockStyle} 
							keyExtractor={(item, index) => index.toString()}>
							<TouchableOpacity 
								style={{ alignItems: 'center' }}
								onPress={() => this.props.navigation.navigate(item.page, {
									token: this.props.navigation.state.params.token,
									user_id: this.props.navigation.state.params.user_id
								})}>
								<Image 
				                	source={item.icon}
				                	style={styles.icon}/>						
								<Text style={styles.itemName}> 
									{item.name} 
								</Text>
							</TouchableOpacity>
						</View>}
						numColumns={3}
						keyExtractor={(item, index) => index.toString()}
					/>

					<View style={styles.insurance}>

						<Text style={styles.insuranceText}>Get Insurance for your company</Text>
						
						<View style={{ backgroundColor: '#ffcccc', padding: 25, borderRadius: 100, marginTop: 25}}>
							<Image 
          					style={styles.image}
         	 				source={require('../assets/car_insurance.png')} />
         	 			</View>

						<TouchableOpacity 
							style={styles.button} 
							onPress={() => this.props.navigation.navigate("Policies")}>
							<Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 16, padding: 40 }}>Buy now</Text>
						</TouchableOpacity>

						<TouchableOpacity 
							style={styles.button} 
							onPress={() => this.props.navigation.navigate("QuoteInsurance",
								{
									token: this.props.navigation.state.params.token, 
      								user_id: this.props.navigation.state.params.user_id
								})}>
							<Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 16, padding: 40 }}>Get Quote</Text>
						</TouchableOpacity>

					</View>
				</View>  
			</SafeAreaView>     
   		);
 	}
}

const styles = StyleSheet.create({

	Container :{
		justifyContent: 'center',
		flex:1,
		paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
		backgroundColor: "#F3F3F3"
	},
	button: {
		marginHorizontal: 30,
		backgroundColor: "#E9446A",
		borderRadius: 30,
		height: 35,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 25,
	},
	insurance: {
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		height: 400
	},
	insuranceText: {
		marginTop: 30,
		paddingLeft: 50,
		paddingRight: 50,
		fontWeight: 'bold',
		fontSize: 16
	},
	buyInsurance:{
		backgroundColor: '#FF0000',
	},
	image: {
		width: 100,
		height: 100,
		borderColor: '#FFFFFF',
		borderRadius: 200 / 2
	},
	GridViewBlockStyle: {
	  justifyContent: 'center',
	  flex:1,
	  alignItems: 'center',
	  height: 100,
	  margin: 5,
	  backgroundColor: '#FFFFFF'
	},
	wallet: {
		backgroundColor: '#FFFFFF'
	},
	ProductGridView: {
		flex:1,
		height: 250,
		margin: 5,
		backgroundColor: '#FFFFFF'
	},
	GridViewInsideTextItemStyle: {
	   color: '#fff',
	   padding: 10,
	   fontSize: 18,
	   justifyContent: 'center',
	},
	itemName: {
		marginTop: 5,
		fontSize: 15,
	},
	icon: {
		width: 30,
		height: 30
	},
	productImage: {
		width: 150,
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
	},
	productName: {
		marginLeft: 5,
		marginTop: 5,
		fontSize: 16,
	},
	productDescription: {
		marginLeft: 5,
		fontSize: 12,
  		color: "#383838"
	},
	productAmount: {
		marginLeft: 5,
  		fontSize: 14,
  		fontWeight: 'bold',
  		color: '#000000'
  	},
  	total: {
  		fontWeight: 'bold',
  		marginLeft: 30,
  		color: '#FF0000',
  	},
  	walletAmount: {
  		fontWeight: 'bold',
  		color: '#000000',
  		marginLeft: 30,
  		fontSize: 25
  	},
  	currency: {
  		marginLeft: 30,
  		fontSize: 12,
  		marginBottom: 15
  	},
  	transactions: {
  		fontWeight: 'bold',
  		marginLeft: 30,
  		color: '#FF0000',
  		marginTop: 10,
  		marginBottom: 10
  	},
	garage: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#3F3F3F',
	},
	amount: {
		fontSize: 12,
		color: '#000000',
	},
	date: {
		fontSize: 10,
		color: '#000000',
	},
	number: {
		color: '#FF0000',
		fontWeight: 'bold',
		marginLeft: 5,
		marginTop: 5,
		fontSize: 20,
	}

});

export default Insurance;



