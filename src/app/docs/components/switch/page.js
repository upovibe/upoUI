import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Switch.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class SwitchDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Switch | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-switch></ui-switch>`;

        const withLabelExample = `<ui-switch label="Enable notifications"></ui-switch>`;

        const withDescriptionExample = `<ui-switch 
  label="Dark mode" 
  description="Switch between light and dark themes"
></ui-switch>`;

        const sizesExample = `<ui-switch size="sm" label="Small"></ui-switch>
<ui-switch size="md" label="Medium"></ui-switch>
<ui-switch size="lg" label="Large"></ui-switch>`;

        const variantsExample = `<ui-switch variant="default" label="Default"></ui-switch>
<ui-switch variant="primary" label="Primary"></ui-switch>
<ui-switch variant="success" label="Success"></ui-switch>
<ui-switch variant="warning" label="Warning"></ui-switch>
<ui-switch variant="error" label="Error"></ui-switch>`;

        const checkedExample = `<ui-switch checked="true" label="Checked"></ui-switch>`;

        const disabledExample = `<ui-switch disabled="true" label="Disabled"></ui-switch>
<ui-switch checked="true" disabled="true" label="Disabled Checked"></ui-switch>`;

        const setupExample = `// Import the switch component
import '@/components/ui/Switch.js';

class SwitchExample extends HTMLElement {
    constructor() {
        super();
        this.notifications = false;
        this.darkMode = true;
    }

    connectedCallback() {
        this.innerHTML = \`
            <div class="space-y-4">
                <h3>Settings</h3>
                
                <ui-switch 
                    id="notifications" 
                    label="Enable notifications"
                    description="Receive push notifications for updates"
                ></ui-switch>
                
                <ui-switch 
                    id="darkMode" 
                    checked="true"
                    label="Dark mode"
                    description="Switch between light and dark themes"
                ></ui-switch>
                
                <div class="mt-4 p-3 bg-gray-100 rounded">
                    <p>Notifications: <span id="notifications-status">\${this.notifications}</span></p>
                    <p>Dark mode: <span id="darkmode-status">\${this.darkMode}</span></p>
                </div>
            </div>
        \`;
        
        // Listen for switch changes
        this.addEventListener('switch-change', (event) => {
            const switchElement = event.target;
            const id = switchElement.id;
            
            if (id === 'notifications') {
                this.notifications = event.detail.checked;
                this.querySelector('#notifications-status').textContent = this.notifications;
            } else if (id === 'darkMode') {
                this.darkMode = event.detail.checked;
                this.querySelector('#darkmode-status').textContent = this.darkMode;
            }
            
            console.log(\`\${id} changed to: \${event.detail.checked}\`);
        });
    }
}

customElements.define('ui-switch-example', SwitchExample);
export default SwitchExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Switch Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A toggle switch component for binary states with multiple sizes, variants, and accessibility features. 
                        Perfect for settings, preferences, and feature toggles.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Basic Switch</h3>
                                <ui-switch></ui-switch>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">With Label</h3>
                                <ui-switch label="Enable notifications"></ui-switch>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">With Description</h3>
                                <ui-switch label="Dark mode" description="Switch between light and dark themes"></ui-switch>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Checked State</h3>
                                <ui-switch checked="true" label="Enabled"></ui-switch>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Switch</h2>
                <p class="mb-4 text-gray-600">Simple toggle switch without any additional content.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-switch></ui-switch>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">With Label</h2>
                <p class="mb-4 text-gray-600">Add a label to describe what the switch controls.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-switch label="Enable notifications"></ui-switch>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${withLabelExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">With Description</h2>
                <p class="mb-4 text-gray-600">Add a description to provide more context about the switch.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-switch label="Dark mode" description="Switch between light and dark themes"></ui-switch>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${withDescriptionExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Switch Sizes</h2>
                <p class="mb-4 text-gray-600">Different sizes to match your design requirements.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Small</label>
                        <ui-switch size="sm" label="Small"></ui-switch>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Medium (Default)</label>
                        <ui-switch size="md" label="Medium"></ui-switch>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Large</label>
                        <ui-switch size="lg" label="Large"></ui-switch>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${sizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Switch Variants</h2>
                <p class="mb-4 text-gray-600">Different color variants to match your design system.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Default</label>
                        <ui-switch variant="default" label="Default"></ui-switch>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Primary</label>
                        <ui-switch variant="primary" label="Primary"></ui-switch>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Success</label>
                        <ui-switch variant="success" label="Success"></ui-switch>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Warning</label>
                        <ui-switch variant="warning" label="Warning"></ui-switch>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Error</label>
                        <ui-switch variant="error" label="Error"></ui-switch>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${variantsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Checked State</h2>
                <p class="mb-4 text-gray-600">Set the initial checked state of the switch.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview6">Preview</ui-tab>
                    <ui-tab value="code6">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview6">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-switch checked="true" label="Checked"></ui-switch>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code6">
                    <ui-codeblock language="html" code="${checkedExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Disabled State</h2>
                <p class="mb-4 text-gray-600">Disable the switch to prevent interaction.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview7">Preview</ui-tab>
                    <ui-tab value="code7">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview7">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Disabled</label>
                        <ui-switch disabled="true" label="Disabled"></ui-switch>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Disabled Checked</label>
                        <ui-switch checked="true" disabled="true" label="Disabled Checked"></ui-switch>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code7">
                    <ui-codeblock language="html" code="${disabledExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the switch component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the switch component before using it</li>
                        <li>• Use <code>checked</code> attribute to set initial state</li>
                        <li>• Use <code>disabled</code> attribute to prevent interaction</li>
                        <li>• Use <code>size</code> attribute: sm, md, lg</li>
                        <li>• Use <code>variant</code> attribute: default, primary, success, warning, error</li>
                        <li>• Use <code>label</code> attribute for descriptive text</li>
                        <li>• Use <code>description</code> attribute for additional context</li>
                        <li>• Listen for <code>switch-change</code> event to handle state changes</li>
                        <li>• Switch is fully accessible with keyboard navigation (Space/Enter)</li>
                        <li>• Component uses smooth transitions for better UX</li>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">checked</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Whether the switch is in the checked state</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Disable the switch interaction</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">md</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Size variant: sm, md, lg</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">default</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Color variant: default, primary, success, warning, error</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">''</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Label text displayed next to the switch</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">description</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">''</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Additional description text below the switch</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">switch-change</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when switch state changes (detail: { checked: boolean })</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">toggle()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Toggle the switch state programmatically</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-switch-docs-page', SwitchDocsPage);
export default SwitchDocsPage; 