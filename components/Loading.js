import React from 'react';
import { Content, Grid, Col, Spinner } from "native-base";

export default class Loading extends React.Component 
{
	render() 
	{
	    return (
	     	<Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
			  	<Grid style={{alignItems: 'center'}}>
    				<Col>
	    				<Spinner />
    				</Col>
    			</Grid>
    		</Content>
	    );
	  }
}