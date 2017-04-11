import firebase from 'firebase'
import _ from 'lodash'

// Initialize Firebase
var config = {
apiKey: "AIzaSyDsqSIiWAm_mK-6c38M1RqyZH9j02kFow4",
authDomain: "vderks-ab37a.firebaseapp.com",
databaseURL: "https://vderks-ab37a.firebaseio.com",
storageBucket: "vderks-ab37a.appspot.com",
messagingSenderId: "277629276392"
};
firebase.initializeApp(config);

let Content = firebase.database().ref('content')

export function loadContent(){
    return (dispatch) => {
        Content.on('value', snapshot => {
            dispatch({
                type: 'LOAD_CONTENT',
                data: snapshot.val()
            })
        })
    }
}

export function toggleMenu(){
    return {
        type: 'APP_TOGGLE_MENU'
    }
}
