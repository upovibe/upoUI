import App from '../../core/App.js';

/**
 * Auth Layout Component
 * 
 * This layout completely overrides rootLayout for any pages
 * under the /auth/* route group. It provides a centered
 * card design ideal for login, signup, etc.
 */
class AuthLayout extends App {
    constructor() {
        super();
        // The router will inject the page content into this state property.
        this.state = {
            pageContent: '<div class="text-center text-gray-500">Loading page...</div>'
        };
    }

    // This method is called by the router to pass in the page's HTML.
    setPageContent(content) {
        this.set('pageContent', content);
    }

    render() {
        return `
            <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
                <div class="w-full max-w-md">
                    <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8">
                        
                        <!-- Page content will be rendered here -->
                        ${this.state.pageContent}
                        
                    </div>
                    <div class="text-center mt-6">
                        <a href="/" class="text-gray-400 hover:text-white font-medium transition-colors">
                            &larr; Back to Home
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('auth-layout', AuthLayout);
export default AuthLayout; 