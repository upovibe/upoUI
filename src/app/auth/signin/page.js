import App from '../../../core/App.js';

/**
 * Auth SignIn Page Component
 * 
 * File: app/auth/signin/page.js → Route: /auth/signin
 * Simple signin page for route group demo
 */
class AuthSignInPage extends App {
    render() {
        return `
            <div class="min-h-screen bg-blue-50 flex items-center justify-center py-12 px-4">
                <div class="max-w-md w-full">
                    <!-- Header -->
                    <div class="text-center mb-8">
                        <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </div>
                        <h1 class="text-3xl font-bold text-gray-900 mb-2">Auth SignIn</h1>
                        <p class="text-gray-600">Route group demo page</p>
                    </div>
                    
                    <!-- Simple Form -->
                    <div class="bg-white rounded-lg shadow p-6">
                        <form class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter email"
                                >
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input 
                                    type="password" 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter password"
                                >
                            </div>
                            
                            <button 
                                type="submit" 
                                class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Sign In
                            </button>
                        </form>
                        
                        <div class="mt-4 text-center">
                            <a href="/auth/signup" class="text-blue-500 hover:text-blue-700 text-sm">
                                Need an account? Sign up
                            </a>
                        </div>
                    </div>
                    
                    <!-- Route Info -->
                    <div class="mt-6 text-center">
                        <div class="inline-flex items-center px-3 py-2 bg-green-100 border border-green-300 rounded-lg">
                            <svg class="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-sm text-green-700">
                                <strong>Route Group:</strong> app/auth/signin/page.js → /auth/signin
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    connectedCallback() {
        super.connectedCallback();
        this.setupForm();
    }
    
    setupForm() {
        const form = this.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Auth SignIn demo form submitted! (Route group working)');
            });
        }
    }
}

customElements.define('app-auth-sign-in-page', AuthSignInPage);
export default AuthSignInPage; 