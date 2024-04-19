/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import User from '../screens/User';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utility/color';
import Options from '../screens/Options';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import {useNavigation} from '@react-navigation/native';

const getDrawerItemIcon =
  icon =>
  ({tintColor}) =>
    <Icon name={icon} size={22} style={{color: tintColor}} />;

const Stack = createNativeStackNavigator();

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

const ContactsScreens = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{headerShown: false}}>
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

const FavoritesScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{title: 'Favorites'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="ContactsScreens">
      <Drawer.Screen
        name="ContactsScreens"
        component={ContactsScreens}
        options={{
          drawerIcon: getDrawerItemIcon('list'),
        }}
      />
      <Drawer.Screen
        name="FavoritesScreens"
        component={FavoritesScreens}
        options={{
          drawerIcon: getDrawerItemIcon('star'),
        }}
      />
      <Drawer.Screen
        name="UserScreens"
        component={UserScreens}
        options={{
          drawerIcon: getDrawerItemIcon('person'),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
