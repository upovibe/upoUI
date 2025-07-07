class AccordionItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        // Create template
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .upo-accordion-header {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    padding: 0.5rem 1rem;
                    background: #fff;
                    border: none;
                    border-bottom: 1px solid #e5e7eb;
                    font-weight: 500;
                    font-size: 1rem;
                    color: #22223b;
                    transition: background 0.2s, color 0.2s, border-radius 0.2s;
                    outline: none;
                    gap: 0.5rem;
                    border-radius: 0.375rem 0.375rem 0 0;
                }
                .upo-accordion-header:focus {
                    box-shadow: none;
                    background: #f6f8fa;
                }
                .upo-accordion-header:hover {
                    background: #f6f8fa;
                    color: #3b82f6;
                }
                :host([open]) .upo-accordion-header {
                    background: #f6f8fa;
                    border-radius: 0.375rem 0.375rem 0 0;
                }
                .upo-accordion-title {
                    flex: 1;
                    text-align: left;
                }
                .upo-accordion-chevron {
                    transition: transform 0.2s;
                    color: #6b7280;
                    font-size: 1.1em;
                }
                .upo-accordion-content {
                    padding: 0.75rem 1rem;
                    background: #fafbfc;
                    font-size: 0.98rem;
                    color: #22223b;
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    border-bottom: 1px solid #e5e7eb;
                    border-radius: 0 0 0.375rem 0.375rem;
                    transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s, border-radius 0.2s;
                }
                :host([open]) .upo-accordion-content {
                    opacity: 1;
                    max-height: var(--content-height, 1000px);
                    border-radius: 0 0 0.375rem 0.375rem;
                }
            </style>
            <button class="upo-accordion-header" type="button" tabindex="0">
                <span class="upo-accordion-title"></span>
                <span class="upo-accordion-chevron" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 8 10 12 14 8"/></svg>
                </span>
            </button>
            <div class="upo-accordion-content">
                <slot></slot>
            </div>
        `;
        
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.header = this.shadowRoot.querySelector('.upo-accordion-header');
        this.content = this.shadowRoot.querySelector('.upo-accordion-content');
        this._onHeaderClick = this._onHeaderClick.bind(this);
        this._onHeaderKeyDown = this._onHeaderKeyDown.bind(this);
    }

    connectedCallback() {
        this.renderHeader();
        this.updateContentHeight();
        
        this.header.addEventListener('click', this._onHeaderClick);
        this.header.addEventListener('keydown', this._onHeaderKeyDown);
        
        // Observe slot changes
        const slot = this.shadowRoot.querySelector('slot');
        slot.addEventListener('slotchange', () => this.updateContentHeight());
    }

    disconnectedCallback() {
        this.header.removeEventListener('click', this._onHeaderClick);
        this.header.removeEventListener('keydown', this._onHeaderKeyDown);
    }

    static get observedAttributes() {
        return ['open', 'title'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
            this.updateContentHeight();
            this.header.setAttribute('aria-expanded', this.hasAttribute('open'));
            const chevron = this.shadowRoot.querySelector('.upo-accordion-chevron');
            if (chevron) {
                chevron.style.transform = this.hasAttribute('open') ? 'rotate(90deg)' : 'rotate(0deg)';
            }
        }
        if (name === 'title') {
            this.renderHeader();
        }
    }

    renderHeader() {
        const title = this.getAttribute('title') || 'Section';
        const titleElement = this.shadowRoot.querySelector('.upo-accordion-title');
        if (titleElement) {
            titleElement.textContent = title;
        }
        
        const chevron = this.shadowRoot.querySelector('.upo-accordion-chevron');
        if (chevron) {
            chevron.style.transform = this.hasAttribute('open') ? 'rotate(90deg)' : 'rotate(0deg)';
        }
    }

    updateContentHeight() {
        if (this.hasAttribute('open')) {
            // Calculate the actual content height
            const slot = this.shadowRoot.querySelector('slot');
            const assignedNodes = slot.assignedNodes({ flatten: true });
            let height = 0;
            
            assignedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    height += node.offsetHeight;
                }
            });
            
            this.content.style.setProperty('--content-height', `${height}px`);
            this.content.style.maxHeight = 'var(--content-height)';
            this.content.style.opacity = '1';
        } else {
            this.content.style.maxHeight = '0';
            this.content.style.opacity = '0';
        }
    }

    _onHeaderClick() {
        // Check if parent accordion has "single" attribute
        const accordion = this.closest('ui-accordion');
        if (accordion && accordion.hasAttribute('single')) {
            // Close all other accordion items in this accordion
            const allItems = accordion.querySelectorAll('ui-accordion-item');
            allItems.forEach(item => {
                if (item !== this) {
                    item.removeAttribute('open');
                }
            });
            
            // If this item was already open, close it; otherwise open it
            if (this.hasAttribute('open')) {
                this.removeAttribute('open');
            } else {
                this.setAttribute('open', '');
            }
        } else {
            // Normal behavior - just toggle
            this.toggleAttribute('open');
        }
    }

    _onHeaderKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this._onHeaderClick();
        }
    }
}

customElements.define('ui-accordion-item', AccordionItem);

class Accordion extends HTMLElement {
    constructor() {
        super();
    }
    
    static get observedAttributes() {
        return ['single'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'single') {
            // If single attribute is added and multiple items are open, close all but the first
            if (this.hasAttribute('single')) {
                const openItems = this.querySelectorAll('ui-accordion-item[open]');
                if (openItems.length > 1) {
                    // Keep only the first open item
                    for (let i = 1; i < openItems.length; i++) {
                        openItems[i].removeAttribute('open');
                    }
                }
            }
        }
    }
}

customElements.define('ui-accordion', Accordion);

export default Accordion;