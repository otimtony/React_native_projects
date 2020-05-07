import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { ListItem } from 'react-native-elements';
import Divider from 'react-native-divider';
import StarRating from 'react-native-star-rating';
import { getQuotation } from '../actions/insuranceActions';

class PaymentDetails extends React.Component {

	constructor(props) {
    	super(props);
		this.state = {
			starCount: 3.5
		};
	}

	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}

	render() {

		const { navigation } = this.props;

		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<View style={{flex: 1, flexDirection: 'row'}}>
					    <Image 
				          style={styles.image}
				          source={require('../assets/logo.png')} />
				        <View>
							<Text style={{ marginLeft: 5, marginTop: 5, fontSize: 13, fontWeight: "bold" }}>{JSON.stringify(navigation.getParam('title'))}</Text>
							<Text style={{ marginLeft: 5, fontSize: 12, color: "#3F3F3F" }}>13/12/19, 3.45 PM </Text>
				        </View>
				        <View>
							<Text style={{ marginLeft: 150, marginTop: 5, fontSize: 13, fontWeight: "bold" }}>2,500</Text>
							<Text style={{ marginLeft: 160, fontSize: 12, color: "#3F3F3F" }}>UGX</Text>
						</View>
					</View>
					<Text style={{ marginTop: 10, marginLeft: 20, color: "#FF0000", marginBottom: 10 }}>Details</Text>
					<View style={{ backgroundColor: "#F3F3F3", marginLeft: 5, marginRight: 5, borderRadius: 10, elevation: 3 }}>
						<Text style={{ marginLeft: 15, marginTop: 15, fontSize: 12, color: "#3F3F3F" }}>PICK UP</Text>
						<Text style={{ marginLeft: 15, fontSize: 16, color: "#3F3F3F", marginBottom: 10 }}>Kanjokya House, Plot 90</Text>
						<View
						  style={{
						    borderBottomColor: '#CCCCCC',
						    borderBottomWidth: 1,
						    marginLeft: 10,
						    marginRight: 10
						  }}
						/>
						<Text style={{ marginLeft: 15, marginTop: 15, fontSize: 12, color: "#3F3F3F" }}>Your rating of Otim's Garage</Text>

					    <View style={{flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 10}}>
							<Text style={{ marginLeft: 15, marginTop: -1, fontSize: 14, color: "#404040", marginRight: 5}}>
								{this.state.starCount} 
							</Text>
							<StarRating
						        disabled={false}
						        emptyStar={'ios-star-outline'}
						        fullStar={'ios-star'}
						        halfStar={'ios-star-half'}
						        iconSet={'Ionicons'}
						        maxStars={5}
						        starSize={15}
						        rating={this.state.starCount}
						        selectedStar={(rating) => this.onStarRatingPress(rating)}
						        fullStarColor={'red'}
						      />
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	variables: {
		fontWeight: 'bold'
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
	image: {
		marginLeft: 20,
		width: 50,
		height: 50
	}
})

export default PaymentDetails;