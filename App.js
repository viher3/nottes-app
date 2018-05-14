import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Container, Button, text, ListItem, Text } from "native-base";
import Expo from "expo";

import Dashboard from './components/Dashboard';
import Login from './components/Login';

const AppStack = createStackNavigator({ Dashboard: Dashboard });
const AuthStack = createStackNavigator({ Login: {screen: Login } });

export default class App extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => 
  {
  	// https://facebook.github.io/react-native/docs/asyncstorage.html
  	try 
  	{
    	const userToken = await AsyncStorage.getItem('userToken');
    	console.log(userToken);
	}
	catch(error)
	{
		console.log(error);
	}

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  async componentWillMount() 
  {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) 
    {
      return <Expo.AppLoading />;
    }
    return (
      <Container>

        <Button>
          <Text>Button</Text>
        </Button>

        <ListItem />
      </Container>
    );

  }
}