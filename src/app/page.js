import App from '../core/App.js';

/**
 * Root Page Component (/)
 * 
 * This is the home page of the application.
 * It now renders within the global RootLayout.
 */
class RootPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Home | UPO UI';
    }

    render() {
        return `
            <div class="bg-gray-50">
                <!-- Features Section -->
                <div class="py-20">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Ultra Minimal & Modern
                            </h1>
                            <p class="text-xl md:text-2xl text-gray-600">
                                A simple, fast, and powerful web components framework.
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

                        <!-- App Architecture Info -->
                        <div class="mt-20 text-center">
                            <h2 class="text-3xl font-bold text-gray-900 mb-8">
                                🏗️ Clean Architecture
                            </h2>
                            <div class="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                                <div class="text-left">
                                    <h3 class="text-lg font-semibold mb-4">Organized Folder Structure:</h3>
                                    <pre class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
src/
├── app/                    # 📱 Main app directory
│   ├── layout.js          # Root layout (wraps all pages)
│   ├── page.js           # Home page (/)
│   ├── about/
│   │   └── page.js       # About page (/about)
│   ├── components/
│   │   └── page.js       # Components page (/components)
│   └── [dynamic]/        # Dynamic routes
│       └── page.js       # Dynamic page template
│
├── core/                  # 🧠 Framework core
│   ├── App.js            # Base component class
│   └── Router.js         # Router logic
│
├── components/           # 🎨 UI components
│   ├── ui/              # Basic UI elements
│   └── layout/          # Layout components
│
└── assets/              # 📁 Static assets
                                    </pre>
                                </div>
                                <div class="mt-6 text-center">
                                    <p class="text-gray-600">
                                        Similar to Next.js App Router, but with vanilla JavaScript!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-root-page', RootPage);
export default RootPage; 