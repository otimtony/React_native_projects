import React, { Component } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import Divider from 'react-native-divider';
import AsyncStorage from '@react-native-community/async-storage';
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
  Modal,
  SafeAreaView,
  Dimensions,
  ImageBackground
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import SearchableDropdown from 'react-native-searchable-dropdown';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import RNPickerSelect from 'react-native-picker-select';
import ToastNotification from 'react-native-toast-notification'
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import { getServices } from '../actions/servicesActions';
import { ListItem } from 'react-native-elements'

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Services extends Component {

  constructor(props){
    super(props);
    this.state = {
      token: ""
    }
  }

  static headerShown = {
    header: null
  };

  componentDidMount() {
    this.getProfileData();
    this.props.getServices();

    Geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      });
    }, 
    error => this.setStae({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 });
  }



  getProfileData = async () => {

    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);

      this.setState({ 
        token: parsed.token,
      })
    }
    catch (error){
      alert(error);
    }

  }

  render() {
    
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          region={{
          latitude: 0.3419169,
          longitude: 32.592069,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
          <Marker coordinate={{latitude:0.3419169, longitude:32.592069}}/>
        </MapView>
        <FlatGrid
          itemDimension={150}
          items={this.props.services}
          style={styles.gridView}
          renderItem={({ item, index }) => (
            <TouchableOpacity id={item.name}
              onPress={() => this.props.navigation.navigate(item.name, {
                token: this.props.navigation.state.params.token,
                user_id: this.props.navigation.state.params.user_id
              })}>
              <View style={[styles.itemContainer, { backgroundColor: "#FFFFFF" }]}>
                <Image 
                  source={item.icon}
                style={styles.icon}
                 />
                <Text style={styles.serviceTitle}>{item.title}</Text>
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  gridView: {
    marginTop: 280,
    backgroundColor: "#F0F0F0",
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  serviceTitle: {
    marginTop: 5,
    fontSize: 14,
  },
  icon: {
    width: 50,
    height: 50
  },
});

function mapStateToProps (state) {
  const renamedJson = (state.vehiclesReducers.vehicles).map(function(obj) {
    return {
      label: obj.vehicle_model,
      value: obj.id,
    }
  })

  return {
    services: state.servicesReducers.services
  }
}

export default connect(mapStateToProps, { getServices })(Services);