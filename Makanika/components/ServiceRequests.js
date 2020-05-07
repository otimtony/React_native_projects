import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'

const Messages = [
	{
		garage: 'Ivans garage', 
		pic: require('../assets/logo.png'),
		amount: 'UGX 20,0000',
		date: '12/12/2019'
	},
	{
		garage: 'Best garage uganda',
		pic: require('../assets/logo.png'),
		amount: 'UGX 140,000',
		date: '12/12/2019'
	},
	{
		garage: 'Land Rover Discovery',
		pic: require('../assets/logo.png'),
		amount: 'UGX 53,000',
		date: '12/12/2019'
	}
]

class ServiceRequests extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {Messages.map((user, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: user.pic, size: 'small' }}
              title={user.garage}
              titleStyle={styles.garage}
              subtitle={user.amount}
              subtitleStyle={styles.amount}
              bottomDivider
              rightTitle={user.date}
              rightTitleStyle={styles.date}
              chevron
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
})

export default ServiceRequests;