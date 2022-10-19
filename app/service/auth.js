import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


class Auth {
    static register = (user, getError) => {
        auth().createUserWithEmailAndPassword(user.email,user.password).then(result => {
            firestore().collection('Users').add({ firstName: user.firstName, lastName: user.lastName, email: user.email });
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                getError('Email address is already in use!');
                console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
                getError('Email is invalid!')
                console.log('That email address is invalid!');
            }
            console.error('reigster() =>', error);
        });
    }
    static login = (email, password) => {
        auth().signInWithEmailAndPassword(email,password).then(result => {
            console.log('result', result);
        }).catch(err => console.log('login()', err));
    }
}

export default Auth;