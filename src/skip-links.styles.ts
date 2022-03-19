export const skipLinksStyles = `
    <style>        
        :host {
            --sl-color-primary: #0000ee;
            --sl-element-height: 4rem;
            
            border: 1px solid var(--sl-color-primary);
            background-color: white;
            position: fixed;
            top: calc(var(--sl-element-height) * -1);
            bottom: unset;
            left: 0;
            right: 0;
            width: 100%;
            height: var(--sl-element-height);
            transform: translateY(0);
            transition: transform var(--sl-transition-speed, .25s) ease-in-out;
            overflow: hidden;
            box-sizing: border-box;
            box-shadow: none;
            z-index: 9999;
        }
        
        :host(:focus-within) {
            transform: translateY(100%);
        }
        
        .skip-links__link {
            position: var(--sl-link-position, absolute);
            top: var(--sl-link-top, 0);
            bottom: var(--sl-link-bottom, 0);
            left: var(--sl-link-left, 0);
            right: var(--sl-link-right, 0);
            width: var(--sl-link-width, 100%);
            height: var(--sl-link-height, var(--sl-element-height));
            display: var(--sl-link-display, flex);
            align-items: var(--sl-link-align-items, center);
            justify-content: var(--sl-link-justify-content, center);
            color: var(--sl-link-color, var(--sl-color-primary));
            font-size: var(--sl-link-font-size, 1rem);
            text-decoration: var(--sl-link-text-decoration, underline);
            padding: var(--sl-link-padding, 1rem);
            opacity: var(--sl-link-opacity, 1);
            transform: var(--sl-link-transform, translateY(-100%));
            box-sizing: var(--sl-link-box-sizing, border-box);
        }
        
        .skip-links__link:focus {
            opacity: var(--sl-link-opacity-focus, 1);
            transform: var(--sl-link-transform-focus, translateY(0));
            color: var(--sl-link-color-focus, var(--sl-color-primary));
        }
        
        @media (hover: hover) {
            .skip-links__link:hover {
                opacity: var(--sl-link-opacity-hover, 1);
                transform: var(--sl-link-transform-hover, translateY(0));
                color: var(--sl-link-color-hover, var(--sl-color-primary));
            }
        }
        
        @media (prefers-reduced-motion) {
          :root {
            --sl-transition-speed: var(--sl-transition-speed-reduced-motion, 0));
          }
        }
    </style>
`;
