import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Container, Button, text, ListItem, Text } from "native-base";
import Expo from "expo";

import Dashboard from './components/Dashboard';
import Login from './components/Login';

const AuthNavigator = createStackNavigator(
{
  	Login: { screen: Login }
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

const AppNavigator = createStackNavigator(
{ 
	Auth: AuthenticationScreen,
	Dashboard: { screen: Dashboard }
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
      return <Expo.AppLoading />;
    }

    return ( <AppNavigator></AppNavigator> );
  }
}