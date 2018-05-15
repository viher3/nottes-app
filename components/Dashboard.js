import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Dashboard extends React.Component 
{
	onPressLearnMore()
	{
		Alert.alert('Alerta', 'OK');
	}

	render() {
	    return (
	     	
	     	<Container>
	        	<Header>
	        	  	<Body>
            			<Title>DASHBOARD</Title>
        	  		</Body>
    	      	</Header>
          	</Container>
          	
	    );
	  }
}