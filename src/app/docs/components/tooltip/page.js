import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class TooltipDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Tooltip | UPO UI Docs';
    }

    render() {
        return `
            <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-4">Tooltip Component</h1>
                <p class="text-lg text-gray-600">
                    A tooltip component that displays helpful information when hovering over elements.
                </p>
            </div>
        `;
    }
}

customElements.define('app-tooltip-docs-page', TooltipDocsPage);
export default TooltipDocsPage; 