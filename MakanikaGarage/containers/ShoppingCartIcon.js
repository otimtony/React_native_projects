import React from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const ShoppingCartIcon = (props) => (
	<View style={{ padding: 5 }}>
		<View style={styles.itemCountShadow}>	
			<Text style={styles.itemCount}>
				{props.cartItems.length}
			</Text>
		</View>
		<Icon onPress={() => props.navigation.navigate('Cart')} name="ios-cart" size={30} />
	</View>
)

const mapStateToProps = (state) => {
	return {
		cartItems: state.cartReducer
	}
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent: 'center'
	},
	itemCountShadow:{
		position: 'absolute', 
		height: 30, 
		width: 30, 
		borderRadius: 15, 
		backgroundColor: '#FF0000', 
		right: 15, 
		bottom: 15, 
		alignItems: 'center', 
		justifyContent: 'center', 
		zIndex: 2000
	},
	itemCount: {
		color: "#FFFFFF",
		fontWeight: 'bold',
	}
});