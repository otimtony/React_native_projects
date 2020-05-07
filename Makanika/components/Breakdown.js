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
  Modal,
  Picker
} from 'react-native';

import { connect } from 'react-redux';
import { HOST } from '../utils/utils';
import getCarBrandsAction from '../actions/getCarBrandsAction';
import Spinner from 'react-native-loading-spinner-overlay';

class Breakdown extends React.Component {

  state = {

    carModel: "",
    brand: "",
    year: "",
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
    dropOffContactError: false,
    carModelError: false,
    brandError: false,
    spinner: false,

  }

  componentDidMount(){
    this.props.getCarBrandsAction();
  }

  handleBreakdown = () => {

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
      this.state.carModel && 
      this.state.brand &&
      this.state.dropOffLocation &&
      this.state.pickUpLocation &&
      this.state.dropOffContact) {

      this.setState({spinner: !this.state.spinner});

      const breakdownRequestData = {
        user: this.props.navigation.state.params.user_id,
        carModel: this.state.carModel,
        brand: this.state.brand,
        year: this.state.year,
        pickUpLocation: "0.3161705,32.6041227",
        dropOffLocation: this.state.dropOffLocation,
        dropOffContact: this.state.dropOffContact,
        additionalInformation: this.state.additionalInformation
      }

      fetch(`${HOST}`+`/api/v1/breakdown_requests/`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(breakdownRequestData),
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({spinner: !this.state.spinner}); 
        this.props.navigation.navigate('FoundBreakdownRequest', {
          breakdown_request: data
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
            textContent={'Searching for the nearest breakdown...'}
            textStyle={styles.spinnerTextStyle}
          />
          <View>
            <View style={styles.form}>
              <View>
                <Text style={styles.inputTitle}>
                  Brand
                </Text>
                <Picker
                selectedValue={this.state.brand}
                style={{height: 50}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({brand: itemValue})
                }>
                  {
                    this.props.brands &&
                    this.props.brands.brands.map(brand => {
                      return (
                        <Picker.Item key={brand.id} label={brand.name} value={brand.name} />
                      )
                    })
                  }
                </Picker>
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
                  <Text style={styles.inputError}>Car model is required</Text>
                }
              </View>

              <View>
                <Text style={styles.inputTitle}>
                  Year
                </Text>
                <TextInput 
                  maxLength={4}
                  style={styles.input} 
                  autoCapitalize="none"
                  onChangeText={year => this.setState({ year })}
                  value={this.state.year}
                >
                </TextInput>
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
                  onChangeText={additionalInformation => this.setState({ additionalInformation })}
                  value={this.state.additionalInformation}>
                </TextInput>
              </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={this.handleBreakdown}>
              <Text style={{ color: "#FFF", fontWeight: "500" }}>Order for a breakdown</Text>
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
  spinnerTextStyle: {
    color: '#FFFFFF',
    fontSize: 12
  },
});

function mapStateToProps (state) {
  return {
    brands: state.carBrandsReducer
  }
}

export default connect(mapStateToProps, { getCarBrandsAction })(Breakdown);
