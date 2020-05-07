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

class SignUp extends React.Component {

  static headerShown = {
    header: null
  };

  state = {
    phoneNumber: "",
    firstname: "",
    lastname: "",
    errorMessage: null,
    isRegistering: true,
    isProgress: false,
    firstnameError: false,
    lastnameError: false,
    phoneNumberError: false
  }

  handleSignUp = () => {

    const signUpData = {
      first_name: this.state.firstname,
      last_name: this.state.lastname,
      phonenumber: this.state.phoneNumber
    }

    if (this.state.firstname) {
      this.setState({ firstnameError: false })
    }else {
      this.setState({ firstnameError: true })
    }

    if (this.state.lastname) {
      this.setState({ lastnameError: false })
    }else {
      this.setState({ lastnameError: true })
    }

    if (this.state.phoneNumber) {
      this.setState({ phoneNumberError: false })
    }else {
      this.setState({ phoneNumberError: true })
    }

    if (this.state.firstname && this.state.lastname && this.state.phoneNumber) {

      this.setState({ isProgress: true })

      fetch(`${HOST}` + `/api/v1/users/auth/register/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        return responseData;
      })
      .then(data => {
        this.setState({ isProgress: false })
        this.props.navigation.navigate('VerifyCode', {
          'phonenumber': data.data.phonenumber,
          'pass_code': data.data.pass_code 
        })
      })
      .catch(err => {
        console.log(err)
      });
    }
  }

  render(){
    return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
        <View style={styles.container}>
          {
            this.state.isProgress ?
            <CustomProgressBar /> :
            <View>

              <View style={{ marginBottom: 20 }}>
                <Text style={styles.makanikaText}>Register to Makanika</Text>
              </View>

              <View style={styles.form}>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    First name
                  </Text>
                  <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={firstname => this.setState({ firstname })}
                    value={this.state.firstname}
                  >
                  </TextInput>
                  {
                    this.state.firstnameError &&
                    <Text style={styles.inputError}>Firstname is required</Text>
                  }
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Last name
                  </Text>
                  <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={lastname => this.setState({ lastname })}
                    value={this.state.lastname}
                  >
                  </TextInput>
                  {
                    this.state.lastnameError &&
                    <Text style={styles.inputError}>Lastname is required</Text>
                  }
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Phone Number
                  </Text>
                  <TextInput 
                    keyboardType='numeric'
                    style={styles.input} 
                    autoCapitalize="none"
                    maxLength={10}
                    onChangeText={phoneNumber => this.setState({ phoneNumber })}
                    value={this.state.phoneNumber}
                  >
                  </TextInput>
                  {
                    this.state.phoneNumberError &&
                    <Text style={styles.inputError}>Phonenumber is required</Text>
                  }
                </View>

                <TouchableOpacity 
                style={{ alignSelf: "center", 
                marginTop: 32 }}>
                  <Text style={{ color: "#414959", fontSize: 13 }}>
                    By registering you agree to <Text style={{ fontWeight: "500", color: "#E9446A"}}>terms & conditions </Text> and Privacy Policy <Text style={{ fontWeight: "500", color: "#E9446A"}}>Privacy Policy </Text>of Makanika
                  </Text>
                </TouchableOpacity>

              </View>

              <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ alignSelf: "center", 
                marginTop: 32,
                marginBottom: 40 }}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={{ color: "#414959", fontSize: 13 }}>
                  All ready have an account?. <Text style={{ fontWeight: "500", color: "#E9446A"}}>Sign in</Text>
                </Text>
              </TouchableOpacity>
            </View>
          }
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
  greeting: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  makanikaText: {
    marginLeft: 30,
    fontSize: 16,
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
  back: {
    position: "absolute",
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21, 22, 48, 0.1)",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect(null, {register})(SignUp);
