import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class SplashScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    this.getProfileData()
  }

  getProfileData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      if (parsed) {
        this.props.navigation.navigate('Home')
      }else {
        this.props.navigation.navigate('Login')
      }
    }

    catch (error){
      alert(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('../assets/logo.png')} />
        <Text style={styles.makanikaText}>Makanika</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  image: {
    width: 80, 
    height: 80,
  },
  makanikaText: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#FF0000', 
  },
});
export default SplashScreen;