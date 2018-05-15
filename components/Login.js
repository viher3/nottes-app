import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { AsyncStorage } from "react-native";
import Loading from './Loading';

export default class Login extends React.Component 
{
	constructor(props)
	{
		super(props);

		this.state = { 
	    	loading: true,
	    	userIsLogged: false
	    };

	    this._checkLogin();
	}

	_checkLogin = async () => 
  	{
  		const userToken = await AsyncStorage.getItem('userToken');
	    this.state.userIsLogged = (userToken) ? true : false;

	    // TODO: check JWT expiration ...
	    this.state.userIsLogged = true;

	    if( this.state.userIsLogged )
	    {
	    	this.props.navigation.navigate('Dashboard');
	    }

  		this.setState({ loading: false });
  	}

  	checkLoginAction()
  	{
  		this.props.navigation.navigate('Dashboard');
  	}

	render() 
	{
		if (this.state.loading) 
	    {
	      return <Loading/>;
	    }

	    return (
	      	<Container>
	        	<Header>
	        		<Body>
            			<Title>Login</Title>
        	  		</Body>
    	      	</Header>
    	      	<Content>
    	      		<Button onPress={() => this.checkLoginAction()}>
            			<Text>Login</Text>
          			</Button>
    	      	</Content>
          	</Container>
	    );
	}

}