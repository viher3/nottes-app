import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Container, Button, text, ListItem, Text } from "native-base";
import { AsyncStorage } from "react-native";
import Expo from "expo";

import Dashboard from './components/Dashboard';
import Login from './components/Login';

const AppStack = createStackNavigator({ Dashboard: Dashboard });
const AuthStack = createStackNavigator({ Login: {screen: Login } });

export default class App extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = { 
    	loading: true,
    	userIsLogged: false
    };
  }

  _bootstrapAsync = async () => 
  {
    const userToken = await AsyncStorage.getItem('userToken');
    this.state.userIsLogged = (userToken) ? true : false;

    this.setState({ loading: false });
  };

  async componentWillMount() 
  {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });

   	this._bootstrapAsync();
  }

  render() 
  {
    if (this.state.loading) 
    {
      return <Expo.AppLoading />;
    }

    if( ! this.state.userIsLogged )
    {
    	return ( <Login></Login> );
    }
    else
    {
    	return ( <Dashboard></Dashboard> );
    }
  }
}