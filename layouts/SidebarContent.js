class SidebarContent extends HTMLElement {
    constructor() {
        super();
        
        // Flag to prevent double processing
        this.initialized = false;
    }
    
    // Load UPO UI components
    loadComponents() {
        if (!document.querySelector('script[src="components/bundle.js"]')) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'components/bundle.js';
            document.head.appendChild(script);
        }
    }
    
    // Connected callback - called when element is added to DOM
    connectedCallback() {
        // Prevent double processing
        if (this.initialized) return;
        this.initialized = true;
        
        // Load UPO UI components
        this.loadComponents();
        
        // Create the sidebar content layout using our UI components
        this.innerHTML = `
            <!-- Sidebar Content Area -->
            <ui-box id="sidebar-content-area" class="lg:ml-80 transition-all duration-300 bg-white">
                <!-- Page Header -->
                <ui-box class="shadow-sm">
                    <ui-box class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">Components</h1>
                        <p class="text-xl text-gray-600">
                            Explore all available UPO UI components with live examples and code snippets.
                        </p>
                    </ui-box>
                </ui-box>
            </ui-box>
        `;
    }
}

// Prevent double registration
if (!customElements.get('app-sidebar-content')) {
    customElements.define('app-sidebar-content', SidebarContent);
}

// Export for bundler
export default SidebarContent; 