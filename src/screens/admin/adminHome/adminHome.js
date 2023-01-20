import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GetAllAssignments} from '../../../utils/database';
import {CustomHeader} from '../../../components';
import styles from './homeStyle';
import COLORS from '../../../constants/colors';

export const AdminHome = ({navigation}) => {
  let date = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let currentDate = date + '/' + month + 1 + '/' + year;

  const [allAssignments, setAllAssignments] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getAssignments = async () => {
    setRefreshing(true);
    const assignments = await GetAllAssignments();

    let temp = [];
    await assignments.docs.forEach(async assignment => {
      await temp.push({id: assignment.id, ...assignment.data()});
    });
    await setAllAssignments([...temp]);

    setRefreshing(false);
  };

  useEffect(() => {
    getAssignments();
  }, []);

  return (
    <SafeAreaView>
      <CustomHeader
        title="Welcome Admin"
        isHome={false}
        navigation={navigation}
      />
      <TouchableOpacity
        style={styles.createAssignment}
        onPress={() => navigation.navigate('CreateAssignment')}>
        <Text style={styles.createAssignmentText}>Create a new assignment</Text>
      </TouchableOpacity>
      <View style={styles.liveOverAssignmentView}>
        <Text style={styles.liveOverAssignmentText}>Live Assignments</Text>
      </View>
      <FlatList
        data={allAssignments}
        onRefresh={getAssignments}
        refreshing={refreshing}
        renderItem={({item}) => {
          if (currentDate < item.assignmentDueDate) {
            return (
              // <TouchableOpacity onPress={() => handleClick(item)}>
              <View style={styles.liveAssignmentView}>
                <View style={{flex: 1, margin: 10}}>
                  <View style={styles.titleDurationView}>
                    <Text>{item.title}</Text>
                    <Text>Duration: {item.assignmentTimeLimit}m</Text>
                  </View>
                  <View style={styles.dueDatePendingView}>
                    <Text>Due: {item.assignmentDueDate}</Text>
                    <Text>Status: Pending</Text>
                  </View>
                </View>
              </View>
              // </TouchableOpacity>
            );
          }
        }}
        keyExtractor={item => item.id}
      />
      <View style={styles.liveOverAssignmentView}>
        <Text style={styles.liveOverAssignmentText}>Over Assignments</Text>
      </View>
      <FlatList
        data={allAssignments}
        renderItem={({item}) => {
          if (currentDate > item.assignmentDueDate) {
            return (
              <View style={styles.overAssignmentView}>
                <View style={{flex: 1, margin: 10}}>
                  <View style={styles.titleDurationView}>
                    <Text>{item.title}</Text>
                    <Text>Duration: {item.assignmentTimeLimit}m</Text>
                  </View>
                  <View style={styles.dueDatePendingView}>
                    <Text>Due: {item.assignmentDueDate}</Text>
                    <Text>Status: Pending</Text>
                  </View>
                </View>
              </View>
            );
          }
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
