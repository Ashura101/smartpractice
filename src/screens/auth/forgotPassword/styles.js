import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonView: {
    // flex: 0.2,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
  },
  titleView: {
    paddingVertical: 20,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    // marginVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  detailsKeyAvoidingView: {
    paddingVertical: 20,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
  },
  goToLogin: {
    padding: 5,
    alignSelf: 'center',
    paddingBottom: 10,
  },
});
