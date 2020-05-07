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
	SafeAreaView,
	TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { getCategoriesAction } from '../actions/getCategoriesAction';
import { getProductsAction } from '../actions/getProductsAction';
import { HOST } from '../utils/utils';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import NumberFormat from 'react-number-format';

class Shop extends React.Component {
 
	constructor(props){
		super(props);
		this.state = { 
			token: "",
			search: "",
			text: "",
			products: "",
		}
	}

	componentDidMount() {
		this.setState({ token:this.props.navigation.state.params.token })
		this.props.getCategoriesAction(this.props.navigation.state.params.token);
		this.props.getProductsAction(this.props.navigation.state.params.token);
	}

	static getDerivedStateFromProps(props, state) {
		if (props.products !== state.products) {
			return {
				products: props.products,
			};
		}
		return null;
	}

	render() {
		let shopProducts = ""
		if (this.state.products) {
			const filteredProducts = this.state.products.filter((product) => {
				if (!this.state.search) return true
				if (product.name.toLowerCase().includes(this.state.search.toLowerCase()) || product.description.toLowerCase().includes(this.state.search.toLowerCase())) {
					return true
				}		
			})

			shopProducts = filteredProducts
		}

		return (
				<>
	  			{
	  				this.state.products &&
	  				<FlatGrid
	  					ListHeaderComponent={
	  						<>
		  						<View style={{flex: 1, flexDirection: 'row'}}>
									<TextInput 
						                keyboardType='number-pad'
						                style={styles.searchInput} 
						                autoCapitalize="none"
						                placeholder="Search..."
						                onChangeText={search => this.setState({ search })}
						                value={this.state.search}>
						            </TextInput>
						            <Icon name="ios-search" size={30} style={{ marginTop: 15, marginRight: 20 }}/>
								</View>
		  						<Text style={{ marginLeft: 15, marginTop: 5, marginBottom: 2, fontSize: 14, fontWeight: "bold" }}>Categories</Text>
					  			{
					  				this.props.categories &&
					  				<FlatGrid
										itemDimension={80}
										items={this.props.categories}
										style={styles.gridView}
										fixed
										renderItem={({ item, index }) => (
											<TouchableOpacity
												onPress={() => this.props.navigation.navigate("ProductsByCategory", {
													category_id: item.id,
													token: this.state.token
												})}
												>
												<View style={styles.itemContainer}>
											        <Image 
														source={{uri: `${HOST}`+`${item.image}`}}
														style={styles.icon}/>
													<Text style={styles.categoryNameText}>{item.name}</Text>
												</View>
											</TouchableOpacity>
										)}
									/>
					  			}
	  							<Text style={{ marginLeft: 15, marginBottom: 5, fontSize: 14, fontWeight: "bold" }}>Products</Text>
	  						</>
	  					}
						itemDimension={130}
						items={shopProducts}
						style={styles.gridView}
						renderItem={({ item, index }) => (
							<TouchableOpacity
								onPress={() => this.props.navigation.navigate("ProductDetail", {
									id: item.id,
									token: this.state.token
								})}
								>
								<View style={{ height: 220, backgroundColor: '#FFFFFF' }}>
									<View style={styles.productContainer}>
										<Image 
											source={{uri: `${HOST}`+`${item.images[0].image}`}}
											style={styles.productImage}/>
									</View>
									<Text style={styles.productNameText}>{item.name}</Text>
									<NumberFormat renderText={text => <Text style={styles.productAmountText}>{text}</Text>} value={item.price} displayType={'text'} thousandSeparator={true} prefix={'UGX '} />
								</View>
							</TouchableOpacity>
						)}
					/>
	  			}
	  			</>
   		);
 	}
}

const styles = StyleSheet.create({
	gridView: {
		flex: 1,
		backgroundColor: '#F0F0F0'
	},
	itemContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		padding: 10,
		height: 100,
		backgroundColor: '#FFFFFF'
	},
	productContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 160,
		backgroundColor: '#FFFFFF'
	},
	itemName: {
		fontSize: 16,
		color: '#fff',
		fontWeight: '600',
	},
	itemCode: {
		fontWeight: '600',
		fontSize: 12,
		color: '#fff',
	},
	categoryNameText: {
		fontWeight: '600',
		fontSize: 12,
		marginTop: 5,
		color: "#000000"
	},
	productNameText: {
		color: "#000000",
		marginLeft: 10,
		marginTop: 10,
	},
	productAmountText: {
		color: "#000000",
		marginLeft: 10,
		fontWeight: 'bold',
		paddingBottom: 10,
	},
	icon: {
		width: 50,
		height: 50
	},
	productImage: {
		width: "100%",
		height: "100%"
	},
	searchInput: {
		backgroundColor: "#FFFFFF",
		flex: 1,
	    borderColor: "#FFFFFF",
	    borderWidth: 1,
	    height: 40,
	    fontSize: 15,
	    marginLeft: 10,
	    marginTop: 10,
	    marginRight: -30,
  	},
});

function mapStateToProps (state) {
	return {
		categories: state.categoryReducer.categories.data,
		products: state.productReducer.products.data
	}
}

export default connect(mapStateToProps, { getCategoriesAction, getProductsAction })(Shop);




