import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer/drawerNavigator';
import AuthStackNavigator from '../authStack';
import AdminStack from '../adminStack';
import AssignmentStack from '../assignmentStack';

const AppStack = createNativeStackNavigator();

const Root = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="AuthStack"
        component={AuthStackNavigator}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="HomeApp"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Admin"
        component={AdminStack}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="AssignmentStack"
        component={AssignmentStack}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};
export default Root;
