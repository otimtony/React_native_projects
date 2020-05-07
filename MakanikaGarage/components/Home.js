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

    this.getProfileData();
  }

  getProfileData = async () => {

    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);

      this.setState({ 
        token: parsed.token,
        user_id: parsed.data.id,
        phonenumber: parsed.data.phonenumber
      })

    }
    catch (error){
      alert(error);
    }

  }

  render() {
    
    const items = [
      { 
        name: 'Requests', 
        icon: require('../assets/requests.png'),
      }, 
      { 
        name: 'Insurance', 
        icon: require('../assets/insurance.png'),
      },
      { 
        name: 'Wallet', 
        icon: require('../assets/wallet.png'),
      }, 
      { 
        name: 'Shop', 
        icon: require('../assets/shop.png'), 
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

    const Services = [
      { 
        name: 'Garage', 
        icon: require('../assets/logo.png'),
      }, 
      { 
        name: 'Breakdown', 
        icon: require('../assets/insurance.png'),
      },
      { 
        name: 'RideMe', 
        icon: require('../assets/wallet.png'),
      }, 
      { 
        name: 'Shop', 
        icon: require('../assets/shop.png'), 
      },
      { 
        name: 'Towing', 
        icon: require('../assets/towing.png'), 
      },
      { 
        name: 'Loan', 
        icon: require('../assets/loan.png'), 
      },
    ];

    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: "#FF0000", marginTop: 10, marginBottom: -15}}>Makanika</Text>
        <FlatGrid
          itemDimension={100}
          items={items}
          style={styles.gridView}
          renderItem={({ item, index }) => (
            <TouchableOpacity id={item.name}
              onPress={() => this.props.navigation.navigate(item.name, {
                token: this.state.token,
                user_id: this.state.user_id,
                phonenumber: this.state.phonenumber,
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
        <View style={styles.advertismentView}>
          <ImageBackground
            source={require('../assets/profile-screen-bg.png')}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <View style={{ flex: 1, flexDirection: 'row'}}>
              <View style={{width: 200, height: 50}}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10, marginLeft: 10, color: "#FFFFFF"}}>Testing the game</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 10, color: "#FFFFFF"}}>Testing</Text>
              </View>
              <View style={{width: 100, height: 50}}>
                <Image 
                  style={styles.image}
                  source={require('../assets/logo.png')} />
              </View>
            </View>
          </ImageBackground>
          <Text style={{ marginTop: 20, marginLeft: 10, marginRight: 10, fontSize: 16, fontWeight: 'bold' }}>Our Offers</Text>
          <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 14 }}>
            We also connect you to insurance services, gifts, discounts, rewards and credit services.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    height: 80,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F0F0F0",
    height: 580,
  },
  advertismentView: {
    backgroundColor: "#FFFFFF",
    height: 200,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 100
  },
  profile: {
    marginTop: 100
  },
  gridView: {
    backgroundColor: "#F0F0F0",
    marginTop: 20,
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
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
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
