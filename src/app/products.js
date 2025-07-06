import App from '../core/App.js';

/**
 * ProductsPage Component
 * 
 * File: app/products.js → Route: /products
 * Simple naming convention example
 */
class ProductsPage extends App {
    constructor() {
        super();
        this.state = {
            products: [
                { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
                { id: 2, name: 'Phone', price: 699, category: 'Electronics' },
                { id: 3, name: 'Headphones', price: 199, category: 'Audio' },
                { id: 4, name: 'Keyboard', price: 89, category: 'Accessories' }
            ]
        };
    }
    
    render() {
        return `
            <div class="min-h-screen bg-gray-50 py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Header -->
                    <div class="text-center mb-12">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">Products</h1>
                        <p class="text-xl text-gray-600">
                            Another auto-loaded page! File: <code class="bg-gray-200 px-2 py-1 rounded">app/products.js</code>
                        </p>
                    </div>
                    
                    <!-- Products Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        ${this.state.products.map(product => `
                            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                    <div class="text-white text-center">
                                        <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                            </svg>
                                        </div>
                                        <h3 class="font-semibold">${product.name}</h3>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <div class="flex justify-between items-center mb-2">
                                        <span class="text-sm text-gray-500">${product.category}</span>
                                        <span class="text-lg font-bold text-gray-900">$${product.price}</span>
                                    </div>
                                    <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <!-- Info Box -->
                    <div class="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-blue-900 mb-3">🎯 File-Based Routing Example</h3>
                        <div class="text-blue-800 space-y-2">
                            <p>✅ <strong>File:</strong> <code class="bg-blue-100 px-2 py-1 rounded">app/products.js</code></p>
                            <p>✅ <strong>Route:</strong> <code class="bg-blue-100 px-2 py-1 rounded">/products</code></p>
                            <p>✅ <strong>Component:</strong> <code class="bg-blue-100 px-2 py-1 rounded">ProductsPage</code></p>
                            <p>✅ <strong>Tag:</strong> <code class="bg-blue-100 px-2 py-1 rounded">&lt;app-products-page&gt;</code></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-products-page', ProductsPage);
export default ProductsPage; 