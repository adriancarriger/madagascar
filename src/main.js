import Madagascar from './framework/Madagascar.js';

import App from './App.js';
import store from './store.js';
import CounterExample from './components/CounterExample.js';

Madagascar.registerComponent('counter-example', CounterExample);

new Madagascar({
  render: App,
  store
}).$mount('#app');
