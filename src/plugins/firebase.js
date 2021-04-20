import Vue from 'vue'
import 'firebase/auth'
import 'firebase/firebase-database'
import firebaseConfig from '../../firebaseConfig'
import firebase from 'firebase/app'

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase