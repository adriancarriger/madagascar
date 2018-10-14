export default class Store {
  constructor(ctx = {}) {
    this.ctx = ctx;
    this.state = { ...this.ctx.state
    };
  }

  commit(name, value, options = {}) {
    if (this.reRender) {
      return;
    }
    this.ctx.mutations[name](this.state, value);
    if (options.reRender !== false) {
      this.reRender = true;
    }
  }
}
