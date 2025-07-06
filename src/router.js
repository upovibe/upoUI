import './layouts/Header.js';

/**
 * UPO UI Simple Router - No Loading Delays
 * 
 * Preloads all components for instant navigation
 */

class Router {
    constructor() {
        this.routes = new Map();
        this.componentCache = new Map(); // Cache loaded components
        this.currentComponent = null;
        this.outlet = null;
        this.isReady = false;
    }
    
    // Add a route
    route(path, componentPath) {
        this.routes.set(path, componentPath);
        return this;
    }
    
    // Navigate to a path
    navigate(path) {
        history.pushState(null, null, path);
        this.render();
    }
    
    // Start the router
    async start(outletSelector = '#app') {
        this.outlet = document.querySelector(outletSelector);
        
        if (!this.outlet) {
            console.error(`Router outlet '${outletSelector}' not found`);
            return;
        }

        // Show initial loading only
        this.outlet.innerHTML = '<div class="flex items-center justify-center min-h-screen"><div class="text-xl">Loading...</div></div>';
        
        // Preload ALL components first
        await this.preloadAllComponents();
        
        this.isReady = true;
        
        // Listen for back/forward navigation
        window.addEventListener('popstate', () => {
            this.render();
        });

        // Intercept clicks on local links
        document.body.addEventListener('click', e => {
            const link = e.target.closest('a');
            if (link && link.origin === window.location.origin) {
                e.preventDefault();
                this.navigate(link.pathname);
            }
        });
        
        // Initial render (now instant)
        this.render();
        
        return this;
    }
    
    // Preload all components
    async preloadAllComponents() {
        console.log('🔄 Preloading all components...');
        
        const loadPromises = Array.from(this.routes.entries()).map(async ([path, componentPath]) => {
            try {
                const module = await import(`./${componentPath}`);
                this.componentCache.set(path, module.default);
                console.log(`✅ Loaded: ${componentPath}`);
            } catch (error) {
                console.error(`❌ Failed to load: ${componentPath}`, error);
            }
        });
        
        await Promise.all(loadPromises);
        console.log('🎯 All components preloaded - navigation is now instant!');
    }
    
    // Render the current route (now instant!)
    render() {
        if (!this.isReady) return; // Don't render until components are loaded
        
        const path = window.location.pathname || '/';
        
        // Handle index.html redirect to clean URL
        if (path === '/index.html') {
            history.replaceState(null, null, '/');
            this.render(); // Re-render with clean URL
            return;
        }
        
        const ComponentClass = this.componentCache.get(path);

        if (!ComponentClass) {
            this.renderNotFound();
            return;
        }

        try {
            // Convert class name to tag name
            const tagName = `page-${ComponentClass.name.replace('Page', '').toLowerCase()}`;

            // Instant render - no loading delay!
            this.outlet.innerHTML = `
                <app-header></app-header>
                <${tagName}></${tagName}>
            `;

            console.log(`⚡ Instant render: ${path}`);

        } catch (error) {
            console.error(`Failed to render route: ${path}`, error);
            this.renderError();
        }
    }
    
    // Render 404 page
    renderNotFound() {
        this.outlet.innerHTML = `
            <div class="flex items-center justify-center min-h-screen bg-gray-50">
                <div class="text-center">
                    <h1 class="text-6xl font-bold text-gray-300 mb-4">404</h1>
                    <p class="text-xl text-gray-600 mb-8">Page not found</p>
                    <button onclick="router.navigate('/')" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Go Home
                    </button>
                </div>
            </div>
        `;
    }
    
    // Render error page
    renderError() {
        this.outlet.innerHTML = `
            <div class="flex items-center justify-center min-h-screen bg-gray-50">
                <div class="text-center">
                    <h1 class="text-4xl font-bold text-red-600 mb-4">Error</h1>
                    <p class="text-xl text-gray-600 mb-8">Failed to load page</p>
                    <button onclick="location.reload()" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Refresh Page
                    </button>
                </div>
            </div>
        `;
    }
    
    // Get current route
    getCurrentRoute() {
        return window.location.pathname || '/';
    }
    
    // Get all routes
    getRoutes() {
        return Array.from(this.routes.keys());
    }
}

export default Router; 