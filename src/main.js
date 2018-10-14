import Madagascar from './framework/Madagascar.js';

import App from './App.js';
import store from './store.js';
import CounterExample from './components/CounterExample.js';
import TodoListExample from './components/TodoList.js';
import TodoItem from './components/TodoItem.js';

Madagascar.registerComponent('counter-example', CounterExample);
Madagascar.registerComponent('todo-list-example', TodoListExample);
Madagascar.registerComponent('todo-item', TodoItem);

new Madagascar({
  render: App,
  store
}).$mount('#app');
