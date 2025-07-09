class Input extends HTMLElement {
    constructor() {
        super();
        
        // Create the input element directly (no shadow DOM)
        this.input = document.createElement('input');
        
        // Add the input to the component
        this.appendChild(this.input);
        
        // Flag to prevent double processing
        this.initialized = false;
        
        // Add default styles via CSS
        this.addDefaultStyles();
        
        // Forward events from the internal input to the custom element
        this.input.addEventListener('input', (e) => {
            this.dispatchEvent(new CustomEvent('input', { 
                bubbles: true, 
                detail: { value: e.target.value } 
            }));
        });
        
        this.input.addEventListener('change', (e) => {
            this.dispatchEvent(new CustomEvent('change', { 
                bubbles: true, 
                detail: { value: e.target.value } 
            }));
        });
        
        this.input.addEventListener('focus', (e) => {
            this.dispatchEvent(new CustomEvent('focus', { bubbles: true }));
        });
        
        this.input.addEventListener('blur', (e) => {
            this.dispatchEvent(new CustomEvent('blur', { bubbles: true }));
        });
    }
    
    // Add default CSS styles to document if not already added
    addDefaultStyles() {
        if (!document.getElementById('upo-ui-input-styles')) {
            const style = document.createElement('style');
            style.id = 'upo-ui-input-styles';
            style.textContent = `
                .upo-input-default {
                    display: block;
                    width: 100%;
                    padding: 0.75rem;
                    font-size: 1rem;
                    line-height: 1.5;
                    color: #374151;
                    background-color: #ffffff;
                    border: 1px solid #d1d5db;
                    border-radius: 0.375rem;
                    box-sizing: border-box;
                    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                }
                .upo-input-default:focus {
                    outline: none;
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }
                .upo-input-default:disabled {
                    background-color: #f9fafb;
                    color: #6b7280;
                    cursor: not-allowed;
                }
                .upo-input-default::placeholder {
                    color: #9ca3af;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Connected callback - called when element is added to DOM
    connectedCallback() {
        // Prevent double processing
        if (this.initialized) return;
        this.initialized = true;
        
        // Check if user provided classes
        const hasUserClass = this.hasAttribute('class');
        
        // Apply default class if no user classes
        if (!hasUserClass) {
            this.input.className = 'upo-input-default';
        }
        
        // Transfer all attributes to the internal input
        const attributes = this.getAttributeNames();
        
        attributes.forEach(attr => {
            const value = this.getAttribute(attr);
            if (attr === 'class' && hasUserClass) {
                // Override default class with user classes
                this.input.className = value;
            } else {
                this.input.setAttribute(attr, value);
            }
        });
        
        // Remove all attributes from the wrapper to avoid duplication
        attributes.forEach(attr => {
            this.removeAttribute(attr);
        });
    }
    
    // Get the value of the input
    get value() {
        return this.input.value;
    }
    
    // Set the value of the input
    set value(val) {
        this.input.value = val;
    }
    
    // Focus method
    focus() {
        this.input.focus();
    }
    
    // Blur method
    blur() {
        this.input.blur();
    }
}

    customElements.define('ui-input', Input);
export default Input; 