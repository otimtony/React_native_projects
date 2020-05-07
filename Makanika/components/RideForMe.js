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

class RideForMe extends React.Component {

  static headerShown = {
    header: null
  };

  state = {
    carModelBrand: "",
    pickUpLocation: "",
    dropOffLocation: "",
    dropOffContact: "",
    additionalInformation: "",

    errorMessage: null,
    isRegistering: true,
    isProgress: false,

    carModelBrandError: false,
    pickUpLocationError: false,
    dropOffLocationError: false,
    dropOffContactError: false

  }

  handleRideForMe = () => {

    const signUpData = {
      car_model_brand: this.state.carModelBrand,
      pick_up_location: this.state.pickUpLocation,
      pick_up_date: this.state.dropOffLocation,
      pick_up_time: this.state.dropOffContact,
      additional_information: this.state.additionalInformation
    }

    if (this.state.carModelBrand) {
      this.setState({ carModelBrandError: false })
    }else {
      this.setState({ carModelBrandError: true })
    }

    if (this.state.pickUpLocation) {
      this.setState({ pickUpLocationError: false })
    }else {
      this.setState({ pickUpLocationError: true })
    }

    if (this.state.dropOffLocation) {
      this.setState({ dropOffLocationError: false })
    }else {
      this.setState({ dropOffLocationError: true })
    }

    if (this.state.dropOffContact) {
      this.setState({ dropOffContactError: false })
    }else {
      this.setState({ dropOffContactError: true })
    }

    if (
      this.state.carModelBrand && 
      this.state.dropOffLocation &&
      this.state.pickUpLocation &&
      this.state.dropOffContact) {

      console.log("<<<<<<<<<<<.......signUpData......>>>>>>>>>>", signUpData)

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
              <View style={styles.form}>

                <View>
                  <Text style={styles.inputTitle}>
                    Car model and brand
                  </Text>
                  <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={carModelBrand => this.setState({ carModelBrand })}
                    value={this.state.carModelBrand}
                  >
                  </TextInput>
                  {
                    this.state.carModelBrandError &&
                    <Text style={styles.inputError}>Car model and brand is required</Text>
                  }
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Pick up location
                  </Text>
                  <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={pickUpLocation => this.setState({ pickUpLocation })}
                    value={this.state.pickUpLocation}
                  >
                  </TextInput>
                  {
                    this.state.pickUpLocationError &&
                    <Text style={styles.inputError}>Pick up Location is required</Text>
                  }
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Drop off location
                  </Text>
                  <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={dropOffLocation => this.setState({ dropOffLocation })}
                    value={this.state.dropOffLocation}
                  >
                  </TextInput>
                  {
                    this.state.dropOffLocationError &&
                    <Text style={styles.inputError}>Drop off location required</Text>
                  }
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Drop off Contact
                  </Text>
                  <TextInput 
                    keyboardType='numeric'
                    style={styles.input} 
                    autoCapitalize="none"
                    maxLength={10}
                    onChangeText={dropOffContact => this.setState({ dropOffContact })}
                    value={this.state.dropOffContact}
                  >
                  </TextInput>
                  {
                    this.state.dropOffContactError &&
                    <Text style={styles.inputError}>Drop off Contact required</Text>
                  }
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.inputTitle}>
                    Additional Instructions
                  </Text>
                  <TextInput 
                    keyboardType='numeric'
                    style={styles.input} 
                    autoCapitalize="none"
                    maxLength={10}
                    onChangeText={additionalInformation => this.setState({ additionalInformation })}
                    value={this.state.additionalInformation}
                  >
                  </TextInput>
                </View>

              </View>

              <TouchableOpacity style={styles.button} onPress={this.handleRideForMe}>
                <Text style={{ color: "#FFF", fontWeight: "500" }}>Order a ride for me</Text>
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
    marginBottom: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default connect(null, {register})(RideForMe);
