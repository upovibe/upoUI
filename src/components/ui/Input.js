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
                
                /* Date picker input styles */
                .upo-input-date-picker {
                    position: relative;
                    display: inline-block;
                    width: 100%;
                }
                
                .upo-input-date-picker .upo-input-default {
                    padding-right: 2.5rem;
                }
                
                .upo-input-date-picker .calendar-icon {
                    position: absolute;
                    right: 0.75rem;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 1rem;
                    height: 1rem;
                    color: #374151;
                    cursor: pointer;
                    transition: color 0.15s ease-in-out;
                    z-index: 10;
                }
                
                .upo-input-date-picker:hover .calendar-icon {
                    color: #9ca3af;
                }
                
                .upo-input-date-picker:focus-within .calendar-icon {
                    color: #3b82f6;
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
        
        // Check if this is a date picker input
        this.checkDatePicker();
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
    
    checkDatePicker() {
        const isDatePicker = this.input.classList.contains('date-picker') || 
                           this.input.classList.contains('upo-datepicker-input') ||
                           this.input.hasAttribute('data-date-picker') ||
                           this.input.getAttribute('type') === 'date' ||
                           this.input.getAttribute('type') === 'datetime-local';
        
        if (isDatePicker) {
            // Add date picker wrapper class
            this.classList.add('upo-input-date-picker');
            
            // Add calendar icon
            const icon = document.createElement('svg');
            icon.className = 'calendar-icon';
            icon.setAttribute('viewBox', '0 0 20 20');
            icon.setAttribute('fill', 'currentColor');
            icon.innerHTML = '<path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />';
            
            // Add click event to the icon to trigger calendar dropdown
            icon.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling
                // Dispatch a custom event that the date picker can listen for
                this.dispatchEvent(new CustomEvent('calendar-icon-click', {
                    bubbles: true,
                    detail: { input: this }
                }));
            });
            
            this.appendChild(icon);
        }
    }
    
    // Blur method
    blur() {
        this.input.blur();
    }
}

    customElements.define('ui-input', Input);
export default Input; 