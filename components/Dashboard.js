import React from 'react';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class Dashboard extends React.Component 
{
	static navigationOptions = { header: null };

	render() {
	    return (
	     	
	     	<Container>
	        	<Header>
	        		<Left>
	        			<Button transparent>
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