import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { getPoliciesAction } from '../actions/getPoliciesAction';

class Policies extends React.Component {

  getQuote = (i) => {
    alert(i);
  }

  componentDidMount() {
    this.props.getPoliciesAction();
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {this.props.policies.map((policy, i) => (
            <ListItem
              key={i}
              title={policy.name}
              titleStyle={styles.name}
              subtitle={`UGX ` + `${policy.amount}`}
              subtitleStyle={styles.amount}
              bottomDivider
              chevron
              onPress={() => this.props.navigation.navigate("BuyInsurance", {
                id: policy.id,
                name: policy.name,
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
    policies: state.policyReducer.policies
  }
}

export default connect(mapStateToProps, { getPoliciesAction })(Policies);