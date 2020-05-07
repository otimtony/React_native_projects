import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Payments from './components/Payments';
import AppNavigator from './AppNavigator';
import LoadingScreen from './components/LoadingScreen';
import Insurance from './components/Insurance';
import Requests from './components/Requests';
import Shop from './components/Shop';
import Wallet from './components/Wallet';
import BuyInsurance from './components/BuyInsurance';
import MyQuotes from './components/MyQuotes';
import ServiceRequests from './components/ServiceRequests';
import Policies from './components/Policies';
import MyQuoteDetails from './components/MyQuoteDetails';
import ShopDetail from './components/ShopDetail';
import PaymentDetails from './components/PaymentDetails';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import Towing from './components/Towing';
import FoundGarageRequest from './components/FoundGarageRequest';
import FoundTowRequest from './components/FoundTowRequest';
import Loan from './components/Loan';
import GetLoan from './components/GetLoan';
import Loans from './components/Loans';
import Services from './components/Services';
import ShopItemsByCategory from './components/ShopItemsByCategory';
import MyPolicies from './components/MyPolicies';
import Servicing from './components/Servicing';
import RideForMe from './components/RideForMe';
import Mechanic from './components/Mechanic';
import Breakdown from './components/Breakdown';
import FoundService from './components/FoundService';
import PaymentOptions from './components/PaymentOptions';
import MobileMoney from './components/MobileMoney';
import Savings from './components/Savings';
import LoanApplications from './components/LoanApplications';
import SplashScreen from './components/SplashScreen';
import MyPendingQuotes from './components/MyPendingQuotes';
import More from './components/More';
import FoundServicingRequest from './components/FoundServicingRequest';
import FoundBreakdownRequest from './components/FoundBreakdownRequest';
import ProductDetail from './components/ProductDetail';
import ShoppingCartIcon from './containers/ShoppingCartIcon';
import Cart from './components/Cart';
import TermsOfService from './components/TermsOfService';
import About from './components/About';
import Feedback from './components/Feedback';
import RequestDetail from './components/RequestDetail';
import AdvertisementDetail from './components/AdvertisementDetail';
import Checkout from './components/Checkout';
import GetInsuranceQuotation from './components/GetInsuranceQuotation';
import ApprovedInsurance from './components/ApprovedInsurance';
import InsuranceDetail from './components/InsuranceDetail';
import InsuranceQuotations from './components/InsuranceQuotations';
import AddSaving from './components/AddSaving';
import GarageIntro from './components/GarageIntro';
import VerifyCode from './components/VerifyCode';
import LoanDetails from './components/LoanDetails';

