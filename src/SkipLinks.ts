import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { skipLinksStyles } from './skip-links.styles.js';

export class SkipLinks extends LitElement {
  static styles = [ skipLinksStyles ];

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
