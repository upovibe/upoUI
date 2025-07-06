import App from '../app.js';

class Sidebar extends App {
    constructor() {
        super();
        this.isOpen = false;
        this.initialized = false;
    }
    
    render() {
        return `
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
                                <ui-link href="#link" class="block text-sm px-3 py-1 text-gray-700 hover:bg-white/20 hover:text-blue-600 rounded-md no-underline transition-colors">
                                    Link
                                </ui-link>
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
        setTimeout(() => this.setupSidebar(), 100);
    }
    
    setupSidebar() {
        const sidebar = this.querySelector('#sidebar');
        const toggleButton = this.querySelector('#sidebar-toggle');
        
        if (!sidebar || !toggleButton) return;
        
        toggleButton.addEventListener('click', () => {
            if (window.innerWidth >= 1024) return;
            
            this.isOpen = !this.isOpen;
            
            if (this.isOpen) {
                sidebar.classList.remove('-translate-x-full');
                sidebar.classList.add('translate-x-0');
            } else {
                sidebar.classList.remove('translate-x-0');
                sidebar.classList.add('-translate-x-full');
            }
        });
        
        // Initialize based on screen size
        if (window.innerWidth >= 1024) {
            this.isOpen = true;
        }
    }
}

customElements.define('app-sidebar', Sidebar);
export default Sidebar; 