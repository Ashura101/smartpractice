import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../HomeStack';
import {Leaderboard, Result} from '../../screens/home';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Result') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'LeaderBoard') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="LeaderBoard"
        component={Leaderboard}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
