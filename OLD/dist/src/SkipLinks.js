import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { skipLinksStyles } from './skip-links.styles.js';
export class SkipLinks extends LitElement {
    constructor() {
        super(...arguments);
        this._skipLinksLabelAttributeName = 'skip-links-label';
        this._noLinks = false;
        this._targets = [];
    }
    connectedCallback() {
        super.connectedCallback();
        if (document.readyState === "complete" || (document.readyState !== "loading")) {
            this._init();
        }
        else {
            document.addEventListener("DOMContentLoaded", this._init);
        }
    }
    _init() {
        const possibleTargets = document.querySelectorAll(`[${this._skipLinksLabelAttributeName}]`);
        possibleTargets.forEach((possibleTarget) => {
            const targetId = possibleTarget.id || null;
            const targetLabel = possibleTarget.getAttribute(this._skipLinksLabelAttributeName) || null;
            if (!targetId || !targetLabel) {
                console.error('SKIP-LINKS: target element does not have all required attributes (id and skip-link-label)');
                return;
            }
            else {
                const newTarget = {
                    element: possibleTarget,
                    id: targetId,
                    label: targetLabel
                };
                this._targets.push(newTarget);
            }
        });
        this.setAttribute('role', 'navigation');
        this._noLinks = !this._targets || !this._targets.length;
    }
    render() {
        if (this._targets.length > 0) {
            return html `
        <ul>
          ${this._targets.map((target) => {
                return html `
              <li>
                <a href="#${target.id}" @click="${this._handleLinkClick}">${target.label}</a>
              </li>
            `;
            })}
        </ul>
      `;
        }
    }
    _handleLinkClick(event) {
        console.log('link click', event);
    }
}
SkipLinks.styles = [skipLinksStyles];
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'nolinks' })
], SkipLinks.prototype, "_noLinks", void 0);
__decorate([
    property({ type: Array })
], SkipLinks.prototype, "_targets", void 0);
//# sourceMappingURL=SkipLinks.js.map