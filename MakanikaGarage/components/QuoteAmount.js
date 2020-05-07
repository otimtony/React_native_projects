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
  StatusBar,
  ActivityIndicator,
  Modal,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { HOST } from '../utils/utils';
import Spinner from 'react-native-loading-spinner-overlay';

class QuoteAmount extends React.Component {

  state = {
    amount: "",
    code: "",
    errorMessage: null,
    isProgress: false,
    loginError: false,
    token: "",
    data: "",
    amountText: true,
    codeText: true,
    signUpStatus: false,
    spinner: false,
  }

  handleLogin = () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <View>
          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>
                Amount
              </Text>
              <TextInput 
                maxLength={10}
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={amount => this.setState({ amount })}
                value={this.state.amount}
              >
              </TextInput>
              {
                this.state.amountText ?
                <Text></Text> :
                <Text style={{ color: "#FF0000", fontSize: 12 }}>Phone number is required</Text>
              }
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                Code
              </Text>
              <TextInput 
                keyboardType='number-pad'
                secureTextEntry={true}
                maxLength={6}
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={code => this.setState({ code })}
                value={this.state.code}>
              </TextInput>
              {
                this.state.codeText ?
                <Text></Text> :
                <Text style={{ color: "#FF0000", fontSize: 12 }}>Code is required</Text>
              }
            </View>
          </View>

          <TouchableOpacity 
            onPress={this.handleLogin}
            style={styles.button} >
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  spinnerTextStyle: {
    color: '#FFF',
    fontSize: 12
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  image: {
    marginTop: 40,
    width: 100, 
    height: 100,
    alignSelf: "center",
  },
  makanikaText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#FF0000', 
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginTop: 20,
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

export default QuoteAmount;

