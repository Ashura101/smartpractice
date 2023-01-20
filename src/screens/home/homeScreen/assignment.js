import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Pressable,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CommonButton, CustomHeader} from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  GetAssignmentById,
  GetQuestionsByAssignmentId,
  GetTimeById,
} from '../../../utils/database';
import styles from './assignmentStyle';
import GLOBALS from '../../../constants';
const {COLORS} = GLOBALS;
const {height, width} = Dimensions.get('window');

export const Assignment = ({route, navigation}) => {
  const [assignmentId, seAssignmentId] = useState(route.params.item.id);
  const [assignmentName, setAssignmentName] = useState('');
  const [assignmentQuestions, setAssignmentQuestions] = useState([]);
  const [timeLimit, setTimeLimit] = useState();

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [missedAnswer, setMissedAnswer] = useState(0);

  const pageRef = useRef();

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  let time;

  const GetAssignmentAndQuestionDetails = async () => {
    let currentAssignment = await GetAssignmentById(assignmentId);
    currentAssignment = currentAssignment.data();
    setTimeLimit(currentAssignment.assignmentTimeLimit * 60);

    setAssignmentName(currentAssignment.title);

    const questions = await GetQuestionsByAssignmentId(assignmentId);

    let tempQuestions = [];
    await questions.docs.forEach(async res => {
      let question = res.data();

      question.allOptions = shuffleArray([
        ...question.incorrectAnswers,
        question.correctAnswer,
      ]);
      await tempQuestions.push(question);
    });

    setAssignmentQuestions([...tempQuestions]);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);

  let interval = null;
  const [min, setMin] = useState();
  const [sec, setSec] = useState();
  useEffect(() => {
    setMin(Math.floor(timeLimit / 60));
    setSec(Math.round((timeLimit / 60 - Math.floor(timeLimit / 60)) * 60));
    const myInterval = () => {
      if (timeLimit >= 1) {
        setTimeLimit(state => state - 1);
      }
      if (timeLimit === 0) {
        let missed = questionLength - (correctAnswers + incorrectAnswers);
        alert(
          'Correct: ' +
            correctAnswers +
            '\n' +
            'Incorrect: ' +
            incorrectAnswers +
            '\n' +
            'Missed: ' +
            missed,
        );
        navigation.goBack();
      }
    };

    interval = setTimeout(myInterval, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [timeLimit]);

  const getOptionBgColor = (currentQuestion, currentOption) => {
    if (currentQuestion.selectedOption) {
      if (currentOption == currentQuestion.selectedOption) {
        // if (currentOption == currentQuestion.correctAnswer) {
        return COLORS.SUCCESS;
        // } else {
        //   return COLORS.BLUE;
        // }
      } else {
        return COLORS.WHITE;
      }
    } else {
      return COLORS.WHITE;
    }
  };

  // const getOptionTextColor = (currentQuestion, currentOption) => {
  //   if (currentQuestion.selectedOption) {
  //     if (currentOption == currentQuestion.selectedOption) {
  //       return COLORS.WHITE;
  //     } else {
  //       return COLORS.BLACK;
  //     }
  //   } else {
  //     return COLORS.BLACK;
  //   }
  // };

  useEffect(() => {
    GetAssignmentAndQuestionDetails();
  }, []);
  const questionLength = assignmentQuestions.length;
  console.log(questionLength);

  const handleSubmit = () => {
    let missed = questionLength - (correctAnswers + incorrectAnswers);
    alert(
      'Correct: ' +
        correctAnswers +
        '\n' +
        'Incorrect: ' +
        incorrectAnswers +
        '\n' +
        'Missed: ' +
        missed,
    );
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/background.png')}>
        <View style={styles.smartIcon}>
          <View style={{flex: 1}}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={{resizeMode: 'contain', height: 80, width: 80}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.assignmentNameText}>{assignmentName}</Text>
          </View>
          <View style={styles.timerView}>
            <Pressable style={styles.timerPressable}>
              <Text style={styles.time}>
                {/* {timeLimit} */}
                {min}:{sec}
              </Text>
            </Pressable>
          </View>
        </View>

        <FlatList
          data={assignmentQuestions}
          ref={pageRef}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x / width;
            setCurrentIndex(x.toFixed(0));
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.question}
          bounces={false}
          pagingEnabled
          renderItem={({item, index}) => (
            <View style={styles.questionBox}>
              <View style={{padding: 20}}>
                <Text style={{fontSize: 20, color: COLORS.BLACK}}>
                  {index + 1}.{item.question}
                </Text>
              </View>
              {item.allOptions.map((option, optionIndex) => {
                return (
                  <TouchableOpacity
                    key={optionIndex}
                    style={{
                      paddingVertical: 15,
                      paddingHorizontal: 20,
                      borderColor: COLORS.BLACK,
                      backgroundColor: getOptionBgColor(item, option),
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      borderRadius: 20,
                      marginVertical: 5,
                      borderWidth: 1,
                    }}
                    onPress={() => {
                      if (item.selectedOption) {
                        return null;
                      }
                      // Increase correct/incorrect count
                      if (option == item.correctAnswer) {
                        setCorrectAnswers(correctAnswers + 1);
                      } else {
                        setIncorrectAnswers(incorrectAnswers + 1);
                      }

                      let tempQuestions = [...assignmentQuestions];
                      tempQuestions[index].selectedOption = option;
                      setAssignmentQuestions([...tempQuestions]);
                    }}>
                    <Text
                      style={{
                        width: 25,
                        height: 25,
                        padding: 2,
                        borderWidth: 1,
                        borderColor: COLORS.BLACK,
                        textAlign: 'center',
                        marginRight: 16,
                        borderRadius: 25,
                        // color: getOptionTextColor(item, option),
                        color: COLORS.BLACK,
                      }}>
                      {optionIndex + 1}
                    </Text>
                    <Text style={{color: COLORS.BLACK}}>{option}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        />
        <View style={styles.buttonView}>
          {currentIndex > 0 ? (
            <TouchableOpacity
              style={styles.previousTouchable}
              onPress={() => {
                pageRef.current.scrollToIndex({
                  animated: true,
                  index: parseInt(currentIndex) - 1,
                });
              }}>
              <Text style={styles.previousText}>Previous</Text>
            </TouchableOpacity>
          ) : null}
          {currentIndex < assignmentQuestions.length - 1 ? (
            <TouchableOpacity
              style={styles.nextTouchable}
              onPress={() => {
                if (currentIndex < assignmentQuestions.length - 1) {
                  pageRef.current.scrollToIndex({
                    animated: true,
                    index: parseInt(currentIndex) + 1,
                  });
                }
              }}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.submitTouchable}
              onPress={handleSubmit}>
              <Text style={styles.submitText} onPress={null}>
                Submit
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
