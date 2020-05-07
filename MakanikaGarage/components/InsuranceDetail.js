import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getInsuranceAction } from '../actions/getInsuranceAction';
import Moment from 'moment';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';

class InsuranceDetail extends Component{

	componentDidMount(){
		this.props.getInsuranceAction(this.props.navigation.state.params.token, this.props.navigation.state.params.id)
	}

	render(){
		return(
			<>
				{
					this.props.insurance &&
					<>
						<Card>
							<Text style={styles.insurancePolicy}>Insurance policy</Text>
							<Text>{this.props.insurance.policy.policy_name}</Text>
							<Text>UGX {this.props.insurance.policy.policy_amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
						</Card>
						<Card>
							<Text style={styles.insurancePolicy}>Insurance Information</Text>
							<Text>Name: {`${this.props.insurance.firstname}` + " " + `${this.props.insurance.lastname}`}</Text>
							<Text>Reg No & Make: {this.props.insurance.registration_number_make}</Text>
							<Text>Seating Capacity: {this.props.insurance.seating_capacity}</Text>
							<Text>Gross Weight: {this.props.insurance.gross_weight}</Text>
							<Text>Chassis Number: {this.props.insurance.chassis_number}</Text>
							<Text>Date: {Moment(this.props.insurance.added_at).format('DD-MMM-YYYY HH:mm')}</Text>
						</Card>
					</>
				}
			</>
		)
	}
}

const styles = StyleSheet.create({
  insurancePolicy: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#FF0000"
  },
})

function mapStateToProps (state) {
	return {
		insurance: state.insuranceReducer.insurance.data
	}
}

export default connect(mapStateToProps, { getInsuranceAction })(InsuranceDetail);