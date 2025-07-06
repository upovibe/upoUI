import './layouts/Header.js';

/**
 * UPO UI Simple Router
 * 
 * History API-based routing system that works without build tools
 * 
 * USAGE:
 * ------
 * const router = new Router();
 * router.route('/', 'src/pages/Home.js')
 *       .route('/about', 'src/pages/About.js')
 *       .start();
 */

class Router {
    constructor() {
        this.routes = new Map();
        this.currentComponent = null;
        this.outlet = null;
    }
    
    // Add a route
    route(path, componentPath) {
        this.routes.set(path, componentPath);
        return this; // Enable chaining
    }
    
    // Navigate to a path
    navigate(path) {
        history.pushState(null, null, path);
        this.render();
    }
    
    // Start the router
    start(outletSelector = '#app') {
        this.outlet = document.querySelector(outletSelector);
        
        if (!this.outlet) {
            console.error(`Router outlet '${outletSelector}' not found`);
            return;
        }
        
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
        
        // Initial render
        this.render();
        
        return this;
    }
    
    // Render the current route
    async render() {
        const path = window.location.pathname || '/';
        const componentPath = this.routes.get(path);

        if (!componentPath) {
            this.renderNotFound();
            return;
        }

        try {
            // Show loading state while the component is fetched
            this.outlet.innerHTML = '<div class="flex items-center justify-center min-h-screen"><div class="text-xl">Loading...</div></div>';

            // Dynamically import the page component
            const module = await import(`./${componentPath}`);
            const ComponentClass = module.default;

            // Convert the component's class name (e.g., "AboutPage") to its custom element tag name (e.g., "page-about")
            const tagName = `page-${ComponentClass.name.replace('Page', '').toLowerCase()}`;

            // Render the header and the page component
            this.outlet.innerHTML = `
                <app-header></app-header>
                <${tagName}></${tagName}>
            `;

            console.log(`✅ Rendered route: ${path}`);

        } catch (error) {
            console.error(`Failed to load or render route: ${path}`, error);
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