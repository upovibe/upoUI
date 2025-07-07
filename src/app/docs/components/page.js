import App from '../../../core/App.js';
import '../../../components/ui/Box.js';

/**
 * Docs Components Page
 * 
 * A placeholder page for the component showcase.
 */
class DocsComponentsPage extends App {

    connectedCallback() {
        super.connectedCallback();
        document.title = 'Components | UPO UI Docs';
    }

    render() {
        return `
            <div>
                <h1 class="text-3xl font-bold text-gray-900">
                    Components
                </h1>
                <p class="mt-4 text-lg text-gray-600">
                    Detailed documentation for each UI component will be available here.
                </p>
            </div>
        `;
    }
}

customElements.define('app-docs-components-page', DocsComponentsPage);
export default DocsComponentsPage;
