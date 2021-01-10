import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCcHmzpk93YxvHrV5NBl68JaFAIiT8CvMU',
      authDomain: 'spaa-de374.firebaseapp.com',
      projectId: 'spaa-de374',
      storageBucket: 'spaa-de374.appspot.com',
      messagingSenderId: '477968700520',
      appId: '1:477968700520:web:2877360f4198a981ffd7dd'
    })
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
