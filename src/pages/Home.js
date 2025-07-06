import App from '../app.js';

class HomePage extends App {
    render() {
        return `
            <div class="min-h-screen bg-gray-50">
                <!-- Hero Section -->
                <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div class="text-center">
                            <h1 class="text-4xl md:text-6xl font-bold mb-6">
                                Welcome to UPO UI
                            </h1>
                            <p class="text-xl md:text-2xl mb-8 opacity-90">
                                Ultra Minimal Web Components Framework
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    Get Started
                                </button>
                                <button class="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                                    View Components
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Features Section -->
                <div class="py-20">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">
                                Why Choose UPO UI?
                            </h2>
                            <p class="text-xl text-gray-600">
                                Simple, fast, and powerful web components
                            </p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div class="text-center p-6">
                                <div class="text-4xl mb-4">⚡</div>
                                <h3 class="text-xl font-semibold mb-3">No Build Step</h3>
                                <p class="text-gray-600">Clone and start immediately. No npm, no webpack, no complexity.</p>
                            </div>
                            
                            <div class="text-center p-6">
                                <div class="text-4xl mb-4">🎨</div>
                                <h3 class="text-xl font-semibold mb-3">CSS Framework Agnostic</h3>
                                <p class="text-gray-600">Works with Tailwind, Bootstrap, or any CSS framework.</p>
                            </div>
                            
                            <div class="text-center p-6">
                                <div class="text-4xl mb-4">🚀</div>
                                <h3 class="text-xl font-semibold mb-3">Modern & Simple</h3>
                                <p class="text-gray-600">Web components with reactive state management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('page-home', HomePage);
export default HomePage; 