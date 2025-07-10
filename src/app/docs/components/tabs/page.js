import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Tabs.js';
import '@/components/ui/Box.js';

class TabsDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Tabs | UPO UI Docs';
    }

    render() {
        return `
            <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-4">Tabs Component</h1>
                <p class="text-lg text-gray-600">
                    This is a simple tabs component documentation page.
                </p>
            </div>
        `;
    }
}

customElements.define('app-tabs-docs-page', TabsDocsPage);
export default TabsDocsPage; 