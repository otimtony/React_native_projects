import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { ListItem } from 'react-native-elements'

const profiles = [
    {
      name: "About",
      icon: require('../assets/about.png'),
      page: "About",
    },
    {
      name: "Feedback",
      icon: require('../assets/help.png'),
      page: "Feedback",
    },
    {
      name: "Terms of Service",
      icon: require('../assets/feedback.png'),
      page: "TermsOfService",
    },
]

class Profile extends Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    phonenumber: "",
    credit: "",
    name: "",
    contact: "",
    profile_picture: ""
  }

  componentDidMount(){
    this.getProfileData()
  }

  getProfileData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      this.setState({ 
        first_name: parsed.data.first_name,
        last_name: parsed.data.last_name,
        email: parsed.data.email,
        username: parsed.data.username,
        phonenumber: parsed.data.phonenumber,
        credit: parsed.data.credit,
        name: parsed.data.name,
        contact: parsed.data.contact,
        profile_picture: parsed.data.profile_picture,
      })
    }
    catch (error){
      alert(error);
    }
  }

  handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user')
      console.log("Removed successfully")
      this.props.navigation.navigate('Login')
    } catch (e) {
      console.log("Failed to clear the async storage.")
    }
  }

  render() {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.container}>

          <View style={styles.header}></View>

          <View style={styles.profile}>
            <Image style={styles.avatar} source={require('../assets/user.png')}/>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.first_name} {this.state.last_name}</Text>
              {
                this.state.email ?
                <Text style={styles.email}>{this.state.email}</Text> :
                <Text style={styles.email}>No email</Text>
              }
              <Text style={styles.telephone}>{this.state.phonenumber}</Text>
            </View>
          </View>

          <View style={styles.about}>
            {
              profiles.map((profile, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: profile.icon, size: 'small' }}
                  title={profile.name}
                  bottomDivider
                  chevron
                  rightIcon
                  onPress={() => this.props.navigation.navigate(profile.page, {
                    username: this.state.username,
                    phonenumber: this.state.phonenumber,
                    email: this.state.email
                  })}
                />
              ))
            }
          </View>
          
          <View style={styles.logout}>
            <TouchableOpacity 
              onPress={this.handleLogout}
              style={styles.logoutButton}>
              <Text style={styles.logoutName}>Log out</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#FF0000",
    height:150,
  },
  logoutButton: {
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:20
  },
  logoutName:{
    fontWeight: 'bold',
    fontSize:12,
    color: "#FFFFFF"
  },
  profile:{
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginRight: 20,
    marginTop:-120,
  },
  about:{
    backgroundColor: '#F3F3F3',
    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    marginBottom: 10,
  },
  logout:{
    backgroundColor: '#F3F3F3',
    marginLeft: 20,
    marginRight: 20,
    marginTop:10,
    marginBottom: 20,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    marginTop: 120,
  },
  name:{
    fontSize:16,
    fontWeight: 'bold',
    color: "#000000",
  },
  email:{
    fontSize:12,
    color: "#000000",
    marginTop:5
  },
  telephone:{
    fontSize:10,
    color: "#000000",
    marginTop:5,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default connect(null, { logoutUser })(Profile);
