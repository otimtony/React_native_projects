import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'

const loans = [
	{
		name: 'Liability Coverage', 
		pic: require('../assets/logo.png'),
		amount: 'UGX 20,0000',
	},
	{
		name: 'Uninsured and Underinsured Motorist Coverage',
		pic: require('../assets/logo.png'),
		amount: 'UGX 140,000',
	},
	{
		name: 'Comprehensive Coverage',
		pic: require('../assets/logo.png'),
		amount: 'UGX 53,000',
	},
  {
    name: 'Collision Coverage', 
    pic: require('../assets/logo.png'),
    amount: 'UGX 20,0000',
  },
  {
    name: 'Medical Payments Coverage',
    pic: require('../assets/logo.png'),
    amount: 'UGX 140,000',
  },
  {
    name: 'Personal Injury Protection',
    pic: require('../assets/logo.png'),
    amount: 'UGX 53,000',
  }
]

class Loans extends React.Component {

  getQuote = (i) => {
    alert(i);
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {loans.map((policy, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: policy.pic, size: 'small' }}
              title={policy.name}
              titleStyle={styles.name}
              subtitle={policy.amount}
              subtitleStyle={styles.amount}
              bottomDivider
              chevron
              onPress={() => this.props.navigation.navigate("BuyInsurance", {
                id: i,
                name: policy.name
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

export default Loans;