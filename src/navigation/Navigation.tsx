import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChartSimple,
  faGear,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import BrowseScreen from '../screens/Browse';
import SettingsScreen from '../screens/Settings/';

// Define types for the stack navigators
type HomeStackParamList = {
  Home: undefined;
};

type BrowseStackParamList = {
  Browse: undefined;
};

type SettingsStackParamList = {
  Settings: undefined;
};

// Define types for bottom tab navigator
type BottomTabParamList = {
  HomeStack: undefined;
  BrowseStack: undefined;
  SettingsStack: undefined;
};

// Create navigators
const HStack = createNativeStackNavigator<HomeStackParamList>();
const TLStack = createNativeStackNavigator<BrowseStackParamList>();
const STStack = createNativeStackNavigator<SettingsStackParamList>();

const Tab = createBottomTabNavigator<BottomTabParamList>();

const screenOptions = ({
  route,
}: {
  route: { name: keyof BottomTabParamList };
}) => ({
  tabBarIcon: ({ color }: { color: string }) => {
    let icon;
    if (route.name === 'BrowseStack') {
      icon = faChartSimple;
    } else if (route.name === 'SettingsStack') {
      icon = faGear;
    } else {
      icon = faHome;
    }
    return <FontAwesomeIcon icon={icon} color={color} />;
  },
  tabBarActiveTintColor: '#FF4545',
  tabBarInactiveTintColor: '#7c8283',
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#1d1f27',
    borderTopWidth: 0,
  },
});

const HomeStack = () => {
  return (
    <HStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#FF4545',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HStack.Screen name="Home" component={Home} />
    </HStack.Navigator>
  );
};

const BrowseStack = () => {
  return (
    <TLStack.Navigator>
      <TLStack.Screen name="Browse" component={BrowseScreen} />
    </TLStack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <STStack.Navigator>
      <STStack.Screen name="Settings" component={SettingsScreen} />
    </STStack.Navigator>
  );
};

// Main Navigation component
const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name="BrowseStack"
          component={BrowseStack}
          options={{ title: 'Browse' }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
