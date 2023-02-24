import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      scopes: ['profile', 'email'],
      webClientId:
        '1071924375906-e0uo0mb0lj0evtkti1je83el9tmmfnkv.apps.googleusercontent.com',
    });
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    const {idToken} = await GoogleSignin.signIn();
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCredentials);
    return userInfo;
  } catch (error) {
    console.log('=> Google Sign In', error);
    return null;
  }
};
