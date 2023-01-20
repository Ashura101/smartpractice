import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, ForgotPassword, RegisterScreen} from '../../screens/auth';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
export default AuthStackNavigator;
