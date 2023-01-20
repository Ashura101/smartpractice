import {Alert} from 'react-native';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

export const FirebaseLogin = (auth, email, password, navigation) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      navigation.replace('HomeApp');
      // navigation.reset({index: 1, routes: [{name: 'HomeApp'}]});
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const FirebaseRegister = (
  auth,
  name,
  email,
  password,
  country,
  navigation,
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // const user = userCredential.user;
      return firestore().collection('users').doc(userCredential.user.uid).set({
        username: name,
        useremail: email,
        country: country,
        // gender: gender,
        createdOn: new Date(),
      });
    })
    .then(() => {
      Alert.alert('Success', 'User registered successfully', [
        {
          text: 'OK',
          onPress: () => {
            navigation.replace('Login');
          },
        },
      ]);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Email already exist');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }

      console.log(error);
    });
};
//   createUserWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;
//       Alert.alert('Success', 'User registered successfully', [
//         {
//           text: 'OK',
//           onPress: () => {
//             navigation.replace('Login');
//           },
//         },
//       ]);
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//       // ..
//     });
// };

export const FirebaseResetPassword = (auth, email, navigation) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      Alert.alert('Success', 'Check your email for the password reset link', [
        {text: 'Ok', onPress: () => navigation.goBack()},
      ]);
      // ..
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
