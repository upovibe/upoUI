import App from '../../core/App.js';
import store from '../../core/store.js';
import '../ui/Link.js';

/**
 * App Header Component
 *
 * This component displays the main site navigation and logo.
 * It features a "glassmorphism" effect and a responsive design that
 * shows icons on mobile and text on desktop.
 */
class Header extends App {
    
    unsubscribe = null;

    connectedCallback() {
        super.connectedCallback();
        // Subscribe to the global store to react to auth changes
        this.unsubscribe = store.subscribe((newState) => {
            this.set('isAuthenticated', newState.isAuthenticated);
        });
    }

    disconnectedCallback() {
        // Unsubscribe to prevent memory leaks
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    render() {
        return `
            <header class="fixed top-0 left-0 right-0 z-50">
                <div class="flex items-center justify-between backdrop-blur-lg bg-white/30 px-4 min-h-[60px] py-2 border-b border-gray-200">
                    <!-- Logo and Brand Name -->
                    <div class="flex items-center">
                        <ui-link href="/" class="flex items-center no-underline hover:opacity-80 transition-opacity">
                            <img class="h-8 w-auto" src="src/assets/logo.png" alt="UPO UI Logo">
                            <span class="hidden md:inline-block ml-3 text-xl font-bold text-gray-800">UPO UI</span>
                        </ui-link>
                    </div>
                    
                    <!-- Navigation Links -->
                    <nav class="flex items-center space-x-4">
                        <ui-link href="/components" class="text-gray-700 hover:text-blue-600 font-medium transition-colors no-underline flex items-center space-x-2 p-2 lg:py-1 rounded-md hover:bg-white/50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-600">
                            <i class="fas fa-cubes size-4"></i>
                            <span class="hidden md:inline">Components</span>
                        </ui-link>
                        <ui-link href="https://github.com/upovibe/upoUI" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-blue-600 font-medium transition-colors no-underline flex items-center space-x-2 p-2 lg:py-1 rounded-md hover:bg-white/50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-600">
                            <i class="fab fa-github size-4"></i>
                            <span class="hidden md:inline">GitHub</span>
                        </ui-link>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define('app-header', Header);
export default Header; 