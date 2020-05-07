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

export default class PaymentOption extends Component {

  constructor(props){
    super(props);
    this.state = {
      token: "",
      user_id: "",
      phonenumber: "",
    }
  }

  render() {
    
    const items = [
      { 
        name: 'Mobile Money', 
        icon: require('../assets/mm.png'),
        option: 'MobileMoney',
      }, 
      { 
        name: 'Visa', 
        icon: require('../assets/visa.png'),
        option: 'RavePayment',
      },
      { 
        name: 'Cash', 
        icon: require('../assets/cash.png'),
        option: 'Cash'
      }
    ];

    return (
      <View style={styles.container}>
        <FlatGrid
          itemDimension={100}
          items={items}
          style={styles.gridView}
          renderItem={({ item, index }) => (
            <TouchableOpacity id={item.name}
              onPress={() => this.props.navigation.navigate(item.option, 
              	{
              		amount: this.props.navigation.state.params.amount
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
    height: 580,
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
    fontSize: 14,
  },
  icon: {
    width: 50,
    height: 50
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginTop: 10
  }
});
