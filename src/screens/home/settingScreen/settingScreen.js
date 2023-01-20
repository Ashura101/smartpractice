import {SafeAreaView, Button} from 'react-native';
import React from 'react';
import {CustomHeader} from '../../../components';

export const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <CustomHeader title="Settings" navigation={navigation} />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </SafeAreaView>
  );
};
