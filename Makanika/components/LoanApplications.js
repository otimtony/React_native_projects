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
import { getLoanApplications } from '../actions/loanActions';

const Messages = [
	{
		garage: 'Ivans garage', 
		pic: require('../assets/logo.png'),
		amount: 'UGX 20,0000',
		date: '12/12/2019'
	},
	{
		garage: 'Best garage uganda',
		pic: require('../assets/logo.png'),
		amount: 'UGX 140,000',
		date: '12/12/2019'
	},
	{
		garage: 'Land Rover Discovery',
		pic: require('../assets/logo.png'),
		amount: 'UGX 53,000',
		date: '12/12/2019'
	}
]

class LoanApplications extends React.Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.props.getLoanApplications();
	}

	render() {
		return (
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>
					<View style={styles.Container}>
						{Messages.map((user, i) => (
							<ListItem
								key={i}
								leftAvatar={{ source: user.pic, size: 'small' }}
								title={user.garage}
								titleStyle={styles.garage}
								subtitle={user.amount}
								subtitleStyle={styles.amount}
								bottomDivider
								rightTitle={user.date}
								rightTitleStyle={styles.date}
								chevron
							/>
						))}
					</View>
				</ScrollView>
			</SafeAreaView>
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
	garage: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#3F3F3F',
	},
	amount: {
		fontSize: 12,
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
	number: {
		color: '#FF0000',
		fontWeight: 'bold',
		marginLeft: 5,
		marginTop: 5,
		fontSize: 20,
	}
})

export default connect(null, { getLoanApplications })(LoanApplications);