const AppTabNavigator = createBottomTabNavigator(
  {
    Requests: {
      screen: Requests,
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

const SplashStack = createStackNavigator({
  SplashScreen: { screen: SplashScreen},
})

const AuthStack = createStackNavigator({
  Login: { screen: Login},
  SignUp: { screen: SignUp, navigationOptions: { title: 'SignUp' }},
  VerifyCode: { screen: VerifyCode, navigationOptions: { title: 'Verify Account' }},
  GarageIntro: { screen: GarageIntro, navigationOptions: { title: 'Instructions'}}, 
})

const AppStack = createStackNavigator({

  Home: { screen: AppTabNavigator },
  Services: { screen: Services, navigationOptions: { title: 'Services' }},
  Servicing: { screen: Servicing, navigationOptions: { title: 'Schedule Service' }},
  RideForMe: { screen: RideForMe, navigationOptions: { title: 'Ride For Me' }},
  Mechanic: { screen: Mechanic, navigationOptions: { title: 'Mechanic' }},
  Breakdown: { screen: Breakdown, navigationOptions: { title: 'Breakdown' }},
  FoundService: { screen: FoundService, navigationOptions: { title: 'Found Service' }},
  Insurance: { screen: Insurance, navigationOptions: { title: 'Insurance' }},
  BuyInsurance: { screen: BuyInsurance, navigationOptions: { title: 'Buy Insurance' }},
  Policies: { screen: Policies, navigationOptions: { title: 'Policies' }},
  MyQuotes: { screen: MyQuotes, navigationOptions: { title: 'My Quotes' }},
  PaymentOptions: { screen: PaymentOptions, navigationOptions: { title: 'Payment Options' }},
  MobileMoney: { screen: MobileMoney, navigationOptions: { title: 'MobileMoney' }},
  Shop: { screen: Shop, navigationOptions: { title: 'Shop', headerRight:( () => <ShoppingCartIcon />) }},
  Savings: { screen: Savings, navigationOptions: { title: 'Savings' }},
  MyQuoteDetails: { screen: MyQuoteDetails, navigationOptions: { title: 'Quote Details' }},
  Loan: { screen: Loan, navigationOptions: { title: 'Loan' }},
  GetLoan: { screen: GetLoan, navigationOptions: { title: 'Get Loan' }},
  LoanApplications: { screen: LoanApplications, navigationOptions: { title: 'Applications' }},
  MyPolicies: { screen: MyPolicies, navigationOptions: { title: 'My Policies' }},
  MyPendingQuotes: { screen: MyPendingQuotes, navigationOptions: { title: 'Pending Quotes' }},
  ShopItemsByCategory: { screen: ShopItemsByCategory, navigationOptions: { title: 'ShopItemsByCategory' }},
  ShopDetail: { screen: ShopDetail, navigationOptions: { title: 'ShopDetail' }},
  More: { screen: More, navigationOptions: { title: 'More' }}, 
  FoundServicingRequest: { screen: FoundServicingRequest, navigationOptions: { title: 'Found Servicing Request' }}, 
  FoundBreakdownRequest: { screen: FoundBreakdownRequest, navigationOptions: { title: 'Found Breakdown Request' }}, 
  ProductDetail: { screen: ProductDetail, navigationOptions: { title: 'Product Detail', headerRight:( () => <ShoppingCartIcon />) }}, 
  Cart: { screen: Cart, navigationOptions: { title: 'Cart', headerRight:( () => <ShoppingCartIcon />) }}, 
  Wallet: { screen: Wallet, navigationOptions: { title: 'Wallet'}}, 
  About: { screen: About, navigationOptions: { title: 'About'}}, 
  TermsOfService: { screen: TermsOfService, navigationOptions: { title: 'Terms of Service' }}, 
  Feedback: { screen: Feedback, navigationOptions: { title: 'Feedback'}}, 
  RequestDetail: { screen: RequestDetail, navigationOptions: { title: 'Request Detail'}}, 
  AdvertisementDetail: { screen: AdvertisementDetail, navigationOptions: { title: 'Advertisement Detail'}}, 
  Checkout: { screen: Checkout, navigationOptions: { title: 'Checkout'}}, 
  GetInsuranceQuotation: { screen: GetInsuranceQuotation, navigationOptions: { title: 'Get Quotation'}}, 
  Loans: { screen: Loans, navigationOptions: { title: 'Loans'}}, 
  Loan: { screen: Loan, navigationOptions: { title: 'Loan'}}, 
  ApprovedInsurance: { screen: ApprovedInsurance, navigationOptions: { title: 'Approved Insurance'}}, 
  InsuranceDetail: { screen: InsuranceDetail, navigationOptions: { title: 'Insurance Detail'}}, 
  InsuranceQuotations: { screen: InsuranceQuotations, navigationOptions: { title: 'Insurance Quotations'}}, 
  AddSaving: { screen: AddSaving, navigationOptions: { title: 'Add Saving'}}, 
  LoanDetails: { screen: LoanDetails, navigationOptions: { title: 'Loan Details'}}, 

})

export default createAppContainer(
  createSwitchNavigator(
    {
      SplashStack: SplashStack,
      AuthStack: AuthStack,
      AppStack: AppStack,
    }
  )
)