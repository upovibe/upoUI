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
            <ui-box id="sidebar-content-area" class="lg:ml-80 transition-all duration-300">
                <!-- Page Header -->
                <ui-box class="bg-white shadow-sm">
                    <ui-box class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">Components</h1>
                        <p class="text-xl text-gray-600">
                            Explore all available UPO UI components with live examples and code snippets.
                        </p>
                    </ui-box>
                </ui-box>
                
                <!-- Main Content -->
                <ui-box class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <p class="text-gray-600 text-center">
                        Click the menu button to toggle the sidebar. This is where your component content will go.
                    </p>
                    
                    <!-- Add some dummy content to test scrolling -->
                    <ui-box class="mt-8 space-y-4">
                        <p class="text-gray-600">This is some additional content to test scrolling...</p>
                        <p class="text-gray-600">Add more content here and the page should scroll normally while the sidebar stays fixed.</p>
                        <p class="text-gray-600">The sidebar content will scroll independently if it gets too long.</p>
                    </ui-box>

                    <!-- Add some dummy content to test scrolling -->
                    <ui-box class="mt-8 space-y-4">
                        <p class="text-gray-600">This is some additional content to test scrolling...</p>
                        <p class="text-gray-600">Add more content here and the page should scroll normally while the sidebar stays fixed.</p>
                        <p class="text-gray-600">The sidebar content will scroll independently if it gets too long.</p>
                    </ui-box>
                    
                    <!-- Add some dummy content to test scrolling -->
                    <ui-box class="mt-8 space-y-4">
                        <p class="text-gray-600">This is some additional content to test scrolling...</p>
                        <p class="text-gray-600">Add more content here and the page should scroll normally while the sidebar stays fixed.</p>
                        <p class="text-gray-600">The sidebar content will scroll independently if it gets too long.</p>
                    </ui-box>

                    <!-- Add some dummy content to test scrolling -->
                    <ui-box class="mt-8 space-y-4">
                        <p class="text-gray-600">This is some additional content to test scrolling...</p>
                        <p class="text-gray-600">Add more content here and the page should scroll normally while the sidebar stays fixed.</p>
                        <p class="text-gray-600">The sidebar content will scroll independently if it gets too long.</p>
                    </ui-box>

                    <!-- Add some dummy content to test scrolling -->
                    <ui-box class="mt-8 space-y-4">
                        <p class="text-gray-600">This is some additional content to test scrolling...</p>
                        <p class="text-gray-600">Add more content here and the page should scroll normally while the sidebar stays fixed.</p>
                        <p class="text-gray-600">The sidebar content will scroll independently if it gets too long.</p>
                    </ui-box>

                    <!-- Add some dummy content to test scrolling -->
                    <ui-box class="mt-8 space-y-4">
                        <p class="text-gray-600">This is some additional content to test scrolling...</p>
                        <p class="text-gray-600">Add more content here and the page should scroll normally while the sidebar stays fixed.</p>
                        <p class="text-gray-600">The sidebar content will scroll independently if it gets too long.</p>
                    </ui-box>

                    <!-- Add some dummy content to test scrolling -->
                    <ui-box class="mt-8 space-y-4">
                        <p class="text-gray-600">This is some additional content to test scrolling...</p>
                        <p class="text-gray-600">Add more content here and the page should scroll normally while the sidebar stays fixed.</p>
                        <p class="text-gray-600">The sidebar content will scroll independently if it gets too long.</p>
                    </ui-box>

                    <!-- Add some dummy content to test scrolling -->
                    <ui-box class="mt-8 space-y-4">
                        <p class="text-gray-600">This is some additional content to test scrolling...</p>
                        <p class="text-gray-600">Add more content here and the page should scroll normally while the sidebar stays fixed.</p>
                        <p class="text-gray-600">The sidebar content will scroll independently if it gets too long.</p>
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