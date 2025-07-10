import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class SwitchDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Switch | UPO UI Docs';
    }

    render() {
        return `
            <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-4">Switch Component</h1>
                <p class="text-lg text-gray-600">
                    A toggle switch component for boolean state management with smooth animations.
                </p>
            </div>
        `;
    }
}

customElements.define('app-switch-docs-page', SwitchDocsPage);
export default SwitchDocsPage; 