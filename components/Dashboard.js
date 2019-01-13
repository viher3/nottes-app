import React from 'react';
import { Container, Content, Grid, Col, Header, Left, Body, Right, Button, Icon, Title, Text, Toast, Spinner, List, ListItem } from 'native-base';
import { AsyncStorage, ScrollView, StyleSheet } from "react-native";
import Config from '../constants/Config.js';

const styles = StyleSheet.create({

	total_count: {
		fontSize: 18,
			fontWeight: 'bold',
			marginTop: 10,
			marginLeft: 15
	}

});

export default class Dashboard extends React.Component 
{
	constructor(props)
	{
		super(props);

		this.state = { 
			loading: 'initial',
			data: []
		};
	}

	_loadEntities()
	{
		let userToken = '';

		AsyncStorage.getItem('userToken').then((value) => {
			userToken = value;
		})
		.then(res => {
			
			fetch(Config.api_endpoint + '/notte', 
			{
				headers: {
			    	'Content-Type': 'application/json',
			    	'Authorization' : 'Bearer ' + userToken
			    }
			})
			.then((response) => response.json())
	    	.then((responseJson) => {

	    		this.setState({ 
	    			loading : '',
	    			data: responseJson
	    		});

			}).catch((error) => {

				Toast.show({
		                text: error,
		                buttonText: "X",
		                type: "danger",
		                position: "top"
		            });
		    });
			
		});
	}

	componentDidMount() 
	{
		this._loadEntities();
	}

	render() 
	{
		if(this.state.loading == 'initial')
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
			     	<Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
					  	<Grid style={{alignItems: 'center'}}>
		    				<Col>
			    				<Spinner />
		    				</Col>
		    			</Grid>
		    		</Content>
		    	</Container>
		    );
		}

		if(this.state.loading == '')
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

	    	      	<ScrollView>
		    			<Spinner style={ this.state.loading == 'initial' ? null : { display: "none" } } />

						<Text style={ styles.total_count }>Latest nottes ({this.state.data.total_count} rows)</Text>

		    			<List dataArray={ this.state.data.items } renderRow={(item) => 

		    				<ListItem>
		    					<Text>{item.name}</Text>
		    				</ListItem>

		    			 }>
		    			</List>

	    	      	</ScrollView>

	          	</Container>
	          	
		    );
	  	}
	  }
}