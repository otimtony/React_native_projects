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
	SafeAreaView,
	TextInput
} from 'react-native';
import Dialog from "react-native-dialog";
import { connect } from 'react-redux';

import { 
  Dimensions,
  ImageBackground } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Divider from 'react-native-divider';
import AsyncStorage from '@react-native-community/async-storage';

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

class MobileMoney extends React.Component {

	state = {
	    phoneNumber: "",
	    phoneNumberError: false
	}

	makePayment = () => {

		if (this.state.phoneNumber) {
			this.setState({ phoneNumberError: false })
		}else {
			this.setState({ phoneNumberError: true })
		}
	}

	render() {

		return (
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={styles.scrollView}>
				<View style={styles.container}>
					<View style={styles.form}>
						<Text style={styles.inputTitle}>
							Phone Number
						</Text>
						<TextInput 
							keyboardType='numeric'
							style={styles.input} 
							autoCapitalize="none"
							maxLength={10}
							onChangeText={phoneNumber => this.setState({ phoneNumber })}
							value={this.state.phoneNumber}>
						</TextInput>
						{
							this.state.phoneNumberError &&
							<Text style={styles.inputError}>Phone Number is required</Text>
						}
					</View>
					<TouchableOpacity style={styles.button} onPress={this.makePayment}>
						<Text style={{ color: "#FFF", fontWeight: "500" }}>Submit</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputError: {
    fontSize: 12,
    color: '#FF0000',
  },
  form: {
    marginBottom: 20,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default MobileMoney;