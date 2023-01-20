import {
  View,
  Text,
  KeyboardAvoidingView,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import GLOBALS from '../../../constants';
import uuid from 'react-native-uuid';
import {MakeQuestion} from '../../../utils/database';
import {CommonButton, CommonTextInput} from '../../../components';
const {COLORS} = GLOBALS;
import styles from './addQstyle';

export const AddQuestions = ({navigation, route}) => {
  const [currentAssignmentId, setCurrentAssignmentId] = useState(
    route.params.assignmentId,
  );
  const [currentAssignmentTitle, setCurrentAssignmentTitle] = useState(
    route.params.assignmentTitle,
  );

  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [optionThree, setOptionThree] = useState('');
  const [optionFour, setOptionFour] = useState('');

  const handleSave = async () => {
    if (
      question == '' ||
      correctAnswer == '' ||
      optionTwo == '' ||
      optionThree == '' ||
      optionFour == ''
    ) {
      return;
    }

    let currentQuestionId = uuid.v4();
    await MakeQuestion(currentAssignmentId, currentQuestionId, {
      question: question,
      correctAnswer: correctAnswer,
      incorrectAnswers: [optionTwo, optionThree, optionFour],
    });
    ToastAndroid.show('Question saved', ToastAndroid.showWithGravity);

    setQuestion('');
    setCorrectAnswer('');
    setOptionTwo('');
    setOptionThree('');
    setOptionFour('');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{marginTop: 20}}>
          <Text style={styles.addQuestionsText}>Add Questions</Text>
          <Text style={styles.forTheAssignmentText}>For the assignment</Text>
          <Text style={styles.assignmentName}>{currentAssignmentTitle}</Text>
          <CommonTextInput
            label="Question"
            placeholder={'Enter question'}
            onChangeText={text => setQuestion(text)}
            value={question}
          />

          <View style={{marginVertical: 20}}>
            <CommonTextInput
              label={'Correct Answer'}
              placeholder={'The correct answer'}
              onChangeText={text => setCorrectAnswer(text)}
              value={correctAnswer}
            />
            <CommonTextInput
              label={'Option 2'}
              placeholder={'Option 2'}
              onChangeText={text => setOptionTwo(text)}
              value={optionTwo}
            />
            <CommonTextInput
              label={'Option 3'}
              placeholder={'Option 3'}
              onChangeText={text => setOptionThree(text)}
              value={optionThree}
            />
            <CommonTextInput
              label={'Option 4'}
              placeholder={'Option 4'}
              onChangeText={text => setOptionFour(text)}
              value={optionFour}
            />
          </View>
          <View>
            <CommonButton
              title={'Save Question'}
              onPress={() => handleSave()}
            />
            <CommonButton
              title={'Save Assignment'}
              onPress={() => {
                setCurrentAssignmentId();
                navigation.navigate('AdminHome');
              }}
              style={{
                marginTop: 0,
                backgroundColor: COLORS.WHITE,
                borderColor: COLORS.BUTTONCOLOR,
                borderWidth: 2,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
