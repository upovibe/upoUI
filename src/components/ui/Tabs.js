class TabList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: flex;
                    gap: 0.125rem;
                    padding: 0.25rem;
                    background: rgba(243, 244, 246, 0.6);
                    backdrop-filter: blur(8px);
                    border-radius: 0.5rem;
                    border: 1px solid rgba(229, 231, 235, 0.8);
                    width: fit-content;
                }
            </style>
            <slot></slot>
        `;
        
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

class Tab extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                button {
                    padding: 0.375rem 0.875rem;
                    border: none;
                    background: transparent;
                    cursor: pointer;
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: #6b7280;
                    border-radius: 0.375rem;
                    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
                    outline: none;
                    position: relative;
                    white-space: nowrap;
                    letter-spacing: 0.025em;
                    min-width: fit-content;
                    text-align: center;
                }
                button:hover {
                    color: #374151;
                    background: rgba(255, 255, 255, 0.7);
                }
                button:focus {
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
                }
                :host([active]) button {
                    color: #1f2937;
                    background: #ffffff;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
                    font-weight: 500;
                    text-shadow: 0 0 1px rgba(31, 41, 55, 0.2);
                }
            </style>
            <button type="button">
                <slot></slot>
            </button>
        `;
        
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.button = this.shadowRoot.querySelector('button');
    }
    
    connectedCallback() {
        this.button.addEventListener('click', this._handleClick.bind(this));
    }
    
    disconnectedCallback() {
        this.button.removeEventListener('click', this._handleClick.bind(this));
    }
    
    _handleClick() {
        const tabsContainer = this.closest('ui-tabs');
        if (tabsContainer) {
            tabsContainer.setActiveTab(this.getAttribute('value'));
        }
    }
}

class TabPanel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: none;
                    padding: 1.25rem;
                    background: #ffffff;
                    border: 1px solid rgba(229, 231, 235, 0.8);
                    border-radius: 0.5rem;
                    margin-top: 0.75rem;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                }
                :host([active]) {
                    display: block;
                }
            </style>
            <slot></slot>
        `;
        
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

class Tabs extends HTMLElement {
    constructor() {
        super();
        this.currentTab = null;
    }
    
    connectedCallback() {
        // Set the first tab as active by default if no active tab is specified
        setTimeout(() => {
            if (!this.currentTab) {
                const firstTab = this.querySelector('ui-tab');
                if (firstTab) {
                    this.setActiveTab(firstTab.getAttribute('value'));
                }
            }
        }, 0);
    }
    
    setActiveTab(value) {
        this.currentTab = value;
        
        // Update tabs
        const tabs = this.querySelectorAll('ui-tab');
        tabs.forEach(tab => {
            if (tab.getAttribute('value') === value) {
                tab.setAttribute('active', '');
            } else {
                tab.removeAttribute('active');
            }
        });
        
        // Update panels
        const panels = this.querySelectorAll('ui-tab-panel');
        panels.forEach(panel => {
            if (panel.getAttribute('value') === value) {
                panel.setAttribute('active', '');
            } else {
                panel.removeAttribute('active');
            }
        });
    }
}

// Define custom elements
if (!customElements.get('ui-tab-list')) {
    customElements.define('ui-tab-list', TabList);
}
if (!customElements.get('ui-tab')) {
    customElements.define('ui-tab', Tab);
}
if (!customElements.get('ui-tab-panel')) {
    customElements.define('ui-tab-panel', TabPanel);
}
if (!customElements.get('ui-tabs')) {
    customElements.define('ui-tabs', Tabs);
}

export default Tabs; 