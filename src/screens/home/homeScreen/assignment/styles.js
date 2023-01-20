import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../../constants/colors';

const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  smartIcon: {
    height: 50,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  assignmentNameText: {
    alignSelf: 'center',
    color: COLORS.BLACK,
    fontSize: 22,
  },
  timerView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  timerPressable: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 5,
    backgroundColor: COLORS.YELLOW,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  time: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  questionBox: {
    marginTop: 15,
    backgroundColor: COLORS.GREY,
    padding: 10,
    borderRadius: 20,
    height: height,
    width: width,
    justifyContent: 'flex-start',
  },
  buttonView: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 20,
  },
  previousTouchable: {
    flex: 0.5,
    backgroundColor: COLORS.SUCCESS,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  previousText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: COLORS.BLACK,
  },
  nextTouchable: {
    flex: 0.5,
    backgroundColor: COLORS.SUCCESS,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  nextText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: COLORS.BLACK,
  },
  submitTouchable: {
    flex: 0.5,
    backgroundColor: COLORS.SUCCESS,
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: COLORS.BLACK,
  },
});
