// Accordion Item Component
class AccordionItem extends HTMLElement {
    constructor() {
        super();
        this.header = document.createElement('div');
        this.content = document.createElement('div');
        this.header.className = 'upo-accordion-header';
        this.content.className = 'upo-accordion-content';
        this.appendChild(this.header);
        this.appendChild(this.content);
    }

    connectedCallback() {
        // Set header text from attribute
        this.header.textContent = this.getAttribute('title') || 'Section';
        // Set content from inner HTML
        this.content.innerHTML = this.innerHTML;
        // Only show content if open attribute is present
        this.content.style.display = this.hasAttribute('open') ? 'block' : 'none';
        // Toggle on header click
        this.header.onclick = () => {
            const isOpen = this.hasAttribute('open');
            if (isOpen) {
                this.removeAttribute('open');
                this.content.style.display = 'none';
            } else {
                this.setAttribute('open', '');
                this.content.style.display = 'block';
            }
        };
        this.addDefaultStyles();
    }

    static get observedAttributes() {
        return ['open', 'title'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
            this.content.style.display = this.hasAttribute('open') ? 'block' : 'none';
        }
        if (name === 'title') {
            this.header.textContent = newValue || 'Section';
        }
    }

    addDefaultStyles() {
        if (!document.getElementById('upo-accordion-styles')) {
            const style = document.createElement('style');
            style.id = 'upo-accordion-styles';
            style.textContent = `
                .upo-accordion-header {
                    cursor: pointer;
                    padding: 1rem;
                    background: #f3f4f6;
                    border: 1px solid #e5e7eb;
                    border-radius: 0.375rem 0.375rem 0 0;
                    font-weight: 600;
                    transition: background 0.2s;
                }
                .upo-accordion-header:hover {
                    background: #e5e7eb;
                }
                .upo-accordion-content {
                    padding: 1rem;
                    border: 1px solid #e5e7eb;
                    border-top: none;
                    border-radius: 0 0 0.375rem 0.375rem;
                    background: #fff;
                }
            `;
            document.head.appendChild(style);
        }
    }
}
if (!customElements.get('ui-accordion-item')) {
    customElements.define('ui-accordion-item', AccordionItem);
}

// Accordion Container Component
class Accordion extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // Optionally, could add logic for single-open mode, etc.
    }
}
if (!customElements.get('ui-accordion')) {
    customElements.define('ui-accordion', Accordion);
}

export default Accordion; 