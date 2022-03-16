import { Target } from './types.js';
import { skipLinksStyles } from './skip-links.styles.js';

export class SkipLinks extends HTMLElement {
  private _targets: Target[];

  private _shadow: ShadowRoot;

  private readonly _skipLinksLabelAttributeName: string;

  private readonly _emptyAttribute: string;

  constructor() {
    super();

    this._targets = [];
    this._shadow = this.attachShadow({ mode: 'open' });
    this._skipLinksLabelAttributeName = 'skip-links-label';
    this._emptyAttribute = 'empty';

    this._shadow.innerHTML = skipLinksStyles;
  }

  connectedCallback() {
    if (
      document.readyState === 'complete' ||
      document.readyState !== 'loading'
    ) {
      this._init();
    } else {
      document.addEventListener('DOMContentLoaded', this._init);
    }
  }

  _init() {
    const possibleTargets: NodeListOf<HTMLElement> = document.querySelectorAll(
      `[${this._skipLinksLabelAttributeName}]`
    );
    possibleTargets.forEach(possibleTarget => {
      const targetId = possibleTarget.id || null;
      const targetLabel =
        possibleTarget.getAttribute(this._skipLinksLabelAttributeName) || null;

      if (!targetId || !targetLabel) {
        console.error(
          'SKIP-LINKS: target element does not have all required attributes (id and skip-link-label)'
        );
      } else {
        this._targets.push(
          this._createNewTarget(possibleTarget, targetId, targetLabel)
        );
      }
    });

    if (!this._targets || !this._targets.length) {
      this.setAttribute(this._emptyAttribute, '');
      return;
    }

    this.setAttribute('role', 'navigation');
    this._populate();
  }

  /**
   * Create a new Target object with all relevant properties
   *
   * @param {HTMLElement} possibleTarget
   * @param {string} targetId
   * @param {string} targetLabel
   * @returns {Target} Target
   */
  _createNewTarget(
    possibleTarget: HTMLElement,
    targetId: string,
    targetLabel: string
  ): Target {
    return {
      element: possibleTarget,
      id: targetId,
      label: targetLabel,
    };
  }

  /**
   * Populate the component with links to the page's targets
   */
  _populate() {
    this._targets.forEach(target => {
      const targetLink = document.createElement('a');
      targetLink.href = `#${target.id}`;
      targetLink.textContent = target.label;
      targetLink.classList.add('skip-links__link');

      targetLink.addEventListener('keydown', event => {
        if (event.code === 'Space' || event.code === 'enter') {
          this._handleClick(target.element);
        }
      });
      targetLink.addEventListener('click', () => {
        this._handleClick(target.element);
      });

      this._shadow.appendChild(targetLink);
    });
  }

  /**
   * handle focus when one of the links is clicked
   *
   * @param {HTMLElement} targetElement
   */
  _handleClick(targetElement: HTMLElement) {
    this.blur();
    targetElement.focus();
  }
}
