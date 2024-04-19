/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import User from '../screens/User';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utility/color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Options from '../screens/Options';
import {useNavigation} from '@react-navigation/native';

const getTabBarIcon =
  icon =>
  ({tintColor}) =>
    <Icon name={icon} size={26} style={{color: tintColor}} />;

const Stack = createNativeStackNavigator();
const ContactsScreens = ({navigation}) => {
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
              backgroundColor: colors.blue,
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};

const FavoritesScreens = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{title: 'Favorites'}}
        navigation={navigation}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

const UserScreens = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerTitle: 'Me',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerRight: () => (
            <Icon
              name="settings"
              size={24}
              style={{color: 'white', marginRight: 10}}
              onPress={() => navigation.navigate('Options')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        options={{title: 'Options'}}
      />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="ContactsScreens"
      barStyle={{backgroundColor: colors.blue}}
      labeled={false}
      activeTintColor={colors.greyLight}
      inactiveColor={colors.greyDark}>
      <Tab.Screen
        name="ContactsScreens"
        component={ContactsScreens}
        options={{
          tabBarIcon: getTabBarIcon('list'),
        }}
        navigation={navigation}
      />
      <Tab.Screen
        name="FavoritesScreens"
        component={FavoritesScreens}
        options={{
          tabBarIcon: getTabBarIcon('star'),
        }}
        navigation={navigation}
      />
      <Tab.Screen
        name="UserScreens"
        component={UserScreens}
        options={{
          tabBarIcon: getTabBarIcon('person'),
        }}
        navigation={navigation}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
