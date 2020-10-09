import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import config from './config/config';
import 'firebase/firestore'
console.log(config)

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp(config.firebaseConfig)

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
