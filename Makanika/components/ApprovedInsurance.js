import React from 'react'
import { ListItem } from 'react-native-elements'
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
import { getQuotationsAction } from '../actions/getQuotationsAction';
import Moment from 'moment';
import NumberFormat from 'react-number-format';

class Loan extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
			loans: [],
		}
	}

	componentDidMount(){
		this.props.getQuotationsAction(this.props.navigation.state.params.token, this.props.navigation.state.params.user_id);
	}

	render() {
		return (
			<ScrollView>
				{
					this.props.quotations &&
					this.props.quotations.filter(quotation => quotation.status === 'approved').map((quotation, i) => (
					<ListItem
						key={i}
						title={quotation.policy.policy_name}
						titleStyle={styles.policy_name}
						rightSubtitle=<NumberFormat renderText={text => <Text style={styles.productAmountText}>{text}</Text>} value={quotation.policy.policy_amount} displayType={'text'} thousandSeparator={true} prefix={'UGX '} />
						rightSubtitleStyle={styles.amount}
						bottomDivider
						rightTitle={Moment(quotation.added_at).format('DD-MMM-YYYY HH:mm A')}
						rightTitleStyle={styles.date}
						chevron
						onPress={() => this.props.navigation.navigate("InsuranceDetail", {
							token: this.props.navigation.state.params.token,
							user_id: quotation.id,
						})}
					/>
				))}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	Container :{
		justifyContent: 'center',
		flex:1,
		paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
		backgroundColor: "#F3F3F3"
	},
	policy_name: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#FF0000',
	},
	amount: {
		fontSize: 13,
		color: '#000000',
	},
	icon: {
		width: 30,
		height: 30
	},
	GridViewBlockStyle: {
		justifyContent: 'center',
		flex:1,
		alignItems: 'center',
		height: 100,
		margin: 5,
		backgroundColor: '#FFFFFF'
	},
	date: {
		fontSize: 10,
		color: '#000000',
	},
	itemName: {
		marginTop: 5,
		fontSize: 11,
	},
	amount: {
		fontSize: 12,
		color: '#000000',
	},
	number: {
		color: '#FF0000',
		fontWeight: 'bold',
		marginLeft: 5,
		marginTop: 5,
		fontSize: 20,
	},
	date: {
		fontSize: 9,
		color: '#000000',
		fontWeight: "bold",
	},
})

function mapStateToProps (state) {
	return {
		quotations: state.insuranceReducer.quotations.data
	}
}

export default connect(mapStateToProps, { getQuotationsAction })(Loan);