import App from '../../../core/App.js';

/**
 * Analytics Page Component
 * 
 * File: app/_dashboard/analytics/page.js → Route: /analytics
 * Organization folder (_dashboard) is invisible in URL
 */
class AnalyticsPage extends App {
    render() {
        return `
            <div class="min-h-screen bg-purple-50 py-12 px-4">
                <div class="max-w-6xl mx-auto">
                    <!-- Header -->
                    <div class="text-center mb-8">
                        <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                        </div>
                        <h1 class="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
                        <p class="text-gray-600">Track your performance metrics</p>
                    </div>
                    
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div class="bg-white rounded-lg shadow p-6">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-sm text-gray-600">Page Views</p>
                                    <p class="text-2xl font-bold text-gray-900">12,345</p>
                                    <p class="text-xs text-green-600">+12% from last month</p>
                                </div>
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow p-6">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-sm text-gray-600">Users</p>
                                    <p class="text-2xl font-bold text-gray-900">2,890</p>
                                    <p class="text-xs text-green-600">+8% from last month</p>
                                </div>
                                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow p-6">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-sm text-gray-600">Bounce Rate</p>
                                    <p class="text-2xl font-bold text-gray-900">34.2%</p>
                                    <p class="text-xs text-red-600">-3% from last month</p>
                                </div>
                                <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow p-6">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-sm text-gray-600">Revenue</p>
                                    <p class="text-2xl font-bold text-gray-900">$45,210</p>
                                    <p class="text-xs text-green-600">+18% from last month</p>
                                </div>
                                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Chart Area -->
                    <div class="bg-white rounded-lg shadow p-6 mb-8">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold text-gray-900">Traffic Overview</h3>
                            <div class="flex space-x-2">
                                <button class="px-3 py-1 bg-purple-100 text-purple-700 rounded-md text-sm">7D</button>
                                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">30D</button>
                                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">90D</button>
                            </div>
                        </div>
                        <div class="h-64 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
                            <div class="text-center">
                                <svg class="w-16 h-16 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                                <p class="text-purple-600 font-medium">Interactive Chart</p>
                                <p class="text-sm text-purple-400">Chart visualization would go here</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Navigation & Links -->
                    <div class="text-center space-x-4 mb-8">
                        <a href="/signin" class="text-purple-500 hover:text-purple-700 font-medium">
                            Auth Pages
                        </a>
                        <a href="/" class="text-purple-500 hover:text-purple-700 font-medium">
                            Home
                        </a>
                        <a href="/user/123" class="text-purple-500 hover:text-purple-700 font-medium">
                            User Profile
                        </a>
                    </div>
                    
                    <!-- Organization Info -->
                    <div class="text-center">
                        <div class="inline-flex items-center px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-lg">
                            <svg class="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="text-sm text-yellow-700">
                                <strong>Organization Folder:</strong> app/_dashboard/analytics/page.js → /analytics
                            </span>
                        </div>
                        <p class="text-xs text-gray-500 mt-2">
                            _dashboard folder is invisible in URL!
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-analytics-page', AnalyticsPage);
export default AnalyticsPage; 