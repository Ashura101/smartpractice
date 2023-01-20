import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

export default styles = StyleSheet.create({
  createAssignment: {
    backgroundColor: '#fcba03',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingVertical: 5,
  },
  createAssignmentText: {
    fontSize: 25,
    color: COLORS.WHITE,
  },
  liveOverAssignmentView: {
    alignItems: 'center',
  },
  liveOverAssignmentText: {
    fontSize: 30,
  },
  dueDatePendingView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  titleDurationView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  liveAssignmentView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  overAssignmentView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: COLORS.GRAY,
    elevation: 5,
  },
});
