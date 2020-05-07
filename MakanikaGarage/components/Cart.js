import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements'
import NumberFormat from 'react-number-format';

class Cart extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.cart}>
					{	
						this.props.cartItems &&
		              	this.props.cartItems.map((item, i) => (
		                <ListItem
							key={i}
							title={item.name}
							subtitle={`Quantity: ${item.quantity}`}
							subtitleStyle={styles.carModelBrand}
							bottomDivider
							rightTitle=<NumberFormat renderText={text => <Text style={styles.amount}>{text}</Text>} value={`UGX ${item.total}`} displayType={'text'} thousandSeparator={true} prefix={'UGX '} />
							rightTitleStyle={styles.carModelBrand}
							bottomDivider
							rightIcon
							onPress={() => this.props.navigation.navigate(profile.page)}
		                />
		              ))
		            }
	            </View>
	            <View style={{flex: 1,justifyContent: 'flex-end'}}>
					<View style={{flexDirection: 'row'}}>
						<View style={{flexDirection: 'row', width:'60%', backgroundColor: '#FF0000', alignItems:'center',justifyContent:'center'}}>
							{
								this.props.cartItems &&
								<Text style={{width: '30%', marginLeft: 10, color: "#FFFFFF"}}>
									Total {this.props.cartItems.length} items
								</Text>
							}
							<NumberFormat renderText={text => <Text style={styles.grand_total}>{text}</Text>} value={`UGX ${this.props.total}`} displayType={'text'} thousandSeparator={true} prefix={'UGX '} />
						</View>
						<TouchableOpacity
							style={{width:'40%',height:50,backgroundColor: '#006400', 
							alignItems:'center',justifyContent:'center'}}
							onPress={() => this.props.navigation.navigate('PaymentOptions', {
								amount: this.props.total
							})}>
							<Text style={{color:'white', fontSize: 16}}>Check Out</Text>
						</TouchableOpacity>
					</View>
				</View>
            </View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	insurancePolicy: {
		fontSize: 18,
		fontWeight: 'bold',
		color: "#FF0000"
	},
	cart: {
		margin: 10
	},
	amount: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '#FF0000',
	},
	grand_total: {
		width: '70%', 
		color: "#FFFFFF", 
		fontSize: 20, 
		fontWeight: 'bold'
	}
});

function mapStateToProps (state) {

	var a = state.cartReducer,
	total = 0;
	for (var i=0; i<state.cartReducer.length; i++) {
		total += state.cartReducer[i].total;
	}

	return {
		cartItems: state.cartReducer,
		total: total
	}
}

export default connect(mapStateToProps)(Cart);