class CodeBlock extends HTMLElement {
    constructor() {
        super();
        this.pre = document.createElement('pre');
        this.code = document.createElement('code');
        this.pre.appendChild(this.code);
        this.appendChild(this.pre);
        this.addDefaultStyles();
    }

    connectedCallback() {
        // Use the 'code' attribute if present, otherwise use inner text
        const codeText = this.getAttribute('code') || this.textContent || '';
        this.code.textContent = codeText.trim();
        // Optionally, set language class for syntax highlighting
        if (this.hasAttribute('language')) {
            this.code.className = `language-${this.getAttribute('language')}`;
        }
    }

    addDefaultStyles() {
        if (!document.getElementById('upo-ui-codeblock-styles')) {
            const style = document.createElement('style');
            style.id = 'upo-ui-codeblock-styles';
            style.textContent = `
                pre {
                    background: #1a202c;
                    color: #f7fafc;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    overflow-x: auto;
                    font-size: 0.95em;
                    margin: 1em 0;
                }
                code {
                    background: none;
                    color: inherit;
                    font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

if (!customElements.get('ui-codeblock')) {
    customElements.define('ui-codeblock', CodeBlock);
}

export default CodeBlock; 