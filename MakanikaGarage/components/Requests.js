import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, Alert, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { getRequests } from '../actions/getRequests';
import { bindActionCreators } from 'redux';
import NumberFormat from 'react-number-format';

class Requests extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getRequests();
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.requests &&
          <>
            <Text style={styles.ordersText}>{this.props.requests.length} Requests</Text>
            {this.props.requests.map((requests, i) => (
              <ListItem
                key={i}
                title={`${requests.user.first_name}` + ` ` + `${requests.user.last_name}`}
                titleStyle={styles.garage}
                subtitle={requests.carModelBrand}
                subtitleStyle={styles.carModelBrand}
                bottomDivider
                rightTitle={requests.user.phonenumber}
                rightTitleStyle={styles.carModelBrand}
                subRightTitle={requests.user.phonenumber}
                rightSubtitle=<NumberFormat renderText={text => <Text style={styles.amount}>{text}</Text>} value={`UGX ${requests.amount}`} displayType={'text'} thousandSeparator={true} prefix={'UGX '} />
                chevron
                rightIcon
                onPress={() => this.props.navigation.navigate("RequestDetail", {
                  id: requests.id,
                })}
              />
            ))}
          </>
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paymentsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20
  },
  ordersText: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 20
  },
  garage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3F3F3F',
  },
  description: {
    fontSize: 12,
    color: '#000000',
  },
  phonenumber: {
    fontSize: 12,
    color: '#000000',
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  carModelBrand: {
    fontSize: 12,
    color: '#000000',
  },
  paymentText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 10
  },
});


const mapStateToProps = (state) => {
  return {
    requests: state.requestReducer.requests.data
  }
};


export default connect(mapStateToProps, { getRequests })(Requests);