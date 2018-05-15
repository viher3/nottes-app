import React from 'react';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class Page extends React.Component 
{
	static navigationOptions = { header: null };

	render() {
	    return (
	     	
	     	<Container>
	        	<Header>
	        		<Left>
	        			<Button transparent onPress={() => this.props.navigation.toggleDrawer() }>
			              <Icon name='menu' />
			            </Button>
	        		</Left>
	        	  	<Body>
            			<Title>PAGE TEST</Title>
        	  		</Body>
    	      	</Header>
          	</Container>
          	
	    );
	  }
}