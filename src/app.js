import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter)

import Contacts from './components/Contacts.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/contacts', component: Contacts },
  ]
})

const app = new Vue({
  router
}).$mount('#app')
