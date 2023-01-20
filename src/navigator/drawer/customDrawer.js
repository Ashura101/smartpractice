import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fcf6d7'}}>
      <View style={{alignItems: 'center'}}>
        <Icon name="person-circle" size={150} />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      {/* <View style={{flex: 1, height: 1, backgroundColor: 'black'}} /> */}
      <ScrollView style={{marginLeft: 15}}>
        <TouchableOpacity
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}
          onPress={() => props.navigation.navigate('Home')}>
          <Icon name="home" size={20} />
          <Text style={{fontSize: 20, paddingLeft: 15}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}
          onPress={() => props.navigation.navigate('SettingScreen')}>
          <Icon name="settings" size={20} />
          <Text style={{fontSize: 20, paddingLeft: 15}}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}
          onPress={() =>
            props.navigation.reset({index: 1, routes: [{name: 'AuthStack'}]})
          }>
          <Icon name="log-out" size={20} />
          <Text style={{fontSize: 20, paddingLeft: 15}}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
