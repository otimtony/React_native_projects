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
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { HOST } from '../utils/utils';
import Spinner from 'react-native-loading-spinner-overlay';

class Login extends React.Component {

  state = {
    phoneNumber: "",
    code: "",
    errorMessage: null,
    isProgress: false,
    loginError: false,
    token: "",
    data: "",
    phonenumberText: true,
    codeText: true,
    signUpStatus: false,
    spinner: false,
  }

  handleLogin = () => {
    const phonenumber = this.state.phoneNumber;
    const pass_code = this.state.code;

    if (this.state.phoneNumber) {
      this.setState({ phonenumberText: true })
    }else {
      this.setState({ phonenumberText: false })
    }

    if (this.state.code) {
      this.setState({ codeText: true })
    }else {
      this.setState({ codeText: false })
    }

    if (this.state.phoneNumber && this.state.code) {

      this.setState({spinner: !this.state.spinner});

      const loginData = {
        phonenumber: phonenumber,
        pass_code: pass_code,
      }

      fetch(`${HOST}/api/v1/users/auth/login/`, {
        method: 'POST', 
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(loginData),
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
          this.props.navigation.navigate('Home')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }

  render() {
    return (
      <ImageBackground source={require('../assets/image_background.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <View>
          <StatusBar barStyle="light-content"></StatusBar>
          <Image 
            style={styles.image}
            source={require('../assets/logo.png')} />

          <View>
            <Text style={styles.makanikaText}>Makanika Merchant</Text>
          </View>

          <View style={styles.errorMessage}>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
          </View>

          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>
                Phone Number
              </Text>
              <TextInput 
                maxLength={10}
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={phoneNumber => this.setState({ phoneNumber })}
                value={this.state.phoneNumber}
                selectionColor={'white'}
              >
              </TextInput>
              {
                this.state.phonenumberText ?
                <Text></Text> :
                <Text style={{ color: "#FFFFFF", fontSize: 12 }}>Phone number is required</Text>
              }
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.inputTitle}>
                Code
              </Text>
              <TextInput 
                keyboardType='number-pad'
                secureTextEntry={true}
                maxLength={6}
                style={styles.input} 
                autoCapitalize="none"
                selectionColor={'white'}
                onChangeText={code => this.setState({ code })}
                value={this.state.code}>
              </TextInput>
              {
                this.state.codeText ?
                <Text></Text> :
                <Text style={{ color: "#FFFFFF", fontSize: 12 }}>Code is required</Text>
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
      </ImageBackground>
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
    color: '#FFFFFF', 
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 5,
    marginHorizontal: 30
  },
    inputTitle: {
    color: "#FFFFFF",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#FFFFFF"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#cc142d",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = (state) => {
  const { payments } = state
  return { payments }
};

export default connect(mapStateToProps)(Login);

