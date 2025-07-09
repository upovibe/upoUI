import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Checkbox.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class CheckboxDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Checkbox | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-checkbox label="Accept Terms and Conditions"></ui-checkbox>
<ui-checkbox label="Subscribe to newsletter" checked></ui-checkbox>`;

        const statesExample = `<ui-checkbox label="Normal checkbox"></ui-checkbox>
<ui-checkbox label="Checked checkbox" checked></ui-checkbox>
<ui-checkbox label="Disabled checkbox" disabled></ui-checkbox>
<ui-checkbox label="Disabled checked" checked disabled></ui-checkbox>`;

        const setupExample = `// Import the checkbox component
import '@/components/ui/Checkbox.js';

class CheckboxExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h1>Checkbox Examples</h1>
                
                <!-- Basic checkboxes -->
                <ui-checkbox label="Accept Terms and Conditions"></ui-checkbox>
                <ui-checkbox label="Subscribe to newsletter" checked></ui-checkbox>
                
                <!-- Different states -->
                <ui-checkbox label="Normal checkbox"></ui-checkbox>
                <ui-checkbox label="Checked checkbox" checked></ui-checkbox>
                <ui-checkbox label="Disabled checkbox" disabled></ui-checkbox>
            </div>
        \`;
    }
}

customElements.define('ui-checkbox-example', CheckboxExample);
export default CheckboxExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Checkbox Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Interactive checkbox component with labels and various states. Perfect for forms, user agreements, and preference settings.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex flex-col gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <ui-checkbox label="Accept Terms and Conditions"></ui-checkbox>
                            <ui-checkbox label="Subscribe to newsletter" checked></ui-checkbox>
                            <ui-checkbox label="Receive marketing emails"></ui-checkbox>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Checkboxes</h2>
                <p class="mb-4 text-gray-600">Use the <code>label</code> attribute to set the label text. The <code>checked</code> attribute sets the initial state.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="flex flex-col gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-checkbox label="Accept Terms and Conditions"></ui-checkbox>
                      <ui-checkbox label="Subscribe to newsletter" checked></ui-checkbox>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Checkbox States</h2>
                <p class="mb-4 text-gray-600">Checkboxes can have different states: normal, checked, disabled, and disabled checked.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="flex flex-col gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-checkbox label="Normal checkbox"></ui-checkbox>
                      <ui-checkbox label="Checked checkbox" checked></ui-checkbox>
                      <ui-checkbox label="Disabled checkbox" disabled></ui-checkbox>
                      <ui-checkbox label="Disabled checked" checked disabled></ui-checkbox>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${statesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the checkbox component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the checkbox component before using it</li>
                        <li>• Use <code>label</code> attribute to set the label text</li>
                        <li>• Add <code>checked</code> attribute for initial checked state</li>
                        <li>• Add <code>disabled</code> attribute to disable the checkbox</li>
                        <li>• Clicking the label also toggles the checkbox</li>
                        <li>• Fully accessible with keyboard navigation</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">Attributes</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Attribute</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Type</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Default</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm text-gray-900"><code>label</code></td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">"Checkbox"</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">The label text displayed next to the checkbox</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm text-gray-900"><code>checked</code></td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Whether the checkbox is initially checked</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm text-gray-900"><code>disabled</code></td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Whether the checkbox is disabled</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Events</h4>
                    <div class="overflow-x-auto">
                        <table class="min-w-full border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Event</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Detail</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm text-gray-900"><code>change</code></td>
                                    <td class="px-4 py-2 text-sm text-gray-600"><code>{ checked: boolean }</code></td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when the checkbox state changes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-checkbox-docs-page', CheckboxDocsPage);
export default CheckboxDocsPage; 