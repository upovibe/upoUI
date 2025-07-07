import App from '../../../core/App.js';
import '../../../components/ui/Box.js';

/**
 * Docs Installation Page
 * 
 * A placeholder page for installation instructions.
 */
class InstallationPage extends App {

    connectedCallback() {
        super.connectedCallback();
        document.title = 'Installation | UPO UI Docs';
    }

    render() {
        return `
            <div>
                <h1 class="text-3xl font-bold text-gray-900">
                    Installation
                </h1>
                <p class="mt-4 text-lg text-gray-600">
                    Installation instructions will be documented here.
                </p>
            </div>
        `;
    }
}

customElements.define('app-installation-page', InstallationPage);
export default InstallationPage;
