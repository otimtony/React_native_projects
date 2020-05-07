import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLoanAction } from '../actions/getLoanAction';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';
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

class LoanDetails extends Component {

	componentDidMount(){
		this.props.getLoanAction(
			this.props.navigation.state.params.token,
			this.props.navigation.state.params.id
		);
	}

	render(){
		return(
			<>
				{
					this.props.loan &&
					<>
						<Card>
							<Text style={styles.heading}>User Info</Text>
							<Text>Name: {this.props.loan.data.firstname} {this.props.loan.data.lastname}</Text>
							<Text>Email: {this.props.loan.data.email}</Text>
							<Text>Address: {this.props.loan.data.address}</Text>
							<Text>D.o.B: {this.props.loan.data.date_of_birth}</Text>
						</Card>
						<Card>
							<Text style={styles.heading}>Loan Application Details</Text>
							<Text>Purpose of loan: {this.props.loan.data.purpose_of_loan}</Text>
							<Text>Loan Amount: {this.props.loan.data.loan_amount}</Text>
							<Text>Monthly Salary: {this.props.loan.data.monthly_salary}</Text>
							<Text>Loan Period: {this.props.loan.data.loan_period}</Text>
							<Text>Status: {this.props.loan.data.status}</Text>
							<Text>Application Date: {this.props.loan.data.added_at}</Text>
						</Card>
						<Card>
							<Text style={styles.heading}>Received Details</Text>
							<Text>Loan Provider: {this.props.loan.data.loan_provider}</Text>
							<Text>Received Amount: {this.props.loan.data.received_amount}</Text>
							<Text>Received Date: {this.props.loan.data.received_date}</Text>
							<Text>Due Date: {this.props.loan.data.due_date}</Text>
						</Card>
					</>
				}
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loan: state.loanReducer.loan,
	}
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#FF0000"
  },
})

export default connect(mapStateToProps, { getLoanAction })(LoanDetails);