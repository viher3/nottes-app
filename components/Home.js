import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

export default class Home extends React.Component 
{
	constructor()
	{
		super();
		this.state = { isLoggedIn: false };
	}

	checkUserIsLogged()
	{
		
	}

	render() 
	{
		const isLoggedIn = this.state.isLoggedIn;

		if(isLoggedIn)
		{
	    	return (
	    		<Dasboard /> 
	    	);
		}
		else
		{
			return (
	    		<Login /> 
	    	);
		}
	}
}