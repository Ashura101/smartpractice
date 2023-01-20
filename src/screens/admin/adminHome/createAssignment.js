import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CommonButton, CommonTextInput, CustomHeader} from '../../../components';
import uuid from 'react-native-uuid';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {MakeAssignment} from '../../../utils/database';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../constants/colors';
import styles from './createAssignStyle';

export const CreateAssignment = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [timeLimit, setTimeLimit] = useState('');

  const [date, setDate] = useState('');

  const [dueDate, setDueDate] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };
  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };
  const handleConfirm = date => {
    setDueDate(getDate(date));
    hideDatePicker();
  };
  useEffect(() => {
    setDueDate(getDate(date));
  }, [date]);
  const getDate = date => {
    let tempDate = date.toString().split(' ');
    return date !== '' ? `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}` : '';
  };

  const handleSave = async () => {
    const assignmentId = uuid.v4();
    await MakeAssignment(assignmentId, title, timeLimit, dueDate);
    navigation.navigate('AddQuestions', {
      assignmentId: assignmentId,
      assignmentTitle: title,
      asignmentTimeLimit: timeLimit,
      assignmentDueDate: dueDate,
    });

    setTitle('');
    setTimeLimit('');
    setDueDate('');
  };

  return (
    <SafeAreaView>
      <CustomHeader title="Create Assignment" navigation={navigation} />
      <CommonTextInput
        label="Title"
        placeholder="Enter assignment title"
        onChangeText={text => setTitle(text)}
      />
      <CommonTextInput
        label="Time limit(mins)"
        keyboardType={'numeric'}
        placeholder="Enter time limit"
        onChangeText={text => setTimeLimit(text)}
      />
      {/* <CommonTextInput
        label="Due date"
        placeholder="Enter assignment title"
        onChangeText={text => setDueDate(text)}
      /> */}

      <View style={styles.dateView}>
        <Text style={styles.labelstyle}>Due date </Text>

        <TouchableOpacity style={styles.calendarView} onPress={showDatePicker}>
          <View style={styles.calendarInput}>
            <Text style={styles.textStyle}>{dueDate}</Text>

            <Icon name="calendar-outline" size={20} color={'grey'} />
          </View>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            display={'inline'}
          />
        </TouchableOpacity>
      </View>
      <CommonButton title="Save" onPress={() => handleSave()} />
    </SafeAreaView>
  );
};
