import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {AntDesign} from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

export const CustomHeader = ({
  title,
  isAssignmentScreen,
  isHome,
  navigation,
  isAdmin,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.inHeader}>
        {!isAssignmentScreen ? (
          isHome ? (
            <Icon
              name="menu"
              style={styles.menuIcon}
              size={45}
              onPress={() => navigation.openDrawer()}
            />
          ) : (
            <Icon
              name="chevron-back-outline"
              style={styles.menuIcon}
              size={45}
              onPress={() => navigation.goBack()}
            />
          )
        ) : null}
      </View>
      <View style={styles.midHeader}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.inHeader}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  inHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  midHeader: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  menuIcon: {
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // left: 5,
    color: 'black',
  },
});
