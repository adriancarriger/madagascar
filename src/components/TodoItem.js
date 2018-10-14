import Madagascar from '../framework/Madagascar.js';

export default class TodoItem extends Madagascar.Component {
  constructor(props) {
    super(props);
    this.todo = this.$store.state.todos[this.getAttribute('todoId')];
  }

  render() {
    return /* html */ `
      <style>
        li {
          list-style: none;
        }

        .done {
          text-decoration: line-through;
        }
      </style>
      <li>
        <label ${this.todo.checked ? 'class="done"' : ''}>
          <input type="checkbox" ${this.todo.checked ? 'checked ' : ''}/>
          ${this.todo.text}
        </label>
      </li>
    `;
  }

  mounted() {
    this.input = this.element.querySelector('input');
    this.input.addEventListener('input', () => {
      this.$store.commit('updateTodo', {
        id: this.todo.id,
        checked: this.input.checked
      });
    });
  }
}
