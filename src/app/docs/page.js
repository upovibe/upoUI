import App from '../../core/App.js';
import '../../components/ui/Box.js';

/**
 * Docs Index Page
 * 
 * The main landing page for the documentation section.
 */
class DocsIndexPage extends App {

    connectedCallback() {
        super.connectedCallback();
        document.title = 'Documentation | UPO UI';
    }

    render() {
        return `
            <ui-box class="bg-white p-8 rounded-lg shadow-sm">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Introduction to UPO UI
                </h1>
                <p class="mt-6 text-lg text-gray-600">
                    Welcome to the official documentation. UPO UI is a minimalist web framework
                    designed for speed and simplicity, with zero dependencies and no build step.
                </p>
                <p class="mt-4 text-lg text-gray-600">
                    Use the sidebar navigation to explore the available components and learn how to use them in your projects.
                </p>
            </ui-box>
        `;
    }
}

customElements.define('app-docs-index-page', DocsIndexPage);
export default DocsIndexPage; 