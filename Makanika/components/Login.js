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

const CustomProgressBar = ({ visible }) => (
  <Modal onRequestClose={() => null} visible={visible}>
    <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
        <Text style={{ fontSize: 12, fontWeight: '200' }}>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    </View>
  </Modal>
);

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

  componentDidMount(){
    this.getProfileData()
  }

  getProfileData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      if (parsed) {
        this.props.navigation.navigate('Home')
      }else {
        this.props.navigation.navigate('Login')
      }
    }

    catch (error){
      alert(error);
    }
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

      fetch(`${HOST}`+`/api/v1/users/auth/login/`, {
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
          this.setState({spinner: !this.state.spinner});
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
            <Text style={styles.makanikaText}>Makanika</Text>
          </View>
          <View>
            {
              this.state.loginError &&
              <Text style={{ fontSize: 10, color: "#FF0000", alignSelf: "center", marginTop: 20, marginBottom: -20 }}>Login failed, check your credentials and try again later.</Text>
            }
          </View>
          <View>
            {
              this.state.signUpStatus &&
              <Text style={{ fontSize: 10, color: "#FF0000", alignSelf: "center", marginTop: 20, marginBottom: -20 }}>You signed up successfully. Login with your phone number and received code.</Text>
            }
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
                value={this.state.phoneNumber}>
              </TextInput>
              {
                this.state.phonenumberText ?
                <Text></Text> :
                <Text style={{ color: "#FF0000", fontSize: 12 }}>Phone number is required</Text>
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
          <TouchableOpacity 
            style={{ alignSelf: "center", 
            marginTop: 32 }}
            onPress={() => this.props.navigation.navigate("SignUp")}>
            <Text style={{ color: "#414959", fontSize: 13 }}>
              Don't have an account?. <Text style={{ fontWeight: "500", color: "#E9446A"}}>Register Now</Text>
            </Text>
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
  errorMessage: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  image: {
    marginTop: 15,
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
    marginBottom: 20,
    marginHorizontal: 30
  },
    inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  spinnerTextStyle: {
    color: '#FFF',
    fontSize: 12
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

const mapStateToProps = (state) => {
  const { payments } = state
  return { payments }
};

export default connect(mapStateToProps)(Login);

