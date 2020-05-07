import React from 'react';
import { 
	SafeAreaView, 
	ScrollView, 
	StyleSheet, 
	View, 
	Text,
	TouchableOpacity,
	Image
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import StarRating from 'react-native-star-rating';
import { getProduct } from '../actions/shopActions';
import { connect } from 'react-redux';
import { HOST } from '../utils/utils';
import { FlatGrid } from 'react-native-super-grid';

class Payments extends React.Component {

	constructor(props) {
    	super(props);
		this.state = {
			images: [
				"https://source.unsplash.com/1024x768/?nature",
		        "https://source.unsplash.com/1024x768/?water",
		        "https://source.unsplash.com/1024x768/?girl",
		        "https://source.unsplash.com/1024x768/?tree"
			],
			starCount: 3.5,
			slug: "",
			token: ""
		};
	}

	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}

	componentDidMount() {

		this.setState({ token:this.props.navigation.state.params.token })
		this.props.getProduct(
			this.props.navigation.state.params.token, 
			this.props.navigation.state.params.id
		)

	}

	render() {

		const items = [
			{ 
				name: 'Services', 
				icon: require('../assets/logo.png'),
			}, 
			{ 
				name: 'Insurance', 
				icon: require('../assets/insurance.png'),
			},
			{ 
				name: 'Wallet', 
				icon: require('../assets/wallet.png'),
			}, 
			{ 
				name: 'Shop', 
				icon: require('../assets/shop.png'), 
			},
			{ 
				name: 'Savings', 
				icon: require('../assets/savings.png'), 
			},
			{ 
				name: 'Loan', 
				icon: require('../assets/loan.png'), 
			},
		];


		
		// const result = this.props.product.images.map(function(val) {
		//   return '"'+`${HOST}`+val.image+'"';
		// }).join(', ');

		// const image_array = "["+result+"]"


		console.log("<<<<<<<<<<<......result......>>>>>>>>>>>", this.props.product.images)

		return (
			<SafeAreaView>
			{
				this.props.product &&
				<ScrollView style={{ marginBottom: 30}}>
					<SliderBox
						images={this.state.images}
						onCurrentImagePressed={index =>
						console.warn(`image ${index} pressed`)}
					/>
					<View style={{ backgroundColor: "#F3F3F3"}}>
						<Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 10, marginTop: 10}}>
							{this.props.product.name}
						</Text>
						<Text style={{fontSize: 16, marginLeft: 10}}>
							UGX {this.props.product.price}
						</Text>
						<Text style={{ marginLeft: 10, fontSize: 12}}>
							{this.props.product.description}
						</Text>
						<View style={{flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 10}}>
							<Text style={{ marginLeft: 10, fontSize: 14, color: "#404040", marginRight: 5}}>
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
					<View style={{ backgroundColor: "#F3F3F3", marginTop: 10, marginBottom: 10 }}>
						<Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 10, marginTop: 10}}>
							Description
						</Text>
						<Text style={{ fontWeight: "bold", fontSize: 12, marginLeft: 10, marginTop: 10, marginBottom: 5}}>
							Features & details
						</Text>
						<View
							style={{
								borderBottomColor: '#C8C8C8',
								borderBottomWidth: 1,
							}}
						/>
						<View style={{flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 10}}>
							<Text style={{ width: 100, marginLeft: 10, fontSize: 13, color: "#404040"}}>
								Category
							</Text>
							<Text style={{ marginLeft: 10, fontSize: 13, color: "#404040", marginRight: 5}}>
								{this.props.product.category.category_name} 
							</Text>
						</View>
					</View>
					<Text style={styles.similarText}>Similar</Text>
					<FlatGrid
			          itemDimension={150}
			          items={items}
			          style={styles.gridView}
			          renderItem={({ item, index }) => (
			            <TouchableOpacity id={item.name}
			              onPress={() => this.props.navigation.navigate(item.name, {
			                token: this.state.token,
			                user_id: this.state.user_id,
			              })}>
			              <View style={[styles.itemContainer, { backgroundColor: "#FFFFFF" }]}>
			                <Image 
			                  source={item.icon}
			                style={styles.image}
			                 />
			                <Text style={styles.itemName}>{item.name}</Text>
			              </View>
			            </TouchableOpacity>
			          )}
			        />
				</ScrollView>
			}
			<View style={{flex: 1, flexDirection: 'row', position: 'absolute', left: 0, right: 0, bottom: 0}}>
				<View style={{ width: 150, justifyContent: "center", alignItems: "center", backgroundColor: "#C8C8C8"}}>
					<Image 
          				style={{ width: 20, height: 20, marginTop: 10, marginBottom: 5}}
          				source={require('../assets/shopping-cart.png')} />
          			<Text style={{ color: "#FF0000", fontWeight: "bold"}}>
						Cart
					</Text>
      			</View>
      			<View style={{ width: 250, justifyContent: "center", alignItems: "center", backgroundColor: "#FF0000"}}>
					<Text style={{ color: "#FFFFFF", fontWeight: "bold"}}>
						Buy Now
					</Text>
      			</View>
			</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
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
	similarText: {
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 10,
		marginRight: 5
	},
	gridView: {
		backgroundColor: "#F0F0F0",
		marginTop: 5,
		flex: 1,
	},
	itemContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		padding: 10,
		height: 100,
	},
	icon: {
		width: 50,
		height: 50
	},
	image: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 50,
		marginTop: 10
	}

})

function mapStateToProps (state) {
	return {
		product: state.shopReducers.product.data[0],
	}
}

export default connect(mapStateToProps, { getProduct })(Payments);