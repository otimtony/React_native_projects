import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Image, 
	TouchableOpacity, 
	Alert, 
	Text,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import { ListItem } from 'react-native-elements'
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import { FloatingAction } from "react-native-floating-action";
import { getSavingsAction } from '../actions/getSavingsAction';
import { getTotalSavingsAction } from '../actions/getTotalSavingsAction';
import { connect } from 'react-redux';

class Savings extends Component {

	constructor(props){
		super(props);
		this.state = { 

			categories: [
				
    		],
		}
	}

	componentDidMount(){
		this.props.getSavingsAction(
			this.props.navigation.state.params.token,
			this.props.navigation.state.params.user_id
		);
		this.props.getTotalSavingsAction(
			this.props.navigation.state.params.token,
			this.props.navigation.state.params.user_id
		);
	}

	render() {
		return (
			<View style={styles.MainContainer}>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic">
					<View style={styles.wallet}>
						<Text style={styles.total}>Total Savings</Text>
						{
							this.props.total &&
							<NumberFormat renderText={text => <Text style={styles.walletAmount}>{text}</Text>} value={this.props.total.data.amount} displayType={'text'} thousandSeparator={true} />
						}	
						<Text style={styles.currency}>UGX - Uganda Shillings</Text>
						{
							this.props.savings &&
							<Text style={{ marginLeft: 30, marginBottom: 10, marginTop: -10 }}>{ this.props.savings.length } Savings</Text>
						}
					</View>
					{
						this.props.savings &&
						this.props.savings.map((saving, i) => (
							<ListItem
								key={i}
								title=<NumberFormat renderText={text => <Text style={styles.amount}>{text}</Text>} value={saving.amount} displayType={'text'} thousandSeparator={true} prefix={'UGX '} />
								bottomDivider
								rightTitle={Moment(saving.added_at).format('DD-MMM-YYYY HH:mm')}
								rightTitleStyle={styles.date}
							/>
						))
					} 
				</ScrollView>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={() => 
          				this.props.navigation.navigate('AddSaving', {
						token: this.props.navigation.state.params.token,
						user_id: this.props.navigation.state.params.user_id
          			})}
					style={styles.TouchableOpacityStyle}>
					<Image 
            			style={styles.FloatingButtonStyle}
            			source={require('../assets/add.png')} />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	MainContainer: {
		backgroundColor: '#F5F5F5',
	},
	TouchableOpacityStyle: {
		position: 'absolute',
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		right: 30,
		bottom: 30,
	},
	FloatingButtonStyle: {
		resizeMode: 'contain',
		width: 50,
		height: 50,
	},
		container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		justifyContent: 'center',
	 	alignItems: 'center', 
	},
	item: {
		justifyContent: 'center',
	 	alignItems: 'center',
		width: '45%',
		backgroundColor: '#FFFFFF',
		margin: 5, 
	},
	image: {
		marginTop: 25,
		marginBottom: 5,
		width: 40,
		height: 40
	},
	number: {
		color: '#FF0000',
		fontWeight: 'bold',
		marginLeft: 5,
		marginTop: 20,
		fontSize: 20,
	},
	name: {
		fontSize: 16,
		marginBottom: 10,
		marginTop: 5
	},
	amount: {
		color: "#FF0000",
		fontWeight: 'bold',
		fontSize: 15
	},
	date: {
		fontSize: 12,
		color: '#000000',
	},
	wallet: {
		backgroundColor: '#FFFFFF',
		marginBottom: 10
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
});

const mapStateToProps = (state) => {
	return {
		savings: state.savingsReducer.savings.data,
		total: state.savingsReducer.total
	}
};

export default connect(mapStateToProps, { getTotalSavingsAction, getSavingsAction})(Savings);