import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdminHome, CreateAssignment, AddQuestions} from '../../screens/admin';
const AdStack = createNativeStackNavigator();

function AdminStack() {
  return (
    <AdStack.Navigator>
      <AdStack.Screen
        name="AdminHome"
        component={AdminHome}
        options={{headerShown: false}}
      />
      <AdStack.Screen
        name="CreateAssignment"
        component={CreateAssignment}
        options={{headerShown: false}}
      />
      <AdStack.Screen
        name="AddQuestions"
        component={AddQuestions}
        options={{headerShown: false}}
      />
    </AdStack.Navigator>
  );
}

export default AdminStack;
