import App from '@/core/App.js';
import '@/components/ui/Box.js';
import '@/components/ui/Card.js';
import '@/components/ui/Button.js';

/**
 * Docs Installation Page
 * 
 * Comprehensive installation guide with step-by-step instructions,
 * tips, tricks, and different setup methods.
 */
class InstallationPage extends App {

    connectedCallback() {
        super.connectedCallback();
        document.title = 'Installation | UPO UI Docs';
    }

    render() {
        return `
            <div class="">
                <!-- Page Header -->
                <div class="mb-8">
                    <h1 class="text-4xl font-bold text-gray-900 mb-4">
                        Installation Guide
                    </h1>
                    <p class="text-xl text-gray-600">
                        Get UPO UI up and running in minutes. No build tools, no complex setup - 
                        <span class="text-blue-600 font-semibold">just pure simplicity</span>.
                    </p>
                </div>

                <!-- Quick Start -->
                <ui-card class="p-8 mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mr-4">
                            <i class="fas fa-rocket text-green-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Quick Start (30 seconds)</h2>
                    </div>
                    
                    <div class="bg-gray-900 rounded-lg p-4 mb-4">
                        <div class="text-sm font-mono text-gray-300">
                            <div><span class="text-gray-500"># Create a new project</span></div>
                            <div><span class="text-green-400">mkdir</span> <span class="text-blue-400">my-upo-app</span></div>
                            <div><span class="text-green-400">cd</span> <span class="text-blue-400">my-upo-app</span></div>
                            <div></div>
                            <div><span class="text-gray-500"># Create basic HTML file</span></div>
                            <div><span class="text-green-400">echo</span> <span class="text-yellow-400">'&lt;!DOCTYPE html&gt;'</span> > index.html</div>
                            <div><span class="text-green-400">echo</span> <span class="text-yellow-400">'&lt;script type="module" src="./src/main.js"&gt;&lt;/script&gt;'</span> >> index.html</div>
                        </div>
                    </div>
                    
                    <div class="bg-blue-50 rounded-lg p-4">
                        <p class="text-sm text-blue-800">
                            <i class="fas fa-lightbulb mr-2"></i>
                            <strong>Pro Tip:</strong> That's it! No package.json, no dependencies, no build step. Just start coding.
                        </p>
                    </div>
                </ui-card>

                <!-- Installation Methods -->
                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <ui-card class="p-6">
                        <div class="flex items-center mb-4">
                            <i class="fas fa-download text-blue-600 text-xl mr-3"></i>
                            <h3 class="text-lg font-semibold text-gray-900">Method 1: Direct Download</h3>
                        </div>
                        <p class="text-gray-600 text-sm mb-4">
                            Download the framework files directly to your project.
                        </p>
                        <ui-button href="https://github.com/upovibe/upoUI/archive/refs/heads/main.zip" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                            <i class="fas fa-download mr-2"></i>
                            Download ZIP
                        </ui-button>
                    </ui-card>

                    <ui-card class="p-6">
                        <div class="flex items-center mb-4">
                            <i class="fab fa-git-alt text-orange-600 text-xl mr-3"></i>
                            <h3 class="text-lg font-semibold text-gray-900">Method 2: Git Clone</h3>
                        </div>
                        <p class="text-gray-600 text-sm mb-4">
                            Clone the repository for the latest updates and examples.
                        </p>
                        <div class="bg-gray-900 rounded-md p-3 text-sm font-mono text-gray-300">
                            <span class="text-green-400">git clone</span> <span class="text-blue-400">https://github.com/upovibe/upoUI.git</span>
                        </div>
                    </ui-card>
                </div>

                <!-- Step-by-Step Guide -->
                <ui-card class="p-8 mb-8">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mr-4">
                            <i class="fas fa-list-ol text-blue-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Step-by-Step Setup</h2>
                    </div>

                    <div class="space-y-8">
                        <!-- Step 1 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Create Project Structure</h3>
                                <p class="text-gray-600 mb-4">
                                    Set up the basic folder structure for your UPO UI project.
                                </p>
                                <div class="bg-gray-900 rounded-lg p-4 mb-4">
                                    <div class="text-sm font-mono text-gray-300">
                                        <div class="text-blue-400">my-upo-app/</div>
                                        <div class="ml-2">├── <span class="text-green-400">index.html</span> <span class="text-gray-500"># Main HTML file</span></div>
                                        <div class="ml-2">└── <span class="text-yellow-400">src/</span></div>
                                        <div class="ml-4">├── <span class="text-green-400">main.js</span> <span class="text-gray-500"># Entry point</span></div>
                                        <div class="ml-4">├── <span class="text-yellow-400">app/</span> <span class="text-gray-500"># Your pages</span></div>
                                        <div class="ml-4">├── <span class="text-yellow-400">components/</span> <span class="text-gray-500"># UPO UI components</span></div>
                                        <div class="ml-4">└── <span class="text-yellow-400">core/</span> <span class="text-gray-500"># Framework core</span></div>
                                    </div>
                                </div>
                                <div class="bg-yellow-50 rounded-lg p-4">
                                    <p class="text-sm text-yellow-800">
                                        <i class="fas fa-info-circle mr-2"></i>
                                        <strong>Why this structure?</strong> UPO UI uses file-based routing similar to Next.js. 
                                        Each file in the <code>app/</code> folder becomes a route automatically.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Create index.html</h3>
                                <p class="text-gray-600 mb-4">
                                    Set up your main HTML file with minimal boilerplate.
                                </p>
                                <div class="bg-gray-900 rounded-lg p-4 mb-4">
                                    <div class="text-sm font-mono text-gray-300">
                                        <div><span class="text-blue-400">&lt;!DOCTYPE html&gt;</span></div>
                                        <div><span class="text-blue-400">&lt;html</span> <span class="text-green-400">lang</span>=<span class="text-yellow-400">"en"</span><span class="text-blue-400">&gt;</span></div>
                                        <div><span class="text-blue-400">&lt;head&gt;</span></div>
                                        <div class="ml-2"><span class="text-blue-400">&lt;meta</span> <span class="text-green-400">charset</span>=<span class="text-yellow-400">"UTF-8"</span><span class="text-blue-400">&gt;</span></div>
                                        <div class="ml-2"><span class="text-blue-400">&lt;meta</span> <span class="text-green-400">name</span>=<span class="text-yellow-400">"viewport"</span> <span class="text-green-400">content</span>=<span class="text-yellow-400">"width=device-width, initial-scale=1.0"</span><span class="text-blue-400">&gt;</span></div>
                                        <div class="ml-2"><span class="text-blue-400">&lt;title&gt;</span>My UPO UI App<span class="text-blue-400">&lt;/title&gt;</span></div>
                                        <div class="ml-2"><span class="text-gray-500">&lt;!-- Optional: Tailwind CSS --&gt;</span></div>
                                        <div class="ml-2"><span class="text-blue-400">&lt;script</span> <span class="text-green-400">src</span>=<span class="text-yellow-400">"https://cdn.tailwindcss.com"</span><span class="text-blue-400">&gt;&lt;/script&gt;</span></div>
                                        <div class="ml-2"><span class="text-gray-500">&lt;!-- Optional: Font Awesome --&gt;</span></div>
                                        <div class="ml-2"><span class="text-blue-400">&lt;link</span> <span class="text-green-400">rel</span>=<span class="text-yellow-400">"stylesheet"</span> <span class="text-green-400">href</span>=<span class="text-yellow-400">"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"</span><span class="text-blue-400">&gt;</span></div>
                                        <div><span class="text-blue-400">&lt;/head&gt;</span></div>
                                        <div><span class="text-blue-400">&lt;body&gt;</span></div>
                                        <div class="ml-2"><span class="text-blue-400">&lt;div</span> <span class="text-green-400">id</span>=<span class="text-yellow-400">"app"</span><span class="text-blue-400">&gt;&lt;/div&gt;</span></div>
                                        <div class="ml-2"><span class="text-blue-400">&lt;script</span> <span class="text-green-400">type</span>=<span class="text-yellow-400">"module"</span> <span class="text-green-400">src</span>=<span class="text-yellow-400">"/src/main.js"</span><span class="text-blue-400">&gt;&lt;/script&gt;</span></div>
                                        <div><span class="text-blue-400">&lt;/body&gt;</span></div>
                                        <div><span class="text-blue-400">&lt;/html&gt;</span></div>
                                    </div>
                                </div>
                                <div class="bg-blue-50 rounded-lg p-4">
                                    <p class="text-sm text-blue-800">
                                        <i class="fas fa-lightbulb mr-2"></i>
                                        <strong>CSS Framework Freedom:</strong> UPO UI works with any CSS framework. 
                                        Use Tailwind, Bootstrap, or write your own styles!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Copy UPO UI Files</h3>
                                <p class="text-gray-600 mb-4">
                                    Copy the UPO UI framework files to your src directory.
                                </p>
                                <div class="bg-gray-900 rounded-lg p-4 mb-4">
                                    <div class="text-sm font-mono text-gray-300">
                                        <div><span class="text-gray-500"># From downloaded/cloned UPO UI</span></div>
                                        <div><span class="text-green-400">cp</span> <span class="text-blue-400">-r</span> upoUI/src/components <span class="text-yellow-400">my-upo-app/src/</span></div>
                                        <div><span class="text-green-400">cp</span> <span class="text-blue-400">-r</span> upoUI/src/core <span class="text-yellow-400">my-upo-app/src/</span></div>
                                        <div><span class="text-green-400">cp</span> upoUI/src/main.js <span class="text-yellow-400">my-upo-app/src/</span></div>
                                    </div>
                                </div>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div class="bg-green-50 rounded-lg p-4">
                                        <p class="text-sm text-green-800">
                                            <i class="fas fa-check mr-2"></i>
                                            <strong>What you get:</strong> Complete framework with routing, components, and utilities.
                                        </p>
                                    </div>
                                    <div class="bg-purple-50 rounded-lg p-4">
                                        <p class="text-sm text-purple-800">
                                            <i class="fas fa-puzzle-piece mr-2"></i>
                                            <strong>Modular:</strong> Pick and choose only the components you need.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Step 4 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Create Your First Page</h3>
                                <p class="text-gray-600 mb-4">
                                    Create your first page component in the app directory.
                                </p>
                                <div class="bg-gray-900 rounded-lg p-4 mb-4">
                                    <div class="text-sm font-mono text-gray-300">
                                        <div><span class="text-gray-500">// src/app/page.js</span></div>
                                                                        <div><span class="text-purple-400">import</span> <span class="text-blue-400">App</span> <span class="text-purple-400">from</span> <span class="text-green-400">'@/core/App.js'</span>;</div>
                                <div><span class="text-purple-400">import</span> <span class="text-green-400">'@/components/ui/Box.js'</span>;</div>
                                <div><span class="text-purple-400">import</span> <span class="text-green-400">'@/components/ui/Button.js'</span>;</div>
                                        <div></div>
                                        <div><span class="text-purple-400">class</span> <span class="text-blue-400">HomePage</span> <span class="text-purple-400">extends</span> <span class="text-green-400">App</span> {</div>
                                        <div class="ml-2"><span class="text-yellow-400">render</span>() {</div>
                                        <div class="ml-4"><span class="text-purple-400">return</span> <span class="text-green-400">\`</span></div>
                                        <div class="ml-6"><span class="text-green-400">&lt;ui-box class="p-8 text-center"&gt;</span></div>
                                        <div class="ml-8"><span class="text-green-400">&lt;h1 class="text-4xl font-bold mb-4"&gt;Welcome to UPO UI!&lt;/h1&gt;</span></div>
                                        <div class="ml-8"><span class="text-green-400">&lt;p class="text-gray-600 mb-6"&gt;Your first UPO UI application&lt;/p&gt;</span></div>
                                        <div class="ml-8"><span class="text-green-400">&lt;ui-button class="bg-blue-500 text-white px-6 py-2 rounded"&gt;</span></div>
                                        <div class="ml-10"><span class="text-green-400">Get Started</span></div>
                                        <div class="ml-8"><span class="text-green-400">&lt;/ui-button&gt;</span></div>
                                        <div class="ml-6"><span class="text-green-400">&lt;/ui-box&gt;</span></div>
                                        <div class="ml-4"><span class="text-green-400">\`</span>;</div>
                                        <div class="ml-2">}</div>
                                        <div>}</div>
                                        <div></div>
                                        <div><span class="text-cyan-400">customElements</span>.<span class="text-yellow-400">define</span>(<span class="text-green-400">'app-home-page'</span>, <span class="text-blue-400">HomePage</span>);</div>
                                        <div><span class="text-purple-400">export</span> <span class="text-purple-400">default</span> <span class="text-blue-400">HomePage</span>;</div>
                                    </div>
                                </div>
                                <div class="bg-orange-50 rounded-lg p-4">
                                    <p class="text-sm text-orange-800">
                                        <i class="fas fa-magic mr-2"></i>
                                        <strong>Auto-routing:</strong> This file automatically becomes your home page at <code>/</code>. 
                                        No configuration needed!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 5 -->
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">Serve Your App</h3>
                                <p class="text-gray-600 mb-4">
                                    Start a local server to see your UPO UI app in action.
                                </p>
                                <div class="grid md:grid-cols-3 gap-4 mb-4">
                                    <div class="bg-gray-900 rounded-lg p-3">
                                        <div class="text-xs text-gray-400 mb-1">Python</div>
                                        <div class="text-sm font-mono text-gray-300">
                                            <span class="text-green-400">python</span> <span class="text-blue-400">-m</span> http.server
                                        </div>
                                    </div>
                                    <div class="bg-gray-900 rounded-lg p-3">
                                        <div class="text-xs text-gray-400 mb-1">Node.js</div>
                                        <div class="text-sm font-mono text-gray-300">
                                            <span class="text-green-400">npx</span> <span class="text-blue-400">serve</span> <span class="text-yellow-400">.</span>
                                        </div>
                                    </div>
                                    <div class="bg-gray-900 rounded-lg p-3">
                                        <div class="text-xs text-gray-400 mb-1">PHP</div>
                                        <div class="text-sm font-mono text-gray-300">
                                            <span class="text-green-400">php</span> <span class="text-blue-400">-S</span> localhost:8000
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-green-50 rounded-lg p-4">
                                    <p class="text-sm text-green-800">
                                        <i class="fas fa-rocket mr-2"></i>
                                        <strong>That's it!</strong> Open your browser to <code>http://localhost:8000</code> 
                                        and see your UPO UI app running.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ui-card>

                <!-- Tips & Tricks -->
                <ui-card class="p-8 mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mr-4">
                            <i class="fas fa-magic text-purple-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Pro Tips & Tricks</h2>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="space-y-4">
                            <div class="bg-white rounded-lg p-4 border border-purple-200">
                                <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                                    <i class="fas fa-folder text-blue-500 mr-2"></i>
                                    Smart File Organization
                                </h4>
                                <p class="text-sm text-gray-600 mb-2">
                                    Use nested folders for complex routing:
                                </p>
                                <div class="bg-gray-100 rounded p-2 text-xs font-mono">
                                    app/blog/[id]/page.js → /blog/:id
                                </div>
                            </div>

                            <div class="bg-white rounded-lg p-4 border border-purple-200">
                                <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                                    <i class="fas fa-layer-group text-green-500 mr-2"></i>
                                    Layout Inheritance
                                </h4>
                                <p class="text-sm text-gray-600 mb-2">
                                    Create layout.js files for shared layouts:
                                </p>
                                <div class="bg-gray-100 rounded p-2 text-xs font-mono">
                                    app/layout.js → Global layout<br/>
                                    app/docs/layout.js → Docs layout
                                </div>
                            </div>

                            <div class="bg-white rounded-lg p-4 border border-purple-200">
                                <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                                    <i class="fas fa-paint-brush text-orange-500 mr-2"></i>
                                    CSS Framework Integration
                                </h4>
                                <p class="text-sm text-gray-600">
                                    UPO UI components work with any CSS framework. 
                                    Just add classes to your components!
                                </p>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div class="bg-white rounded-lg p-4 border border-purple-200">
                                <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                                    <i class="fas fa-code text-purple-500 mr-2"></i>
                                    Component Composition
                                </h4>
                                <p class="text-sm text-gray-600 mb-2">
                                    Build complex UIs by composing simple components:
                                </p>
                                <div class="bg-gray-100 rounded p-2 text-xs font-mono">
                                    &lt;ui-card&gt;&lt;ui-button&gt;...&lt;/ui-button&gt;&lt;/ui-card&gt;
                                </div>
                            </div>

                            <div class="bg-white rounded-lg p-4 border border-purple-200">
                                <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                                    <i class="fas fa-rocket text-red-500 mr-2"></i>
                                    Zero-Config Deployment
                                </h4>
                                <p class="text-sm text-gray-600">
                                    Deploy to Netlify, Vercel, or GitHub Pages by 
                                    simply uploading your files. No build step!
                                </p>
                            </div>

                            <div class="bg-white rounded-lg p-4 border border-purple-200">
                                <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                                    <i class="fas fa-database text-cyan-500 mr-2"></i>
                                    State Management
                                </h4>
                                <p class="text-sm text-gray-600">
                                    Use built-in state management or integrate 
                                    with any state library you prefer.
                                </p>
                            </div>
                        </div>
                    </div>
                </ui-card>

                <!-- Advanced Setup -->
                <ui-card class="p-8 mb-8">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg mr-4">
                            <i class="fas fa-cogs text-gray-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Advanced Setup Options</h2>
                    </div>

                    <div class="space-y-6">
                        <div class="border border-gray-200 rounded-lg p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                <i class="fas fa-server text-blue-500 mr-2"></i>
                                Production Deployment
                            </h3>
                            <p class="text-gray-600 mb-4">
                                For production, consider these optimizations:
                            </p>
                            <ul class="space-y-2 text-sm text-gray-600">
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Enable gzip compression on your server
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Set proper cache headers for static assets
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Use a CDN for better global performance
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Minify CSS if using custom stylesheets
                                </li>
                            </ul>
                        </div>

                        <div class="border border-gray-200 rounded-lg p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                <i class="fas fa-puzzle-piece text-purple-500 mr-2"></i>
                                Custom Component Development
                            </h3>
                            <p class="text-gray-600 mb-4">
                                Create your own components by extending the App class:
                            </p>
                            <div class="bg-gray-900 rounded-lg p-4">
                                <div class="text-sm font-mono text-gray-300">
                                    <div><span class="text-purple-400">class</span> <span class="text-blue-400">MyComponent</span> <span class="text-purple-400">extends</span> <span class="text-green-400">App</span> {</div>
                                    <div class="ml-2"><span class="text-yellow-400">constructor</span>() {</div>
                                    <div class="ml-4"><span class="text-purple-400">super</span>();</div>
                                    <div class="ml-4"><span class="text-cyan-400">this</span>.state = { count: <span class="text-orange-400">0</span> };</div>
                                    <div class="ml-2">}</div>
                                    <div class="ml-2"><span class="text-yellow-400">render</span>() {</div>
                                    <div class="ml-4"><span class="text-purple-400">return</span> <span class="text-green-400">\`&lt;div&gt;\${this.state.count}&lt;/div&gt;\`</span>;</div>
                                    <div class="ml-2">}</div>
                                    <div>}</div>
                                </div>
                            </div>
                        </div>

                        <div class="border border-gray-200 rounded-lg p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                <i class="fas fa-plug text-green-500 mr-2"></i>
                                Third-party Integrations
                            </h3>
                            <p class="text-gray-600 mb-4">
                                UPO UI plays well with other libraries:
                            </p>
                            <div class="grid md:grid-cols-3 gap-4">
                                <div class="text-center p-4 bg-blue-50 rounded-lg">
                                    <i class="fab fa-js-square text-blue-600 text-2xl mb-2"></i>
                                    <div class="text-sm font-medium">Any JS Library</div>
                                </div>
                                <div class="text-center p-4 bg-green-50 rounded-lg">
                                    <i class="fas fa-chart-bar text-green-600 text-2xl mb-2"></i>
                                    <div class="text-sm font-medium">Chart Libraries</div>
                                </div>
                                <div class="text-center p-4 bg-purple-50 rounded-lg">
                                    <i class="fas fa-paint-brush text-purple-600 text-2xl mb-2"></i>
                                    <div class="text-sm font-medium">CSS Frameworks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ui-card>

                <!-- Troubleshooting -->
                <ui-card class="p-8 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg mr-4">
                            <i class="fas fa-exclamation-triangle text-red-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Troubleshooting</h2>
                    </div>

                    <div class="space-y-4">
                        <div class="bg-white rounded-lg p-4 border border-red-200">
                            <h4 class="font-semibold text-gray-900 mb-2">Components not loading?</h4>
                            <p class="text-sm text-gray-600 mb-2">Check your file paths and make sure you're serving from a web server (not file://).</p>
                            <div class="bg-red-50 rounded p-2 text-xs">
                                ✅ http://localhost:8000 &nbsp;&nbsp; ❌ file:///path/to/index.html
                            </div>
                        </div>

                        <div class="bg-white rounded-lg p-4 border border-red-200">
                            <h4 class="font-semibold text-gray-900 mb-2">CORS errors?</h4>
                            <p class="text-sm text-gray-600">Use a local server instead of opening HTML files directly. Try <code>python -m http.server</code> or <code>npx serve</code>.</p>
                        </div>

                        <div class="bg-white rounded-lg p-4 border border-red-200">
                            <h4 class="font-semibold text-gray-900 mb-2">Routing not working?</h4>
                            <p class="text-sm text-gray-600">Make sure your page components are properly exported and the file structure matches the expected routing pattern.</p>
                        </div>
                    </div>
                </ui-card>

                <!-- Next Steps -->
                <div class="text-center">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Ready to Build?</h2>
                    <p class="text-gray-600 mb-6">You're all set! Start exploring the components and building your application.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <ui-button href="/docs/components" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <i class="fas fa-cubes mr-2"></i>
                            Explore Components
                        </ui-button>
                        <ui-button href="https://github.com/upovibe/upoUI/tree/main/examples" class="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                            <i class="fas fa-code mr-2"></i>
                            View Examples
                        </ui-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-installation-page', InstallationPage);
export default InstallationPage;
