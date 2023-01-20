import firestore from '@react-native-firebase/firestore';

export const MakeAssignment = (
  assignmentId,
  title,
  assignmentTimeLimit,
  assignmentDueDate,
) => {
  return firestore().collection('Assignments').doc(assignmentId).set({
    title,
    assignmentTimeLimit,
    assignmentDueDate,
  });
};

export const MakeQuestion = (
  currentAssignmentId,
  currentQuestionId,
  question,
) => {
  return firestore()
    .collection('Assignments')
    .doc(currentAssignmentId)
    .collection('QNA')
    .doc(currentQuestionId)
    .set(question);
};

export const GetAllAssignments = () => {
  return firestore().collection('Assignments').get();
};

export const GetAssignmentById = assignmentId => {
  return firestore().collection('Assignments').doc(assignmentId).get();
};

export const GetQuestionsByAssignmentId = assignmentId => {
  return firestore()
    .collection('Assignments')
    .doc(assignmentId)
    .collection('QNA')
    .get();
};

export const GetTimeById = assignmentId => {
  return firestore()
    .collection('Assignments')
    .doc(assignmentId)
    .doc(assignmentTimeLimit)
    .get();
};
