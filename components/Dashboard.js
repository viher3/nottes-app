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
	      <View>
	        <Text>Dashboard Component</Text>
	        <Button
	         onPress={this.onPressLearnMore}
	         title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button" />
	      </View>
	    );
	  }
}