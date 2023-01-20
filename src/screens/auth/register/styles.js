import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
  stateLabel: {
    color: COLORS.LIGHTGREY,
    fontSize: 20,
    marginTop: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingLeft: 20,
  },
  dropdown: {
    borderColor: COLORS.PRIMARY,
    borderRadius: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
    height: 40,
    paddingHorizontal: 8,
  },

  placeholderStyle: {
    color: COLORS.PLACEHOLDER,
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  titleView: {
    paddingVertical: 20,
    backgroundColor: 'white',
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
  detailsView: {
    paddingVertical: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
  },
  passwordText: {
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
  buttonView: {
    // flex: 0.2,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
  },
});
