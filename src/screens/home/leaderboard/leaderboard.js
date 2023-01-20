import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {CustomHeader} from '../../../components';

export const Leaderboard = ({navigation}) => {
  return (
    <SafeAreaView>
      <CustomHeader title="LeaderBoard" isHome={true} navigation={navigation} />
      <Text>LeaderBoard</Text>
    </SafeAreaView>
  );
};
