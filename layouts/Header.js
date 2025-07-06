import App from '../app.js';

class Header extends App {
    constructor() {
        super();
        
        // Flag to prevent double processing
        this.initialized = false;
    }
    
    render() {
        return `
            <ui-box class="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
                <ui-box class="mx-auto px-3 sm:px-6 lg:px-8 relative">
                    <ui-box class="flex justify-between items-center h-16">
                        <!-- Logo/Brand & Navigation Links -->
                        <ui-box class="flex items-center space-x-8">
                            <ui-link href="index.html" class="text-2xl font-bold text-blue-600 hover:text-blue-700 no-underline">
                                UPO UI
                            </ui-link>
                            
                            <!-- Navigation Links -->
                            <ui-box class="hidden md:flex items-center space-x-6">
                                <ui-link href="components.html" class="text-gray-700 hover:text-blue-600 font-medium no-underline">
                                    Components
                                </ui-link>
                                <ui-link href="#" class="text-gray-700 hover:text-blue-600 font-medium no-underline">
                                    Documentation
                                </ui-link>
                            </ui-box>
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
                            
                            <!-- GitHub Link -->
                            <ui-link href="https://github.com/upovibe/upoUI" class="p-2 text-gray-600 hover:text-gray-900 no-underline" target="_blank">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </ui-link>
                            
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
                    <ui-box id="mobile-menu" class="md:hidden hidden absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg z-40">
                        <ui-box class="flex flex-col space-y-3 p-4">
                            <ui-link href="components.html" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md no-underline">
                                Components
                            </ui-link>
                            <ui-link href="#" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md no-underline">
                                Documentation
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
    }
    
    connectedCallback() {
        super.connectedCallback();
        
        if (this.initialized) return;
        this.initialized = true;
        
        // Simple setup
        setTimeout(() => this.setupMobileMenu(), 100);
    }
    
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