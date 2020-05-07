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
import { buyInsuranceAction } from '../actions/buyInsuranceAction';
import { connect } from 'react-redux';
import Dialog from "react-native-dialog";

class BuyInsurance extends React.Component {

  state = {
    firstname: "",
    lastname: "",
    regNoMake: "",
    seatingCapacity: "",
    grossWeight: "",
    chassisNo: "",
    errorMessage: null,
    firstnameError: false,
    lastnameError: false,
    regNoMakeError: false,
    seatingCapacityError: false,
    grossWeightError: false,
    chassisNoError: false,
    dialogVisible: false,
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
 
  handleDelete = () => {
    this.setState({ dialogVisible: false });
  };

  handleConfirmDialog = () => {

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

    if (this.state.regNoMake) {
      this.setState({ regNoMakeError: false })
    }else {
      this.setState({ regNoMakeError: true })
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

    this.props.navigation.navigate('PaymentOptions');

    if (this.state.firstname && 
      this.state.lastname && 
      this.state.regNoMake && 
      this.state.seatingCapacity &&
      this.state.grossWeight &&
      this.state.chassisNo) {

      this.showDialog()
    }
  }

  handleSubmitInsuranceForm = () => {
    const insuranceRequestBody = {
      "policy": this.props.navigation.state.params.id,
      "client": 10,
      "firstname": this.state.firstname,
      "lastname": this.state.lastname,
      "registration_number_make": this.state.regNoMake,
      "seating_capacity": this.state.seatingCapacity,
      "gross_weight": this.state.grossWeight,
      "chassis_number": this.state.chassisNo,
    }

    this.props.buyInsuranceAction(insuranceRequestBody);

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
                Firstname
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
                Lastname
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
                Reg. No. & Make
              </Text>
              <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={regNoMake => this.setState({ regNoMake })}
                value={this.state.regNoMake}>
              </TextInput>
              {
                this.state.regNoMakeError &&
                <Text style={styles.textError}>Reg. No. & Make is required</Text>
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
          <TouchableOpacity style={styles.button} onPress={this.handleConfirmDialog}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Quote</Text>
          </TouchableOpacity>
          <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>Confirm Insurance information</Dialog.Title>
            <Dialog.Description>
              <Text>
                {`Confirm the information below before you submit.\n\n`}
              </Text>
              <Text>
                Name: {`${this.state.firstname}` + " " + `${this.state.lastname}\n`}
                Reg No Make: {`${this.state.regNoMake}\n`}
                Seating Capacity: {`${this.state.seatingCapacity}\n`}
                Gross weight: {`${this.state.grossWeight}\n`}
                Chassis No: {`${this.state.chassisNo}\n`}
              </Text>
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={this.handleCancel} />
            <Dialog.Button label="Confirm" onPress={this.handleSubmitInsuranceForm} />
          </Dialog.Container>
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

export default connect(null, { buyInsuranceAction })(BuyInsurance);
