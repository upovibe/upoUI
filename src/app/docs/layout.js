import App from '../../core/App.js';
import '../../components/ui/Box.js';
import '../../components/layout/Header.js';

/**
 * Docs Section Layout
 * 
 * Provides a two-column layout with a sidebar for documentation pages,
 * all under the main application header.
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
                <app-header></app-header>
                <ui-box class="max-w-8xl mx-auto px-6 lg:px-8 flex pt-16">
                    <!-- Sidebar -->
                    <aside class="w-64 flex-shrink-0 py-8 pr-8 hidden md:block">
                        <nav class="flex flex-col space-y-2">
                            <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Getting Started</h3>
                            <a href="/docs" class="text-gray-700 hover:text-blue-600">Introduction</a>
                            <a href="/docs/installation" class="text-gray-500 hover:text-blue-600">Installation</a>
                            
                            <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2">Components</h3>
                            <a href="/docs/components" class="text-gray-500 hover:text-blue-600">Overview</a>
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