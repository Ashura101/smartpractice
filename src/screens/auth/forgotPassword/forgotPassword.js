import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {CommonTextInput, CommonButton} from '../../../components';
import {auth} from '../../../firebase/firebase.config';
import {emailValidation} from '../../../utils/common';
import {FirebaseResetPassword} from '../../../utils/authentication';
import GLOBALS from '../../../constants';
import styles from './styles';
const {COLORS} = GLOBALS;

export const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleEmail = text => {
    let mail = text.toLowerCase();
    mail = mail.trim();
    setEmail(mail);
  };

  const onPressReset = () => {
    if (!emailValidation(email)) {
      Alert.alert('Error', 'Please enter valid email');
    } else {
      FirebaseResetPassword(auth, email, navigation);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/background.png')}>
        <KeyboardAvoidingView style={styles.titleView}>
          <Text style={styles.titleText}>Forgot your password?</Text>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.detailsKeyAvoidingView}>
          <CommonTextInput
            label="Reset with email"
            placeholder="Enter your email"
            onChangeText={text => handleEmail(text)}
          />
        </KeyboardAvoidingView>
        <View style={styles.buttonView}>
          <CommonButton
            title="Reset"
            onPress={
              () => onPressReset()
              // navigation.reset({index: 1, routes: [{name: 'HomeApp'}]})
            }
          />
          <TouchableOpacity
            style={styles.goToLogin}
            onPress={() => navigation.navigate('Login')}>
            <Text>Go to login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

// export default RegisterScreen;
