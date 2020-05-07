import React, {Component} from 'react';
import { getQuotationAction } from '../actions/getQuotationAction';
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
import Dialog from "react-native-dialog";
import { connect } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';
import Moment from 'moment';
import NumberFormat from 'react-number-format';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';

class InsuranceDetail extends Component{

	componentDidMount(){
		this.props.getQuotationAction(this.props.navigation.state.params.token, this.props.navigation.state.params.user_id);
	}
	render() {
		return (
			<>
				{
					this.props.quotation &&
					<>
						<Card>
							<Text style={styles.insurancePolicy}>Insurance policy</Text>
							<Text>{this.props.quotation.data.policy.policy_name}</Text>
							<Text>UGX {this.props.quotation.data.policy.policy_amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
						</Card>
						<Card>
							<Text style={styles.insurancePolicy}>Insurance Information</Text>
							<Text>Name: {`${this.props.quotation.data.firstname}` + " " + `${this.props.quotation.data.lastname}`}</Text>
							<Text>Reg No & Make: {this.props.quotation.data.registration_number} {this.props.quotation.data.make}</Text>
							<Text>Seating Capacity: {this.props.quotation.data.seating_capacity}</Text>
							<Text>Gross Weight: {this.props.quotation.data.gross_weight}</Text>
							<Text>Chassis Number: {this.props.quotation.data.chassis_number}</Text>
							<Text>Date: {Moment(this.props.quotation.data.added_at).format('DD-MMM-YYYY HH:mm')}</Text>
						</Card>
					</>
				}
			</>   
   		);
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
		quotation: state.insuranceReducer.quotation
	}
}

export default connect(mapStateToProps, { getQuotationAction })(InsuranceDetail);