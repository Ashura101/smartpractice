import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Alert,
  TextInput,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import React, {useState} from 'react';
import {CommonTextInput, CommonButton} from '../../../components';
import {auth} from '../../../firebase/firebase.config';
import {emailValidation} from '../../../utils/common';
import {FirebaseLogin} from '../../../utils/authentication';
import Icon from 'react-native-vector-icons/Ionicons';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);

  const handleEmail = text => {
    let mail = text.toLowerCase();
    mail = mail.trim();
    setEmail(mail);
  };

  const handleLogin = () => {
    if (email == 'admin@gmail.com' && password == 'admin@123') {
      navigation.navigate('Admin');
      // navigation.navigate('Admin', {screen: 'Admin'});
    } else if (email == '') {
      Alert.alert('Error', 'Email field cannot be empty');
    } else if (password == '') {
      Alert.alert('Error', 'Password field cannot be empty');
    } else if (!emailValidation(email)) {
      Alert.alert('Error', 'Please enter a valid email');
    } else {
      FirebaseLogin(auth, email, password, navigation);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/background.png')}>
        <KeyboardAvoidingView style={styles.titleKeyAvoidingView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>smartPractice</Text>
          </View>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.detailsKeyAvoidingView}>
          <CommonTextInput
            label="Email"
            placeholder="Enter email"
            value={email}
            autoCaps={'none'}
            onChangeText={text => handleEmail(text)}
          />
          <Text style={styles.passwordTitleText}>Password</Text>
          <View style={styles.passwordBoxView}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter password"
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={seePassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
              <Icon
                name={seePassword ? 'eye-off' : 'eye'}
                size={25}
                style={{paddingRight: 10}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}></View>
          <View style={styles.forgotAndRegisterView}>
            <TouchableOpacity
              style={{padding: 10, paddingLeft: 20}}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{padding: 10, paddingRight: 20}}
              onPress={() => navigation.navigate('Register')}>
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.loginView}>
          <CommonButton
            title="Login"
            onPress={
              () => handleLogin()
              // navigation.reset({index: 1, routes: [{name: 'HomeApp'}]})
            }
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
