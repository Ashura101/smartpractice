import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomHeader} from '../../../components';
import {GetAllAssignments} from '../../../utils/database';
import {
  GetAssignmentById,
  GetQuestionsByAssignmentId,
} from '../../../utils/database';
import COLORS from '../../../constants/colors';
import styles from './homeStyle';

export const Home = ({navigation}) => {
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

  function handleClick(item) {
    // navigation.navigate('Assignment', {item: item});
    Alert.alert(
      'Hey!',
      'Are you sure you want to start the assignment? \n You will not be able to back out',
      [
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate('AssignmentStack', {
              screen: 'Assignment',
              params: {
                item: item,
              },
            });
          },
        },
        {
          text: 'No',
        },
      ],
    );
  }

  return (
    <SafeAreaView>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <FlatList
        data={allAssignments}
        onRefresh={getAssignments}
        refreshing={refreshing}
        renderItem={({item}) => {
          if (!item.completed && currentDate < item.assignmentDueDate) {
            return (
              <TouchableOpacity onPress={() => handleClick(item)}>
                <View style={styles.assignmentView}>
                  <View style={{flex: 1, margin: 10}}>
                    <View style={styles.titleLine}>
                      <Text>{item.title}</Text>
                      <Text>Duration: {item.assignmentTimeLimit}</Text>
                    </View>
                    <View style={styles.dueDateLine}>
                      <Text>Due: {item.assignmentDueDate}</Text>
                      <Text>Status: Pending</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          } else if (currentDate > item.assignmentDueDate) {
            return (
              <View style={styles.missedAssignView}>
                <View style={{flex: 1, margin: 10}}>
                  <View style={styles.titleLine}>
                    <Text style={{textDecorationLine: 'line-through'}}>
                      {item.title}
                    </Text>
                    <Text>Duration: {item.assignmentTimeLimit}</Text>
                  </View>
                  <View style={styles.dueDateLine}>
                    <Text>Due: {item.assignmentDueDate}</Text>
                    <Text>Status: Missed</Text>
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
