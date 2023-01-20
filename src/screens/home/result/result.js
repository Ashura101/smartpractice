import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {CustomHeader} from '../../../components';

export const Result = ({navigation}) => {
  return (
    <SafeAreaView>
      <CustomHeader title="Result" isHome={true} navigation={navigation} />
      <Text>Result</Text>
    </SafeAreaView>
  );
};
