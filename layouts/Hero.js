class Hero extends HTMLElement {
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
        
        // Create the hero section using our UI components
        this.innerHTML = `
            <ui-box class="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                <ui-box class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <ui-box class="text-center">
                        <h1 class="text-5xl md:text-6xl font-bold mb-6">
                            Build Beautiful UIs
                            <span class="block text-blue-200">With UPO UI</span>
                        </h1>
                        <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            A lightweight, framework-agnostic web component library with beautiful defaults and complete customization freedom.
                        </p>
                        <ui-box class="flex flex-col sm:flex-row gap-4 justify-center">
                            <ui-button class="px-8 py-4 text-lg bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold">
                                Get Started
                            </ui-button>
                            <ui-button class="px-8 py-4 text-lg border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 font-semibold">
                                View Components
                            </ui-button>
                        </ui-box>
                    </ui-box>
                </ui-box>
            </ui-box>
        `;
    }
}

// Prevent double registration
if (!customElements.get('app-hero')) {
    customElements.define('app-hero', Hero);
}

// Export for bundler
export default Hero; 