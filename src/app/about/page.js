import App from '../../core/App.js';

/**
 * About Page Component (/about)
 * 
 * Information about UPO UI framework
 */
class AboutPage extends App {
    render() {
        return `
            <div class="py-12">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">About UPO UI</h1>
                        <p class="text-xl text-gray-600">Ultra Minimal Web Components Framework</p>
                    </div>
                    
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-4">What is UPO UI?</h2>
                        <p class="text-gray-700 mb-4">
                            UPO UI is an ultra-minimal web components framework designed to make building reactive 
                            web applications simple and straightforward. With zero dependencies and no build step required, 
                            you can start building immediately.
                        </p>
                        <p class="text-gray-700">
                            It provides a clean, organized architecture similar to modern frameworks like Next.js, 
                            but using vanilla JavaScript and web standards.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">🎯 Features</h3>
                            <ul class="space-y-2 text-gray-700">
                                <li>• Zero dependencies</li>
                                <li>• No build step required</li>
                                <li>• Reactive components</li>
                                <li>• Clean architecture</li>
                                <li>• CSS framework agnostic</li>
                                <li>• Modern routing system</li>
                            </ul>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">🛠️ Architecture</h3>
                            <ul class="space-y-2 text-gray-700">
                                <li>• App-based structure</li>
                                <li>• Layout system</li>
                                <li>• Component organization</li>
                                <li>• Dynamic routing</li>
                                <li>• Core framework separation</li>
                                <li>• Modular design</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <a href="/components" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Explore Components
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-about-page', AboutPage);
export default AboutPage; 