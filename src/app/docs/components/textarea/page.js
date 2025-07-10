import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class TextareaDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Textarea | UPO UI Docs';
    }

    render() {
        return `
            <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-4">Textarea Component</h1>
                <p class="text-lg text-gray-600">
                    A flexible textarea component for multi-line text input with various styling options and validation support.
                </p>
            </div>
        `;
    }
}

customElements.define('app-textarea-docs-page', TextareaDocsPage);
export default TextareaDocsPage; 