import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Assignment} from '../../screens/home';
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
