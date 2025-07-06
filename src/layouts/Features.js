class Features extends HTMLElement {
    constructor() {
        super();
        
        // Flag to prevent double processing
        this.initialized = false;
    }
    
    // Connected callback - called when element is added to DOM
    connectedCallback() {
        // Prevent double processing
        if (this.initialized) return;
        this.initialized = true;
        
        // Create the features section using our UI components
        this.innerHTML = `
            <ui-box class="py-20">
                <ui-box class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ui-box class="text-center mb-16">
                        <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose UPO UI?</h2>
                        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                            Built for developers who want professional components with zero compromise on flexibility.
                        </p>
                    </ui-box>
                    
                    <ui-box class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- Feature 1 -->
                        <ui-box class="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <ui-box class="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span class="text-2xl">🚀</span>
                            </ui-box>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Zero Dependencies</h3>
                            <p class="text-gray-600">Pure vanilla JavaScript. No frameworks, no build tools required.</p>
                        </ui-box>
                        
                        <!-- Feature 2 -->
                        <ui-box class="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <ui-box class="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span class="text-2xl">🎨</span>
                            </ui-box>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Framework Ready</h3>
                            <p class="text-gray-600">Works with Tailwind, Bootstrap, or any CSS framework seamlessly.</p>
                        </ui-box>
                        
                        <!-- Feature 3 -->
                        <ui-box class="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <ui-box class="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span class="text-2xl">✨</span>
                            </ui-box>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Beautiful Defaults</h3>
                            <p class="text-gray-600">Professional styling out of the box, complete control when needed.</p>
                        </ui-box>
                        
                        <!-- Feature 4 -->
                        <ui-box class="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <ui-box class="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <span class="text-2xl">⚡</span>
                            </ui-box>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Lightweight</h3>
                            <p class="text-gray-600">Minimal footprint with maximum functionality and performance.</p>
                        </ui-box>
                    </ui-box>
                </ui-box>
            </ui-box>
        `;
    }
}

// Prevent double registration
if (!customElements.get('app-features')) {
    customElements.define('app-features', Features);
}

// Export for bundler
export default Features; 