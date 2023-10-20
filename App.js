import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/homepage';
import ProfilePage from './screens/profilepage';
import MyEventPage from './screens/myeventpage';
import TemplatePage from './screens/templatepage';
import JoinUsPage from './screens/joinus';
import AboutUsPage from './screens/aboutus';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import ResetPasswordScreen from './screens/ResetPasswordScreen';

import { AntDesign } from '@expo/vector-icons';
import EventDescription from './screens/EventDescription';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = 'user';

          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'My Events') {
            iconName = 'calendar'; // Use the 'calendar' icon for My Events tab
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#E5D283',
        tabBarInactiveTintColor: '#213555',
        headerShown: true
      })}
    >
      <Tab.Screen name="Profile" component={ProfilePage} options={{tabBarStyle: { backgroundColor: '#4F709C' } }}/>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarStyle: { backgroundColor: '#4F709C' } }}/>
      <Tab.Screen name="My Events" component={MyEventPage} options={{ tabBarBadge: 1, tabBarStyle: { backgroundColor: '#4F709C' }, headerShown: false }} />
    </Tab.Navigator>
  );
}

function MyDrawer(){
  return (
    // <Drawer.Navigator  screenOptions={ {drawerStyle:{ backgroundColor: '#4F709C'}}}>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs}  />
      <Drawer.Screen name="Join Us" component={JoinUsPage} />
      <Drawer.Screen name="About Us" component={AboutUsPage} />
      {/* <Drawer.Screen name="Sign Up" component={SignUp} />
      <Drawer.Screen name="Log In" component={LogIn} /> */}

    </Drawer.Navigator>
  )
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="Template" component={TemplatePage} options={{ headerShown: true }} />
        <Stack.Screen name="EventDescription" component={EventDescription} options={{ headerShown: true }} />
        <Stack.Screen name="About Us" component={AboutUsPage} options={{ headerShown: true }} />
        <Stack.Screen name="Join Us" component={JoinUsPage} options={{ headerShown: true }} />
        <Stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: true }} />
        <Stack.Screen name="Log In" component={LogIn} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
