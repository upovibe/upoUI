import App from '../../core/App.js';

/**
 * Components Page (/components)
 * 
 * Showcase of all available UI components
 */
class ComponentsPage extends App {
    render() {
        return `
            <div class="py-12">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">UI Components</h1>
                        <p class="text-xl text-gray-600">Explore our collection of reusable components</p>
                    </div>
                    
                    <!-- Button Component -->
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Buttons</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <h3 class="text-lg font-semibold mb-3">Variants</h3>
                                <div class="space-y-3">
                                    <upo-button text="Primary" variant="primary"></upo-button>
                                    <upo-button text="Secondary" variant="secondary"></upo-button>
                                    <upo-button text="Danger" variant="danger"></upo-button>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-3">Sizes</h3>
                                <div class="space-y-3">
                                    <upo-button text="Small" size="sm"></upo-button>
                                    <upo-button text="Medium" size="md"></upo-button>
                                    <upo-button text="Large" size="lg"></upo-button>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-3">States</h3>
                                <div class="space-y-3">
                                    <upo-button text="Normal" variant="primary"></upo-button>
                                    <upo-button text="Loading" variant="primary" loading="true"></upo-button>
                                    <upo-button text="Disabled" variant="primary" disabled="true"></upo-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Input Component -->
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Inputs</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 class="text-lg font-semibold mb-3">Basic Input</h3>
                                <ui-input placeholder="Enter your name"></ui-input>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-3">Email Input</h3>
                                <ui-input type="email" placeholder="Enter your email"></ui-input>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Box Component -->
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Boxes</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 class="text-lg font-semibold mb-3">Default Box</h3>
                                <ui-box>
                                    <p>This is content inside a box component.</p>
                                </ui-box>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-3">Custom Styled Box</h3>
                                <ui-box class="bg-blue-50 border-blue-200 text-blue-800">
                                    <p>This box has custom styling applied.</p>
                                </ui-box>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Link Component -->
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Links</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 class="text-lg font-semibold mb-3">Navigation Links</h3>
                                <div class="space-y-2">
                                    <ui-link href="/">Home</ui-link><br>
                                    <ui-link href="/about">About</ui-link><br>
                                    <ui-link href="/components">Components</ui-link>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-3">External Links</h3>
                                <div class="space-y-2">
                                    <ui-link href="https://github.com" target="_blank">GitHub</ui-link><br>
                                    <ui-link href="https://developer.mozilla.org" target="_blank">MDN Docs</ui-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Code Examples -->
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Usage Examples</h2>
                        <div class="space-y-6">
                            <div>
                                <h3 class="text-lg font-semibold mb-3">Button Usage</h3>
                                <pre class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"><code>&lt;upo-button text="Click me" variant="primary" size="md"&gt;&lt;/upo-button&gt;</code></pre>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-3">Input Usage</h3>
                                <pre class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"><code>&lt;ui-input type="email" placeholder="Enter email"&gt;&lt;/ui-input&gt;</code></pre>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-3">Box Usage</h3>
                                <pre class="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto"><code>&lt;ui-box class="custom-class"&gt;Content here&lt;/ui-box&gt;</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-components-page', ComponentsPage);
export default ComponentsPage; 