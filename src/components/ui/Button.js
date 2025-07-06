class Button extends HTMLElement {
    constructor() {
        super();
        
        // This will be determined in connectedCallback
        this.element = null; 
        
        // Flag to prevent double processing
        this.initialized = false;
        
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

        // Smartly choose between <a> and <button> based on href attribute
        if (this.hasAttribute('href')) {
            this.element = document.createElement('a');
        } else {
            this.element = document.createElement('button');
        }
        this.appendChild(this.element);
        
        // Move any existing children (except our element) to the internal element
        const children = Array.from(this.childNodes);
        children.forEach(child => {
            if (child !== this.element) {
                this.element.appendChild(child);
            }
        });
        
        // Check if user provided classes
        const hasUserClass = this.hasAttribute('class');
        
        // Apply default class if no user classes
        if (!hasUserClass) {
            this.element.className = 'upo-button-default';
        }
        
        // Transfer all attributes to the internal element (same as other components)
        const attributes = this.getAttributeNames();
        
        attributes.forEach(attr => {
            const value = this.getAttribute(attr);
            if (attr === 'class' && hasUserClass) {
                // Override default class with user classes
                this.element.className = value;
            } else {
                this.element.setAttribute(attr, value);
            }
        });
        
        // Remove all attributes from the wrapper to avoid duplication
        attributes.forEach(attr => {
            this.removeAttribute(attr);
        });
    }
    
    // Forward common methods to the internal element
    focus() {
        this.element.focus();
    }
    
    blur() {
        this.element.blur();
    }
    
    click() {
        this.element.click();
    }
}

// Prevent double registration
if (!customElements.get('ui-button')) {
    customElements.define('ui-button', Button);
}

// Export for bundler
export default Button; 