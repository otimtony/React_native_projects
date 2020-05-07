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
import Spinner from 'react-native-loading-spinner-overlay';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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

class ScheduleService extends React.Component {

  static headerShown = {
    header: null
  };

  state = {
    carModel: "",
    brand: "",
    year: "",
    additionalInformation: "",
    location: "",
    errorMessage: null,
    isRegistering: true,
    carModelError: false,
    additionalInformationError: false,
    locationError: false,
    brandError: false,
    yearError: false,
    spinner: false,
  }

  handleMechanicRequest = () => {

    if (this.state.carModel) {
      this.setState({ carModelError: false })
    }else {
      this.setState({ carModelError: true })
    }

    if (this.state.brand) {
      this.setState({ brandError: false })
    }else {
      this.setState({ brandError: true })
    }

    if (this.state.year) {
      this.setState({ yearError: false })
    }else {
      this.setState({ yearError: true })
    }

    if (this.state.additionalInformation) {
      this.setState({ additionalInformationError: false })
    }else {
      this.setState({ additionalInformationError: true })
    }

    if (this.state.location) {
      this.setState({ locationError: false })
    }else {
      this.setState({ locationError: true })
    }

    if ( this.state.carModel && 
      this.state.additionalInformation &&
      this.state.location &&
      this.state.brand &&
      this.state.year) {

      this.setState({spinner: !this.state.spinner});

      const signUpData = {
        "user": this.props.navigation.state.params.user_id,
        "carModel": this.state.carModel,
        "brand": this.state.brand,
        "year": this.state.year,
        "description": this.state.additionalInformation,
        "location": "0.3096145,34.5038274"
      }

      fetch(`${HOST}`+`/api/v1/garage_requests/`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.navigation.state.params.token
        },
        body: JSON.stringify(signUpData),
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({spinner: !this.state.spinner}); 
        this.props.navigation.navigate('FoundService', {
          garage: data
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

  }

  render(){

    return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
        <View style={styles.container}>
          <Spinner
            visible={this.state.spinner}
            textContent={'Searching for the nearest mechanic...'}
            textStyle={styles.spinnerTextStyle}
          />
          <View>
            <View style={styles.form}>
              <View>
                <Text style={styles.inputTitle}>
                  Brand
                </Text>
                <TextInput 
                  style={styles.input} 
                  autoCapitalize="none"
                  onChangeText={brand => this.setState({ brand })}
                  value={this.state.brand}
                >
                </TextInput>
                {
                  this.state.brandError &&
                  <Text style={styles.inputError}> Brand is required</Text>
                }
              </View>
              <View>
                <Text style={styles.inputTitle}>
                  Car model
                </Text>
                <TextInput 
                  style={styles.input} 
                  autoCapitalize="none"
                  onChangeText={carModel => this.setState({ carModel })}
                  value={this.state.carModel}
                >
                </TextInput>
                {
                  this.state.carModelError &&
                  <Text style={styles.inputError}> Car model is required</Text>
                }
              </View>
              <View>
                <Text style={styles.inputTitle}>
                  Year
                </Text>
                <TextInput 
                  style={styles.input} 
                  autoCapitalize="none"
                  onChangeText={year => this.setState({ year })}
                  value={this.state.year}
                >
                </TextInput>
                {
                  this.state.yearError &&
                  <Text style={styles.inputError}> Year is required</Text>
                }
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.inputTitle}>
                  Problem Description
                </Text>
                <TextInput 
                  keyboardType='numeric'
                  style={styles.input} 
                  autoCapitalize="none"
                  autogrow
                  multiline
                  scrollEnabled
                  onChangeText={additionalInformation => this.setState({ additionalInformation })}
                  value={this.state.additionalInformation}
                >
                </TextInput>
                {
                  this.state.additionalInformationError &&
                  <Text style={styles.inputError}>Additional Instruction is required</Text>
                }
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.inputTitle}>
                  Location
                </Text>
                <TextInput 
                  style={styles.input} 
                  autoCapitalize="none"
                  onChangeText={location => this.setState({ location })}
                  value={this.state.location}
                >
                </TextInput>
                {
                  this.state.locationError &&
                  <Text style={styles.inputError}>Location is required</Text>
                }
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.handleMechanicRequest}>
              <Text style={{ color: "#FFF", fontWeight: "500" }}>Get a mechanic</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spinnerTextStyle: {
    color: '#FFFFFF',
    fontSize: 12
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
    marginTop: 10,
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

export default connect(null, {register})(ScheduleService);
