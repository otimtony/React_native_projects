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
import { connect } from 'react-redux';
import { HOST } from '../utils/utils';
import { userData } from '../utils/userData';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
  }

  static headerShown = {
    header: null
  };

  state = {
    phoneNumber: "",
    firstname: "",
    lastname: "",
    additionalInfo: "",
    address: "",
    districtTownArea: "",
    email: "",
    isProgress: false,
    addressError: false,
    firstnameError: false,
    lastnameError: false,
    phoneNumberError: false,
    districtTownAreaError: false,
    emailError: false,
    user: "",
  }

  componentDidMount(){
    this.loadUserData();
  }

  loadUserData = async () => {
      const parsed = await userData();
      this.setState({ user: parsed.data.id, token: parsed.token})
  }

  handleSignUp = () => {

    if (this.state.firstname) {
      this.setState({ firstnameError: false })
    }else {
      this.setState({ firstnameError: true })
    }

    if (this.state.email) {
      this.setState({ emailError: false })
    }else {
      this.setState({ emailError: true })
    }

    if (this.state.address) {
      this.setState({ addressError: false })
    }else {
      this.setState({ addressError: true })
    }

    if (this.state.districtTownArea) {
      this.setState({ districtTownAreaError: false })
    }else {
      this.setState({ districtTownAreaError: true })
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

    if (
    	this.state.firstname && 
    	this.state.lastname && 
    	this.state.phoneNumber && 
    	this.state.districtTownArea && 
    	this.state.address &&
      this.state.email) {

    	const orderData = {
        "user": this.state.user,
        "order_id": "4234FDSAF32423423",
        "items": this.props.navigation.state.params.items,
        "payment_type": "Card",
        "order_total": this.props.navigation.state.params.total,
        "first_name": this.state.firstname,
        "last_name": this.state.lastname,
        "address": this.state.address,
        "additional_info": this.state.additionalInfo ,  
        "district_town_area": this.state.districtTownArea, 
        "phone_number": this.state.phoneNumber,
        "email": this.state.email
	    }

      fetch(`${HOST}/api/v1/orders/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        return responseData;
      })
      .then(data => {
        console.log("<<<<<<<<<<<.......amount......>>>>>>>>>>>>>", data);
      })
      .catch(err => {
        console.log(err)
      });

	    // this.props.navigation.navigate('PaymentOptions', { order: order });

    }
  }

  render(){
    return (

    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
        <View style={styles.container}>

              <View style={styles.form}>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    First name*
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
                    <Text style={styles.inputError}>First Name is required</Text>
                  }
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Last name*
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
                    <Text style={styles.inputError}>Last Name is required</Text>
                  }
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Address*
                  </Text>
                  <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={address => this.setState({ address })}
                    value={this.state.address}
                  >
                  </TextInput>
                  {
                    this.state.addressError &&
                    <Text style={styles.inputError}>Address is required</Text>
                  }
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Additional Info
                  </Text>
                  <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={additionalInfo => this.setState({ additionalInfo })}
                    value={this.state.additionalInfo}
                  >
                  </TextInput>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    District/Town/Area*
                  </Text>
                  <TextInput 
                    keyboardType='numeric'
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={districtTownArea => this.setState({ districtTownArea })}
                    value={this.state.districtTownArea}
                  >
                  </TextInput>
                  {
                    this.state.districtTownAreaError &&
                    <Text style={styles.inputError}>District/Town/Area are required</Text>
                  }
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Phone Number*
                  </Text>
                  <TextInput 
                    keyboardType='numeric'
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={phoneNumber => this.setState({ phoneNumber })}
                    value={this.state.phoneNumber}
                  >
                  </TextInput>
                  {
                    this.state.phoneNumberError &&
                    <Text style={styles.inputError}>Phone Number is required</Text>
                  }
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Email*
                  </Text>
                  <TextInput 
                    keyboardType='numeric'
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                  >
                  </TextInput>
                  {
                    this.state.emailError &&
                    <Text style={styles.inputError}>Email is required</Text>
                  }
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                <Text style={{ color: "#FFF", fontWeight: "500" }}>Checkout</Text>
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
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default SignUp;
