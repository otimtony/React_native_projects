import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
  Modal
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import axios from 'axios';
import { register } from '../actions/authActions';
import { connect } from 'react-redux';
import { HOST } from '../utils/utils';
import AsyncStorage from '@react-native-community/async-storage';

const CustomProgressBar = ({ visible }) => (
  <Modal onRequestClose={() => null} visible={visible}>
    <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
        <Text style={{ fontSize: 12, fontWeight: '200' }}>Registering</Text>
        <ActivityIndicator size="large" />
      </View>
    </View>
  </Modal>
);

class VerifyCode extends React.Component {

	static headerShown = {
		header: null
	};

	state = {
		code: "",
		codeError: false,
		codeMissMatchError: false,
	}

	handleVerifyCode = () => {
		console.log("<<<<<<<,....code...", this.props.navigation.state.params.pass_code)
		if (this.state.code) {
			this.setState({ codeError: false })
			if (this.state.code === this.props.navigation.state.params.pass_code) {
				this.setState({ codeMissMatchError: false })
				const verifyCodeData = {
					"phonenumber": this.props.navigation.state.params.phonenumber,
					"pass_code": this.state.code,
				}

				fetch(`${HOST}`+`/api/v1/users/auth/login/`, {
					method: 'POST', 
					headers: {
						'Content-Type':'application/json'
					},
					body: JSON.stringify(verifyCodeData),
				})
				.then((response) => response.json())
				.then((data) => {
					if (data.error) {
						this.props.navigation.navigate('Login')
						this.setState({ loginError: true })
					}else {
						let userData = {
							message: data.message,
							data: data.data,
							token: data.token,
						}
						AsyncStorage.setItem('user', JSON.stringify(userData));
						this.props.navigation.navigate('GarageIntro')
					}
				})
				.catch((error) => {
					console.error('Error:', error);
				});

			}else {
				this.setState({ codeMissMatchError: true })
			}

		}else {
			this.setState({ codeError: true })
		}
	}

  render(){
    return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			style={styles.scrollView}>
			<View style={styles.container}>
				<Text style={styles.makanikaText}>Verify account by entering the 6 digit code sent to 07********{ this.props.navigation.state.params.phonenumber.slice(-2)}</Text>
				<View style={styles.form}>
					<View style={{ marginTop: 10 }}>
						<Text style={styles.inputTitle}>
							Enter verification Code
						</Text>
						<TextInput 
							keyboardType='numeric'
							style={styles.input} 
							autoCapitalize="none"
							maxLength={6}
							onChangeText={code => this.setState({ code })}
							value={this.state.code}>
						</TextInput>
						{
							this.state.codeError &&
							<Text style={styles.inputError}>Verification Code is required</Text>
						}
						{
							this.state.codeMissMatchError &&
							<Text style={styles.inputError}>You entered the wrong Verification Code.</Text>
						}
					</View>
				</View>
				<TouchableOpacity style={styles.button} onPress={this.handleVerifyCode}>
					<Text style={{ color: "#FFF", fontWeight: "500" }}>Verify</Text>
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
  makanikaText: {
  	marginTop: 20,
    marginLeft: 30,
    fontSize: 14,
    color: '#FF0000', 
    textAlign: 'center',
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
  },
});

export default connect(null, {register})(VerifyCode);
