import App from '../../core/App.js';
import '../../components/ui/Box.js';
import '../../components/ui/Button.js';
import '../../components/ui/Card.js';

/**
 * Docs Index Page
 * 
 * The main landing page for the documentation section.
 */
class DocsIndexPage extends App {

    connectedCallback() {
        super.connectedCallback();
        document.title = 'Documentation | UPO UI';
    }

    render() {
        return `
            <div class="max-w-4xl mx-auto">
                <!-- Hero Section -->
                <div class="text-center mb-12">
                    <img class="size-16 rounded-lg shadow-lg rounded-full mx-auto" src="/src/assets/logo.png" alt="UPO UI Logo" />
                    <h1 class="text-4xl font-bold text-gray-900 mb-4">
                        Welcome to UPO UI
                    </h1>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        A complete web framework built on modern web standards. More than just components - 
                        <span class="text-blue-600 font-semibold">a full-stack frontend solution</span> with routing, lifecycle management, and zero dependencies.
                    </p>
                </div>

                <!-- Key Features Grid -->
                <div class="grid md:grid-cols-3 gap-6 mb-12">
                    <ui-card class="text-center p-6 hover:shadow-lg transition-shadow">
                        <div class="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                            <i class="fas fa-bolt text-green-600 text-xl"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Zero Dependencies</h3>
                        <p class="text-gray-600 text-sm">
                            Pure vanilla JavaScript with no external dependencies. Just include and start building.
                        </p>
                    </ui-card>

                    <ui-card class="text-center p-6 hover:shadow-lg transition-shadow">
                        <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                            <i class="fas fa-code text-blue-600 text-xl"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">No Build Step</h3>
                        <p class="text-gray-600 text-sm">
                            Deploy directly to any static host. No webpack, no bundlers, no complex setup.
                        </p>
                    </ui-card>

                    <ui-card class="text-center p-6 hover:shadow-lg transition-shadow">
                        <div class="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                            <i class="fas fa-cubes text-purple-600 text-xl"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Full Framework</h3>
                        <p class="text-gray-600 text-sm">
                            Complete solution with routing, state management, and component lifecycle.
                        </p>
                    </ui-card>
                </div>

                <!-- Framework Core -->
                <ui-card class="p-8 mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-lg mr-4">
                            <i class="fas fa-cogs text-indigo-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Framework Core</h2>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-layer-group text-indigo-500 mr-2"></i>
                                Base App Class
                            </h3>
                            <div class="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4">
                                <div><span class="text-purple-400">class</span> <span class="text-blue-400">MyComponent</span> <span class="text-purple-400">extends</span> <span class="text-green-400">App</span> {</div>
                                <div class="ml-2"><span class="text-yellow-400">constructor</span>() {</div>
                                <div class="ml-4"><span class="text-purple-400">super</span>();</div>
                                <div class="ml-4"><span class="text-cyan-400">this</span>.state = { count: <span class="text-orange-400">0</span> };</div>
                                <div class="ml-2">}</div>
                                <div class="ml-2"></div>
                                <div class="ml-2"><span class="text-yellow-400">connectedCallback</span>() {</div>
                                <div class="ml-4"><span class="text-purple-400">super</span>.<span class="text-yellow-400">connectedCallback</span>();</div>
                                <div class="ml-4"><span class="text-gray-500">// Component mounted</span></div>
                                <div class="ml-2">}</div>
                                <div class="ml-2"></div>
                                <div class="ml-2"><span class="text-yellow-400">render</span>() {</div>
                                <div class="ml-4"><span class="text-purple-400">return</span> <span class="text-green-400">\`&lt;div&gt;\${this.state.count}&lt;/div&gt;\`</span>;</div>
                                <div class="ml-2">}</div>
                                <div>}</div>
                            </div>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Automatic DOM updates
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Built-in state management
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Lifecycle hooks
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Event handling
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-heartbeat text-red-500 mr-2"></i>
                                Lifecycle Methods
                            </h3>
                            <div class="space-y-3">
                                <div class="flex items-start p-3 bg-white rounded-lg border">
                                    <i class="fas fa-play text-green-500 mr-3 mt-1"></i>
                                    <div>
                                        <code class="text-sm font-mono text-gray-800">connectedCallback()</code>
                                        <div class="text-xs text-gray-500">Called when component mounts</div>
                                    </div>
                                </div>
                                <div class="flex items-start p-3 bg-white rounded-lg border">
                                    <i class="fas fa-sync text-blue-500 mr-3 mt-1"></i>
                                    <div>
                                        <code class="text-sm font-mono text-gray-800">render()</code>
                                        <div class="text-xs text-gray-500">Returns HTML template string</div>
                                    </div>
                                </div>
                                <div class="flex items-start p-3 bg-white rounded-lg border">
                                    <i class="fas fa-stop text-red-500 mr-3 mt-1"></i>
                                    <div>
                                        <code class="text-sm font-mono text-gray-800">disconnectedCallback()</code>
                                        <div class="text-xs text-gray-500">Called when component unmounts</div>
                                    </div>
                                </div>
                                <div class="flex items-start p-3 bg-white rounded-lg border">
                                    <i class="fas fa-edit text-purple-500 mr-3 mt-1"></i>
                                    <div>
                                        <code class="text-sm font-mono text-gray-800">attributeChangedCallback()</code>
                                        <div class="text-xs text-gray-500">Called when attributes change</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ui-card>

                <!-- Routing System -->
                <ui-card class="p-8 mb-12 bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mr-4">
                            <i class="fas fa-route text-green-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Advanced Routing System</h2>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-folder-tree text-green-500 mr-2"></i>
                                File-based Routing
                            </h3>
                            <div class="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4">
                                <div class="text-green-400">app/</div>
                                <div class="ml-2">├── <span class="text-blue-400">page.js</span> <span class="text-gray-500"># → /</span></div>
                                <div class="ml-2">├── <span class="text-blue-400">layout.js</span> <span class="text-gray-500"># Root layout</span></div>
                                <div class="ml-2">├── <span class="text-yellow-400">docs/</span></div>
                                <div class="ml-4">│   ├── <span class="text-blue-400">page.js</span> <span class="text-gray-500"># → /docs</span></div>
                                <div class="ml-4">│   ├── <span class="text-blue-400">layout.js</span> <span class="text-gray-500"># Docs layout</span></div>
                                <div class="ml-4">│   └── <span class="text-yellow-400">components/</span></div>
                                <div class="ml-6">│       └── <span class="text-blue-400">page.js</span> <span class="text-gray-500"># → /docs/components</span></div>
                                <div class="ml-2">└── <span class="text-yellow-400">api/</span></div>
                                <div class="ml-4">    └── <span class="text-blue-400">page.js</span> <span class="text-gray-500"># → /api</span></div>
                            </div>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Automatic route discovery
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Nested layouts support
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Dynamic route parameters
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-cog text-blue-500 mr-2"></i>
                                Router Configuration
                            </h3>
                            <div class="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4">
                                <div><span class="text-purple-400">import</span> <span class="text-blue-400">Router</span> <span class="text-purple-400">from</span> <span class="text-green-400">'./core/Router.js'</span>;</div>
                                <div></div>
                                <div><span class="text-gray-500">// Initialize router</span></div>
                                <div><span class="text-cyan-400">const</span> <span class="text-blue-400">router</span> = <span class="text-purple-400">new</span> <span class="text-yellow-400">Router</span>();</div>
                                <div></div>
                                <div><span class="text-gray-500">// Handle route changes</span></div>
                                <div><span class="text-blue-400">router</span>.<span class="text-yellow-400">on</span>(<span class="text-green-400">'route-change'</span>, (event) => {</div>
                                <div class="ml-2"><span class="text-cyan-400">console</span>.<span class="text-yellow-400">log</span>(<span class="text-green-400">'Route:'</span>, event.route);</div>
                                <div>});</div>
                                <div></div>
                                <div><span class="text-gray-500">// Navigate programmatically</span></div>
                                <div><span class="text-blue-400">router</span>.<span class="text-yellow-400">navigate</span>(<span class="text-green-400">'/docs/components'</span>);</div>
                            </div>
                            <div class="space-y-2">
                                <div class="flex items-center p-2 bg-blue-50 rounded text-sm">
                                    <i class="fas fa-history text-blue-500 mr-2"></i>
                                    <span>History API integration</span>
                                </div>
                                <div class="flex items-center p-2 bg-green-50 rounded text-sm">
                                    <i class="fas fa-link text-green-500 mr-2"></i>
                                    <span>Automatic link handling</span>
                                </div>
                                <div class="flex items-center p-2 bg-purple-50 rounded text-sm">
                                    <i class="fas fa-refresh text-purple-500 mr-2"></i>
                                    <span>SPA navigation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ui-card>

                <!-- State Management -->
                <ui-card class="p-8 mb-12 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg mr-4">
                            <i class="fas fa-database text-orange-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">State Management</h2>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-cube text-orange-500 mr-2"></i>
                                Component State
                            </h3>
                            <div class="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4">
                                <div><span class="text-purple-400">class</span> <span class="text-blue-400">Counter</span> <span class="text-purple-400">extends</span> <span class="text-green-400">App</span> {</div>
                                <div class="ml-2"><span class="text-yellow-400">constructor</span>() {</div>
                                <div class="ml-4"><span class="text-purple-400">super</span>();</div>
                                <div class="ml-4"><span class="text-cyan-400">this</span>.state = {</div>
                                <div class="ml-6">count: <span class="text-orange-400">0</span>,</div>
                                <div class="ml-6">loading: <span class="text-orange-400">false</span></div>
                                <div class="ml-4">};</div>
                                <div class="ml-2">}</div>
                                <div class="ml-2"></div>
                                <div class="ml-2"><span class="text-yellow-400">increment</span>() {</div>
                                <div class="ml-4"><span class="text-cyan-400">this</span>.<span class="text-yellow-400">setState</span>({</div>
                                <div class="ml-6">count: <span class="text-cyan-400">this</span>.state.count + <span class="text-orange-400">1</span></div>
                                <div class="ml-4">});</div>
                                <div class="ml-2">}</div>
                                <div>}</div>
                            </div>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Reactive state updates
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Automatic re-rendering
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    Immutable updates
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-share-alt text-blue-500 mr-2"></i>
                                Event Communication
                            </h3>
                            <div class="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4">
                                <div><span class="text-gray-500">// Emit custom events</span></div>
                                <div><span class="text-cyan-400">this</span>.<span class="text-yellow-400">dispatchEvent</span>(<span class="text-purple-400">new</span> <span class="text-blue-400">CustomEvent</span>(</div>
                                <div class="ml-2"><span class="text-green-400">'data-updated'</span>, {</div>
                                <div class="ml-4">detail: { data: <span class="text-cyan-400">this</span>.state.data }</div>
                                <div class="ml-2">}</div>
                                <div>));</div>
                                <div></div>
                                <div><span class="text-gray-500">// Listen for events</span></div>
                                <div><span class="text-cyan-400">document</span>.<span class="text-yellow-400">addEventListener</span>(</div>
                                <div class="ml-2"><span class="text-green-400">'data-updated'</span>, (event) => {</div>
                                <div class="ml-4"><span class="text-cyan-400">console</span>.<span class="text-yellow-400">log</span>(event.detail.data);</div>
                                <div class="ml-2">}</div>
                                <div>);</div>
                            </div>
                            <div class="space-y-2">
                                <div class="flex items-center p-2 bg-blue-50 rounded text-sm">
                                    <i class="fas fa-broadcast-tower text-blue-500 mr-2"></i>
                                    <span>Event-driven architecture</span>
                                </div>
                                <div class="flex items-center p-2 bg-green-50 rounded text-sm">
                                    <i class="fas fa-comments text-green-500 mr-2"></i>
                                    <span>Component communication</span>
                                </div>
                                <div class="flex items-center p-2 bg-purple-50 rounded text-sm">
                                    <i class="fas fa-plug text-purple-500 mr-2"></i>
                                    <span>Loose coupling</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ui-card>

                <!-- Architecture Overview -->
                <ui-card class="p-8 mb-12 bg-gradient-to-r from-gray-50 to-blue-50 border-l-4 border-blue-500">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mr-4">
                            <i class="fas fa-sitemap text-blue-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Framework Architecture</h2>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-folder-tree text-blue-500 mr-2"></i>
                                Project Structure
                            </h3>
                            <div class="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300">
                                <div class="text-blue-400">src/</div>
                                <div class="ml-2">├── <span class="text-green-400">app/</span> <span class="text-gray-500"># Pages & layouts</span></div>
                                <div class="ml-2">├── <span class="text-yellow-400">components/</span></div>
                                <div class="ml-4">│   ├── <span class="text-purple-400">layout/</span> <span class="text-gray-500"># Layout components</span></div>
                                <div class="ml-4">│   └── <span class="text-pink-400">ui/</span> <span class="text-gray-500"># UI components</span></div>
                                <div class="ml-2">├── <span class="text-cyan-400">core/</span> <span class="text-gray-500"># App class & Router</span></div>
                                <div class="ml-2">└── <span class="text-orange-400">main.js</span> <span class="text-gray-500"># Entry point</span></div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-microchip text-purple-500 mr-2"></i>
                                Core APIs
                            </h3>
                            <div class="space-y-3">
                                <div class="flex items-center p-3 bg-white rounded-lg border">
                                    <i class="fas fa-layer-group text-blue-500 mr-3"></i>
                                    <div>
                                        <code class="text-sm font-mono text-gray-800">App</code>
                                        <div class="text-xs text-gray-500">Base component class</div>
                                    </div>
                                </div>
                                <div class="flex items-center p-3 bg-white rounded-lg border">
                                    <i class="fas fa-route text-green-500 mr-3"></i>
                                    <div>
                                        <code class="text-sm font-mono text-gray-800">Router</code>
                                        <div class="text-xs text-gray-500">Client-side routing</div>
                                    </div>
                                </div>
                                <div class="flex items-center p-3 bg-white rounded-lg border">
                                    <i class="fas fa-puzzle-piece text-purple-500 mr-3"></i>
                                    <div>
                                        <code class="text-sm font-mono text-gray-800">Components</code>
                                        <div class="text-xs text-gray-500">Reusable UI elements</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ui-card>

                <!-- Component System -->
                <ui-card class="p-8 mb-12">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mr-4">
                            <i class="fas fa-puzzle-piece text-purple-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">UI Component Library</h2>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- UI Components -->
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold text-gray-900 flex items-center">
                                <i class="fas fa-palette text-green-500 mr-2"></i>
                                Available Components
                            </h3>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="flex items-center p-3 bg-blue-50 rounded-lg">
                                    <i class="fas fa-square text-blue-500 mr-2"></i>
                                    <span class="text-sm font-medium">ui-box</span>
                                </div>
                                <div class="flex items-center p-3 bg-green-50 rounded-lg">
                                    <i class="fas fa-mouse-pointer text-green-500 mr-2"></i>
                                    <span class="text-sm font-medium">ui-button</span>
                                </div>
                                <div class="flex items-center p-3 bg-purple-50 rounded-lg">
                                    <i class="fas fa-link text-purple-500 mr-2"></i>
                                    <span class="text-sm font-medium">ui-link</span>
                                </div>
                                <div class="flex items-center p-3 bg-orange-50 rounded-lg">
                                    <i class="fas fa-edit text-orange-500 mr-2"></i>
                                    <span class="text-sm font-medium">ui-input</span>
                                </div>
                                <div class="flex items-center p-3 bg-pink-50 rounded-lg">
                                    <i class="fas fa-id-card text-pink-500 mr-2"></i>
                                    <span class="text-sm font-medium">ui-card</span>
                                </div>
                                <div class="flex items-center p-3 bg-cyan-50 rounded-lg">
                                    <i class="fas fa-plus text-cyan-500 mr-2"></i>
                                    <span class="text-sm font-medium">& more...</span>
                                </div>
                            </div>
                        </div>

                        <!-- Component Features -->
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold text-gray-900 flex items-center">
                                <i class="fas fa-star text-yellow-500 mr-2"></i>
                                Component Features
                            </h3>
                            <ul class="space-y-3">
                                <li class="flex items-start space-x-3">
                                    <i class="fas fa-paint-brush text-blue-500 mt-1"></i>
                                    <div>
                                        <h4 class="font-medium text-gray-900">CSS Framework Agnostic</h4>
                                        <p class="text-sm text-gray-600">Works with Tailwind, Bootstrap, or custom CSS</p>
                                    </div>
                                </li>
                                <li class="flex items-start space-x-3">
                                    <i class="fas fa-mobile-alt text-green-500 mt-1"></i>
                                    <div>
                                        <h4 class="font-medium text-gray-900">Responsive Design</h4>
                                        <p class="text-sm text-gray-600">Mobile-first responsive components</p>
                                    </div>
                                </li>
                                <li class="flex items-start space-x-3">
                                    <i class="fas fa-universal-access text-purple-500 mt-1"></i>
                                    <div>
                                        <h4 class="font-medium text-gray-900">Accessibility</h4>
                                        <p class="text-sm text-gray-600">Built-in ARIA attributes and keyboard navigation</p>
                                    </div>
                                </li>
                                <li class="flex items-start space-x-3">
                                    <i class="fas fa-expand-arrows-alt text-orange-500 mt-1"></i>
                                    <div>
                                        <h4 class="font-medium text-gray-900">Extensible</h4>
                                        <p class="text-sm text-gray-600">Easy to extend and customize for your needs</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ui-card>

                <!-- Getting Started -->
                <ui-card class="p-8 mb-12 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mr-4">
                            <i class="fas fa-play text-green-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Quick Start</h2>
                    </div>

                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <div>
                                <h3 class="font-semibold text-gray-900 mb-2">Include in HTML</h3>
                                <div class="bg-gray-900 rounded-lg p-3 text-sm font-mono text-gray-300">
                                    <span class="text-blue-400">&lt;script</span> <span class="text-green-400">type</span>=<span class="text-yellow-400">"module"</span> <span class="text-green-400">src</span>=<span class="text-yellow-400">"/src/main.js"</span><span class="text-blue-400">&gt;&lt;/script&gt;</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <div>
                                <h3 class="font-semibold text-gray-900 mb-2">Create Components</h3>
                                <div class="bg-gray-900 rounded-lg p-3 text-sm font-mono text-gray-300">
                                    <div><span class="text-purple-400">class</span> <span class="text-blue-400">MyPage</span> <span class="text-purple-400">extends</span> <span class="text-green-400">App</span> {</div>
                                    <div class="ml-2"><span class="text-yellow-400">render</span>() {</div>
                                    <div class="ml-4"><span class="text-purple-400">return</span> <span class="text-green-400">\`&lt;ui-box&gt;Hello!&lt;/ui-box&gt;\`</span>;</div>
                                    <div class="ml-2">}</div>
                                    <div>}</div>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <div>
                                <h3 class="font-semibold text-gray-900 mb-2">Deploy Anywhere</h3>
                                <p class="text-gray-600 text-sm">
                                    Upload to any static host - GitHub Pages, Netlify, Vercel, or your own server. No build step required!
                                </p>
                            </div>
                        </div>
                    </div>
                </ui-card>

                <!-- Key Benefits -->
                <ui-card class="p-8 mb-12">
                    <div class="flex items-center mb-6">
                        <div class="inline-flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-lg mr-4">
                            <i class="fas fa-star text-yellow-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Why Choose UPO UI?</h2>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-rocket text-blue-500 mt-1"></i>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Instant Development</h3>
                                    <p class="text-sm text-gray-600">Start coding immediately without setup, configuration, or compilation steps.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-feather-alt text-green-500 mt-1"></i>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Lightweight</h3>
                                    <p class="text-sm text-gray-600">Minimal footprint with only essential features, perfect for performance-critical applications.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-mobile-alt text-purple-500 mt-1"></i>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Mobile-First</h3>
                                    <p class="text-sm text-gray-600">Responsive design built-in with mobile-optimized components and layouts.</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-paint-brush text-pink-500 mt-1"></i>
                                <div>
                                    <h3 class="font-semibold text-gray-900">CSS Framework Agnostic</h3>
                                    <p class="text-sm text-gray-600">Works with Tailwind, Bootstrap, or any CSS framework of your choice.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-globe text-cyan-500 mt-1"></i>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Universal Deployment</h3>
                                    <p class="text-sm text-gray-600">Deploy to any static hosting service without server-side requirements.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-code-branch text-orange-500 mt-1"></i>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Modern JavaScript</h3>
                                    <p class="text-sm text-gray-600">Built with ES6+ features, modules, and modern web standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ui-card>

                <!-- Call to Action -->
                <div class="text-center">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                    <p class="text-gray-600 mb-6">Explore the framework APIs and start building your next project today.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <ui-button href="/docs/installation" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <i class="fas fa-download mr-2"></i>
                            Installation Guide
                        </ui-button>
                        <ui-button href="/docs/components" class="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                            <i class="fas fa-cubes mr-2"></i>
                            View Components
                        </ui-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-docs-index-page', DocsIndexPage);
export default DocsIndexPage; 