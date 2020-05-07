import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Text, 
	SafeAreaView, 
	ScrollView, 
	Image,
	TouchableOpacity 
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { connect } from 'react-redux';
import { getProductsByCategoryAction } from '../actions/getProductsByCategoryAction';
import { HOST } from '../utils/utils';
import NumberFormat from 'react-number-format';

class ProductsByCategory extends Component {
	state = {
		token: "",
	}

	componentDidMount(){
		this.setState({ token: this.props.navigation.state.params.token});
		this.props.getProductsByCategoryAction(this.props.navigation.state.params.token, this.props.navigation.state.params.category_id);
	}

  render() {
 
    return (
    	<SafeAreaView style={styles.container}>
      		<ScrollView style={styles.scrollView}>
      			{
      				this.props.products &&
      				<FlatGrid
						itemDimension={130}
						items={this.props.products}
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
				
			</ScrollView>
		</SafeAreaView>
    );
  }
}
 
const styles = StyleSheet.create({
	gridView: {
		flex: 1,
	},
	productContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 160,
		backgroundColor: '#FFFFFF'
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
	productImage: {
		width: "100%",
		height: "100%"
	}
});

const mapStateToProps = (state) => {
	return {
		products: state.productReducer.products.data
	}
};

export default connect(mapStateToProps, { getProductsByCategoryAction })(ProductsByCategory);