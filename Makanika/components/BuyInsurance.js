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
  ScrollView
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import { postInsuranceQuotationAction } from '../actions/postInsuranceQuotationAction';
import { connect } from 'react-redux';

class BuyInsurance extends React.Component {

  state = {
    firstname: "",
    lastname: "",
    regNo: "",
    make: "",
    seatingCapacity: "",
    makeError: false,
    grossWeight: "",
    chassisNo: "",
    errorMessage: null,
    firstnameError: false,
    lastnameError: false,
    regNoError: false,
    seatingCapacityError: false,
    grossWeightError: false,
    chassisNoError: false
  }

  handleSubmit = () => {

    if (this.state.firstname) {
      this.setState({ firstnameError: false })
    }else {
      this.setState({ firstnameError: true })
    }

    if (this.state.make) {
      this.setState({ makeError: false })
    }else {
      this.setState({ makeError: true })
    }

    if (this.state.lastname) {
      this.setState({ lastnameError: false })
    }else {
      this.setState({ lastnameError: true })
    }

    if (this.state.regNo) {
      this.setState({ regNoError: false })
    }else {
      this.setState({ regNoError: true })
    }

    if (this.state.seatingCapacity) {
      this.setState({ seatingCapacityError: false })
    }else {
      this.setState({ seatingCapacityError: true })
    }

    if (this.state.grossWeight) {
      this.setState({ grossWeightError: false })
    }else {
      this.setState({ grossWeightError: true })
    }


    if (this.state.chassisNo) {
      this.setState({ chassisNoError: false })
    }else {
      this.setState({ chassisNoError: true })
    }

          // this.props.navigation.navigate('PaymentOptions');

    if (this.state.firstname && 
      this.state.lastname && 
      this.state.regNo && 
      this.state.seatingCapacity &&
      this.state.grossWeight &&
      this.state.chassisNo &&
      this.state.make) {

      const insuranceRequestBody = {
        policy: this.props.navigation.state.params.id,
        client: this.props.navigation.state.params.user_id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        registration_number: this.state.regNo,
        seating_capacity: this.state.seatingCapacity,
        gross_weight: this.state.grossWeight,
        chassis_number: this.state.chassisNo,
        make: this.state.make,
      }

      this.props.postInsuranceQuotationAction(insuranceRequestBody, this.props.navigation.state.params.token);
    
    }
  }



  render(){

    const { navigation } = this.props;

    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text style={styles.policyName}>{this.props.navigation.state.params.name}</Text>
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                First name
              </Text>
              <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={firstname => this.setState({ firstname })}
                value={this.state.firstname}>
              </TextInput>
              {
                this.state.firstnameError &&
                <Text style={styles.textError}>First name is required</Text>
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
                value={this.state.lastname}>
              </TextInput>
              {
                this.state.lastnameError &&
                <Text style={styles.textError}>Last name is required</Text>
              }
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                Reg. No.
              </Text>
              <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={regNo => this.setState({ regNo })}
                value={this.state.regNo}>
              </TextInput>
              {
                this.state.regNoError &&
                <Text style={styles.textError}>Reg. No is required</Text>
              }
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                Make
              </Text>
              <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={make => this.setState({ make })}
                value={this.state.make}>
              </TextInput>
              {
                this.state.makeError &&
                <Text style={styles.textError}>Make is required</Text>
              }
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                Seating Capacity
              </Text>
              <TextInput
                maxLength={1} 
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={seatingCapacity => this.setState({ seatingCapacity })}
                value={this.state.seatingCapacity}>
              </TextInput>
              {
                this.state.seatingCapacityError &&
                <Text style={styles.textError}>Seating Capacity</Text>
              }
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                Gross weight
              </Text>
              <TextInput
                maxLength={3} 
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={grossWeight => this.setState({ grossWeight })}
                value={this.state.grossWeight}>
              </TextInput>
              {
                this.state.grossWeightError &&
                <Text style={styles.textError}>Gross weight</Text>
              }
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                Chassis No.
              </Text>
              <TextInput 
                maxLength={8}
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={chassisNo => this.setState({ chassisNo })}
                value={this.state.chassisNo}
              >
              </TextInput>
              {
                this.state.chassisNoError &&
                <Text style={styles.textError}>Chassis No.</Text>
              }
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Quote</Text>
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
  greeting: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  policyName: {
    marginLeft: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
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
    marginBottom: 20
  },
  textError: {
    color: "#FF0000",
    fontSize: 10
  }
});

export default connect(null, { postInsuranceQuotationAction })(BuyInsurance);
