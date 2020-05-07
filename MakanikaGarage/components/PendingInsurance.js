import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { getInsurancesAction } from '../actions/getInsurancesAction';
import Moment from 'moment';

class Policies extends React.Component {

  getQuote = (i) => {
    alert(i);
  }

  componentDidMount() {
    this.props.getInsurancesAction(
      this.props.navigation.state.params.token, 
      this.props.navigation.state.params.user_id
    );
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {
          	this.props.insurances &&
          	this.props.insurances.map((insurances, i) => (
            <ListItem
              key={i}
              title={insurances.policy.policy_name}
              titleStyle={styles.name}
              subtitle={Moment(insurances.added_at).format('DD-MMM-YYYY HH:mm')}
              subtitleStyle={styles.added_at}
              bottomDivider
              chevron
              onPress={() => this.props.navigation.navigate("InsuranceDetail", {
                id: insurances.id,
                name: insurances.policy.policy_name,
                token: this.props.navigation.state.params.token, 
              })}
            />
          ))
          }
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3F3F3F',
  },
  added_at: {
  	fontSize: 12,
    color: '#000000',
  },
})

function mapStateToProps (state) {
  return {
    insurances: state.insuranceReducer.insurances.data
  }
}

export default connect(mapStateToProps, { getInsurancesAction })(Policies);