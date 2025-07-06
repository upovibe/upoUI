import App from '../../../core/App.js';

/**
 * Auth SignUp Page Component
 * 
 * File: app/auth/signup/page.js → Route: /auth/signup
 * Simple signup page for route group demo
 */
class AuthSignUpPage extends App {
    render() {
        return `
            <div class="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4">
                <div class="max-w-md w-full">
                    <!-- Header -->
                    <div class="text-center mb-8">
                        <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                            </svg>
                        </div>
                        <h1 class="text-3xl font-bold text-gray-900 mb-2">Auth SignUp</h1>
                        <p class="text-gray-600">Route group demo page</p>
                    </div>
                    
                    <!-- Simple Form -->
                    <div class="bg-white rounded-lg shadow p-6">
                        <form class="space-y-4">
                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input 
                                        type="text" 
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="John"
                                    >
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input 
                                        type="text" 
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Doe"
                                    >
                                </div>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="john@example.com"
                                >
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input 
                                    type="password" 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Create password"
                                >
                            </div>
                            
                            <div class="flex items-center">
                                <input 
                                    id="terms" 
                                    type="checkbox" 
                                    class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                >
                                <label for="terms" class="ml-2 block text-sm text-gray-700">
                                    I agree to the Terms of Service
                                </label>
                            </div>
                            
                            <button 
                                type="submit" 
                                class="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                            >
                                Create Account
                            </button>
                        </form>
                        
                        <div class="mt-4 text-center">
                            <a href="/auth/signin" class="text-green-500 hover:text-green-700 text-sm">
                                Already have an account? Sign in
                            </a>
                        </div>
                    </div>
                    
                    <!-- Route Info -->
                    <div class="mt-6 text-center">
                        <div class="inline-flex items-center px-3 py-2 bg-blue-100 border border-blue-300 rounded-lg">
                            <svg class="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-sm text-blue-700">
                                <strong>Route Group:</strong> app/auth/signup/page.js → /auth/signup
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
                alert('Auth SignUp demo form submitted! (Route group working)');
            });
        }
    }
}

customElements.define('app-auth-sign-up-page', AuthSignUpPage);
export default AuthSignUpPage; 