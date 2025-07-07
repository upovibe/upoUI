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
            <div>
                <h1 class="text-3xl font-bold text-gray-900">
                    Introduction to UPO UI
                </h1>
                <p class="mt-4 text-lg text-gray-600">
                    Welcome to the official documentation. UPO UI is a minimalist web framework
                    designed for speed and simplicity, with zero dependencies and no build step.
                </p>
                <p class="mt-4 text-lg text-gray-600">
                    Detailed documentation for each UI component will be available here.
                </p>
            </div>
        `;
    }
}

customElements.define('app-docs-index-page', DocsIndexPage);
export default DocsIndexPage; 