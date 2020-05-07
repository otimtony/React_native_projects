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
import SearchableDropdown from 'react-native-searchable-dropdown';


const CustomProgressBar = ({ visible }) => (
  <Modal onRequestClose={() => null} visible={visible}>
    <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
        <Text style={{ fontSize: 12, fontWeight: '200' }}>Searching for the nearest garage</Text>
        <ActivityIndicator size="large" />
      </View>
    </View>
  </Modal>
);


var items = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Java',
  },
  {
    id: 3,
    name: 'Ruby',
  },
  {
    id: 4,
    name: 'React Native',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'Python',
  },
  {
    id: 7,
    name: 'Go',
  },
  {
    id: 8,
    name: 'Swift',
  },
];

class Towing extends React.Component {

  state = {
    vechile: "",
    description: null,
    isProgress: false,
    garage_info: "",
  }

  handleRequest = () => {
    this.props.navigation.navigate('FoundTowRequest')

    // this.setState({ isProgress: true })

    // const requestData = {
    //   vehicle: "1",
    //   description: "My car has broken down",
    //   location: "0.33962, 32.59382",
    // }

    // fetch('https://makanika-api.herokuapp.com/api/v1/garage_requests/', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdF9uYW1lIjoiVG9ueSIsImxhc3RfbmFtZSI6Ik90aW0iLCJmdWxsX25hbWUiOiJUb255IE90aW0iLCJzbHVnIjoiNWNiNDdmOTAtMmFmMC0xMWVhLThlMmYtNWEwMzFjZDU4ZTdmIiwiZW1haWwiOm51bGwsInVzZXJuYW1lIjpudWxsLCJwaG9uZW51bWJlciI6IjA3MDM5NDg3NjQiLCJpc19hY3RpdmUiOnRydWUsImFjY291bnRfdHlwZSI6ImNsaWVudCJ9LCJpYXQiOjE1Nzc5ODc3NzEsImV4cCI6MTU3ODA3NDE3MX0.tH5GIbYcUjhFt8PoU1GVG79Kl3CrZ2Kp5Gi64lxx2qw'
    //   },
    //   body: JSON.stringify(requestData),
    // })
    // .then(response => {
    //   return response.json();
    // })
    // .then(responseData => {
    //   return responseData;
    // })
    // .then(data => {
    //   this.setState({ isProgress: false })
    //   this.props.navigation.navigate('FoundGarageRequest', 
    //   {
    //     garage_info: data.data.garage,
    //   });
    // })
    // .catch(err => {
    //       console.log(err)
    // });
  }

  render(){
    return (
      <View style={styles.container}>
      {
        this.state.isProgress ?
        <CustomProgressBar /> :
        <View style={ styles.requestContainer }>
          <Text style={styles.makanikaText}>Order for our Towing Services</Text>
          <View style={styles.form}>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>Vechile</Text>
              <SearchableDropdown
                onTextChange={text => alert(text)}
                onItemSelect={item => alert(JSON.stringify(item))}
                name="vechile"
                value={this.state.vechile}
                textInputStyle={{
                  borderWidth: 1,
                  borderColor: '#FFFFFF',
                  borderBottomColor: "#8A8F9E",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                itemStyle={{
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: '#FFFFFF',
                  borderColor: '#FFFFFF',
                  borderWidth: 1,
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={items}
                defaultIndex={2}
                placeholder="Vechile"
                resetValue={false}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.inputTitle}>
                Problem Description
              </Text>
              <TextInput 
                name="description"
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={description => this.setState({ description })}
                value={this.state.description}>
              </TextInput>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handleRequest}>
            <Text style={{ color: "#FFF" }}>Find</Text>
          </TouchableOpacity>
        </View>
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  requestContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    backgroundColor: '#FFFFFF',
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
    padding: 10 
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 20,
    width: 300
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
    height: 30,
    width: 300,
    marginBottom: 35,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default Towing;
