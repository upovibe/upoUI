import App from '../app.js';

class AboutPage extends App {
    render() {
        return `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">About UPO UI</h1>
                <p class="text-lg text-gray-600">
                    UPO UI is a lightweight, dependency-free web component framework designed for simplicity and speed.
                </p>
            </div>
        `;
    }
}

customElements.define('page-about', AboutPage);
export default AboutPage;