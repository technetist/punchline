import Vue from 'vue';
import App from './components/App';

import store from './store';

// store.commit('INIT_JOKES', [{joke: 'test'}, {joke2: 'test2'}]);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
