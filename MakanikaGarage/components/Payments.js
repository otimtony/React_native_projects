import React from 'react';
import { 
  SafeAreaView, 
  TextInput,
  ScrollView, 
  StyleSheet, 
  Text, 
  Alert,
  TouchableOpacity, 
  View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { getPayments } from '../actions/paymentActions';
import { bindActionCreators } from 'redux';
import WebSocketInstance from '../websocket';

class Payments extends React.Component {

  componentDidMount(){
    WebSocketInstance.connect();
  }

  constructor(props){
    super(props);
    this.state = {}
    this.waitForSocketConnection(() => {
      WebSocketInstance.addCallbacks(
        this.setMessages.bind(this),
        this.addMessage.bind(this));
      WebSocketInstance.fetchMessages(this.props.currentUser);
    })
  }

  waitForSocketConnection(callback){
    const component = this;
    setTimeout(
      function(){
        if (WebSocketInstance.state() === 1){
          console.log('connection is secure');
          callback();
          return;
        } else {
          console.log('waiting for connection...');
          component.waitForSocketConnection(callback);
        }
      }, 100);
  }

  addMessage(message){
    this.setState({
      messages: [...this.state.messages, message]
    });
  }

  setMessages(messages){
    this.setState({ messages: messages.reverse() });
  }

  sendMessageHandler = (e) => {
    e.preventDefault();
    const messageObject = {
      from: 'admin',
      content: this.state.message
    }
    WebSocketInstance.newChatMessage(messageObject);
    this.setState({ message: '' });

  }

  messageChangeHandler = event => {
    this.setState({ message: event.target.value })
  }

  renderMessages = (messages) => {
    const currentUser = 'admin';
    return messages.map(message => (
      <Text key={message.id}>{message.content}</Text>
    ));
  }

  render(){

    const messages = this.state.messages;

    return (
        <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.makanikaText}>Makanika Garage</Text>
          </View>

          <View style={styles.errorMessage}>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
          </View>

          <View style={styles.form}>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.inputTitle}>
                Code
              </Text>
              <TextInput 
                keyboardType='number-pad'
                secureTextEntry={true}
                style={styles.input} 
                autoCapitalize="none"
                onChangeText={code => this.setState({ code })}
                value={this.state.code}>
              </TextInput>
            </View>
          </View>

          <TouchableOpacity 
            onPress={this.handleLogin}
            style={styles.button} >
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  spinnerTextStyle: {
    color: '#FFF',
    fontSize: 12
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  image: {
    marginTop: 40,
    width: 100, 
    height: 100,
    alignSelf: "center",
  },
  makanikaText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#FFFFFF', 
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 5,
    marginHorizontal: 30
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#cc142d",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = (state) => {
  const payments = state.paymentReducers
  return payments
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getPayments,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Payments);