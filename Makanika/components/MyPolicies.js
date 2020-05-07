import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { getQuotations } from '../actions/insuranceActions';
import { connect } from 'react-redux';
import Moment from 'moment';

const Quotes = [
	{
		policy_no: 'BTM/NTINDA/TPP/827/2019', 
		pic: require('../assets/logo.png'),
		amount: 'UGX 20,0000',
		start_date: '12/12/2019',
		end_date: '12/12/2019',
		id: 1,
	},
	{
		policy_no: 'BTM/GULU/TPP/63/2018',
		pic: require('../assets/logo.png'),
		amount: 'UGX 140,000',
		start_date: '12/12/2019',
		end_date: '12/12/2019',
		id: 2,	
	},
	{
		policy_no: 'BTM/BWAISE/TPP/47/2017',
		pic: require('../assets/logo.png'),
		amount: 'UGX 53,000',
		start_date: '12/12/2019',
		end_date: '12/12/2019',
		id: 3,
	}
]

class MyPolicies extends React.Component {

  componentDidMount(){
    this.props.getQuotations()
  }
  render() {
    Moment.locale('en');
    return (
      <SafeAreaView>
        <ScrollView>
          {this.props.quotations.map((quotations, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: require('../assets/logo.png'), size: 'small' }}
              title={quotations.policy.name}
              titleStyle={styles.name}
              rightTitle={quotations.status}
              rightTitleStyle={styles.status}
              subtitle={'Date Added: ' + `${Moment(quotations.added_at).format('d MMM Y')}`}
              subtitleStyle={styles.amount}
              bottomDivider
              chevron
              onPress={() => this.props.navigation.navigate("MyQuoteDetails", {
                id: quotations.id,
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
  return {
    quotations: state.insuranceReducer.quotations
  }
}

export default connect( mapStateToProps, { getQuotations })(MyPolicies);