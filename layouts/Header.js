class Header extends HTMLElement {
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
        
        // Create the header layout using our UI components
        this.innerHTML = `
            <ui-box class="bg-white shadow-md border-b border-gray-200">
                <ui-box class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ui-box class="flex justify-between items-center h-16">
                        <!-- Logo/Brand -->
                        <ui-box class="flex items-center">
                            <ui-link href="index.html" class="text-2xl font-bold text-blue-600 hover:text-blue-700 no-underline">
                                UPO UI
                            </ui-link>
                        </ui-box>
                        
                        <!-- Navigation Links -->
                        <ui-box class="hidden md:flex items-center space-x-8">
                            <ui-link href="index.html" class="text-gray-700 hover:text-blue-600 font-medium no-underline">
                                Home
                            </ui-link>
                            <ui-link href="components.html" class="text-gray-700 hover:text-blue-600 font-medium no-underline">
                                Components
                            </ui-link>
                            <ui-link href="#" class="text-gray-700 hover:text-blue-600 font-medium no-underline">
                                Documentation
                            </ui-link>
                            <ui-link href="#" class="text-gray-700 hover:text-blue-600 font-medium no-underline">
                                Examples
                            </ui-link>
                        </ui-box>
                        
                        <!-- Search & Actions -->
                        <ui-box class="flex items-center space-x-4">
                            <!-- Search Input -->
                            <ui-box class="hidden sm:block">
                                <ui-input 
                                    type="text" 
                                    placeholder="Search..."
                                    class="w-64 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                </ui-input>
                            </ui-box>
                            
                            <!-- Action Buttons -->
                            <ui-button class="hidden md:inline-flex px-3 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-200">
                                Sign In
                            </ui-button>
                            
                            <ui-button class="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
                                Get Started
                            </ui-button>
                            
                            <!-- Mobile Menu Button -->
                            <ui-button 
                                class="md:hidden p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md"
                                id="mobile-menu-button">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </ui-button>
                        </ui-box>
                    </ui-box>
                    
                    <!-- Mobile Menu (hidden by default) -->
                    <ui-box id="mobile-menu" class="md:hidden hidden border-t border-gray-200 pt-4 pb-3">
                        <ui-box class="flex flex-col space-y-3">
                            <ui-link href="index.html" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md no-underline">
                                Home
                            </ui-link>
                            <ui-link href="components.html" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md no-underline">
                                Components
                            </ui-link>
                            <ui-link href="#" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md no-underline">
                                Documentation
                            </ui-link>
                            <ui-link href="#" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md no-underline">
                                Examples
                            </ui-link>
                            
                            <!-- Mobile Search -->
                            <ui-box class="px-3 pt-2">
                                <ui-input 
                                    type="text" 
                                    placeholder="Search..."
                                    class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                                </ui-input>
                            </ui-box>
                        </ui-box>
                    </ui-box>
                </ui-box>
            </ui-box>
        `;
        
        // Add mobile menu toggle functionality
        this.setupMobileMenu();
    }
    
    // Setup mobile menu toggle
    setupMobileMenu() {
        const menuButton = this.querySelector('#mobile-menu-button');
        const mobileMenu = this.querySelector('#mobile-menu');
        
        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

// Prevent double registration
if (!customElements.get('app-header')) {
    customElements.define('app-header', Header);
}

// Export for bundler
export default Header; 