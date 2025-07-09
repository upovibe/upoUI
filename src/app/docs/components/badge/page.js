import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Badge.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class BadgeDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Badge | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-badge>Default</ui-badge>
<ui-badge color="success">Success</ui-badge>
<ui-badge color="warning">Warning</ui-badge>
<ui-badge color="error">Error</ui-badge>`;

        const variantsExample = `<ui-badge variant="solid" color="primary">Solid</ui-badge>
<ui-badge variant="outline" color="primary">Outline</ui-badge>
<ui-badge variant="soft" color="primary">Soft</ui-badge>`;

        const sizesExample = `<ui-badge size="sm">Small</ui-badge>
<ui-badge size="md">Medium</ui-badge>
<ui-badge size="lg">Large</ui-badge>`;

        const colorsExample = `<ui-badge color="primary">Primary</ui-badge>
<ui-badge color="secondary">Secondary</ui-badge>
<ui-badge color="success">Success</ui-badge>
<ui-badge color="warning">Warning</ui-badge>
<ui-badge color="error">Error</ui-badge>
<ui-badge color="info">Info</ui-badge>`;

        const roundedExample = `<ui-badge rounded>Rounded</ui-badge>
<ui-badge color="success" rounded>Success</ui-badge>
<ui-badge color="warning" variant="outline" rounded>Warning</ui-badge>`;

        const setupExample = `// Import the badge component
import '@/components/ui/Badge.js';

class BadgeExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h1>Badge Examples</h1>
                
                <!-- Basic badges -->
                <ui-badge>Default</ui-badge>
                <ui-badge color="success">Success</ui-badge>
                <ui-badge color="warning">Warning</ui-badge>
                
                <!-- Different variants -->
                <ui-badge variant="solid" color="primary">Solid</ui-badge>
                <ui-badge variant="outline" color="primary">Outline</ui-badge>
                <ui-badge variant="soft" color="primary">Soft</ui-badge>
                
                <!-- Different sizes -->
                <ui-badge size="sm">Small</ui-badge>
                <ui-badge size="md">Medium</ui-badge>
                <ui-badge size="lg">Large</ui-badge>
                
                <!-- Rounded badges -->
                <ui-badge rounded>Rounded</ui-badge>
                <ui-badge color="success" rounded>Success</ui-badge>
            </div>
        \`;
    }
}

customElements.define('ui-badge-example', BadgeExample);
export default BadgeExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Badge Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Small status indicators perfect for notifications, labels, and status indicators. Supports different colors, sizes, and variants for flexible use cases.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <ui-badge>Default</ui-badge>
                            <ui-badge color="success">Success</ui-badge>
                            <ui-badge color="warning">Warning</ui-badge>
                            <ui-badge color="error">Error</ui-badge>
                            <ui-badge color="info">Info</ui-badge>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Badges</h2>
                <p class="mb-4 text-gray-600">Default badges with different colors for various status indicators and notifications.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-badge>Default</ui-badge>
                      <ui-badge color="success">Success</ui-badge>
                      <ui-badge color="warning">Warning</ui-badge>
                      <ui-badge color="error">Error</ui-badge>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Badge Variants</h2>
                <p class="mb-4 text-gray-600">Choose from three variants: <code>solid</code> (default), <code>outline</code>, and <code>soft</code> for different visual styles.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-badge variant="solid" color="primary">Solid</ui-badge>
                      <ui-badge variant="outline" color="primary">Outline</ui-badge>
                      <ui-badge variant="soft" color="primary">Soft</ui-badge>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${variantsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Badge Sizes</h2>
                <p class="mb-4 text-gray-600">Use the <code>size</code> attribute to control badge dimensions. Available sizes: <code>sm</code>, <code>md</code> (default), and <code>lg</code>.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="flex items-center gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-badge size="sm">Small</ui-badge>
                      <ui-badge size="md">Medium</ui-badge>
                      <ui-badge size="lg">Large</ui-badge>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${sizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Badge Colors</h2>
                <p class="mb-4 text-gray-600">Choose from six predefined colors to match your design system and convey different meanings.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-badge color="primary">Primary</ui-badge>
                      <ui-badge color="secondary">Secondary</ui-badge>
                      <ui-badge color="success">Success</ui-badge>
                      <ui-badge color="warning">Warning</ui-badge>
                      <ui-badge color="error">Error</ui-badge>
                      <ui-badge color="info">Info</ui-badge>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${colorsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Rounded Badges</h2>
                <p class="mb-4 text-gray-600">Add the <code>rounded</code> attribute to create pill-shaped badges with fully rounded corners.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-badge rounded>Rounded</ui-badge>
                      <ui-badge color="success" rounded>Success</ui-badge>
                      <ui-badge color="warning" variant="outline" rounded>Warning</ui-badge>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${roundedExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Complete Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the badge component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the badge component before using it</li>
                        <li>• Use <code>color</code> attribute for different status indicators</li>
                        <li>• Choose from <code>solid</code>, <code>outline</code>, or <code>soft</code> variants</li>
                        <li>• Use <code>size</code> attribute to control dimensions</li>
                        <li>• Add <code>rounded</code> attribute for pill-shaped badges</li>
                        <li>• Perfect for notifications, labels, and status indicators</li>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">color</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'primary'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Badge color theme</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">size</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'sm' | 'md' | 'lg'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'md'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Badge size</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">variant</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'solid' | 'outline' | 'soft'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'solid'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Visual style variant</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">rounded</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Creates pill-shaped badge</td>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">--badge-font-size-sm</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">0.625rem</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Small badge font size</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">--badge-font-size-md</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">0.75rem</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Medium badge font size (default)</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">--badge-font-size-lg</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">0.875rem</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Large badge font size</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-badge-docs-page', BadgeDocsPage);
export default BadgeDocsPage; 