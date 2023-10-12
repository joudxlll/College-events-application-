import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homepage';
import ProfilePage from './screens/profilepage';
import MyEventPage from './screens/myeventpage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';


function MyEventStackPage() {
  return (
    <MyEventStack.Navigator>
      <MyEventStack.Screen name="My Events" component={MyEventPage} />
    </MyEventStack.Navigator>
  );
}

function ProfileStackPage() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile Page" component={ProfilePage} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MyEventStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();


function HomeStackPage() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}


export default function App() {
  return (
<NavigationContainer>

<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'profile') {
        iconName = 'user';

      } else if (route.name === 'Home') {
        iconName = 'home';
      } else if (route.name === 'My Events') {
        iconName = 'calendar'; // Use the 'calendar' icon for My Events tab
      }

      return <AntDesign name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false
  })}
>       
        <Tab.Screen name="profile" component={ProfileStackPage} />
        <Tab.Screen name="Home" component={HomeStackPage} />
        <Tab.Screen name="My Events" component={MyEventStackPage} />
      </Tab.Navigator>
      
</NavigationContainer>
  );
}
