import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity, 
  Image, 
  StyleSheet,
  TouchableHighlight,
  TextInput } from 'react-native';
import Moment from 'moment';
import Dialog from "react-native-dialog";
import Divider from "react-native-elements";
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { getRequestAction } from '../actions/getRequestAction';

class RequestDetail extends Component {

	componentDidMount(){
		this.props.getRequestAction();
	}

	render(){
		console.log("<<<<<<.......mmmmm.........>>>>>>", this.props.navigation.state.params.id)
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
          </>
        }
      </>
		)
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
	console.log("<<<<<<.......mapStateToProps.........>>>>>>", state.requestsReducer.request)
  return {
    request: state.requestsReducer.request
  }
};

export default connect(mapStateToProps, { getRequestAction })(RequestDetail);