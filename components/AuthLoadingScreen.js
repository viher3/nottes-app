import React from 'react';
import { Container, Button, text, ListItem, Text } from "native-base";

export default class AuthLoadingScreen extends React.Component 
{
  constructor() 
  {
    this._bootstrapAsync();
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>

        <Button>
          <Text>Button</Text>
        </Button>

        <ListItem />
      </Container>
    );
  }

}
