class Select extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['value', 'disabled', 'placeholder'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
    this.setupSlotObserver();
  }

  setupSlotObserver() {
    // Observer for slot changes to update options
    const observer = new MutationObserver(() => {
      this.updateOptions();
    });

    observer.observe(this, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['value', 'selected']
    });
  }

  updateOptions() {
    const select = this.shadowRoot.querySelector('select');
    if (!select) return;

    const options = Array.from(this.querySelectorAll('option'));
    const currentValue = this.getAttribute('value');

    // Clear existing options
    select.innerHTML = '';

    // Add placeholder option if specified
    const placeholder = this.getAttribute('placeholder');
    if (placeholder) {
      const placeholderOption = document.createElement('option');
      placeholderOption.value = '';
      placeholderOption.textContent = placeholder;
      placeholderOption.disabled = true;
      placeholderOption.selected = !currentValue;
      select.appendChild(placeholderOption);
    }

    // Add options from slot
    options.forEach(option => {
      const newOption = document.createElement('option');
      newOption.value = option.value || option.textContent;
      newOption.textContent = option.textContent;
      newOption.selected = option.hasAttribute('selected') || option.value === currentValue;
      if (option.hasAttribute('disabled')) {
        newOption.disabled = true;
      }
      select.appendChild(newOption);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 100%;
        }
        
        .select-container {
          position: relative;
          width: 100%;
        }
        
        select {
          width: 100%;
          padding: var(--upo-select-padding, 12px 16px);
          border: var(--upo-select-border, 1px solid #d1d5db);
          border-radius: var(--upo-select-border-radius, 6px);
          font-size: var(--upo-select-font-size, 16px);
          font-family: var(--upo-select-font-family, inherit);
          background: var(--upo-select-background, #ffffff);
          color: var(--upo-select-color, #111827);
          transition: var(--upo-select-transition, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out);
          outline: none;
          box-sizing: border-box;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: var(--upo-select-arrow, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e"));
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 16px 16px;
          padding-right: 40px;
        }
        
        select:focus {
          border-color: var(--upo-select-focus-border-color, #3b82f6);
          box-shadow: var(--upo-select-focus-box-shadow, 0 0 0 3px rgba(59, 130, 246, 0.1));
        }
        
        select:disabled {
          background: var(--upo-select-disabled-background, #f9fafb);
          color: var(--upo-select-disabled-color, #6b7280);
          cursor: not-allowed;
        }
        
        option {
          padding: var(--upo-select-option-padding, 8px 12px);
          background: var(--upo-select-option-background, #ffffff);
          color: var(--upo-select-option-color, #111827);
        }
        
        option:disabled {
          color: var(--upo-select-option-disabled-color, #9ca3af);
        }
        
        /* Hide the default slot */
        ::slotted(*) {
          display: none;
        }
      </style>
      <div class="select-container">
        <select ${this.hasAttribute('disabled') ? 'disabled' : ''}>
        </select>
        <slot></slot>
      </div>
    `;

    // Add event listeners
    const select = this.shadowRoot.querySelector('select');
    select.addEventListener('change', (e) => {
      this.setAttribute('value', e.target.value);
      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: e.target.value },
        bubbles: true
      }));
    });

    // Update options after render
    setTimeout(() => this.updateOptions(), 0);
  }

  get value() {
    return this.shadowRoot.querySelector('select').value;
  }

  set value(val) {
    this.setAttribute('value', val);
    const select = this.shadowRoot.querySelector('select');
    if (select) {
      select.value = val;
    }
  }

  focus() {
    this.shadowRoot.querySelector('select').focus();
  }

  blur() {
    this.shadowRoot.querySelector('select').blur();
  }
}

customElements.define('upo-select', Select);
export default Select; 