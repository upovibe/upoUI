import App from '../../core/App.js';

/**
 * SignIn Page Component
 * 
 * File: app/signin/page.js → Route: /signin
 * Beautiful signin form with validation
 */
class SignInPage extends App {
    constructor() {
        super();
        this.state = {
            formData: {
                email: '',
                password: ''
            },
            errors: {},
            isSubmitting: false,
            showPassword: false
        };
    }
    
    render() {
        return `
            <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full">
                    <!-- Header -->
                    <div class="text-center mb-8">
                        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </div>
                        <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
                        <p class="text-gray-600">Sign in to your account to continue</p>
                    </div>
                    
                    <!-- Sign In Form -->
                    <div class="bg-white rounded-xl shadow-lg p-8">
                        <form id="signin-form" class="space-y-6">
                            <!-- Email Field -->
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div class="relative">
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        required
                                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${this.state.errors.email ? 'border-red-500' : ''}"
                                        placeholder="Enter your email"
                                        value="${this.state.formData.email}"
                                    >
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                        </svg>
                                    </div>
                                </div>
                                ${this.state.errors.email ? `<p class="mt-1 text-sm text-red-600">${this.state.errors.email}</p>` : ''}
                            </div>
                            
                            <!-- Password Field -->
                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div class="relative">
                                    <input 
                                        type="${this.state.showPassword ? 'text' : 'password'}" 
                                        id="password"
                                        name="password"
                                        required
                                        class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${this.state.errors.password ? 'border-red-500' : ''}"
                                        placeholder="Enter your password"
                                        value="${this.state.formData.password}"
                                    >
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                        </svg>
                                    </div>
                                    <button 
                                        type="button" 
                                        class="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onclick="this.closest('app-sign-in-page').togglePasswordVisibility()"
                                    >
                                        <svg class="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            ${this.state.showPassword ? 
                                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L12 12m-2.122-2.122L7.757 7.757M21 21l-4.35-4.35m0 0L5.636 5.636m0 0L4 4"></path>' :
                                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>'
                                            }
                                        </svg>
                                    </button>
                                </div>
                                ${this.state.errors.password ? `<p class="mt-1 text-sm text-red-600">${this.state.errors.password}</p>` : ''}
                            </div>
                            
                            <!-- Remember Me & Forgot Password -->
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input 
                                        id="remember-me" 
                                        name="remember-me" 
                                        type="checkbox" 
                                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    >
                                    <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <a href="/forgot-password" class="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            
                            <!-- Submit Button -->
                            <button 
                                type="submit" 
                                class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                ${this.state.isSubmitting ? 'disabled' : ''}
                            >
                                ${this.state.isSubmitting ? 
                                    '<span class="flex items-center justify-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Signing in...</span>' :
                                    'Sign In'
                                }
                            </button>
                        </form>
                        
                        <!-- Divider -->
                        <div class="mt-6">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-300"></div>
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social Sign In -->
                        <div class="mt-6 grid grid-cols-2 gap-3">
                            <button 
                                type="button" 
                                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                <svg class="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                <span class="ml-2">Google</span>
                            </button>
                            
                            <button 
                                type="button" 
                                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span class="ml-2">Facebook</span>
                            </button>
                        </div>
                        
                        <!-- Sign Up Link -->
                        <div class="mt-6 text-center">
                            <p class="text-sm text-gray-600">
                                Don't have an account? 
                                <a href="/signup" class="font-medium text-blue-600 hover:text-blue-800">
                                    Sign up here
                                </a>
                            </p>
                        </div>
                    </div>
                    
                    <!-- File Info -->
                    <div class="mt-8 text-center">
                        <div class="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                            <svg class="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-sm text-green-700">
                                <strong>Auto-loaded:</strong> app/signin/page.js → /signin
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
        this.setupSocialButtons();
    }
    
    setupForm() {
        const form = this.querySelector('#signin-form');
        if (form) {
            // Handle form input changes
            form.addEventListener('input', (e) => {
                const { name, value } = e.target;
                this.updateFormData(name, value);
                this.clearError(name);
            });
            
            // Handle form submission
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }
    }
    
    setupSocialButtons() {
        // Google sign in
        const googleBtn = this.querySelector('button:has(svg[viewBox="0 0 24 24"])');
        if (googleBtn) {
            googleBtn.addEventListener('click', () => {
                this.handleSocialSignIn('google');
            });
        }
        
        // Facebook sign in
        const facebookBtn = this.querySelectorAll('button:has(svg[fill="currentColor"])')[1];
        if (facebookBtn) {
            facebookBtn.addEventListener('click', () => {
                this.handleSocialSignIn('facebook');
            });
        }
    }
    
    updateFormData(field, value) {
        this.state.formData[field] = value;
    }
    
    clearError(field) {
        if (this.state.errors[field]) {
            delete this.state.errors[field];
            this.setState({ errors: this.state.errors });
        }
    }
    
    validateForm() {
        const errors = {};
        
        // Email validation
        if (!this.state.formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(this.state.formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        
        // Password validation
        if (!this.state.formData.password) {
            errors.password = 'Password is required';
        } else if (this.state.formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        
        return errors;
    }
    
    async handleSubmit() {
        // Update form data from inputs
        const formData = new FormData(this.querySelector('#signin-form'));
        this.state.formData = {
            email: formData.get('email') || '',
            password: formData.get('password') || ''
        };
        
        // Validate form
        const errors = this.validateForm();
        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
            return;
        }
        
        // Start submission
        this.setState({ isSubmitting: true, errors: {} });
        
        try {
            // Simulate API call
            console.log('🔐 Signing in with:', this.state.formData);
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success
            alert('Sign in successful! (This is a demo)');
            
            // Redirect to dashboard or home
            if (window.router) {
                window.router.navigate('/');
            }
            
        } catch (error) {
            console.error('Sign in error:', error);
            this.setState({ 
                errors: { 
                    general: 'Invalid email or password. Please try again.' 
                }
            });
        } finally {
            this.setState({ isSubmitting: false });
        }
    }
    
    togglePasswordVisibility() {
        this.setState({ showPassword: !this.state.showPassword });
    }
    
    handleSocialSignIn(provider) {
        console.log(`🔐 Social sign in with ${provider}`);
        alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} sign in clicked! (This is a demo)`);
    }
}

customElements.define('app-sign-in-page', SignInPage);
export default SignInPage; 