import React from 'react'
import { 
	AppRegistry, 
	StyleSheet, 
	FlatList, 
	Text,
	SafeAreaView, 
	View, 
	Alert, 
	Platform,
	Image, 
	ScrollView,
	TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements'
import { FloatingAction } from "react-native-floating-action";
import Moment from 'moment';
import Dialog from "react-native-dialog";
import { connect } from 'react-redux';
import { getWalletTransactionsAction } from '../actions/getWalletTransactionsAction';
import NumberFormat from 'react-number-format';
import { postWalletAction } from '../actions/postWalletAction';
import { getWalletTotalAction } from '../actions/getWalletTotalAction';
import Spinner from 'react-native-loading-spinner-overlay';
import { HOST, beyonic_collection_request, beyonic_token } from '../utils/utils';
import Toast, {DURATION} from 'react-native-easy-toast';

class Loan extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
			total_wallet_amount: "",
			topUpAmout: "",
			sendPaymentPhoneNumber: "",
			sendPaymentAmount: "",
			shareBalancePhoneNumber: "",
			topUpPhoneNumber: "",
			shareBalanceAmount: "",
    		dialogSendPayment: false,
    		dialogTopUp: false,
    		dialogShareBalance: false,
    		error: "",
    		phonenumberError: "",
    		spinner: false,
    		shareBalancePhoneNumberError: false,
			shareBalanceAmountError: false,
    		is_amount_greater_than_wallet_total: false,
    		token: "",
    		user_id: "",
    		phonenumber: "",
		}
	}

	componentDidMount(){
		this.props.getWalletTransactionsAction(
			this.props.navigation.state.params.token, 
			this.props.navigation.state.params.user_id
		);
		this.props.getWalletTotalAction(
			this.props.navigation.state.params.token, 
			this.props.navigation.state.params.user_id
		);
		this.setState({ 
	      token: this.props.navigation.state.params.token,
	      user_id: this.props.navigation.state.params.user_id,
	      phonenumber: this.props.navigation.state.params.phonenumber,
	    })
	}

	showDialogSendPayment = () => {
		this.setState({ dialogSendPayment: true });
	};

	handleSendPaymentCancel = () => {
		this.setState({ 
			dialogSendPayment: false, 
			is_amount_greater_than_wallet_total: false,
			error: false
		});
	};

	static getDerivedStateFromProps(props, state) {
		if (props.total) {
			return {
				total_wallet_amount: props.total.amount,
			};
		}else {
			return {
				total_wallet_amount: 0
			};
		}
		return null;
	}

	showDialogTopUp = () => {
		this.setState({ dialogTopUp: true });
	};

	handleTopUpCancel = () => {
		this.setState({ 
			dialogTopUp: false, 
			is_amount_greater_than_wallet_total: false,
			error: false
		});
	};

	handleTopUp = () => {

		if (this.state.topUpAmout) {
			const amount = this.state.topUpAmout;
			const phonenumber = this.state.topUpPhoneNumber;

		    const topUpAmout = {
		    	fromUser: this.props.navigation.state.params.user_id,
		    	toPhonenumber: this.props.navigation.state.params.phonenumber,
		      	amount: amount,
		      	transactionType: "TopUp"
		    };

		    this.refs.toast.show('hello world!',DURATION.LENGTH_LONG);

			// this.props.postWalletAction(
			//    	topUpAmout, 
			//    	this.props.navigation.state.params.token
			// )

		    this.setState({ topUpAmout: '', topUpPhoneNumber: '' })

			this.setState({ dialogTopUp: false });

		}else{
			this.setState({ dialogTopUp: true, error: "Amount is required" });
		}
	};

	handleSendPayment = () => {

		if (this.state.sendPaymentAmount && this.state.sendPaymentPhoneNumber) {
			const amount = this.state.sendPaymentAmount;
			const phoneNumber = this.state.sendPaymentPhoneNumber;

			if (parseInt(amount) > parseInt(this.state.total_wallet_amount)) {
				this.setState({ is_amount_greater_than_wallet_total: true })
			}else {
				const sendPaymentAmountData = {
					fromUser: this.props.navigation.state.params.user_id,
					toPhonenumber: phoneNumber,
				 	amount: amount,
				 	transactionType: "Payments"
				};

				this.props.postWalletAction(
					sendPaymentAmountData, 
					this.props.navigation.state.params.token, 
				)

				this.setState({ dialogSendPayment: false, sendPaymentAmount: '', sendPaymentPhoneNumber: '' });

			}

		}else{
			this.setState({ dialogSendPayment: true, error: "Both Phone number and amount are required" });
		}

	};


	showDialogShareBalance = () => {
		this.setState({ dialogShareBalance: true });
	};

	handleShareBalanceCancel = () => {
		this.setState({ 
			dialogShareBalance: false, 
			is_amount_greater_than_wallet_total: false,
			error: false,
		});
	};

	handleShareBalance = () => {

		if (this.state.shareBalanceAmount) {
			this.setState({ shareBalanceAmountError: false })
		}else {
			this.setState({ shareBalanceAmountError: true })
		}

		if (this.state.shareBalancePhoneNumber) {
			this.setState({ shareBalancePhoneNumberError: false })
		}else {
			this.setState({ shareBalancePhoneNumberError: true })
		}

		if (this.state.shareBalanceAmount && this.state.shareBalancePhoneNumber) {

			const amount = this.state.shareBalanceAmount;
			const phoneNumber = this.state.shareBalancePhoneNumber;

			if (parseInt(amount) > parseInt(this.state.total_wallet_amount)) {
				this.setState({ is_amount_greater_than_wallet_total: true })
			}else {
				const shareBalanceData = {
			      	fromUser: this.props.navigation.state.params.user_id,
			    	toPhonenumber: phoneNumber,
			      	amount: amount,
			      	transactionType: "Share"
			    };

			   	this.setState({ dialogShareBalance: false, shareBalanceAmount: '', shareBalancePhoneNumber: '' })

				this.props.postWalletAction(
				   	shareBalanceData, 
				   	this.props.navigation.state.params.token, 
				)
			}

		}else{
			this.setState({ dialogShareBalance: true, error: "Both Phone number and amount are required" });
		}
	};

  render() {
    return (
      	<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			style={styles.scrollView}>
			<View style={styles.Container}>
				<Toast
	                ref="toast"
	                style={{backgroundColor:'red'}}
	                position='top'
	                positionValue={200}
	                fadeOutDuration={1000}
	                textStyle={{color:'white'}}
	            />
				<View style={styles.wallet}>
					<Text style={styles.total}>Total Balance</Text>
					<NumberFormat renderText={text => <Text style={styles.walletAmount}>{text}</Text>} value={this.state.total_wallet_amount} displayType={'text'} thousandSeparator={true} />
					<Text style={styles.currency}>UGX - Uganda Shillings</Text>
				</View>
				<Dialog.Container visible={this.state.dialogTopUp}>
					<Dialog.Title style={styles.dialogTitle}>Top up your wallet</Dialog.Title>
					<Dialog.Input
						label="Amount"
						wrapperStyle={{ borderBottomColor: '#FF0000', borderBottomWidth: 1}}
						onChangeText={topUpAmout => this.setState({ topUpAmout })}
						value={this.state.topUpAmout}></Dialog.Input>
					{ this.state.error ? <Text style={{ marginLeft: 10, marginTop: -10, marginBottom: 10, fontSize: 10, color: "#FF0000"}}>Amount is required</Text> : ""}
					<Dialog.Button label="Cancel" onPress={this.handleTopUpCancel} />
					<Dialog.Button label="Top up" onPress={this.handleTopUp} />
				</Dialog.Container>

				<Dialog.Container visible={this.state.dialogSendPayment}>
					<Dialog.Title style={styles.dialogTitle}>Send payments</Dialog.Title>
					<Dialog.Input
						wrapperStyle={{ borderBottomColor: '#FF0000', borderBottomWidth: 1}}
						label="Phone Number"
						maxLength={10}
						onChangeText={sendPaymentPhoneNumber => this.setState({ sendPaymentPhoneNumber })}
						value={this.state.sendPaymentPhoneNumber}
						>
					</Dialog.Input>
					{ this.state.error && <Text style={{ marginLeft: 10, marginTop: -18, fontSize: 10, color: "#FF0000"}}>Phone Number is required</Text>}
					<Dialog.Input
						wrapperStyle={{ borderBottomColor: '#FF0000', borderBottomWidth: 1}}
						label="Amount"
						onChangeText={sendPaymentAmount => this.setState({ sendPaymentAmount })}
						value={this.state.sendPaymentAmount}
					></Dialog.Input>
					{ this.state.error && <Text style={{ marginLeft: 10, marginTop: -18, fontSize: 10, color: "#FF0000"}}>Amount is required</Text>}
					{ this.state.is_amount_greater_than_wallet_total &&
						<Text style={{ marginLeft: 10, fontSize: 12, fontWeight: 'bold', color: "#FF0000"}}>You don't have enough to spend in your wallet.</Text>
					}
					<Dialog.Button label="Cancel" onPress={this.handleSendPaymentCancel} />
					<Dialog.Button label="Send Payments" onPress={this.handleSendPayment} />
				</Dialog.Container>

				<Dialog.Container visible={this.state.dialogShareBalance}>
					<Dialog.Title style={styles.dialogTitle}>Share your Balance with someone else</Dialog.Title>
					<Dialog.Input
						wrapperStyle={{ borderBottomColor: '#FF0000', borderBottomWidth: 1}}
						label="Phone Number"
						maxLength={10}
						onChangeText={shareBalancePhoneNumber => this.setState({ shareBalancePhoneNumber })}
						value={this.state.shareBalancePhoneNumber}
						>
					</Dialog.Input>
					{ this.state.shareBalancePhoneNumberError && <Text style={{ marginLeft: 10, marginTop: -18, fontSize: 10, color: "#FF0000"}}>Phone number is required</Text>}
					<Dialog.Input
						wrapperStyle={{ borderBottomColor: '#FF0000', borderBottomWidth: 1}}
						label="Amount"
						onChangeText={shareBalanceAmount => this.setState({ shareBalanceAmount })}
						value={this.state.shareBalanceAmount}
						>
					</Dialog.Input>
					{ this.state.shareBalanceAmountError && <Text style={{ marginLeft: 10, marginTop: -18, fontSize: 10, color: "#FF0000"}}>Amount is required</Text>}
					{ this.state.is_amount_greater_than_wallet_total &&
						<Text style={{ marginLeft: 10, fontSize: 12, fontWeight: 'bold', color: "#FF0000"}}>You don't have enough to spend in your wallet.</Text>
					}
					<Dialog.Button label="Cancel" onPress={this.handleShareBalanceCancel} />
					<Dialog.Button label="Share Balance" onPress={this.handleShareBalance} />
				</Dialog.Container>

				<View style={{flex: 1, flexDirection: 'row'}}>
					<TouchableOpacity onPress={this.showDialogTopUp} style={styles.GridViewBlockStyle}>
						<Image 
			                source={require('../assets/top_up.png')}
			                style={styles.icon}/>
						<Text style={styles.itemName}> 
							Top Up Wallet
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.showDialogSendPayment} style={styles.GridViewBlockStyle}>
						<Image 
			                source={require('../assets/send_payments.png')}
			                style={styles.icon}/>
						<Text style={styles.itemName}> 
							Send Payments
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.showDialogShareBalance} style={styles.GridViewBlockStyle}>
						<Image 
			                source={require('../assets/share.png')}
			                style={styles.icon}/>
						<Text style={styles.itemName}> 
							Share Balance
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ backgroundColor: "#FFFFFF"}}>
					<Text style={{ marginLeft: 20, marginTop: 10, color: "#484848", marginBottom: 10 }}>Wallet History</Text>
					{
						this.props.transactions &&
						this.props.transactions.length > 0 ?
							this.props.transactions.map((transaction, i) => (
								<ListItem
									key={i}
									title={transaction.toUser.first_name}
									titleStyle={styles.garage}
									subtitle={transaction.transactionType}
									subtitleStyle={styles.transactionType}
									bottomDivider
									rightTitle=<NumberFormat renderText={text => <Text style={styles.transactionAmount}>{text}</Text>} value={transaction.amount} displayType={'text'} thousandSeparator={true} prefix={'UGX '} />
									rightTitleStyle={styles.amount}
					                rightSubtitle={Moment(transaction.added_at).format('DD-MMM-YYYY HH:mm')}
					                rightSubtitleStyle={styles.added_at}
								/>
							))
							:
							<Text style={{ textAlign: "center" }}>No transactions</Text>
					}
				</View>
			</View>
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
	GridViewBlockStyle: {
	  justifyContent: 'center',
	  flex:1,
	  alignItems: 'center',
	  height: 100,
	  margin: 5,
	  backgroundColor: '#FFFFFF'
	},
	wallet: {
		backgroundColor: '#FFFFFF'
	},
	ProductGridView: {
		flex:1,
		height: 250,
		margin: 5,
		backgroundColor: '#FFFFFF'
	},
	GridViewInsideTextItemStyle: {
	   color: '#fff',
	   padding: 10,
	   fontSize: 18,
	   justifyContent: 'center',
	},
	itemName: {
		marginTop: 5,
		fontSize: 11,
	},
	icon: {
		width: 50,
		height: 50
	},
	productImage: {
		width: 150,
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
	},
	productName: {
		marginLeft: 5,
		marginTop: 5,
		fontSize: 16,
	},
	productDescription: {
		marginLeft: 5,
		fontSize: 12,
  		color: "#383838"
	},
	productAmount: {
		marginLeft: 5,
  		fontSize: 14,
  		fontWeight: 'bold',
  		color: '#000000'
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
  	transactions: {
  		fontWeight: 'bold',
  		marginLeft: 30,
  		color: '#FF0000',
  		marginTop: 10,
  		marginBottom: 10
  	},
	garage: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#3F3F3F',
	},
	transactionType: {
		fontSize: 10,
	},
	added_at: {
		fontSize: 10,
		color: '#000000',
	},
	transactionAmount: {
		fontSize: 14,
		fontWeight: 'bold',
		color: "#FF0000"
	},
	dialogTitle: {
		fontSize: 12, 
		fontWeight: "bold", 
		color: "#FF0000"
	}

});

const mapStateToProps = (state) => {
	return {
		transactions: state.walletReducer.transactions.data,
		total: state.walletTotalReducer.total.data
	}
};

export default connect(mapStateToProps, { getWalletTotalAction, postWalletAction, getWalletTransactionsAction })(Loan);



