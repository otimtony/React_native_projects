import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  Dimensions,
  ImageBackground } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Divider from 'react-native-divider';
import AsyncStorage from '@react-native-community/async-storage';

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      token: "",
      user_id: "",
      phonenumber: "",
    }
  }

  static headerShown = {
    header: null
  };

  componentDidMount() {
    this.setState({ 
      token: this.props.navigation.state.params.token,
      user_id: this.props.navigation.state.params.user_id,
      phonenumber: this.props.navigation.state.params.phonenumber,
    })
  }

  render() {
    
    const items = [
      { 
        name: 'Insurance', 
        icon: require('../assets/insurance.png'),
      }, 
      { 
        name: 'Savings', 
        icon: require('../assets/savings.png'),
      },
      { 
        name: 'Loan', 
        icon: require('../assets/loan.png'),
      }, 
    ];


    return (
      <View style={styles.container}>
        <FlatGrid
          itemDimension={100}
          items={items}
          style={styles.gridView}
          renderItem={({ item, index }) => (
            <TouchableOpacity id={item.name}
              onPress={() => this.props.navigation.navigate(item.name, {
                token: this.state.token,
                user_id: this.state.user_id,
                phonenumber: this.state.phonenumber
              })}>
              <View style={[styles.itemContainer, { backgroundColor: "#FFFFFF" }]}>
                <Image 
                  source={item.icon}
                  style={styles.icon}
                />
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F0F0F0",
    height: 550,
  },
  gridView: {
    backgroundColor: "#F0F0F0",
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  itemName: {
    marginTop: 5,
    fontSize: 16,
  },
  icon: {
    width: 50,
    height: 50
  },
});
