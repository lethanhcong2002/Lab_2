import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/components/Route_Stack';
import DrawerNavigator from './src/components/Routes_Drawer';
import TabNavigator from './src/components/Routes_BottomNavigation';

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
