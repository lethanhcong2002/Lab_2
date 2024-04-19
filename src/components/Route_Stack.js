import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import color from '../utility/color';

const Stack = createStackNavigator();
const StackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{title: 'Contacts'}}
        navigation={navigation}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({route}) => {
          const {contact} = route.params;
          const {name} = contact;
          return {
            title: name.split(' ')[0],
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: color.blue,
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
