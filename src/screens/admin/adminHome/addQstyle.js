import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  addQuestionsText: {
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.BLACK,
  },
  forTheAssignmentText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  assignmentName: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
  },
});
