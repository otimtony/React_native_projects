import React, { Component } from 'react';
import { 
  View, Text,TouchableOpacity, 
  Image, 
  StyleSheet,
  TouchableHighlight,
  TextInput } from 'react-native';
import jobQuotationAction from '../actions/jobQuotationAction';
import getRequestAction from '../actions/getRequestAction';
import { connect } from 'react-redux';
import Moment from 'moment';
import Dialog from "react-native-dialog";
import Divider from "react-native-elements";
import NumberFormat from 'react-number-format';

class RequestDetail extends Component {
  
  state = {
    amount: "",
    description: "",
    amountError: false,
    descriptionError: false,
    dialogVisible: false,
  }

  componentDidMount(){
    this.props.getRequestAction(this.props.navigation.state.params.id);
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

    const amount = this.state.amount
    const description = this.state.description

    if (this.state.amount) {
      this.setState({ amount: amount, amountError: false })
    }else {
      this.setState({ amountError: true })
    }

    if (this.state.description) {
      this.setState({ description: description, descriptionError: false })
    }else {
      this.setState({ descriptionError: true })
    }

    if (this.state.amount && this.state.description){
      this.showDialog()
    }

  }

  handleSubmitAmount = () => {
    console.log("<<<<<<<<<,.....handleSubmitAmount....>>>>>>>")

    // const paymentBody = {
    //   ""
    //   "phonenumber": '+256783474784',
    //   "amount": this.state.amount,
    //   "currency":"UGX",
    //   "description":"Per diem",
    //   "callback_url":"https://makanika.com",
    //   "send_instructions": "True"
    // }

    // fetch(`https://app.beyonic.com/api/collectionrequests`, {
    //   method: 'POST',
    //   headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Token ' + 'c3b0db492778f6dbbbaf7a7918bcea3fe5922c33'
    // },
    //   body: JSON.stringify(paymentBody),
    // })
    // .then(response => {
    //   return response.json();
    // })
    // .then(responseData => {
    //   return responseData;
    // })
    // .then(data => {
    //   console.log("<<<<<<<<<<<.......amount......>>>>>>>>>>>>>", data);
    // })
    // .catch(err => {
    //   console.log(err)
    // });

    this.props.jobQuotationAction(this.state.amount, this.state.description, this.props.navigation.state.params.id);
  }

