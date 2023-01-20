import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  titleKeyAvoidingView: {
    paddingVertical: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    // marginVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
  },
  titleView: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  detailsKeyAvoidingView: {
    paddingVertical: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
  },
  passwordTitleText: {
    paddingLeft: 20,
    paddingTop: 15,
    fontSize: 18,
  },
  passwordBoxView: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 40,
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  forgotAndRegisterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginView: {
    paddingBottom: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
  },
});
