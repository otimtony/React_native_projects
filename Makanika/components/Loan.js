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
import { getLoansAction } from '../actions/getLoansAction';
import { getTotalLoanAction } from '../actions/getTotalLoanAction';
import { userData } from '../utils/userData';

class Savings extends Component {

	constructor(props){
		super(props);
		this.state = { 
			user: "",
			token: "",
			total_approved: "",
			total_repaid: "",
		}
	}

	componentDidMount(){
		this.loadUserData();
		this.props.getTotalLoanAction(			
			this.props.navigation.state.params.token,
			this.props.navigation.state.params.user_id);
		this.props.getLoansAction(			
			this.props.navigation.state.params.token,
			this.props.navigation.state.params.user_id);
		this.props.getSavingsAction(
			this.props.navigation.state.params.token,
			this.props.navigation.state.params.user_id
		);
		this.props.getTotalSavingsAction(
			this.props.navigation.state.params.token,
			this.props.navigation.state.params.user_id
		);
	}

	loadUserData = async () => {
		const parsed = await userData();
		this.setState({ user: parsed.data.id, token: parsed.token})
	}

	static getDerivedStateFromProps(props, state) {
		if (props.loans) {
			let total_approved = 0;
			let total_repaid = 0;
			props.loans.data.filter(loan => loan.status === 'approved').map((loan, i) => (
				total_approved += Number(loan.loan_amount)
			))
			props.loans.data.filter(loan => loan.status === 'repaid').map((loan, i) => (
				total_repaid += Number(loan.loan_amount)
			))

			return {
				total_approved: total_approved,
				total_repaid: total_repaid
			};
		}
		return null;
	}

	render() {
		return (
			<View style={styles.MainContainer}>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic">
					<View style={{flex: 1, flexDirection: 'row'}}>
						<View style={{width: "75%", backgroundColor: 'white'}}>
							<Text style={styles.total}>Total Unpaid Loan</Text>
							<NumberFormat renderText={text => <Text style={styles.walletAmount}>{text}</Text>} value={this.state.total_approved} displayType={'text'} thousandSeparator={true} prefix={'UGX '}/>
							<Text style={styles.currency}>Total Repaid loans - <NumberFormat renderText={text => <Text style={styles.repaid}>{text}</Text>} value={this.state.total_repaid}displayType={'text'} thousandSeparator={true} prefix={'UGX '}/></Text>
						</View>
						<View style={{width: "25%", backgroundColor: 'white'}}>
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={() => 
			          				this.props.navigation.navigate('GetLoan', {
									token: this.props.navigation.state.params.token,
									user_id: this.props.navigation.state.params.user_id
			          			})}
								style={styles.TouchableOpacityStyle}>
								<Image 
			            			style={styles.FloatingButtonStyle}
			            			source={require('../assets/add.png')} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.wallet}></View>
					{
		            	this.props.loans &&
		            	this.props.loans.data.map((loan, i) => (
		              	<View>
			                <ListItem
								key={loan.id}
								title={loan.purpose_of_loan}
								titleStyle={styles.purpose_of_loan}
								subtitle=<NumberFormat renderText={text => <Text style={styles.loanAmount}>{text}</Text>} value={loan.loan_amount} displayType={'text'} thousandSeparator={true} prefix={'UGX '} /> 
								subtitleStyle={styles.amount}
								bottomDivider
								rightTitle={Moment(loan.added_at).format('DD-MMM-YYYY HH:mm A')}
								rightSubtitle={loan.status}
								rightSubtitleStyle={styles.rightSubtitleStyle}
								rightTitleStyle={styles.added_at}
								chevron
								onPress={() => this.props.navigation.navigate("LoanDetails", {
									token: this.props.navigation.state.params.token,
									id: loan.id
								})}
			                />
		              	</View>
		       		))}
				</ScrollView>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	MainContainer: {
		backgroundColor: '#F5F5F5',
	},
	added_at: {
		fontSize: 10,
	},
	purpose_of_loan: {
		fontSize: 14
	},
	repaid: {
		fontSize: 14,
		fontWeight: "bold"
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
	rightSubtitleStyle: {
		fontSize: 14,
		color: "#FF0000"
	},
	FloatingButtonStyle: {
		resizeMode: 'contain',
		width: 50,
		height: 50,
		marginTop: 25,
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
  	loanAmount: {
  		fontSize: 14,
  		fontWeight: 'bold',
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
		loans: state.loanReducer.loans,
		savings: state.savingsReducer.savings.data,
		total: state.savingsReducer.total
	}
};

export default connect(mapStateToProps, { getTotalLoanAction, getTotalSavingsAction, getSavingsAction, getLoansAction})(Savings);