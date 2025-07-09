/**
 * Checkbox Component
 * 
 * Creates a checkbox with a label. Supports:
 * - Checked and unchecked states
 * - Accessibility features
 * 
 * Usage:
 * <ui-checkbox label="Accept Terms" checked></ui-checkbox>
 */
class Checkbox extends HTMLElement {
    constructor() {
        super();
        
        // Create the checkbox elements
        this.checkbox = document.createElement('input');
        this.label = document.createElement('label');
        this.wrapper = document.createElement('div');
        
        // Add elements to the component
        this.wrapper.appendChild(this.checkbox);
        this.wrapper.appendChild(this.label);
        this.appendChild(this.wrapper);
        
        // Add default styles
        this.addDefaultStyles();
        
        // Bind event handlers
        this._onCheckboxChange = this._onCheckboxChange.bind(this);
        this._onWrapperClick = this._onWrapperClick.bind(this);
    }

    addDefaultStyles() {
        if (!document.getElementById('upo-ui-checkbox-styles')) {
            const style = document.createElement('style');
            style.id = 'upo-ui-checkbox-styles';
            style.textContent = `
                .upo-checkbox-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                    user-select: none;
                    padding: 0.125rem;
                    border-radius: 0.25rem;
                    transition: background-color 0.15s ease-in-out;
                }
                
                .upo-checkbox-wrapper:hover {
                    background-color: rgba(59, 130, 246, 0.05);
                }
                
                .upo-checkbox-input {
                    width: 1rem;
                    height: 1rem;
                    cursor: pointer;
                    accent-color: #3b82f6;
                    border: 2px solid #d1d5db;
                    border-radius: 0.25rem;
                    transition: all 0.15s ease-in-out;
                    margin: 0;
                    appearance: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    position: relative;
                }
                
                .upo-checkbox-input:checked {
                    background-color: #3b82f6;
                    border-color: #3b82f6;
                }
                
                .upo-checkbox-input:checked::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 0.25rem;
                    height: 0.5rem;
                    border: 2px solid white;
                    border-top: none;
                    border-left: none;
                    transform: translate(-50%, -60%) rotate(45deg);
                }
                
                .upo-checkbox-input:focus {
                    outline: 2px solid #3b82f6;
                    outline-offset: 2px;
                }
                
                .upo-checkbox-input:hover {
                    border-color: #3b82f6;
                }
                
                .upo-checkbox-label {
                    font-size: 0.875rem;
                    color: #374151;
                    cursor: pointer;
                    line-height: 1.25;
                    font-weight: 500;
                }
                
                .upo-checkbox-disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                
                .upo-checkbox-disabled .upo-checkbox-input {
                    cursor: not-allowed;
                }
                
                .upo-checkbox-disabled .upo-checkbox-label {
                    cursor: not-allowed;
                }
            `;
            document.head.appendChild(style);
        }
    }

    connectedCallback() {
        // Set up the wrapper
        this.wrapper.className = 'upo-checkbox-wrapper';
        
        // Set up the checkbox
        this.checkbox.type = 'checkbox';
        this.checkbox.className = 'upo-checkbox-input';
        this.checkbox.checked = this.hasAttribute('checked');
        this.checkbox.disabled = this.hasAttribute('disabled');
        
        // Set up the label
        this.label.className = 'upo-checkbox-label';
        this.label.textContent = this.getAttribute('label') || 'Checkbox';
        
        // Set up accessibility
        const id = this.getAttribute('id') || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
        this.checkbox.id = id;
        this.label.setAttribute('for', id);
        
        // Add event listeners
        this.checkbox.addEventListener('change', this._onCheckboxChange);
        this.wrapper.addEventListener('click', this._onWrapperClick);
        this.label.addEventListener('click', this._onLabelClick);
        
        // Update disabled state
        this.updateDisabledState();
    }

    disconnectedCallback() {
        this.checkbox.removeEventListener('change', this._onCheckboxChange);
        this.wrapper.removeEventListener('click', this._onWrapperClick);
    }

    static get observedAttributes() {
        return ['checked', 'label', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'checked') {
            this.checkbox.checked = this.hasAttribute('checked');
        }
        if (name === 'label') {
            this.label.textContent = newValue;
        }
        if (name === 'disabled') {
            this.updateDisabledState();
        }
    }

    updateDisabledState() {
        const isDisabled = this.hasAttribute('disabled');
        this.checkbox.disabled = isDisabled;
        
        if (isDisabled) {
            this.wrapper.classList.add('upo-checkbox-disabled');
        } else {
            this.wrapper.classList.remove('upo-checkbox-disabled');
        }
    }

    _onCheckboxChange() {
        if (this.checkbox.checked) {
            this.setAttribute('checked', '');
        } else {
            this.removeAttribute('checked');
        }
        
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checkbox.checked },
            bubbles: true
        }));
    }

    _onWrapperClick(e) {
        if (e.target === this.checkbox) {
            return;
        }
        
        if (!this.hasAttribute('disabled')) {
            this.checkbox.checked = !this.checkbox.checked;
            this._onCheckboxChange();
        }
    }
}

customElements.define('ui-checkbox', Checkbox);
export default Checkbox; 