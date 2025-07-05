class Input extends HTMLElement {
    constructor() {
        super();
        
        // Create the input element directly (no shadow DOM)
        this.input = document.createElement('input');
        
        // Add the input to the component
        this.appendChild(this.input);
        
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
    
    // Connected callback - called when element is added to DOM
    connectedCallback() {
        // Transfer all attributes to the internal input
        const attributes = this.getAttributeNames();
        
        attributes.forEach(attr => {
            const value = this.getAttribute(attr);
            this.input.setAttribute(attr, value);
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

// Define the custom element
customElements.define('ui-input', Input);

// Export for bundler
export default Input;
