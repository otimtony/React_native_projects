import { createStackNavigator } from 'react-navigation-stack';
import {
  Image,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './components/Home';
import Login from './components/Login';
import Payments from './components/Payments';
import Profile from './components/Profile';
import SplashScreen from './components/SplashScreen';
import PaymentDetails from './components/PaymentDetails';
import React from 'react';
import Requests from './components/Requests';
import RequestDetail from './components/RequestDetail';
import QuoteAmount from './components/QuoteAmount';
import Insurance from './components/Insurance';
import Policies from './components/Policies';
import BuyInsurance from './components/BuyInsurance';
import PendingInsurance from './components/PendingInsurance';
import InsuranceDetail from './components/InsuranceDetail';
import ApprovedInsurance from './components/ApprovedInsurance';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import ShoppingCartIcon from './containers/ShoppingCartIcon';
import Loan from './components/Loan';
import ApplyForLoan from './components/ApplyForLoan';
import LoanDetail from './components/LoanDetail';
import ProductsByCategory from './components/ProductsByCategory';
import Wallet from './components/Wallet';
import Feedback from './components/Feedback';
import About from './components/About';
import Help from './components/Help';
import PaymentOptions from './components/PaymentOptions';
import RavePayment from './components/RavePayment';
import MobileMoney from './components/MobileMoney';
import TermsOfService from './components/TermsOfService';
import Cash from './components/Cash';
import Savings from './components/Savings';
import AddSaving from './components/AddSaving';
import MobileMoneyVisaOptions from './components/MobileMoneyVisaOptions';
import QuoteInsurance from './components/QuoteInsurance';

const AppTabNavigator = createBottomTabNavigator(
  {
    Payments: {
      screen: Payments,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image 
          style={{ width: 25, height: 25, marginBottom: 2, marginTop: 5 }}
          source={require('./assets/payments.png')} />
        ),
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image 
          style={{ width: 60, height: 60, marginBottom: 20 }}
          source={require('./assets/logo.png')} />
        )
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image 
          style={{ width: 25, height: 25, marginBottom: 2, marginTop: 5 }}
          source={require('./assets/user.png')} />
        )
      },
    }
  },
  {
    initialRouteName: "Home"
  }
)

AppTabNavigator.navigationOptions = {
  headerShown: false,
};

const AuthStack = createStackNavigator({
  Login: { screen: Login, navigationOptions: {
        headerShown: false,
      }},
})

const AppStack = createStackNavigator({

  Home: { screen: AppTabNavigator },
  Requests: { screen: Requests, navigationOptions: { title: 'Requests' }},
  RequestDetail: { screen: RequestDetail, navigationOptions: { title: 'RequestDetail' }},
  QuoteAmount: { screen: QuoteAmount, navigationOptions: { title: 'QuoteAmount' }},
  Insurance: { screen: Insurance, navigationOptions: { title: 'Insurance' }},
  Policies: { screen: Policies, navigationOptions: { title: 'Policies' }},
  BuyInsurance: { screen: BuyInsurance, navigationOptions: { title: 'BuyInsurance' }},
  PendingInsurance: { screen: PendingInsurance, navigationOptions: { title: 'Pending Insurance' }},
  InsuranceDetail: { screen: InsuranceDetail, navigationOptions: { title: 'Insurance Detail' }},
  ApprovedInsurance: { screen: ApprovedInsurance, navigationOptions: { title: 'Approved Insurance' }},
  Shop: { screen: Shop, navigationOptions: { title: 'Shop', headerRight:( () => <ShoppingCartIcon />) }},
  ProductDetail: { screen: ProductDetail, navigationOptions: { title: 'Product Detail', headerRight:( () => <ShoppingCartIcon />) }},
  Cart: { screen: Cart, navigationOptions: { title: 'Cart' }},
  Loan: { screen: Loan, navigationOptions: { title: 'Loan' }},
  ApplyForLoan: { screen: ApplyForLoan, navigationOptions: { title: 'Apply For Loan' }},
  LoanDetail: { screen: LoanDetail, navigationOptions: { title: 'Loan Detail' }},
  ProductsByCategory: { screen: ProductsByCategory, navigationOptions: { title: 'Products By Category' }},
  Wallet: { screen: Wallet, navigationOptions: { title: 'Wallet' }},
  Feedback: { screen: Feedback, navigationOptions: { title: 'Feedback' }},
  About: { screen: About, navigationOptions: { title: 'About' }},
  Help: { screen: Help, navigationOptions: { title: 'Help' }},
  PaymentOptions: { screen: PaymentOptions, navigationOptions: { title: 'Payment Options' }},
  RavePayment: { screen: RavePayment, navigationOptions: { title: 'Rave Payment' }},
  MobileMoney: { screen: MobileMoney, navigationOptions: { title: 'Mobile Money' }},
  TermsOfService: { screen: TermsOfService, navigationOptions: { title: 'Terms Of Service' }},
  Cash: { screen: Cash, navigationOptions: { title: 'Cash' }},
  Savings: { screen: Savings, navigationOptions: { title: 'Savings' }},
  AddSaving: { screen: AddSaving, navigationOptions: { title: 'Add Savings' }},
  MobileMoneyVisaOptions: { screen: MobileMoneyVisaOptions, navigationOptions: { title: 'Mobile Money Visa Options' }},
  QuoteInsurance: { screen: QuoteInsurance, navigationOptions: { title: 'Get Quote' }},

})

const AppNavigator = createAppContainer(
	createSwitchNavigator(
		{	
			SplashScreen: { screen: SplashScreen},
			AuthStack: AuthStack,
      		AppStack: AppStack,
		}
	)
)

export default AppNavigator;	
