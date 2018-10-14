import Madagascar from './Madagascar.js';

export default class Component extends HTMLElement {
  constructor(props) {
    super(props);
    this.$store = Madagascar.global.store;
    this.listeners = [];
  }

  connectedCallback() {
    this.lifecycle('beforeMount');
    this.element = this.getElement();
    this.baseRender();
    this.lifecycle('mounted');
  }

  disconnectedCallback() {
    this.listeners.forEach(({
      event,
      element,
      callback
    }) => {
      element.removeEventListener(event, callback);
    });
  }

  baseRender() {
    const content = this.render();
    this.innerHTML = Array.isArray(content) ? content.join('\n') : content;
  }

  lifecycle(name) {
    if (this[name]) {
      this[name]();
    }
  }

  on(element, event, callback) {
    element.addEventListener(event, callback);
    this.listeners.push({
      event,
      element,
      callback
    });
  }

  getElement() {
    if (!this.useShadowDom) {
      return this;
    }
    return this.attachShadow({
      mode: 'open'
    });
  }
}
