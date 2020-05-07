import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { getPolicies } from '../actions/policyActions';
import NumberFormat from 'react-number-format';

class Policies extends React.Component {

  getQuote = (i) => {
    alert(i);
  }

  componentDidMount() {
    this.props.getPolicies(this.props.navigation.state.params.token);
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {this.props.policies.map((policy, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: require('../assets/logo.png'), size: 'small' }}
              title={policy.name}
              titleStyle={styles.name}
              subtitle=<NumberFormat renderText={text => <Text style={styles.amount}>{text}</Text>} value={policy.amount} displayType={'text'} thousandSeparator={true} prefix={'UGX '} />
              subtitleStyle={styles.amount}
              bottomDivider
              chevron
              onPress={() => this.props.navigation.navigate("BuyInsurance", {
                id: policy.id,
                name: policy.name,
                token: this.props.navigation.state.params.token,
                user_id: this.props.navigation.state.params.user_id
              })}
            />
          ))}
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
  amount: {
  	fontSize: 12,
    color: '#000000',
  },
})

function mapStateToProps (state) {
  return {
    policies: state.policyReducers.policies
  }
}

export default connect(mapStateToProps, { getPolicies })(Policies);