import App from '../../../core/App.js';

/**
 * Dynamic User Page (/user/[id])
 * 
 * Shows user profile based on dynamic ID parameter
 * Example: /user/123, /user/456, etc.
 */
class UserDynamicPage extends App {
    render() {
        // Get the user ID from route parameters
        const routeParams = this.get('routeParams') || {};
        const queryParams = this.get('queryParams') || {};
        const userId = routeParams.id || 'unknown';
        const tab = queryParams.tab || 'profile';
        
        return `
            <div class="py-12">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Header -->
                    <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-8">
                        <div class="flex items-center space-x-4">
                            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <span class="text-2xl font-bold">${userId.charAt(0).toUpperCase()}</span>
                            </div>
                            <div>
                                <h1 class="text-3xl font-bold">User Profile</h1>
                                <p class="text-blue-100">ID: ${userId}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Navigation Tabs -->
                    <div class="bg-white rounded-lg shadow-lg mb-8">
                        <div class="border-b border-gray-200">
                            <nav class="flex space-x-8 px-6">
                                <a href="/user/${userId}?tab=profile" 
                                   class="py-4 px-1 border-b-2 font-medium text-sm ${tab === 'profile' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}">
                                    Profile
                                </a>
                                <a href="/user/${userId}?tab=settings" 
                                   class="py-4 px-1 border-b-2 font-medium text-sm ${tab === 'settings' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}">
                                    Settings
                                </a>
                                <a href="/user/${userId}?tab=activity" 
                                   class="py-4 px-1 border-b-2 font-medium text-sm ${tab === 'activity' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}">
                                    Activity
                                </a>
                            </nav>
                        </div>
                        
                        <!-- Content Area -->
                        <div class="p-6">
                            ${this.renderTabContent(tab, userId)}
                        </div>
                    </div>
                    
                    <!-- Debug Info -->
                    <div class="bg-gray-50 rounded-lg p-6">
                        <h3 class="font-medium text-gray-900 mb-4">🔍 Dynamic Route Debug Info:</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <strong>Route Params:</strong>
                                <pre class="text-xs bg-gray-100 p-3 rounded mt-2">${JSON.stringify(routeParams, null, 2)}</pre>
                            </div>
                            <div>
                                <strong>Query Params:</strong>
                                <pre class="text-xs bg-gray-100 p-3 rounded mt-2">${JSON.stringify(queryParams, null, 2)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderTabContent(tab, userId) {
        switch(tab) {
            case 'profile':
                return `
                    <div class="space-y-6">
                        <h2 class="text-xl font-semibold">Profile Information</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                                <p class="text-gray-900">User ${userId}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <p class="text-gray-900">user${userId}@example.com</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                                <p class="text-gray-900">January 2024</p>
                            </div>
                        </div>
                    </div>
                `;
                
            case 'settings':
                return `
                    <div class="space-y-6">
                        <h2 class="text-xl font-semibold">Account Settings</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h3 class="font-medium mb-2">Privacy Settings</h3>
                                <p class="text-gray-600">Manage your privacy preferences</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h3 class="font-medium mb-2">Notifications</h3>
                                <p class="text-gray-600">Configure notification preferences</p>
                            </div>
                        </div>
                    </div>
                `;
                
            case 'activity':
                return `
                    <div class="space-y-6">
                        <h2 class="text-xl font-semibold">Recent Activity</h2>
                        <div class="space-y-4">
                            <div class="border-l-4 border-blue-500 pl-4">
                                <p class="font-medium">Profile viewed</p>
                                <p class="text-sm text-gray-600">2 hours ago</p>
                            </div>
                            <div class="border-l-4 border-green-500 pl-4">
                                <p class="font-medium">Settings updated</p>
                                <p class="text-sm text-gray-600">1 day ago</p>
                            </div>
                        </div>
                    </div>
                `;
                
            default:
                return `<p class="text-gray-600">Invalid tab: ${tab}</p>`;
        }
    }
}

customElements.define('app-user-dynamic-page', UserDynamicPage);
export default UserDynamicPage; 