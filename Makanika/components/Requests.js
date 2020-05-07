import React from 'react'
import { SafeAreaView, View, ScrollView, StyleSheet, Text, Alert } from 'react-native'
import { ListItem } from 'react-native-elements'
import axios from 'axios';
import { connect } from 'react-redux';
import { getRequestsAction } from '../actions/getRequestsAction';
import Moment from 'moment';

class Payments extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    this.props.getRequestsAction();
  }

  render() {

    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.paymentText}>Requests</Text> 
          {
            this.props.requests &&
            <Text style={styles.ordersText}>LAST {this.props.requests.length} Requests</Text>
          }
          {
            this.props.requests &&
            this.props.requests.map((request, i) => (
              <View>
                <ListItem
                  key={i}
                  title={request.garage.name}
                  titleStyle={styles.garage}
                  subtitle={request.garage.phonenumber}
                  subtitleStyle={styles.amount}
                  bottomDivider
                  rightTitle={Moment(request.request_time).format('DD-MMM-YYYY HH:mm A')}
                  rightSubtitle={request.status}
                  rightSubtitleStyle={styles.rightSubtitleStyle}
                  rightTitleStyle={styles.date}
                  chevron
                  onPress={() => this.props.navigation.navigate("RequestDetail", {
                    id: request.id
                  })}
                />
              </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  garage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3F3F3F',
  },
  amount: {
    fontSize: 12,
    color: '#000000',
  },
  date: {
    fontSize: 9,
    color: '#000000',
    fontWeight: "bold",
  },
  paymentText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 10
  },
  ordersText: {
    marginLeft: 15,
    fontSize: 11,
    marginBottom: 10
  },
  rightSubtitleStyle: {
    fontSize: 11,
    color: "#FF0000",
    fontWeight: "bold",
  }
})

function mapStateToProps (state) {
  return {
    requests: state.requestsReducer.requests.data
  }
}

export default connect(mapStateToProps, { getRequestsAction })(Payments);


