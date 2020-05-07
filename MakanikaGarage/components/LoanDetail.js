import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Picker } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { connect } from 'react-redux';
import { getLoanAction } from '../actions/getLoanAction';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';
import Moment from 'moment';
import NumberFormat from 'react-number-format';

class LoanDetail extends Component {

	componentDidMount(){
		this.props.getLoanAction(this.props.navigation.state.params.token, this.props.navigation.state.params.id);
	}

	render(){
		return (
			<View style={styles.container}>
				{
					this.props.loan &&
					<>
						<Card>
							<Text style={styles.insurancePolicy}>{this.props.loan.firstname} {this.props.loan.lastname}</Text>
							<Text>Date of Birth: {this.props.loan.date_of_birth}</Text>
							<Text>Email: {this.props.loan.email}</Text>
							<Text>Address: {this.props.loan.address}</Text>
						</Card>
						<Card>
							<Text>{this.props.loan.purpose_of_loan}</Text>
							<NumberFormat renderText={text => <Text>{text}</Text>} value={`${this.props.loan.loan_amount}`} displayType={'text'} thousandSeparator={true} prefix={'Loan Amount: UGX '} />
							<NumberFormat renderText={text => <Text>{text}</Text>} value={`${this.props.loan.monthly_salary}`} displayType={'text'} thousandSeparator={true} prefix={'Monthly Salary: UGX '} />
							<Text>Loan Period: {this.props.loan.loan_period}</Text>
							<Text>Date: {Moment(this.props.loan.added_at).format('DD-MMM-YYYY HH:mm')}</Text>
						</Card>
					</>
				}
				
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	insurancePolicy: {
		fontSize: 16,
		fontWeight: 'bold',
		color: "#FF0000"
	},
});

function mapStateToProps (state) {
	return {
		loan: state.loanReducer.loan.data
	}
}


export default connect(mapStateToProps, { getLoanAction })(LoanDetail);