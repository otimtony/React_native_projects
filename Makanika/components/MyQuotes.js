import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { getQuotations } from '../actions/insuranceActions';
import { connect } from 'react-redux';
import Moment from 'moment';

class MyQuotes extends React.Component {

  componentDidMount(){
    this.props.getQuotations(this.props.navigation.state.params.user_id, this.props.navigation.state.params.token)
  }
  render() {

    Moment.locale('en');
    return (
      <SafeAreaView>
        <ScrollView>
          {this.props.quotations.filter((quotation) => quotation.status === "confirmed").map((quotation, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: require('../assets/logo.png'), size: 'small' }}
              title={quotation.policy.policy_name}
              titleStyle={styles.name}
              subtitle={`${Moment(quotation.added_at).format('d MMM Y')}`}
              subtitleStyle={styles.amount}
              bottomDivider
              chevron
              onPress={() => this.props.navigation.navigate("MyQuoteDetails", {
                id: quotation.id,
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3F3F3F',
  },
  status: {
    fontSize: 12,
    color: '#3F3F3F',
  },
  amount: {
  	fontSize: 12,
    color: '#000000',
  },
})

function mapStateToProps (state) {
  console.log("<<<<<<<<<<<<<.................>>>>>>>>>>>>>>>", state.insuranceReducer.quotations.data)
  return {
    quotations: state.insuranceReducer.quotations.data
  }
}

export default connect( mapStateToProps, { getQuotations })(MyQuotes);