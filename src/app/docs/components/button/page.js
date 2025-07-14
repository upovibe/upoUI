import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Button.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class ButtonDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Button | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-button>Default Button</ui-button>
<ui-button variant="outline">Outline Button</ui-button>
<ui-button variant="ghost">Ghost Button</ui-button>`;

        const colorsExample = `<ui-button color="primary">Primary</ui-button>
<ui-button color="secondary">Secondary</ui-button>
<ui-button color="success">Success</ui-button>
<ui-button color="warning">Warning</ui-button>
<ui-button color="error">Error</ui-button>`;

        const sizesExample = `<ui-button size="sm">Small</ui-button>
<ui-button size="md">Medium</ui-button>
<ui-button size="lg">Large</ui-button>`;

        const statesExample = `<ui-button>Normal</ui-button>
<ui-button disabled>Disabled</ui-button>
<ui-button loading>Loading</ui-button>`;

        const setupExample = `// Import the button component
import '@/components/ui/Button.js';

class ButtonExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h1>Button Examples</h1>
                
                <!-- Basic buttons -->
                <ui-button>Default Button</ui-button>
                <ui-button variant="outline">Outline Button</ui-button>
                <ui-button variant="ghost">Ghost Button</ui-button>
                
                <!-- Different colors -->
                <ui-button color="primary">Primary</ui-button>
                <ui-button color="success">Success</ui-button>
                <ui-button color="warning">Warning</ui-button>
                
                <!-- Different sizes -->
                <ui-button size="sm">Small</ui-button>
                <ui-button size="md">Medium</ui-button>
                <ui-button size="lg">Large</ui-button>
                
                <!-- States -->
                <ui-button disabled>Disabled</ui-button>
                <ui-button loading>Loading</ui-button>
            </div>
        \`;
    }
}

customElements.define('ui-button-example', ButtonExample);
export default ButtonExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Button Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Interactive button component with various styles, colors, and states. Perfect for forms, navigation, and user interactions.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <ui-button>Default Button</ui-button>
                            <ui-button variant="outline">Outline Button</ui-button>
                            <ui-button variant="ghost">Ghost Button</ui-button>
                            <ui-button color="success">Success</ui-button>
                            <ui-button color="warning">Warning</ui-button>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Buttons</h2>
                <p class="mb-4 text-gray-600">Default buttons with different variants: <code>solid</code> (default), <code>outline</code>, and <code>ghost</code>.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-button>Default Button</ui-button>
                      <ui-button variant="outline">Outline Button</ui-button>
                      <ui-button variant="ghost">Ghost Button</ui-button>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Button Colors</h2>
                <p class="mb-4 text-gray-600">Choose from different color themes to match your design system and convey different meanings.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-button color="primary">Primary</ui-button>
                      <ui-button color="secondary">Secondary</ui-button>
                      <ui-button color="success">Success</ui-button>
                      <ui-button color="warning">Warning</ui-button>
                      <ui-button color="error">Error</ui-button>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${colorsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Button Sizes</h2>
                <p class="mb-4 text-gray-600">Use the <code>size</code> attribute to control button dimensions. Available sizes: <code>sm</code>, <code>md</code> (default), and <code>lg</code>.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="flex items-center gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-button size="sm">Small</ui-button>
                      <ui-button size="md">Medium</ui-button>
                      <ui-button size="lg">Large</ui-button>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${sizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Button States</h2>
                <p class="mb-4 text-gray-600">Buttons can have different states: normal, disabled, and loading.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-button>Normal</ui-button>
                      <ui-button disabled>Disabled</ui-button>
                      <ui-button loading>Loading</ui-button>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${statesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Complete Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the button component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the button component before using it</li>
                        <li>• Use <code>variant</code> attribute for different styles (solid, outline, ghost)</li>
                        <li>• Use <code>color</code> attribute for different color themes</li>
                        <li>• Use <code>size</code> attribute to control dimensions</li>
                        <li>• Add <code>disabled</code> attribute to disable the button</li>
                        <li>• Add <code>loading</code> attribute to show loading state</li>
                        <li>• Buttons are fully accessible with keyboard navigation</li>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">variant</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'solid' | 'outline' | 'ghost'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'solid'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Button style variant</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">color</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'primary'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Button color theme</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">size</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'sm' | 'md' | 'lg'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'md'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Button size</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">disabled</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Disables the button</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">loading</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Shows loading state</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Events</h4>
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Event</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Detail</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">click</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Event</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when button is clicked</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-button-docs-page', ButtonDocsPage);
export default ButtonDocsPage; 