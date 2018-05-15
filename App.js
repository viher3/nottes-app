import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Expo from "expo";

import Loading from './components/Loading';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Page from './components/Page';

const AuthNavigator = createStackNavigator(
{
  	Login: { screen: Login }
},
{
  headerMode: 'none'
});

class AuthenticationScreen extends React.Component 
{
  static router = AuthNavigator.router;
  static navigationOptions = { header: null };

  render()
  {
    return (
      <AuthNavigator navigation={this.props.navigation} />
    );
  }
}

const AppNavigator = createDrawerNavigator(
{ 
	Auth: { screen: AuthenticationScreen, navigationOptions: { drawerLabel: () => null } },
	Dashboard: { screen: Dashboard },
	Page: { screen: Page }
},
{
  headerMode: 'none'
});

export default class App extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = { 
    	loading: true
    };
  }

  async componentWillMount() 
  {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });

    this.setState({ loading: false });
  }

  render() 
  {
    if (this.state.loading) 
    {
      return <Loading/>;
    }

    return ( <AppNavigator></AppNavigator> );
  }
}