import App from '../../core/App.js';

/**
 * Footer Component
 * 
 * Inherits from the core App class to provide a consistent
 * component structure.
 */
class Footer extends App {
    render() {
        return `
            <footer class="bg-gray-900 text-white">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold mb-4">UPO UI</h3>
                            <p class="text-gray-400">
                                A lightweight, dependency-free component system.
                            </p>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Quick Links</h4>
                            <ul class="space-y-2">
                                <li><a href="/" class="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="/about" class="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="/components" class="text-gray-400 hover:text-white">Components</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Resources</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white">Documentation</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">GitHub</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Legal</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 UPO UI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('app-footer', Footer);
export default Footer; 