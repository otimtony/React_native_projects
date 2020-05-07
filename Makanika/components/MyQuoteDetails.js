import React from 'react'
import { 
	SafeAreaView, 
	ScrollView, 
	StyleSheet, 
	Text, 
	View,
	Dimensions,
	ImageBackground
	} from 'react-native'
import { ListItem } from 'react-native-elements'
import Divider from 'react-native-divider';
import { getQuotation } from '../actions/insuranceActions';
import { connect } from 'react-redux';
import Moment from 'moment';

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class MyQuoteDetails extends React.Component {
  	
  	componentDidMount(){
    	this.props.getQuotation(
    		this.props.navigation.state.params.id, 
    		this.props.navigation.state.params.token
    	)
  	}
	
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
				<ImageBackground
		            source={require('../assets/logo.png')}
		            style={styles.profileContainer}
		            imageStyle={styles.profileBackground}>	
		       		<Text style={ styles.quoteUgandaText }>THE REPUBLIC OF UGANDA</Text>
					<Divider />
					<Text style={ styles.quoteMotorPrivateText }>MOTOR PRIVATE 1002002827</Text>
					<Divider />
					<Text style={ styles.certificateText }>THE REPUBLIC OF UGANDA</Text>
					<Divider />
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Policy: </Text>
						<Text style={styles.variables}>{this.props.quotation.policy.policy_name}</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Name of policyholder: </Text>
						<Text style={styles.variables}>{this.props.quotation.firstname} {this.props.quotation.lastname}</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Policy No: </Text>
						<Text style={styles.variables}>BTM/NTINDA/TPP/827/2019</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Reg No. & Make: </Text>
						<Text style={styles.variables}>{this.props.quotation.registration_number_make}</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Seating Capacity: </Text>
						<Text style={styles.variables}>{this.props.quotation.seating_capacity}</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Gross Weight: </Text>
						<Text style={styles.variables}>{this.props.quotation.gross_weight}</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Chassis No: </Text>
						<Text style={styles.variables}>{this.props.quotation.chassis_number}</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Premium Charged: </Text>
						<Text style={styles.variables}>UGX 70,000</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Start Date/Time: </Text>
						<Text style={styles.variables}>20/11/2019</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>End Date/Time: </Text>
						<Text style={styles.variables}>20/11/2020</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Issuing Company: </Text>
						<Text style={styles.variables}>Britam Insurance Company</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Text>Issuing Officer: </Text>
						<Text style={styles.variables}>Hellen</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
					{
						this.props.quotation.status === "pending"?
						<Text style={{ color: "#FF0000", fontWeight: 'bold' }}>
							Status: Pending
						</Text>:
						<Text style={{ color: "#FF0000", fontWeight: 'bold' }}>
							Status: Valid for 12 months
						</Text>
					}
					</View>
		       	</ImageBackground>
				</ScrollView>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	profileContainer: {
	    height: 300,
	    padding: 0,
	    zIndex: 1,
	},
	profileBackground: {
	    height: 300,
	    borderTopLeftRadius: 10,
	    borderTopRightRadius: 10,
	    opacity: 0.2,
	},
	quoteUgandaText: {
		marginBottom: -15,
		fontWeight: "bold",
		fontSize: 20
	},
	quoteMotorPrivateText: {
		fontWeight: "bold",
		marginBottom: -15,
		marginTop: -15
	},
	certificateText: {
		fontWeight: "bold",
		fontSize: 16,
		marginBottom: -15,
		marginTop: -15
	},
	container: {
		flex: 1,
		justifyContent: 'center',
    	alignItems: 'center',
	},
	variables: {
		fontWeight: 'bold'
	},
	garage: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#3F3F3F',
	},
	amount: {
		fontSize: 12,
		color: '#000000',
	},
	date: {
		fontSize: 10,
		color: '#000000',
	},
})

function mapStateToProps (state) {
  return {
    quotation: state.insuranceReducer.quotation.quotation[0]
  }
}

export default connect( mapStateToProps, { getQuotation })(MyQuoteDetails);