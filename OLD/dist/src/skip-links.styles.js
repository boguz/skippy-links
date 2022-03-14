import { css } from 'lit';
export const skipLinksStyles = css `
  :host {
    border: 4px solid red;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  :host(:focus-within) {
    border: 4px solid blue;
  }
`;
//# sourceMappingURL=skip-links.styles.js.map