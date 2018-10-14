import Madagascar from '../framework/Madagascar.js';

export default class TodoListExample extends Madagascar.Component {
  constructor(props) {
    super(props);
    this.todos = Object.values(this.$store.state.todos).map(todo => todo.id);
  }

  render() {
    return /* html */ `
      <h3>Todo Example</h3>
      <form>
        <input placeholder="Add todo…" />
      </form>
      <ul>
        ${this.todos.map(todoId => /* html */ `<todo-item todoId="${todoId}"></todo-item>\n`).join('')}
      </ul>
    `;
  }

  mounted() {
    const form = this.root.querySelector('form');
    const input = form.querySelector('input');

    this.on(input, 'focus', () => {
      this.$store.commit('addFocus', 'todo-list', {
        reRender: false
      });
    });

    this.on(input, 'blur', () => {
      this.$store.commit('removeFocus', 'todo-list', {
        reRender: false
      });
    });

    this.on(form, 'submit', event => {
      event.preventDefault();
      this.$store.commit('newTodo');
    });

    this.on(form, 'input', event => {
      this.$store.commit('todoInput', input.value, {
        reRender: false
      });
    });

    if (this.$store.state.focused === 'todo-list') {
      input.focus();
    }

    input.value = this.$store.state.todoInput;
  }
}
