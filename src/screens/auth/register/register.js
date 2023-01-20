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
import React, {useState, useEffect} from 'react';
import {CommonTextInput, CommonButton} from '../../../components';
import {auth} from '../../../firebase/firebase.config';
import {emailValidation, passwordValidation} from '../../../utils/common';
import {FirebaseRegister} from '../../../utils/authentication';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import COLORS from '../../../constants/colors';
import styles from './styles';

export const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [name, setName] = useState('');

  const [country, setCountry] = useState('');
  const [listCountry, setlistCountry] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const handleEmail = text => {
    let mail = text.toLowerCase();
    mail = mail.trim();
    setEmail(mail);
  };

  const handleRegister = () => {
    if (!emailValidation(email)) {
      Alert.alert('Error', 'Please enter valid email');
    } else if (!passwordValidation(password)) {
      Alert.alert('Error', 'Invalid password');
    } else {
      FirebaseRegister(auth, name, email, password, country, navigation);
    }
  };

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(function (response) {
        setlistCountry([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/background.png')}>
        <KeyboardAvoidingView style={styles.titleView}>
          <Text style={styles.titleText}>Member Registration</Text>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.detailsView}>
          <CommonTextInput
            label={'Name'}
            placeholder="Enter name"
            onChangeText={text => setName(text)}
          />
          <CommonTextInput
            label="Email"
            placeholder="Enter email"
            onChangeText={text => handleEmail(text)}
          />
          <Text style={styles.passwordText}>Password</Text>
          <View style={styles.passwordBoxView}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter password"
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={seePassword}
              autoCaps={false}
            />
            <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
              <Icon
                name={seePassword ? 'eye-off' : 'eye'}
                size={25}
                style={{paddingRight: 10}}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.stateLabel}> Country </Text>

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={listCountry}
            search
            maxHeight={300}
            labelField="name"
            placeholder="Select country"
            searchPlaceholder="Search..."
            value=""
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setCountry(item.name);

              setIsFocus(false);
            }}
          />
        </KeyboardAvoidingView>
        <View style={styles.buttonView}>
          <CommonButton
            title="Register"
            onPress={
              () => handleRegister()
              // navigation.reset({index: 1, routes: [{name: 'HomeApp'}]})
            }
          />
          <TouchableOpacity
            style={{padding: 5, alignSelf: 'center', paddingBottom: 10}}
            onPress={() => navigation.navigate('Login')}>
            <Text>Already a member?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
