import Madagascar from './framework/Madagascar.js';

export default class App extends Madagascar.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /* html */ `
      <div>My app</div>
      <counter-example></counter-example>
    `;
  }
}
