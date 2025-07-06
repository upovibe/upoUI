import App from '../app.js';

class ComponentsPage extends App {
    render() {
        return `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">Components</h1>
                <p class="text-lg text-gray-600">
                    This is where you can showcase all the custom components available in UPO UI.
                </p>
            </div>
        `;
    }
}

customElements.define('page-components', ComponentsPage);
export default ComponentsPage;