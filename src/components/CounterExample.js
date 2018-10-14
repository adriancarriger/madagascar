import Madagascar from '../framework/Madagascar.js';

export default class CounterExample extends Madagascar.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /* html */ `
      <div>
        <h3>Counter Example</h3>
        Counter => ${this.$store.state.counter}
        <button class="add">+1</button>
        <slot></slot>
      </div>
    `;
  }

  mounted() {
    this.element.querySelector('.add').addEventListener('click', () => this.$store.commit('count'));
  }
}
