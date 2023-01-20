import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Assignment} from '../../screens/home';

const AssignStack = createNativeStackNavigator();

function AssignmentStack() {
  return (
    <AssignStack.Navigator>
      <AssignStack.Screen
        name="Assignment"
        component={Assignment}
        options={{headerShown: false}}
      />
    </AssignStack.Navigator>
  );
}

export default AssignmentStack;
