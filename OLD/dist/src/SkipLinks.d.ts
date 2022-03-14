import { LitElement } from 'lit';
import { Target } from './types.js';
export declare class SkipLinks extends LitElement {
  static styles: import('lit').CSSResult[];
  private _skipLinksLabelAttributeName;
  _noLinks: boolean;
  _targets: Target[];
  connectedCallback(): void;
  _init(): void;
  render(): import('lit-html').TemplateResult<1> | undefined;
  _handleLinkClick(event: PointerEvent): void;
}
