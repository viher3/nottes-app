import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { AsyncStorage } from "react-native";
import Expo from "expo";

export default class Login extends React.Component 
{
	static navigationOptions = { header: null };

	constructor(props)
	{
		super(props);

		this.state = { 
	    	loading: true,
	    	userIsLogged: false
	    };

	    this.checkLogin();
	}

	checkLogin = async () => 
  	{
  		const userToken = await AsyncStorage.getItem('userToken');
	    this.state.userIsLogged = (userToken) ? true : false;

	    // TODO: check JWT expiration ...

	    if( this.state.userIsLogged )
	    {
	    	this.props.navigation.navigate('Dashboard');
	    }

  		this.setState({ loading: false });
  	}

	render() 
	{
		if (this.state.loading) 
	    {
	      return <Expo.AppLoading />;
	    }

	    return (
	      	<Container>
	        	<Header>
	        		<Body>
            			<Title>Login</Title>
        	  		</Body>
    	      	</Header>
    	      	<Content>
    	      		<Button onPress={() => this.checkLogin()}>
            			<Text>Login</Text>
          			</Button>
    	      	</Content>
          	</Container>
	    );
	}

}