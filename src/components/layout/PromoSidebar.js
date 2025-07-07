import App from '../../core/App.js';
import '../ui/Box.js';
import '../ui/Link.js';

/**
 * Promotional Sidebar Component
 * 
 * A simple sidebar card that provides a call-to-action link to a GitHub repository.
 */
class PromoSidebar extends App {
    render() {
        return `
            <aside class="w-56 flex-shrink-0 p-4 hidden lg:block">
                <ui-box class="bg-gray-100 border-gray-200 p-4 rounded-lg text-center">
                    <h4 class="text-sm font-semibold text-gray-800 mb-2">Enjoying UPO UI?</h4>
                    <p class="text-xs text-gray-600 mb-4">
                        Star the repository on GitHub to show your support!
                    </p>
                    <ui-link 
                        href="https://github.com/upovibe/upoUI"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="bg-gray-900 text-white text-xs font-bold py-2 px-3 rounded-md hover:bg-gray-700 transition-colors no-underline inline-flex items-center"
                    >
                        <i class="fab fa-github mr-2"></i>
                        Star on GitHub
                    </ui-link>
                </ui-box>
            </aside>
        `;
    }
}

customElements.define('app-promo-sidebar', PromoSidebar);
export default PromoSidebar; 