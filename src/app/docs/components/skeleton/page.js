import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Skeleton.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class SkeletonDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Skeleton | UPO UI Docs';
    }

    render() {
        const textExample = `<ui-skeleton type="text" lines="3"></ui-skeleton>`;

        const avatarExample = `<ui-skeleton type="avatar" width="40px" height="40px"></ui-skeleton>
<ui-skeleton type="avatar" width="60px" height="60px"></ui-skeleton>
<ui-skeleton type="avatar" width="80px" height="80px"></ui-skeleton>`;

        const buttonExample = `<ui-skeleton type="button" width="120px"></ui-skeleton>
<ui-skeleton type="button" width="200px"></ui-skeleton>`;

        const cardExample = `<ui-skeleton type="card" width="300px" height="200px"></ui-skeleton>`;

        const imageExample = `<ui-skeleton type="image" width="250px" height="150px"></ui-skeleton>`;

        const customExample = `<ui-skeleton width="100px" height="20px"></ui-skeleton>
<ui-skeleton width="150px" height="30px" animated="false"></ui-skeleton>
<ui-skeleton width="200px" height="40px" rounded="true"></ui-skeleton>`;

        const setupExample = `// Import the skeleton component
import '@/components/ui/Skeleton.js';

class SkeletonExample extends HTMLElement {
    constructor() {
        super();
        this.loaded = false;
    }

    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h3>Loading Content</h3>
                <div id="content">
                    <ui-skeleton type="text" lines="3"></ui-skeleton>
                    <ui-skeleton type="avatar" width="40px" height="40px"></ui-skeleton>
                    <ui-skeleton type="button" width="120px"></ui-skeleton>
                </div>
                <button id="loadBtn">Load Content</button>
            </div>
        \`;
        
        // Load button
        this.querySelector('#loadBtn').addEventListener('click', () => {
            this.loadContent();
        });
    }

    loadContent() {
        const content = this.querySelector('#content');
        content.innerHTML = \`
            <p>This is the loaded content that replaces the skeleton.</p>
            <div style="width: 40px; height: 40px; background: #3b82f6; border-radius: 50%;"></div>
            <button style="padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 4px;">
                Loaded Button
            </button>
        \`;
        
        console.log('Content loaded!');
    }
}

customElements.define('ui-skeleton-example', SkeletonExample);
export default SkeletonExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Skeleton Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A flexible skeleton loading component with various shapes, animations, and customization options. 
                        Perfect for creating loading states that match your content structure.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Text Skeleton</h3>
                                <ui-skeleton type="text" lines="3"></ui-skeleton>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Avatar Skeleton</h3>
                                <ui-skeleton type="avatar" width="40px" height="40px"></ui-skeleton>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Text Skeleton</h2>
                <p class="mb-4 text-gray-600">Create skeleton placeholders for text content with multiple lines.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-skeleton type="text" lines="3"></ui-skeleton>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${textExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Avatar Skeleton</h2>
                <p class="mb-4 text-gray-600">Circular skeleton placeholders for user avatars or profile images.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <div class="flex gap-4 items-center">
                        <ui-skeleton type="avatar" width="40px" height="40px"></ui-skeleton>
                        <ui-skeleton type="avatar" width="60px" height="60px"></ui-skeleton>
                        <ui-skeleton type="avatar" width="80px" height="80px"></ui-skeleton>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${avatarExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Button Skeleton</h2>
                <p class="mb-4 text-gray-600">Skeleton placeholders for buttons with customizable dimensions.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <div class="flex gap-4">
                        <ui-skeleton type="button" width="120px"></ui-skeleton>
                        <ui-skeleton type="button" width="200px"></ui-skeleton>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${buttonExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Card Skeleton</h2>
                <p class="mb-4 text-gray-600">Rectangular skeleton placeholders for cards or content containers.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-skeleton type="card" width="300px" height="200px"></ui-skeleton>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${cardExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Image Skeleton</h2>
                <p class="mb-4 text-gray-600">Skeleton placeholders for images with customizable dimensions.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-skeleton type="image" width="250px" height="150px"></ui-skeleton>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${imageExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Custom Skeleton</h2>
                <p class="mb-4 text-gray-600">Create custom skeleton shapes with specific dimensions and options.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview6">Preview</ui-tab>
                    <ui-tab value="code6">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview6">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <div class="space-y-4">
                        <ui-skeleton width="100px" height="20px"></ui-skeleton>
                        <ui-skeleton width="150px" height="30px" animated="false"></ui-skeleton>
                        <ui-skeleton width="200px" height="40px" rounded="true"></ui-skeleton>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code6">
                    <ui-codeblock language="html" code="${customExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the skeleton component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the skeleton component before using it</li>
                        <li>• Use <code>type</code> attribute for predefined shapes: text, avatar, button, card, image</li>
                        <li>• Use <code>width</code> and <code>height</code> for custom dimensions</li>
                        <li>• Use <code>lines</code> attribute for text skeletons (number of lines)</li>
                        <li>• Use <code>animated="false"</code> to disable the pulse animation</li>
                        <li>• Use <code>rounded="true"</code> to apply border radius</li>
                        <li>• Use <code>replaceWithContent()</code> method to replace skeleton with actual content</li>
                        <li>• Use <code>show()</code> and <code>hide()</code> methods to control visibility</li>
                        <li>• Skeleton automatically adapts to different screen sizes</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">Attributes</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attribute</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">type</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">text</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Skeleton type: text, avatar, button, card, image</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">width</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100%</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Width of the skeleton (e.g., "200px", "50%")</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">height</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">auto</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Height of the skeleton (e.g., "20px", "100px")</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">lines</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Number of text lines (for text type)</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">animated</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable pulse animation</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">rounded</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Apply border radius</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Events</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">loaded</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when skeleton is replaced with content (detail: { content: string })</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Methods</h4>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">replaceWithContent(content)</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Replace skeleton with actual content</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">show()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Show the skeleton</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">hide()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Hide the skeleton</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">setAnimated(animated)</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable or disable animation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-skeleton-docs-page', SkeletonDocsPage);
export default SkeletonDocsPage; 