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
          border-radius: var(--ui-button-border-radius, 6px);
          font-weight: var(--ui-button-font-weight, 500);
          font-family: var(--ui-button-font-family, inherit);
          cursor: pointer;
          transition: var(--ui-button-transition, all 0.2s ease-in-out);
          outline: none;
          text-decoration: none;
          box-sizing: border-box;
        }
        
        button:focus {
          box-shadow: var(--ui-button-focus-box-shadow, 0 0 0 3px rgba(59, 130, 246, 0.1));
        }
        
        button:disabled {
          cursor: not-allowed;
          opacity: var(--ui-button-disabled-opacity, 0.6);
        }
        
        /* Size variations */
        .small {
          padding: var(--ui-button-small-padding, 8px 12px);
          font-size: var(--ui-button-small-font-size, 14px);
          line-height: var(--ui-button-small-line-height, 1.25);
        }
        
        .medium {
          padding: var(--ui-button-medium-padding, 10px 16px);
          font-size: var(--ui-button-medium-font-size, 16px);
          line-height: var(--ui-button-medium-line-height, 1.5);
        }
        
        .large {
          padding: var(--ui-button-large-padding, 12px 20px);
          font-size: var(--ui-button-large-font-size, 18px);
          line-height: var(--ui-button-large-line-height, 1.75);
        }
        
        /* Variant styles */
        .primary {
          background: var(--ui-button-primary-background, #3b82f6);
          color: var(--ui-button-primary-color, #ffffff);
          border: var(--ui-button-primary-border, 1px solid #3b82f6);
        }
        
        .primary:hover:not(:disabled) {
          background: var(--ui-button-primary-hover-background, #2563eb);
          border-color: var(--ui-button-primary-hover-border-color, #2563eb);
        }
        
        .secondary {
          background: var(--ui-button-secondary-background, #ffffff);
          color: var(--ui-button-secondary-color, #374151);
          border: var(--ui-button-secondary-border, 1px solid #d1d5db);
        }
        
        .secondary:hover:not(:disabled) {
          background: var(--ui-button-secondary-hover-background, #f9fafb);
          border-color: var(--ui-button-secondary-hover-border-color, #9ca3af);
        }
        
        .outline {
          background: var(--ui-button-outline-background, transparent);
          color: var(--ui-button-outline-color, #3b82f6);
          border: var(--ui-button-outline-border, 1px solid #3b82f6);
        }
        
        .outline:hover:not(:disabled) {
          background: var(--ui-button-outline-hover-background, #3b82f6);
          color: var(--ui-button-outline-hover-color, #ffffff);
        }
        
        .ghost {
          background: var(--ui-button-ghost-background, transparent);
          color: var(--ui-button-ghost-color, #374151);
          border: var(--ui-button-ghost-border, 1px solid transparent);
        }
        
        .ghost:hover:not(:disabled) {
          background: var(--ui-button-ghost-hover-background, #f3f4f6);
        }
        
        .danger {
          background: var(--ui-button-danger-background, #ef4444);
          color: var(--ui-button-danger-color, #ffffff);
          border: var(--ui-button-danger-border, 1px solid #ef4444);
        }
        
        .danger:hover:not(:disabled) {
          background: var(--ui-button-danger-hover-background, #dc2626);
          border-color: var(--ui-button-danger-hover-border-color, #dc2626);
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

customElements.define('ui-button', Button);
export default Button; 