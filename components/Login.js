import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, Form, Item, Input } from 'native-base';
import { AsyncStorage, Image, StyleSheet, View } from "react-native";
import Loading from './Loading';

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

	    this._checkLogin();
	}

	_checkLogin = async () => 
  	{
  		const userToken = await AsyncStorage.getItem('userToken');
	    this.setState( { userIsLogged :(userToken) ? true : false } );

	    // TODO: check JWT expiration ...
	    //this.state.userIsLogged = true;

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
	      	<Container style={ styles.container }>
	        	<Header>
	        		<Body>
            			<Title>Login</Title>
        	  		</Body>
    	      	</Header>
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
			              <Input placeholder="Username" />
			            </Item>
			            <Item last>
			              <Input placeholder="Password" />
			            </Item>
	    	      		<Button full onPress={() => this.checkLoginAction()} style={{ marginTop: 20 }}>
	            			<Text>Login</Text>
	          			</Button>
          			</Form>
    	      	</Content>
          	</Container>
	    );
	}

}