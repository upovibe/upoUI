import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Breadcrumb.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class BreadcrumbDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Breadcrumb | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-breadcrumb>
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>`;

        const separatorsExample = `<ui-breadcrumb separator="slash">
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>

<ui-breadcrumb separator="chevron">
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>

<ui-breadcrumb separator="arrow">
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>

<ui-breadcrumb separator="dot">
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>`;

        const sizesExample = `<ui-breadcrumb size="sm">
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>

<ui-breadcrumb size="md">
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>

<ui-breadcrumb size="lg">
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>`;

        const colorsExample = `<ui-breadcrumb color="primary">
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>

<ui-breadcrumb color="success">
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>

<ui-breadcrumb color="warning">
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
  <ui-breadcrumb-item>Components</ui-breadcrumb-item>
</ui-breadcrumb>`;

        const setupExample = `// Import the breadcrumb component
import '@/components/ui/Breadcrumb.js';

class BreadcrumbExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h1>Breadcrumb Examples</h1>
                
                <!-- Basic breadcrumb -->
                <ui-breadcrumb>
                    <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                    <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                    <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                </ui-breadcrumb>
                
                <!-- With different separator -->
                <ui-breadcrumb separator="chevron">
                    <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                    <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                    <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                </ui-breadcrumb>
                
                <!-- Different size -->
                <ui-breadcrumb size="lg">
                    <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                    <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                    <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                </ui-breadcrumb>
            </div>
        \`;
    }
}

customElements.define('ui-breadcrumb-example', BreadcrumbExample);
export default BreadcrumbExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Breadcrumb Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Navigation hierarchy component that helps users understand their current location within a website. Perfect for improving navigation context and user experience.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex flex-col gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <ui-breadcrumb>
                                <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                                <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                                <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                            </ui-breadcrumb>
                            <ui-breadcrumb separator="chevron">
                                <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                                <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                                <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                            </ui-breadcrumb>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Breadcrumb</h2>
                <p class="mb-4 text-gray-600">Default breadcrumb with slash separators. The last item represents the current page and is not clickable.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-breadcrumb>
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Breadcrumb Separators</h2>
                <p class="mb-4 text-gray-600">Choose from different separator styles: <code>slash</code> (default), <code>chevron</code>, <code>arrow</code>, and <code>dot</code>.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="flex flex-col gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-breadcrumb separator="slash">
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                      <ui-breadcrumb separator="chevron">
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                      <ui-breadcrumb separator="arrow">
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                      <ui-breadcrumb separator="dot">
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${separatorsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Breadcrumb Sizes</h2>
                <p class="mb-4 text-gray-600">Use the <code>size</code> attribute to control breadcrumb dimensions. Available sizes: <code>sm</code>, <code>md</code> (default), and <code>lg</code>.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="flex flex-col gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-breadcrumb size="sm">
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                      <ui-breadcrumb size="md">
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                      <ui-breadcrumb size="lg">
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${sizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Breadcrumb Colors</h2>
                <p class="mb-4 text-gray-600">Choose from different color themes to match your design system.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="flex flex-col gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-breadcrumb color="primary">
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                      <ui-breadcrumb color="success">
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                      <ui-breadcrumb color="warning">
                        <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
                        <ui-breadcrumb-item href="/docs">Docs</ui-breadcrumb-item>
                        <ui-breadcrumb-item>Components</ui-breadcrumb-item>
                      </ui-breadcrumb>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${colorsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Complete Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the breadcrumb component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the breadcrumb component before using it</li>
                        <li>• Use <code>ui-breadcrumb-item</code> elements for each navigation level</li>
                        <li>• Add <code>href</code> attribute to make items clickable</li>
                        <li>• Use <code>separator</code> attribute to change the separator style</li>
                        <li>• Use <code>size</code> attribute to control dimensions</li>
                        <li>• Use <code>color</code> attribute for different color themes</li>
                        <li>• The last item should not have an href (current page)</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">ui-breadcrumb Attributes</h4>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">separator</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'slash' | 'chevron' | 'arrow' | 'dot'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'slash'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Separator style between breadcrumb items</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">size</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'sm' | 'md' | 'lg'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'md'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Breadcrumb size</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">color</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'primary'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Color theme for hover states</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">ui-breadcrumb-item Attributes</h4>
                    <div class="overflow-x-auto">
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">href</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">''</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">URL for the breadcrumb item (optional for current page)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-breadcrumb-docs-page', BreadcrumbDocsPage);
export default BreadcrumbDocsPage; 