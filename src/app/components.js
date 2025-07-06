import App from '../core/App.js';
import '../components/ui/Box.js';

/**
 * Components Page
 * 
 * A placeholder page for UI components.
 */
class ComponentsPage extends App {

    connectedCallback() {
        super.connectedCallback();
        document.title = 'Components | UPO UI';
    }

    render() {
        return `
            <ui-box class="bg-white py-20">
                <ui-box class="max-w-7xl mx-auto px-6 lg:px-8">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Component Page
                    </h1>
                </ui-box>
            </ui-box>
        `;
    }
}

customElements.define('app-components-page', ComponentsPage);
export default ComponentsPage; 