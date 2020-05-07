import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { FloatingAction } from "react-native-floating-action";
import { connect } from 'react-redux';
import { getLoansAction } from '../actions/getLoansAction';
import Moment from 'moment';
import NumberFormat from 'react-number-format';

class Loan extends React.Component {

  getQuote = (i) => {
    alert(i);
  }

  componentDidMount(){
    this.props.getLoansAction(
      this.props.navigation.state.params.token, 
      this.props.navigation.state.params.user_id
    );
  }

  render() {
    return (
      <SafeAreaView>
        {
          this.props.loans &&
          <ScrollView>
            {this.props.loans.map((loan, i) => (
              <ListItem
                key={i}
                title={loan.purpose_of_loan}
                titleStyle={styles.purpose_of_loan}
                subtitle={Moment(loan.added_at).format('DD-MMM-YYYY HH:mm')}
                subtitleStyle={styles.date}
                bottomDivider
                rightTitle={loan.loan_period}
                rightTitleStyle={styles.loan_period}
                rightSubtitle=<NumberFormat renderText={text => <Text style={styles.loan_amount}>{text}</Text>} value={`UGX ${loan.loan_amount}`} displayType={'text'} thousandSeparator={true} prefix={'UGX '} />
                chevron
                onPress={() => this.props.navigation.navigate("LoanDetail", {
                  token: this.props.navigation.state.params.token,
                  id: loan.id
                })}
              />
            ))}
          </ScrollView>
        }
        <FloatingAction
          onPressMain={() => this.props.navigation.navigate("ApplyForLoan", {
            token: this.props.navigation.state.params.token,
            user_id: this.props.navigation.state.params.user_id
          })}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  purpose_of_loan: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3F3F3F',
  },
  date: {
  	fontSize: 12,
    color: '#000000',
  },
  loan_amount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  loan_period: {
    fontSize: 12,
    color: '#000000',
  },
})

function mapStateToProps (state) {
  return {
    loans: state.loanReducer.loans.data
  }
}

export default connect(mapStateToProps, { getLoansAction })(Loan);