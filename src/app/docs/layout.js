import App from '../../core/App.js';
import '../../components/ui/Box.js';

/**
 * Docs Section Layout
 * 
 * Provides a two-column layout with a sidebar for documentation pages.
 */
class DocsLayout extends App {

    setPageContent(htmlContent) {
        const outlet = this.querySelector('#docs-content-outlet');
        if (outlet) {
            outlet.innerHTML = htmlContent;
        }
    }

    render() {
        return `
            <ui-box class="w-full">
                <ui-box class="max-w-8xl mx-auto px-6 lg:px-8 flex">
                    <!-- Sidebar -->
                    <aside class="w-64 flex-shrink-0 py-8 pr-8 hidden md:block">
                        <nav class="flex flex-col space-y-2">
                            <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Getting Started</h3>
                            <a href="/docs" class="text-gray-700 hover:text-blue-600">Introduction</a>
                            
                            <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2">Components</h3>
                            <a href="/docs/buttons" class="text-gray-500 hover:text-blue-600">Buttons</a>
                            <a href="/docs/links" class="text-gray-500 hover:text-blue-600">Links</a>
                            <a href="/docs/inputs" class="text-gray-500 hover:text-blue-600">Inputs</a>
                            <a href="/docs/box" class="text-gray-500 hover:text-blue-600">Box</a>
                        </nav>
                    </aside>

                    <!-- Main Content -->
                    <main id="docs-content-outlet" class="flex-grow py-8 w-full">
                        <!-- Page content will be injected here -->
                    </main>
                </ui-box>
            </ui-box>
        `;
    }
}

customElements.define('app-docs-layout', DocsLayout);
export default DocsLayout; 