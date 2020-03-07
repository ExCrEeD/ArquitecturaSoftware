
import Vue from 'vue'
import App from './App.vue'
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
/* import { createProvider } from './vue-apollo' */

Vue.config.productionTip = false

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

Vue.use(VueApollo);

new Vue({
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
