import App from '../../../core/App.js';

/**
 * Dynamic Blog Post Page (/blog/[slug])
 * 
 * Shows blog post based on dynamic slug parameter
 * Example: /blog/my-first-post, /blog/getting-started, etc.
 */
class BlogPostDynamicPage extends App {
    render() {
        // Get the slug from route parameters
        const routeParams = this.get('routeParams') || {};
        const queryParams = this.get('queryParams') || {};
        const slug = routeParams.slug || 'unknown';
        const commentId = queryParams.comment;
        const shareMode = queryParams.share === 'true';
        
        // Mock blog post data based on slug
        const postData = this.getPostData(slug);
        
        return `
            <div class="py-12">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <!-- Header -->
                        <div class="relative">
                            <div class="bg-gradient-to-r from-blue-600 to-purple-600 h-64 flex items-end">
                                <div class="p-6 text-white">
                                    <h1 class="text-4xl font-bold mb-2">${postData.title}</h1>
                                    <p class="text-gray-200">
                                        Published ${postData.date} • ${postData.readTime} min read
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Content -->
                        <div class="p-6">
                            <!-- Post Meta -->
                            <div class="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
                                <div class="flex items-center space-x-2">
                                    <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <span class="text-white font-medium">${postData.author.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <p class="font-medium text-gray-900">${postData.author}</p>
                                        <p class="text-sm text-gray-600">${postData.date}</p>
                                    </div>
                                </div>
                                
                                <div class="flex-1"></div>
                                
                                <!-- Share Button -->
                                <a href="/blog/${slug}?share=${!shareMode}" 
                                   class="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${shareMode ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}">
                                    <span>Share</span>
                                </a>
                            </div>
                            
                            <!-- Share Panel -->
                            ${shareMode ? this.renderSharePanel(slug) : ''}
                            
                            <!-- Article Content -->
                            <div class="prose prose-lg max-w-none">
                                ${postData.content}
                            </div>
                            
                            <!-- Tags -->
                            <div class="mt-8 pt-6 border-t border-gray-200">
                                <div class="flex flex-wrap gap-2">
                                    ${postData.tags.map(tag => `
                                        <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">${tag}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Comments Section -->
                        <div class="border-t border-gray-200 p-6">
                            <h3 class="text-xl font-semibold mb-4">Comments</h3>
                            ${this.renderComments(commentId)}
                        </div>
                        
                        <!-- Debug Info -->
                        <div class="bg-gray-50 px-6 py-4 text-sm border-t border-gray-200">
                            <h3 class="font-medium text-gray-900 mb-2">🔍 Dynamic Route Debug Info:</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <strong>Route Params:</strong>
                                    <pre class="text-xs bg-gray-100 p-2 rounded mt-1">${JSON.stringify(routeParams, null, 2)}</pre>
                                </div>
                                <div>
                                    <strong>Query Params:</strong>
                                    <pre class="text-xs bg-gray-100 p-2 rounded mt-1">${JSON.stringify(queryParams, null, 2)}</pre>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        `;
    }
    
    getPostData(slug) {
        // Mock data based on slug
        const posts = {
            'getting-started': {
                title: 'Getting Started with UPO UI',
                author: 'John Doe',
                date: 'March 15, 2024',
                readTime: 5,
                content: `
                    <h2>Welcome to UPO UI</h2>
                    <p>This guide will help you get started with UPO UI's app-based architecture. The slug for this post is <code>getting-started</code>.</p>
                    <p>Our new app directory structure makes it easy to organize your pages and components in a scalable way.</p>
                    <blockquote>
                        <p>The app directory approach provides better organization and follows modern framework patterns.</p>
                    </blockquote>
                    <p>Try navigating to different pages and see how the routing system works!</p>
                `,
                tags: ['tutorial', 'getting-started', 'upo-ui']
            },
            'dynamic-routing': {
                title: 'Understanding Dynamic Routing',
                author: 'Jane Smith',
                date: 'March 20, 2024',
                readTime: 8,
                content: `
                    <h2>Dynamic Routes Explained</h2>
                    <p>Dynamic routing allows you to create pages with parameters that change based on the URL. This is essential for content-driven applications.</p>
                    <h3>File-based Routing</h3>
                    <ul>
                        <li><strong>Static routes:</strong> <code>app/about/page.js</code></li>
                        <li><strong>Dynamic routes:</strong> <code>app/user/[id]/page.js</code></li>
                        <li><strong>Nested routes:</strong> <code>app/blog/[slug]/page.js</code></li>
                    </ul>
                    <p>This approach makes routing intuitive and file-system based!</p>
                `,
                tags: ['routing', 'dynamic', 'architecture']
            }
        };
        
        return posts[slug] || {
            title: `Blog Post: ${slug}`,
            author: 'Unknown Author',
            date: 'Unknown Date',
            readTime: 3,
            content: `
                <h2>Post Not Found</h2>
                <p>The blog post with slug <code>${slug}</code> doesn't exist in our mock data.</p>
                <p>This demonstrates how dynamic routing can handle any slug parameter and respond accordingly.</p>
            `,
            tags: ['demo', 'example']
        };
    }
    
    renderSharePanel(slug) {
        const currentUrl = window.location.href;
        
        return `
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h4 class="font-medium text-blue-900 mb-3">Share this post</h4>
                <div class="flex space-x-3">
                    <button class="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <span>Twitter</span>
                    </button>
                    <button class="flex items-center space-x-2 px-3 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                        <span>Facebook</span>
                    </button>
                </div>
                <div class="mt-3">
                    <input type="text" value="${currentUrl}" readonly class="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg">
                </div>
            </div>
        `;
    }
    
    renderComments(highlightId) {
        const comments = [
            { id: '1', author: 'Alice', text: 'Great post! Very helpful.', time: '2 hours ago' },
            { id: '2', author: 'Bob', text: 'Thanks for the detailed explanation.', time: '1 day ago' },
            { id: '3', author: 'Charlie', text: 'Looking forward to more content!', time: '2 days ago' }
        ];
        
        return `
            <div class="space-y-4">
                ${comments.map(comment => `
                    <div class="border-l-4 pl-4 ${comment.id === highlightId ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}">
                        <div class="flex items-center space-x-2 mb-1">
                            <span class="font-medium">${comment.author}</span>
                            <span class="text-sm text-gray-500">${comment.time}</span>
                            ${comment.id === highlightId ? '<span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Highlighted</span>' : ''}
                        </div>
                        <p class="text-gray-700">${comment.text}</p>
                        ${comment.id === highlightId ? `
                            <p class="text-sm text-blue-600 mt-1">
                                💡 This comment was highlighted via query parameter: <code>?comment=${highlightId}</code>
                            </p>
                        ` : ''}
                    </div>
                `).join('')}
                
                <div class="pt-4 border-t border-gray-200">
                    <p class="text-sm text-gray-600">
                        Try adding <code>?comment=1</code> to the URL to highlight a specific comment!
                    </p>
                </div>
            </div>
        `;
    }
}

customElements.define('app-blog-dynamic-page', BlogPostDynamicPage);
export default BlogPostDynamicPage; 