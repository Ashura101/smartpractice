import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

export default styles = StyleSheet.create({
  assignmentView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    elevation: 5,
  },
  titleLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  dueDateLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  missedAssignView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    elevation: 5,
  },
});