  render() {
    const dateToFormat = '1976-04-19T12:59-0500';
    return (
      <>
        {
          this.props.request &&
          <>
            <View style={styles.container}>
              <View style={{flex: 1, flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
                <View style={{width: 50, height: 50, marginRight: 10 }}>
                  <Image 
                    style={styles.image}
                    source={require('../assets/user.png')} />
                </View>
                <View style={{height: 50, paddingLeft: 10, paddingRight: 10}}>
                  <Text style={{ marginTop: 5, fontWeight: 'bold' }}>{this.props.request.user.first_name} {this.props.request.user.last_name}</Text>
                  <Text style={{ fontSize: 12 }}>
                    {this.props.request.user.phonenumber}
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 60}}>
                <View style={{width: "60%", height: 50, marginRight: 10 }}>
                  <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{this.props.request.carModelBrand}</Text>
                </View>
                <View style={{height: "50%", paddingLeft: 10, paddingRight: 10}}>
                  <Text style={{ fontSize: 12 }}>
                    {Moment(this.props.request.request_time).format('DD-MMM-YYYY HH:mm')}
                  </Text>
                </View>
              </View>
              <Text style={{ marginTop: 30, marginLeft: 20 }}>
                {this.props.request.description}
              </Text>
            </View>
            <View
              style={styles.divider}
            />
            {this.props.request.status === 'pending' ? 
              <View style={{flex: 1}}>
                <Text style={styles.heading}>Add description of the work done and amount </Text>
                <View>
                  <Text style={styles.inputTitle}>
                    Description
                  </Text>
                  <TextInput 
                    multiline={true}
                    autoCapitalize="none"
                    style={styles.descriptionInput}
                    onChangeText={description => this.setState({ description })}
                    value={this.state.description}
                  >
                  </TextInput>
                  {
                    this.state.descriptionError &&
                    <Text style={styles.errorText}>Description is required</Text>
                  }
                </View>
                <View>
                  <Text style={styles.inputTitle}>
                    Amount
                  </Text>
                  <TextInput 
                    maxLength={10}
                    style={styles.amountInput} 
                    autoCapitalize="none"
                    keyboardType='numeric'
                    onChangeText={amount => this.setState({ amount })}
                    value={this.state.amount}
                  >
                  </TextInput>
                  {
                    this.state.amountError &&
                    <Text style={styles.errorText}>Amount is required</Text>
                  }
                </View>
                <View style={styles.touchableOpacityViewStyle}>
                  <TouchableOpacity
                    style={styles.touchableOpacityStyle}
                    onPress={this.handleConfirmDialog}>
                    <Text style={styles.jobCostTextStyle}>Job Cost</Text>
                  </TouchableOpacity>
                </View>
              </View>
              : this.props.request.status === 'completed' 
              ? 
              <View>
                <Text style={{ marginLeft: 20, marginRight: 10, marginTop: 20 }}>You completed job. Payment pending</Text>
                <Text style={{ marginLeft: 20, marginRight: 10, marginTop: 20, fontWeight: 'bold' }}>Job Description</Text>
                <Text style={{ marginLeft: 20, marginRight: 10, marginTop: 5 }}>{this.props.request.garage_description}</Text>
                <Text style={{ marginLeft: 20, marginRight: 10, marginTop: 20, fontWeight: 'bold' }}>Amount Charged</Text>
                <NumberFormat renderText={text => <Text style={{ marginLeft: 20, marginRight: 10, marginTop: 5, color: "#FF0000", fontWeight: 'bold' }}>{text}</Text>} value={this.props.request.amount} displayType={'text'} thousandSeparator={true} prefix={'UGX '}/>
              </View>
              : <Text style={{ marginLeft: 20, marginRight: 10, marginTop: 20 }}>Payment of {this.props.request.amount} made.</Text>
            }
            <Dialog.Container visible={this.state.dialogVisible}>
              <Dialog.Title>Send Quotation</Dialog.Title>
              <Dialog.Description>
                Are you sure you have completed the job? Amount to pay UGX {this.state.amount}.
              </Dialog.Description>
              <Dialog.Button label="Cancel" onPress={this.handleCancel} />
              <Dialog.Button label="Submit" onPress={this.handleSubmitAmount} />
            </Dialog.Container>
          </>
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: "#FFFFFF" 
  },
  image: {
    width: 50, 
    height: 50,
  },
  amountInput: {
    borderBottomColor: "#C3C3C3",
    borderBottomWidth: 1,
    marginRight: 20,
    marginLeft: 20,
  },
  descriptionInput: {
    borderBottomColor: "#C3C3C3",
    borderBottomWidth: 1,
    marginRight: 20,
    marginLeft: 20,
  },
  inputTitle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  loginButton: {
    position:'absolute',
    bottom: 0,
    height:40,
    backgroundColor:'blue',
    justifyContent:'center',
  },
  makanikaText: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#FF0000', 
  },
  errorText: {
    color: "#FF0000", 
    fontSize: 12, 
    marginLeft: 20, 
    marginRight: 20
  },
  touchableOpacityViewStyle: {
    flex: 1, 
    justifyContent: 'flex-end',
  },
  touchableOpacityStyle: {
    width:'100%',
    height:50,
    backgroundColor:'#FF0000', 
    alignItems:'center',
    justifyContent:'center'
  },
  jobCostTextStyle: {
    color:'white', 
    fontSize: 16
  },
  divider: {
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  heading: {
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 20, 
    fontWeight: 'bold' 
  }
});

const mapStateToProps = (state) => {
  return {
    request: state.requestReducer.request
  }
};


export default connect( mapStateToProps, { getRequestAction, jobQuotationAction })(RequestDetail);
