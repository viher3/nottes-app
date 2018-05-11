import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';

import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = createStackNavigator({
    Dashboard: { screen: Dashboard },
    Login: {screen: Login }
},
{
    initialRouteName: 'Dashboard',
    headerMode: 'none'
});

const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action;
  return (
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) ? null : getStateForAction(action, state);
};

App.router.getStateForAction = navigateOnce(App.router.getStateForAction);

export default App;