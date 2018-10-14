import Madagascar from './framework/Madagascar.js';

const store = new Madagascar.Store({
  state: {
    counter: 0,
    focused: undefined,
    todoId: 0,
    todos: {},
    todoInput: ''
  },
  mutations: {
    count(state) {
      state.counter++;
    },
    updateTodo(state, {
      id,
      checked
    }) {
      state.todos[id].checked = checked;
    },
    newTodo(state) {
      state.todoId++;
      state.todos[state.todoId] = {
        id: state.todoId,
        text: state.todoInput,
        checked: false
      }
      state.todoInput = '';
    },
    todoInput(state, value) {
      state.todoInput = value;
    },
    addFocus(state, focusId) {
      state.focused = focusId;
    },
    removeFocus(state, focusId) {
      if (state.focused === focusId) {
        state.focused = undefined;
      }
    }
  }
});

['Buy milk', 'Wash car', 'Clean house'].forEach((task) => {
  store.commit('todoInput', task, {
    reRender: false
  });
  store.commit('newTodo', undefined, {
    reRender: false
  });
})

export default store;
