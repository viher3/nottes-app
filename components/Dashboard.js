import React from 'react';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { AsyncStorage } from "react-native";

export default class Dashboard extends React.Component 
{
	constructor(props)
	{
		super(props);
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
            			<Title>Dashboard</Title>
        	  		</Body>
        	  		<Right />
    	      	</Header>

          	</Container>
          	
	    );
	  }
}