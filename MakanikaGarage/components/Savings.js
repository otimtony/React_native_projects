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
import { connect } from 'react-redux';
import { getSavingsAction } from '../actions/getSavingsAction';
import { getTotalSavingsAction } from '../actions/getTotalSavingsAction';
import NumberFormat from 'react-number-format';
import Moment from 'moment';
import { FloatingAction } from "react-native-floating-action";

class Savings extends React.Component {
 
	constructor(props){
		super(props);
		this.state = { 

			categories: [
				{ 
					name: 'Savings', 
					icon: require('../assets/policies.png'),
					number: "30",
					page: "ApprovedInsurance",
				}, 
				{ 
					name: 'Add Saving', 
					icon: require('../assets/add_saving.png'),
					page: "AddSaving",
				},
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

	GetGridViewItem (item) {
		Alert.alert(item);
	}

	render() {
		return (
			<SafeAreaView>
				<ScrollView
				contentInsetAdjustmentBehavior="automatic">
					<View style={styles.wallet}>
						<Text style={styles.total}>Total Balance</Text>
						{
							this.props.total &&
							<NumberFormat renderText={text => <Text style={styles.walletAmount}>{text}</Text>} value={this.props.total.amount} displayType={'text'} thousandSeparator={true} />
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
				<FloatingAction
          			onPressMain={() => 
          				this.props.navigation.navigate('AddSaving', {
						token: this.props.navigation.state.params.token,
						user_id: this.props.navigation.state.params.user_id
          			})}
       			/>
			</SafeAreaView> 
   		);
 	}
}

const styles = StyleSheet.create({
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
		savings: state.savingReducer.savings.data,
		total: state.savingReducer.total.data,
	}
};

export default connect(mapStateToProps, {getTotalSavingsAction, getSavingsAction})(Savings);



