import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, Alert } from 'react-native'
import { ListItem } from 'react-native-elements'
import axios from 'axios';
import { connect } from 'react-redux';
import { getPayments } from '../actions/paymentsAction';

class Payments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    this.props.getPayments();
  }

  render() {

    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.paymentText}>Payments</Text>
          <Text style={styles.ordersText}>LAST {this.state.persons.length} ORDERS</Text>
          {this.props.payments.map((payment, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: require('../assets/logo.png'), size: 'small' }}
              title={payment.title}
              titleStyle={styles.garage}
              subtitle="This is a test test"
              subtitleStyle={styles.amount}
              bottomDivider
              rightTitle={payment.date}
              rightTitleStyle={styles.date}
              chevron
              onPress={() => this.props.navigation.navigate("PaymentDetails", {
                title: payment.title,
              })}
            />
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
  	fontSize: 10,
    color: '#000000',
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
  }
})

function mapStateToProps (state) {
  return {
    payments: state.paymentsReducer.payments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPayments: () => dispatch({ type: 'GET_PAYMENTS' }),
  }
}

export default connect(mapStateToProps, { getPayments })(Payments);


