import React from 'react';
import { AsyncStorage, View } from "react-native";

export default class Logout extends React.Component 
{
	constructor(props)
	{
		super(props);
		this.logout();
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
			<View></View>
		);
	}
}