import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Picker, ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { connect } from 'react-redux';
import { getProductAction } from '../actions/getProductAction';
import { getProductsAction } from '../actions/getProductsAction';
import { addToCartAction } from '../actions/addToCartAction';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';
import NumberFormat from 'react-number-format';
import NumericInput from 'react-native-numeric-input'
import { HOST } from '../utils/utils';
import { userData } from '../utils/userData';

class ProductDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			token: "",
		};
	}

	componentDidMount(){
		this.setState({ token: this.props.navigation.state.params.token })
		this.props.getProductsAction();
		this.props.getProductAction(this.props.navigation.state.params.id, this.props.navigation.state.params.token);
		this.loadUserData();
	}

	loadUserData = async () => {
    	const parsed = await userData();
  	}

	handleAddToCart = (image, price, name, id, quantity) => {
		const total = (quantity * price)
		if (quantity) {
			const product = {
				price: price,
				total: total,
				name: name,
				id: id,
				quantity: quantity,
				image: image,

			}
			this.props.addToCartAction(product)
		}else {
			const total = (1 * price)
			const product = {
				price: price,
				total: total,
				name: name,
				id: id,
				quantity: 1,
				image: image,

			}
			this.props.addToCartAction(product)
		}
	}

	static getDerivedStateFromProps(props, state) {
		if (props.product) {
			const images = []
			for(let i = 0; i < props.product.images.length; i++){
				images.push(`${HOST}`+props.product.images[i].image)
			}
			return {
				images: images,
			};
		}
		return null;
	}

	productDetail = (product_id) => {
		this.props.navigation.navigate("ProductDetail", {
			id: product_id,
			token: this.props.navigation.state.params.token})
	}

	render() {

		return (
			<ScrollView style={styles.container}>
				{
					this.props.product &&
					<>
						<SliderBox
							images={this.state.images}
							onCurrentImagePressed={index =>
							console.warn(`image ${index} pressed`)
							}
						/>
						<Text style={styles.productName}>{this.props.product.name}</Text>
						<View style={{flex: 1, flexDirection: 'row', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
							<View style={{flex:1}} >
								<NumericInput 
						            value={this.state.quantity} 
						            onChange={quantity => this.setState({quantity})} 
						            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
						            totalWidth={80} 
						            totalHeight={30} 
						            iconSize={25}
						            step={1}
						            minValue={1}
						            initValue={1}
						            valueType='real'
						            rounded 
						            textColor='#B0228C' 
						            iconStyle={{ color: 'black' }} 
						            rightButtonBackgroundColor='#FFFFFF' 
						            leftButtonBackgroundColor='#FFFFFF'/>
							</View>
							<View style={{flex:1}} >
								<NumberFormat renderText={text => <Text style={styles.price}>{text}</Text>} value={this.props.product.price} displayType={'text'} thousandSeparator={true} prefix={'UGX '}/>
							</View>
						</View>
						<Text style={{ fontWeight: "bold", marginTop: 20, marginLeft: 20 }}>About the product</Text>
						<Text style={{ color: "#383838", marginLeft: 20, marginTop: 5 }}>Make: {this.props.product.make}</Text>
						<Text style={{ color: "#383838", marginLeft: 20, marginTop: 5, marginBottom: 20 }}>{this.props.product.description}</Text>
						<Text style={{ color: "#383838", marginLeft: 20, fontWeight: 'bold', color: "#FF0000" }}>Similar</Text>
						<FlatList
							horizontal
							data={this.props.products}
							renderItem={({ item: rowData }) => {
								return (
									<TouchableOpacity onPress={() => this.productDetail(rowData.id)}>
										<Card
											image={{ uri: `${HOST}`+`${rowData.images[0].image}` }}
											containerStyle={{ padding: 0, width: 160, margin: 5 }}>
											<Text style={{ fontWeight: 'bold', color: '#FF0000' }}>
												{ rowData.name }
											</Text>
											<NumberFormat renderText={text => <Text style={styles.productAmountText}>{text}</Text>} value={rowData.price} displayType={'text'} thousandSeparator={true} prefix={'UGX '} />
										</Card>
									</TouchableOpacity>
								);
							}}
							keyExtractor={(item, index) => index.toString()}
						/>
						<View style={{flex: 1,justifyContent: 'flex-end', marginTop: 10 }}>
							<View style={{flexDirection: 'row'}}>
								<TouchableOpacity
									style={{width:'50%',height:50,backgroundColor:'#FF0000', 
									alignItems:'center', justifyContent:'center'}}
									onPress={() => this.handleAddToCart(this.props.product.images[0], this.props.product.price, this.props.product.name, this.props.product.id, this.state.quantity)}>
									<Text style={{color:'white', fontSize: 16}}>Add To Cart</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{width:'50%',height:50,backgroundColor: '#006400', 
									alignItems:'center',justifyContent:'center'}}
									onPress={() => this.props.navigation.navigate("Cart")}>
									<Text style={{color:'white', fontSize: 16}}>View Cart</Text>
								</TouchableOpacity>
							</View>
						</View>
					</>
				}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		flex: 1
	},
	insurancePolicy: {
		fontSize: 18,
		fontWeight: 'bold',
		color: "#FF0000"
	},
	productName: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
		marginLeft: 20,
	},
	quantity: {
		textAlign: 'left',
		marginLeft: 20,	
		marginTop: 10,	
	},
	price: {
		fontSize: 20,
		fontWeight: 'bold',
		justifyContent:'center',
		textAlign: 'right'
	},

});

function mapStateToProps (state) {
	return {
		product: state.productReducer.product.data,
		products: state.productReducer.products.data
	}
}

export default connect(mapStateToProps, { addToCartAction, getProductAction, getProductsAction })(ProductDetail);