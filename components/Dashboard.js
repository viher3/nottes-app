import React from 'react';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class Dashboard extends React.Component 
{
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
          	</Container>
          	
	    );
	  }
}