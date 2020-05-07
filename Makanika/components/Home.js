import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  Dimensions,
  ScrollView,
  FlatList,
  ImageBackground } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Divider from 'react-native-divider';
import AsyncStorage from '@react-native-community/async-storage';
import { getAdvertisementsAction } from '../actions/getAdvertisementsAction';
import { connect } from 'react-redux';
import { HOST } from '../utils/utils';
import { Card } from "react-native-elements";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      token: "",
      user_id: "",
      data: "",
      phonenumber: "",
    }
  }

  static headerShown = {
    header: null
  };

  componentDidMount() {
    this.getProfileData();
    this.props.getAdvertisementsAction();
  }

  getProfileData = async () => {

    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);

      this.setState({ 
        token: parsed.token,
        user_id: parsed.data.id,
        phonenumber: parsed.data.phonenumber,
      })
    }
    catch (error){
      alert(error);
    }

  }

  render() {

    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 9)/16);

    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;

    let imageWidth = dimensions.width;

    const items = [
      { 
        name: 'Mechanic', 
        icon: require('../assets/mechanic.png'),
      }, 
      { 
        name: 'Servicing', 
        icon: require('../assets/schedule.png'),
      },
      { 
        name: 'Breakdown', 
        icon: require('../assets/towing.png'),
      }, 
      { 
        name: 'Shop', 
        icon: require('../assets/shop.png'), 
      },
      { 
        name: 'Wallet', 
        icon: require('../assets/wallet.png'), 
      },
      { 
        name: 'More', 
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
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showHorizontalScrollIndicator={true}>
          {
            this.props.advertisements &&
            this.props.advertisements.map((item) => {
              return (
                <View style={{
                  flex: 1,
                  width: screenWidth,
                  alignItems: 'center',
                  }} key={item.id}>
                  <TouchableOpacity  
                    onPress={() => this.props.navigation.navigate("AdvertisementDetail", {
                      id: item.id
                    })}>
                    <Image 
                      style={{ height: imageHeight, width: imageWidth }}
                      resizeMode={"cover"}
                      source={{ uri: item.image }} />
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
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
    alignItems: 'center',
    backgroundColor: "#F0F0F0",
  },
  advertismentView: {
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
  },
  adImage: {
    height: 200,
    width: 200,
  },
  requestMechanic: {
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 18
  },
  description: {
    textAlign: 'center',
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  skipTouchableOpacity: {
    backgroundColor: "#FF0000",
    position: 'absolute',
    bottom:0,
    width: "80%",
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  skip: {
    padding: 10,
    color: "#FFFFFF"
  }

});


function mapStateToProps (state) {
  return {
    advertisements: state.advertisementsReducer[0]
  }
}

export default connect(mapStateToProps, { getAdvertisementsAction })(Home)
