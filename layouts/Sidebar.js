class Sidebar extends HTMLElement {
    constructor() {
        super();
        
        // Flag to prevent double processing
        this.initialized = false;
        this.isOpen = false;
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
        
        // Create the sidebar layout using our UI components
        this.innerHTML = `
            <!-- Sidebar -->
            <ui-box 
                id="sidebar" 
                class="fixed top-16 left-0 h-screen w-80 bg-white/80 backdrop-blur-md shadow-md z-[58] transform -translate-x-full transition-transform duration-300 lg:translate-x-0 lg:shadow-none flex flex-col">
                
                <!-- Sidebar Toggle Button - At Edge -->
                <ui-button 
                    id="sidebar-toggle" 
                    class="absolute -right-6 top-0 z-[60] p-3 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-r-lg shadow-md hover:bg-white/85 transition-all lg:hidden">
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </ui-button>

                <!-- Sidebar Content -->
                <ui-box class="overflow-y-auto flex-1">
                    <ui-box class="flex flex-col gap-6 p-6">                        
                        <!-- Getting Started Section -->
                        <ui-box class="bg-transparent border-l-2 border-blue-600/30 px-2">
                            <h3 class="text-sm font-bold text-gray-900 tracking-wide mb-3">Getting Started</h3>
                            <ui-box class="space-y-2">
                                <ui-link href="#installation" class="block text-sm px-3 py-1 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-md no-underline transition-colors">
                                    Installation
                                </ui-link>
                                <ui-link href="#usage" class="block text-sm px-3 py-1 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-md no-underline transition-colors">
                                    Usage
                                </ui-link>
                            </ui-box>
                        </ui-box>
                        <!-- Components Section -->
                        <ui-box class="bg-transparent border-l-2 border-blue-600/30 px-2">
                            <h3 class="text-sm font-bold text-gray-900 tracking-wide mb-3">Components</h3>
                            <ui-box class="space-y-2">
                                <ui-link href="#input" class="block text-sm px-3 py-1 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-md no-underline transition-colors">
                                    Input
                                </ui-link>
                                <ui-link href="#button" class="block text-sm px-3 py-1 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-md no-underline transition-colors">
                                    Button
                                </ui-link>
                                <ui-link href="#box" class="block text-sm px-3 py-1 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-md no-underline transition-colors">
                                    Box
                                </ui-link>
                                <ui-link href="#link" class="block text-sm px-3 py-1 text-gray-700 hover:bg-white/20 hover:text-blue-6
                                    Link
                                </ui-link>
                            </ui-box>
                        </ui-box>
                    </ui-box>
                </ui-box>
            </ui-box>
        `;
        
        // Setup sidebar functionality
        this.setupSidebar();
    }
    
    // Setup sidebar toggle functionality
    setupSidebar() {
        const sidebar = this.querySelector('#sidebar');
        const toggleButton = this.querySelector('#sidebar-toggle');
        const closeButton = this.querySelector('#sidebar-close');
        
        // Toggle sidebar
        const toggleSidebar = () => {
            // Only allow toggle on mobile
            if (window.innerWidth >= 1024) return;
            
            this.isOpen = !this.isOpen;
            
            if (this.isOpen) {
                // Open sidebar
                sidebar.classList.remove('-translate-x-full');
                sidebar.classList.add('translate-x-0');
            } else {
                // Close sidebar on mobile
                sidebar.classList.remove('translate-x-0');
                sidebar.classList.add('-translate-x-full');
            }
        };
        
        const closeSidebar = () => {
            // Only allow close on mobile
            if (window.innerWidth >= 1024) return;
            
            this.isOpen = false;
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('-translate-x-full');
        };
        
        // Event listeners
        toggleButton.addEventListener('click', toggleSidebar);
        closeButton.addEventListener('click', closeSidebar);
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                closeSidebar();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                // Desktop - always show sidebar and hide overlay
                sidebar.classList.remove('-translate-x-full');
                sidebar.classList.add('translate-x-0');
                this.isOpen = true;
            } else {
                // Mobile - hide sidebar by default if not open
                if (!this.isOpen) {
                    sidebar.classList.remove('translate-x-0');
                    sidebar.classList.add('-translate-x-full');
                }
            }
        });
        
        // Initialize based on screen size
        if (window.innerWidth >= 1024) {
            this.isOpen = true;
        }
    }
}

// Prevent double registration
if (!customElements.get('app-sidebar')) {
    customElements.define('app-sidebar', Sidebar);
}

// Export for bundler
export default Sidebar; 