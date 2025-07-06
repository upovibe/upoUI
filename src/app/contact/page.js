import App from '../../core/App.js';

/**
 * ContactPage Component
 * 
 * This page demonstrates file-based routing
 * File: app/contact/page.js → Route: /contact
 * No manual registration needed!
 */
class ContactPage extends App {
    constructor() {
        super();
        this.state = {
            formData: {
                name: '',
                email: '',
                message: ''
            },
            isSubmitting: false
        };
    }
    
    render() {
        return `
            <div class="min-h-screen bg-gray-50 py-12">
                <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Header -->
                    <div class="text-center mb-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                        <p class="text-xl text-gray-600">
                            This page was auto-loaded without manual registration!
                        </p>
                    </div>
                    
                    <!-- Success Message -->
                    <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-green-800">File-Based Routing Works!</h3>
                                <p class="text-green-700">
                                    This page was created at <code class="bg-green-100 px-2 py-1 rounded text-sm">app/contact/page.js</code>
                                    and automatically became available at <code class="bg-green-100 px-2 py-1 rounded text-sm">/contact</code>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Contact Form -->
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                        
                        <form id="contact-form" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your name"
                                    >
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your email"
                                    >
                                </div>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea 
                                    name="message"
                                    required
                                    rows="6"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            
                            <div class="flex justify-end">
                                <button 
                                    type="submit" 
                                    class="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    <!-- File Info -->
                    <div class="mt-8 bg-gray-800 text-white rounded-lg p-6">
                        <h3 class="text-lg font-semibold mb-3">🔍 How This Works</h3>
                        <div class="space-y-2 text-sm">
                            <p>✅ <strong>File created:</strong> <code class="bg-gray-700 px-2 py-1 rounded">app/contact/page.js</code></p>
                            <p>✅ <strong>Route available:</strong> <code class="bg-gray-700 px-2 py-1 rounded">/contact</code></p>
                            <p>✅ <strong>No manual registration needed!</strong></p>
                        </div>
                        <div class="mt-4 p-3 bg-gray-700 rounded text-xs">
                            <p class="text-gray-300">Router automatically tried these patterns:</p>
                            <p>• app/contact/page.js ← <span class="text-green-400">Found!</span></p>
                            <p>• app/contact.js</p>
                            <p>• app/contact/index.js</p>
                            <p>• app/contact/contact.js</p>
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
        const form = this.querySelector('#contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }
    }
    
    async handleSubmit() {
        this.setState({ isSubmitting: true });
        
        const formData = new FormData(this.querySelector('#contact-form'));
        const data = Object.fromEntries(formData);
        
        console.log('📧 Contact form submitted:', data);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        alert('Thank you for your message! (This is a demo)');
        
        this.setState({ isSubmitting: false });
        
        // Reset form
        this.querySelector('#contact-form').reset();
    }
}

customElements.define('app-contact-page', ContactPage);
export default ContactPage; 