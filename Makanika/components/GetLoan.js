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
import { getLoanApplications } from '../actions/loanActions';
import { getLoansAction } from '../actions/getLoansAction';
import { applyForLoanAction } from '../actions/applyForLoanAction';
import { connect } from 'react-redux';
import Icon from "react-native-vector-icons/Ionicons";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { userData } from '../utils/userData';

class GetLoan extends React.Component {

  state = {
    user: "",
    token: "",
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    email: "",
    address: "",
    purposeOfLoan: "",
    loanAmount: "",
    monthlySalary: "",
    loanPeriod: "",
    firstnameError: false,
    lastnameError: false,
    dateOfBirthError: false,
    emailError: false,
    addressError: false,
    purposeOfLoanError: false,
    loanAmountError: false,
    monthlySalaryError: false,
    loanPeriodError: false,
    errorMessage: null
  }

  componentDidMount(){
    this.loadUserData();
  }

  loadUserData = async () => {
      const parsed = await userData();
      this.setState({ user: parsed.data.id, token: parsed.token})
  }

  handleGetLoan = () => {

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

    if (this.state.dateOfBirth) {
      this.setState({ dateOfBirthError: false })
    }else {
      this.setState({ dateOfBirthError: true })
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

    if (this.state.purposeOfLoan) {
      this.setState({ purposeOfLoanError: false })
    }else {
      this.setState({ purposeOfLoanError: true })
    }

    if (this.state.loanAmount) {
      this.setState({ loanAmountError: false })
    }else {
      this.setState({ loanAmountError: true })
    }


    if (this.state.monthlySalary) {
      this.setState({ monthlySalaryError: false })
    }else {
      this.setState({ monthlySalaryError: true })
    }

    if (this.state.loanPeriod) {
      this.setState({ loanPeriodError: false })
    }else {
      this.setState({ loanPeriodError: true })
    }

    if (this.state.firstname && 
        this.state.lastname && 
        this.state.dateOfBirth && 
        this.state.email &&
        this.state.address &&
        this.state.purposeOfLoan &&
        this.state.loanAmount && 
        this.state.monthlySalary && 
        this.state.loanPeriod 
        ) {
    
      const loanBody = {
        client: this.state.user,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        date_of_birth: this.state.dateOfBirth,
        email: this.state.email,
        address: this.state.address,
        purpose_of_loan: this.state.purposeOfLoan,
        loan_amount: this.state.loanAmount,
        monthly_salary: this.state.monthlySalary,
        loan_period: this.state.loanPeriod,
      }

      this.props.applyForLoanAction(
        loanBody,
        this.state.token,
        this.state.user)

      // fetch('http://192.168.0.226:8000/api/v1/loan/', {
      //   method: 'POST', 
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(getLoanBody),
      // })
      // .then((response) => response.json())
      // .then(data => 
      //   console.log("<<<<<<<<<<....... get loan updating .....>>>>>>>>>>", data)
      // )
      // .catch((error) => {
      //   console.error('Error:', error);
      // });
    }

  }

  render(){

  	const { navigation } = this.props;

    return (

      <ScrollView
      	contentInsetAdjustmentBehavior="automatic"
      	style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.form}>

            <Text style={{ marginTop: 5, marginBottom: 5 }}>Fill in the form below to acquire a loan</Text>
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
    					value={this.state.lastname}
    					>
    					</TextInput>
              {
                this.state.lastnameError &&
                <Text style={styles.textError}>Last name is required</Text>
              }
    				</View>

    				<View style={{ marginTop: 10 }}>
    					<Text style={styles.inputTitle}>
    						Date Of Birth
    					</Text>
    					<TextInput 
    					style={styles.input} 
    					autoCapitalize="none"
    					onChangeText={dateOfBirth => this.setState({ dateOfBirth })}
    					value={this.state.dateOfBirth}
    					>
    					</TextInput>
              {
                this.state.dateOfBirthError &&
                <Text style={styles.textError}>Date Of Birth is required</Text>
              }
    				</View>

    				<View style={{ marginTop: 10 }}>
    					<Text style={styles.inputTitle}>
    						Email
    					</Text>
    					<TextInput 
    					style={styles.input} 
    					autoCapitalize="none"
    					onChangeText={email => this.setState({ email })}
    					value={this.state.email}
    					>
    					</TextInput>
              {
                this.state.emailError &&
                <Text style={styles.textError}>Email is required</Text>
              }
    				</View>

    				<View style={{ marginTop: 10 }}>
    					<Text style={styles.inputTitle}>
    						Address
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
                <Text style={styles.textError}>Address is required</Text>
              }
    				</View>

    				<View style={{ marginTop: 10 }}>
    					<Text style={styles.inputTitle}>
    						Purpose Of Loan
    					</Text>
    					<TextInput 
    					style={styles.input} 
    					autoCapitalize="none"
    					onChangeText={purposeOfLoan => this.setState({ purposeOfLoan })}
    					value={this.state.purposeOfLoan}
    					>
    					</TextInput>
              {
                this.state.purposeOfLoanError &&
                <Text style={styles.textError}>Purpose of loan is required</Text>
              }
    				</View>

            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                Loan Amount
              </Text>
              <TextInput 
              style={styles.input} 
              autoCapitalize="none"
              onChangeText={loanAmount => this.setState({ loanAmount })}
              value={this.state.loanAmount}
              >
              </TextInput>
              {
                this.state.loanAmountError &&
                <Text style={styles.textError}>Loan Amount is required</Text>
              }
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                Monthly Salary
              </Text>
              <TextInput 
              style={styles.input} 
              autoCapitalize="none"
              onChangeText={monthlySalary => this.setState({ monthlySalary })}
              value={this.state.monthlySalary}
              >
              </TextInput>
              {
                this.state.monthlySalaryError &&
                <Text style={styles.textError}>Monthly Salary is required</Text>
              }
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                Loan Period
              </Text>
              <TextInput 
              style={styles.input} 
              autoCapitalize="none"
              onChangeText={loanPeriod => this.setState({ loanPeriod })}
              value={this.state.loanPeriod}
              >
              </TextInput>
              {
                this.state.loanPeriodError &&
                <Text style={styles.textError}>Loan Period is required</Text>
              }
            </View>

          </View>

    			<TouchableOpacity style={styles.button} onPress={this.handleGetLoan}>
    				<Text style={{ color: "#FFF", fontWeight: "500" }}>Send Application</Text>
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
    fontSize: 12
  }
});

export default connect(null, { applyForLoanAction, getLoansAction })(GetLoan);
