class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['variant', 'size', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        
        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: var(--upo-button-border-radius, 6px);
          font-weight: var(--upo-button-font-weight, 500);
          font-family: var(--upo-button-font-family, inherit);
          cursor: pointer;
          transition: var(--upo-button-transition, all 0.2s ease-in-out);
          outline: none;
          text-decoration: none;
          box-sizing: border-box;
        }
        
        button:focus {
          box-shadow: var(--upo-button-focus-box-shadow, 0 0 0 3px rgba(59, 130, 246, 0.1));
        }
        
        button:disabled {
          cursor: not-allowed;
          opacity: var(--upo-button-disabled-opacity, 0.6);
        }
        
        /* Size variations */
        .small {
          padding: var(--upo-button-small-padding, 8px 12px);
          font-size: var(--upo-button-small-font-size, 14px);
          line-height: var(--upo-button-small-line-height, 1.25);
        }
        
        .medium {
          padding: var(--upo-button-medium-padding, 10px 16px);
          font-size: var(--upo-button-medium-font-size, 16px);
          line-height: var(--upo-button-medium-line-height, 1.5);
        }
        
        .large {
          padding: var(--upo-button-large-padding, 12px 20px);
          font-size: var(--upo-button-large-font-size, 18px);
          line-height: var(--upo-button-large-line-height, 1.75);
        }
        
        /* Variant styles */
        .primary {
          background: var(--upo-button-primary-background, #3b82f6);
          color: var(--upo-button-primary-color, #ffffff);
          border: var(--upo-button-primary-border, 1px solid #3b82f6);
        }
        
        .primary:hover:not(:disabled) {
          background: var(--upo-button-primary-hover-background, #2563eb);
          border-color: var(--upo-button-primary-hover-border-color, #2563eb);
        }
        
        .secondary {
          background: var(--upo-button-secondary-background, #ffffff);
          color: var(--upo-button-secondary-color, #374151);
          border: var(--upo-button-secondary-border, 1px solid #d1d5db);
        }
        
        .secondary:hover:not(:disabled) {
          background: var(--upo-button-secondary-hover-background, #f9fafb);
          border-color: var(--upo-button-secondary-hover-border-color, #9ca3af);
        }
        
        .outline {
          background: var(--upo-button-outline-background, transparent);
          color: var(--upo-button-outline-color, #3b82f6);
          border: var(--upo-button-outline-border, 1px solid #3b82f6);
        }
        
        .outline:hover:not(:disabled) {
          background: var(--upo-button-outline-hover-background, #3b82f6);
          color: var(--upo-button-outline-hover-color, #ffffff);
        }
        
        .ghost {
          background: var(--upo-button-ghost-background, transparent);
          color: var(--upo-button-ghost-color, #374151);
          border: var(--upo-button-ghost-border, 1px solid transparent);
        }
        
        .ghost:hover:not(:disabled) {
          background: var(--upo-button-ghost-hover-background, #f3f4f6);
        }
        
        .danger {
          background: var(--upo-button-danger-background, #ef4444);
          color: var(--upo-button-danger-color, #ffffff);
          border: var(--upo-button-danger-border, 1px solid #ef4444);
        }
        
        .danger:hover:not(:disabled) {
          background: var(--upo-button-danger-hover-background, #dc2626);
          border-color: var(--upo-button-danger-hover-border-color, #dc2626);
        }
      </style>
      <button 
        class="${variant} ${size}"
        ${disabled ? 'disabled' : ''}
        type="button"
      >
        <slot></slot>
      </button>
    `;

    // Add click event listener
    const button = this.shadowRoot.querySelector('button');
    button.addEventListener('click', (e) => {
      if (!disabled) {
        this.dispatchEvent(new CustomEvent('click', {
          detail: { originalEvent: e },
          bubbles: true
        }));
      }
    });
  }

  click() {
    if (!this.hasAttribute('disabled')) {
      this.shadowRoot.querySelector('button').click();
    }
  }

  focus() {
    this.shadowRoot.querySelector('button').focus();
  }

  blur() {
    this.shadowRoot.querySelector('button').blur();
  }
}

customElements.define('upo-button', Button);
export default Button; 