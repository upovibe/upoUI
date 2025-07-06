class Footer extends HTMLElement {
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
        
        // Create the footer section using our UI components
        this.innerHTML = `
            <ui-box class="bg-gray-900 text-white py-12">
                <ui-box class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ui-box class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <ui-box class="bg-transparent">
                            <h3 class="text-lg font-semibold mb-4">UPO UI</h3>
                            <p class="text-gray-400">
                                Modern web components for the modern web.
                            </p>
                        </ui-box>
                        <ui-box class="bg-transparent">
                            <h4 class="font-semibold mb-4">Components</h4>
                            <ui-box class="space-y-2">
                                <ui-link href="#" class="block text-gray-400 hover:text-white no-underline">Input</ui-link>
                                <ui-link href="#" class="block text-gray-400 hover:text-white no-underline">Button</ui-link>
                                <ui-link href="#" class="block text-gray-400 hover:text-white no-underline">Box</ui-link>
                                <ui-link href="#" class="block text-gray-400 hover:text-white no-underline">Link</ui-link>
                            </ui-box>
                        </ui-box>
                        <ui-box class="bg-transparent">
                            <h4 class="font-semibold mb-4">Resources</h4>
                            <ui-box class="space-y-2">
                                <ui-link href="#" class="block text-gray-400 hover:text-white no-underline">Documentation</ui-link>
                                <ui-link href="#" class="block text-gray-400 hover:text-white no-underline">Examples</ui-link>
                                <ui-link href="#" class="block text-gray-400 hover:text-white no-underline">GitHub</ui-link>
                            </ui-box>
                        </ui-box>
                        <ui-box class="bg-transparent">
                            <h4 class="font-semibold mb-4">Support</h4>
                            <ui-box class="space-y-2">
                                <ui-link href="#" class="block text-gray-400 hover:text-white no-underline">Help Center</ui-link>
                                <ui-link href="#" class="block text-gray-400 hover:text-white no-underline">Contact</ui-link>
                                <ui-link href="#" class="block text-gray-400 hover:text-white no-underline">Community</ui-link>
                            </ui-box>
                        </ui-box>
                    </ui-box>
                    <ui-box class="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p class="text-gray-400">
                            © 2024 UPO UI. Made with ❤️ using Vanilla JavaScript Web Components.
                        </p>
                    </ui-box>
                </ui-box>
            </ui-box>
        `;
    }
}

// Prevent double registration
if (!customElements.get('app-footer')) {
    customElements.define('app-footer', Footer);
}

// Export for bundler
export default Footer; 