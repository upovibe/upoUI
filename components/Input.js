class Input extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['placeholder', 'value', 'type', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 100%;
        }
        
        .input-container {
          position: relative;
          width: 100%;
        }
        
        input {
          width: 100%;
          padding: var(--upo-input-padding, 12px 16px);
          border: var(--upo-input-border, 1px solid #d1d5db);
          border-radius: var(--upo-input-border-radius, 6px);
          font-size: var(--upo-input-font-size, 16px);
          font-family: var(--upo-input-font-family, inherit);
          background: var(--upo-input-background, #ffffff);
          color: var(--upo-input-color, #111827);
          transition: var(--upo-input-transition, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out);
          outline: none;
          box-sizing: border-box;
        }
        
        input:focus {
          border-color: var(--upo-input-focus-border-color, #3b82f6);
          box-shadow: var(--upo-input-focus-box-shadow, 0 0 0 3px rgba(59, 130, 246, 0.1));
        }
        
        input:disabled {
          background: var(--upo-input-disabled-background, #f9fafb);
          color: var(--upo-input-disabled-color, #6b7280);
          cursor: not-allowed;
        }
        
        input::placeholder {
          color: var(--upo-input-placeholder-color, #9ca3af);
        }
      </style>
      <div class="input-container">
        <input 
          type="${this.getAttribute('type') || 'text'}"
          placeholder="${this.getAttribute('placeholder') || ''}"
          value="${this.getAttribute('value') || ''}"
          ${this.hasAttribute('disabled') ? 'disabled' : ''}
        />
      </div>
    `;

    // Add event listeners
    const input = this.shadowRoot.querySelector('input');
    input.addEventListener('input', (e) => {
      this.setAttribute('value', e.target.value);
      this.dispatchEvent(new CustomEvent('input', {
        detail: { value: e.target.value },
        bubbles: true
      }));
    });

    input.addEventListener('change', (e) => {
      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: e.target.value },
        bubbles: true
      }));
    });
  }

  get value() {
    return this.shadowRoot.querySelector('input').value;
  }

  set value(val) {
    this.setAttribute('value', val);
  }

  focus() {
    this.shadowRoot.querySelector('input').focus();
  }

  blur() {
    this.shadowRoot.querySelector('input').blur();
  }
}

customElements.define('upo-input', Input);
export default Input; 