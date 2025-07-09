import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Avatar.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class AvatarDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Avatar | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="John Doe"></ui-avatar>`;

        const initialsExample = `<ui-avatar name="John Doe" alt="John Doe"></ui-avatar>
<ui-avatar name="Alice Smith" alt="Alice Smith"></ui-avatar>
<ui-avatar name="Mike Johnson" alt="Mike Johnson"></ui-avatar>`;

        const sizesExample = `<div class="flex items-center gap-4">
  <ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" size="sm" alt="Small"></ui-avatar>
  <ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Default"></ui-avatar>
  <ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" size="lg" alt="Large"></ui-avatar>
  <ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" size="xl" alt="Extra Large"></ui-avatar>
</div>`;

        const setupExample = `// Import the avatar component
import '@/components/ui/Avatar.js';

class AvatarExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h1>Avatar Examples</h1>
                
                <!-- Image avatar -->
                <ui-avatar 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                    alt="John Doe">
                </ui-avatar>
                
                <!-- Initials avatar -->
                <ui-avatar name="John Doe" alt="John Doe"></ui-avatar>
                
                <!-- Different sizes -->
                <ui-avatar 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                    size="lg" 
                    alt="Large Avatar">
                </ui-avatar>
            </div>
        \`;
    }
}

customElements.define('ui-avatar-example', AvatarExample);
export default AvatarExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Avatar Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Displays user profile images or initials in a circular format. Perfect for user interfaces, chat applications, and user profiles.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="John Doe"></ui-avatar>
                            <ui-avatar name="John Doe" alt="John Doe"></ui-avatar>
                            <ui-avatar name="Alice Smith" alt="Alice Smith"></ui-avatar>
                            <ui-avatar name="Mike Johnson" alt="Mike Johnson"></ui-avatar>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Image Avatars</h2>
                <p class="mb-4 text-gray-600">Use the <code>src</code> attribute to display a profile image. Always include an <code>alt</code> attribute for accessibility.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="flex gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="John Doe"></ui-avatar>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Initials Avatars</h2>
                <p class="mb-4 text-gray-600">When no image is provided, use the <code>name</code> attribute to display user initials. The component will automatically extract initials from the full name and generate a background color.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="flex gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-avatar name="John Doe" alt="John Doe"></ui-avatar>
                      <ui-avatar name="Alice Smith" alt="Alice Smith"></ui-avatar>
                      <ui-avatar name="Mike Johnson" alt="Mike Johnson"></ui-avatar>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${initialsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Avatar Sizes</h2>
                <p class="mb-4 text-gray-600">Use the <code>size</code> attribute to control the avatar dimensions. Available sizes: <code>sm</code>, <code>md</code> (default), <code>lg</code>, and <code>xl</code>.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="flex items-center gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" size="sm" alt="Small"></ui-avatar>
                      <ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Default"></ui-avatar>
                      <ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" size="lg" alt="Large"></ui-avatar>
                      <ui-avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" size="xl" alt="Extra Large"></ui-avatar>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${sizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Complete Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the avatar component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the avatar component before using it</li>
                        <li>• Use <code>src</code> attribute for image avatars</li>
                        <li>• Use <code>name</code> attribute for text-based avatars (automatically extracts initials)</li>
                        <li>• Always include <code>alt</code> attribute for accessibility</li>
                        <li>• Use <code>size</code> attribute to control dimensions</li>
                        <li>• Background colors are automatically generated for initials</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">Attributes</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Attribute</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Type</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Default</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">src</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">''</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Image URL for the avatar</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">alt</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">''</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Alternative text for accessibility</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">name</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">''</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Full name used to generate initials when no image is provided</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">size</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'sm' | 'md' | 'lg' | 'xl'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'md'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Size of the avatar component</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">CSS Custom Properties</h4>
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Property</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Default</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">--avatar-size-sm</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">2rem</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Small avatar size</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">--avatar-size-md</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">3rem</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Medium avatar size (default)</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">--avatar-size-lg</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">4rem</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Large avatar size</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">--avatar-size-xl</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">5rem</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Extra large avatar size</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-avatar-docs-page', AvatarDocsPage);
export default AvatarDocsPage; 