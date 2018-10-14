import Madagascar from './framework/Madagascar.js';

export default class App extends Madagascar.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /* html */ `
      <style>
        .app-description {
          padding: .5rem 0 1.5rem;
        }
      </style>

      <div class="app-description">
        <h2>Madagascar demo</h2>
        <p>🍦 An in-memory vanilla.js component framework</p>
      </div>

      <counter-example></counter-example>
      <todo-list-example></todo-list-example>
    `;
  }
}
