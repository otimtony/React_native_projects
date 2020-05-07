import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { getProductByCategory } from '../actions/shopActions';
import { connect } from 'react-redux';

class ShopItemsByCategory extends React.Component {

  constructor(props){
    super(props)
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      title: params.name,
    };
  };


  componentDidMount() {
    this.props.getProductByCategory(this.props.navigation.state.params.id)
  }

  render() {
    return (
      <Text>Shopping Items by category</Text>
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

export default connect(null, {getProductByCategory})(ShopItemsByCategory);