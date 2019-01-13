import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Root, Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, Form, Item, Input, Toast } from 'native-base';
import { AsyncStorage, Image, StyleSheet, View } from "react-native";
import Loading from './Loading';
import Config from '../constants/Config.js';

const styles = StyleSheet.create({
  stretch: {
    width: 144,
    height: 144,
  },
  nottesText: {
  	fontSize: 26,
  	fontWeight: 'bold',
  	marginTop: 10
  },
  mainView: {
  	justifyContent: 'center', 
  	alignItems: 'center', 
  	margin: 30
  },
  container: {
  	backgroundColor: '#FFF'
  }
});

export default class Login extends React.Component 
{
	constructor(props)
	{
		super(props);

		this.state = { 
	    	loading: true,
	    	userIsLogged: false
	    };

	    this.userToken = null;
	    this.username = '';
	    this.password = '';

	    this._checkLogin();
	}

	/**
	 * Check if user token exists
	 */
	_checkLogin = async () => 
  	{
  		// check if user token exists
  		this.userToken = await AsyncStorage.getItem('userToken');
	    this.setState( { userIsLogged :(this.userToken) ? true : false } );

	    if( this.state.userIsLogged )
	    {
	    	this.props.navigation.navigate('Dashboard');
	    }

  		this.setState({ loading: false });
  	}

  	/**
  	 * Store user token in async storage
  	 */
  	_storeUserToken = async () => 
  	{
	  try 
	  {
	    await AsyncStorage.setItem('userToken', this.userToken);
	  }
	  catch (error) 
	  {
	    // Error saving data
	    console.log(error);
	  }
	}

  	/**
  	 * Make the login API request to the backend server
  	 */
  	checkLoginAction()
  	{
  		if(this.username == "" || this.password == "")
  		{
  			Toast.show({
	                text: "Enter your credentials!",
	                buttonText: "X",
	                type: "warning",
	                position: "top"
	            });
  			return;
  		}

  		// Login request
  		fetch(Config.api_endpoint + '/login_check', 
  		{
			method: 'POST',
			headers: {
		    	'Content-Type': 'application/json'
		    },
			body: JSON.stringify({
				"_username" : this.username,
				"_password" : this.password
			})
		})
		.then((response) => response.json())
    	.then((responseJson) => {

    		if(responseJson.code && responseJson.code != 200)
    		{
    			Toast.show({
	                text: "Wrong password!",
	                buttonText: "X",
	                type: "danger",
	                position: "top"
	            });

	            return;
    		}

    		this.userToken = responseJson.token;

    		// Store user token in AsyncStorage
    		this._storeUserToken();

  			// Redirect to dashboard
  			this.props.navigation.navigate('Dashboard');

		}).catch((error) => {

			Toast.show({
	                text: error,
	                buttonText: "X",
	                type: "danger",
	                position: "top"
	            });
	    });
  	}

	render() 
	{
		if (this.state.loading) 
	    {
	      return <Loading/>;
	    }

	    return (
	    	<Root>
		      	<Container style={ styles.container }>
	    	      	<Content >

	    	      		<View style={ styles.mainView }>
	    	      			<Image 
	    	      				style={styles.stretch}
	    	      				source={{uri: 'https://www.reaccionestudio.com/images/reaccion_estudio_rocket_logo.png'}} 
	    	      			/>
	    	      			<Text style={styles.nottesText}>Nottes</Text>
	    	      		</View>

	    	      		<Form>
		    	      		<Item>
				              <Input onChangeText={(usr) => this.username = usr } placeholder="Username" />
				            </Item>
				            <Item>
				              <Input secureTextEntry={true} onChangeText={(pwd) => this.password = pwd } placeholder="Password" />
				            </Item>
		    	      		<Button full onPress={() => this.checkLoginAction() } style={{ marginTop: 20 }}>
		            			<Text>Login</Text>
		          			</Button>
	          			</Form>

	    	      	</Content>
	          	</Container>
          	</Root>
	    );
	}

}