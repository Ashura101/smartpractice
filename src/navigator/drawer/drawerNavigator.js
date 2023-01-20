import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from '../tab';
import {SettingScreen} from '../../screens/home';
import CustomDrawerContent from './customDrawer';

const Draw = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Draw.Navigator
      initialRouteName="Home"
      drawerContent={props => CustomDrawerContent(props)}>
      <Draw.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Draw.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Draw.Navigator>
  );
}

export default DrawerNavigator;
