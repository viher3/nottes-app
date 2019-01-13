import React from 'react';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { AsyncStorage } from "react-native";

export default class Dashboard extends React.Component 
{
	constructor(props)
	{
		super(props);
	}

	logout = async () => 
	{
		try 
		{
			await AsyncStorage.removeItem('userToken');

			this.props.navigation.navigate('Login');

			console.log("logout click");
		}
		catch (error) 
		{
			// Error saving data
		    console.log(error);
		}
	}

	render() 
	{
	    return (
	     	
	     	<Container>
	        	<Header>
	        		<Left>
	        			<Button transparent onPress={() => this.props.navigation.toggleDrawer() }>
			              <Icon name='menu' />
			            </Button>
	        		</Left>
	        	  	<Body>
            			<Title>DASHBOARD</Title>
        	  		</Body>
        	  		<Right />
    	      	</Header>

    			<Button full onPress={() => this.logout()} style={{ marginTop: 50 }}>
        			<Text>Logout</Text>
      			</Button>

          	</Container>
          	
	    );
	  }
}