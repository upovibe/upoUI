class Button extends HTMLElement {
    constructor() {
        super();
        
        // Create the button element directly (no shadow DOM)
        this.button = document.createElement('button');
        
        // Flag to prevent double processing
        this.initialized = false;
        
        // Add the button to the component
        this.appendChild(this.button);
        
        // Add default styles via CSS
        this.addDefaultStyles();
    }
    
    // Add default CSS styles to document if not already added
    addDefaultStyles() {
        if (!document.getElementById('upo-ui-button-styles')) {
            const style = document.createElement('style');
            style.id = 'upo-ui-button-styles';
            style.textContent = `
                .upo-button-default {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1.25;
                    color: #ffffff;
                    background-color: #3b82f6;
                    border: 1px solid #3b82f6;
                    border-radius: 0.375rem;
                    cursor: pointer;
                    text-decoration: none;
                    transition: all 0.15s ease-in-out;
                    outline: none;
                    box-sizing: border-box;
                }
                .upo-button-default:hover {
                    background-color: #2563eb;
                    border-color: #2563eb;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                }
                .upo-button-default:focus {
                    background-color: #2563eb;
                    border-color: #2563eb;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
                }
                .upo-button-default:active {
                    background-color: #1d4ed8;
                    border-color: #1d4ed8;
                    transform: translateY(0);
                    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
                }
                .upo-button-default:disabled {
                    background-color: #9ca3af;
                    border-color: #9ca3af;
                    color: #ffffff;
                    cursor: not-allowed;
                    transform: none;
                    box-shadow: none;
                }
                .upo-button-default:disabled:hover {
                    background-color: #9ca3af;
                    border-color: #9ca3af;
                    transform: none;
                    box-shadow: none;
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
        
        // Move any existing children (except our button) to the internal button
        const children = Array.from(this.childNodes);
        children.forEach(child => {
            if (child !== this.button) {
                this.button.appendChild(child);
            }
        });
        
        // Check if user provided classes
        const hasUserClass = this.hasAttribute('class');
        
        // Apply default class if no user classes
        if (!hasUserClass) {
            this.button.className = 'upo-button-default';
        }
        
        // Transfer all attributes to the internal button (same as other components)
        const attributes = this.getAttributeNames();
        
        attributes.forEach(attr => {
            const value = this.getAttribute(attr);
            if (attr === 'class' && hasUserClass) {
                // Override default class with user classes
                this.button.className = value;
            } else {
                this.button.setAttribute(attr, value);
            }
        });
        
        // Remove all attributes from the wrapper to avoid duplication
        attributes.forEach(attr => {
            this.removeAttribute(attr);
        });
    }
    
    // Forward common methods to the internal button
    focus() {
        this.button.focus();
    }
    
    blur() {
        this.button.blur();
    }
    
    click() {
        this.button.click();
    }
}

// Prevent double registration
if (!customElements.get('ui-button')) {
    customElements.define('ui-button', Button);
}

// Export for bundler
export default Button; 