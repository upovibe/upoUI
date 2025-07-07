import App from '../../core/App.js';
import '../ui/Link.js';

/**
 * 📚 Docs Sidebar Component
 *
 * Displays the navigation links for UPO UI documentation.
 * Organized by section (e.g., Getting Started, Components).
 */
class Sidebar extends App {
    render() {
        const currentPath = window.location.pathname;
        
        const getLinkClass = (path) => {
            const baseClass = "text-sm font-medium transition-colors block px-3 py-1 rounded-md";
            if (currentPath === path) {
                return `${baseClass} bg-blue-100 text-blue-700`;
            }
            return `${baseClass} text-gray-700 hover:bg-gray-100 hover:text-gray-900`;
        };

        return `
            <aside class="hidden md:block p-6 w-64 border-r border-gray-200">
                <nav class="flex flex-col space-y-6">

                    <!-- Getting Started Section -->
                    <section class="space-y-2">
                        <h3 class="text-xs uppercase tracking-wide font-semibold text-gray-500">
                            Getting Started
                        </h3>
                        <div class="flex flex-col space-y-1">
                            <ui-link href="/docs" class="${getLinkClass('/docs')}">
                                Introduction
                            </ui-link>
                            <ui-link href="/docs/installation" class="${getLinkClass('/docs/installation')}">
                                Installation
                            </ui-link>
                        </div>
                    </section>

                    <!-- Components Section -->
                    <section class="space-y-2">
                        <h3 class="text-xs uppercase tracking-wide font-semibold text-gray-500">
                            Components
                        </h3>
                        <div class="flex flex-col space-y-1">
                            <ui-link href="/docs/components" class="${getLinkClass('/docs/components')}">
                                Overview
                            </ui-link>
                        </div>
                    </section>

                </nav>
            </aside>
        `;
    }
}

customElements.define('app-sidebar', Sidebar);
export default Sidebar;
