import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/RadioGroup.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class RadioGroupDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Radio Group | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-radio-group name="favorite-color" value="blue">
  <ui-radio-option value="red" label="Red"></ui-radio-option>
  <ui-radio-option value="blue" label="Blue"></ui-radio-option>
  <ui-radio-option value="green" label="Green"></ui-radio-option>
</ui-radio-group>`;

        const horizontalExample = `<ui-radio-group name="size" value="medium" layout="horizontal">
  <ui-radio-option value="small" label="Small"></ui-radio-option>
  <ui-radio-option value="medium" label="Medium"></ui-radio-option>
  <ui-radio-option value="large" label="Large"></ui-radio-option>
</ui-radio-group>`;

        const disabledExample = `<ui-radio-group name="disabled-group" value="option1" disabled>
  <ui-radio-option value="option1" label="Option 1"></ui-radio-option>
  <ui-radio-option value="option2" label="Option 2"></ui-radio-option>
  <ui-radio-option value="option3" label="Option 3"></ui-radio-option>
</ui-radio-group>`;

        const setupExample = `// Import the radio group component
import '@/components/ui/RadioGroup.js';

class RadioGroupExample extends HTMLElement {
    constructor() {
        super();
        this.selectedValue = 'option1';
    }

    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h3>Select your preference</h3>
                <ui-radio-group name="preference" value="\${this.selectedValue}">
                    <ui-radio-option value="option1" label="Option 1"></ui-radio-option>
                    <ui-radio-option value="option2" label="Option 2"></ui-radio-option>
                    <ui-radio-option value="option3" label="Option 3"></ui-radio-option>
                </ui-radio-group>
                <p>Selected: <span id="selected">\${this.selectedValue}</span></p>
            </div>
        \`;
        
        // Listen for changes
        this.querySelector('ui-radio-group').addEventListener('change', (event) => {
            this.selectedValue = event.detail.value;
            this.querySelector('#selected').textContent = this.selectedValue;
            console.log('Selection changed to:', this.selectedValue);
        });
    }
}

customElements.define('ui-radio-group-example', RadioGroupExample);
export default RadioGroupExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Radio Group Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A flexible radio group component with multiple options, accessibility features, and layout options. 
                        Perfect for forms, surveys, and any interface requiring single selection from multiple options.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Basic Radio Group</h3>
                                <ui-radio-group name="live-example-1" value="blue">
                                    <ui-radio-option value="red" label="Red"></ui-radio-option>
                                    <ui-radio-option value="blue" label="Blue"></ui-radio-option>
                                    <ui-radio-option value="green" label="Green"></ui-radio-option>
                                </ui-radio-group>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Horizontal Layout</h3>
                                <ui-radio-group name="live-example-2" value="medium" layout="horizontal">
                                    <ui-radio-option value="small" label="Small"></ui-radio-option>
                                    <ui-radio-option value="medium" label="Medium"></ui-radio-option>
                                    <ui-radio-option value="large" label="Large"></ui-radio-option>
                                </ui-radio-group>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Radio Group</h2>
                <p class="mb-4 text-gray-600">Simple radio group with vertical layout and default styling.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-radio-group name="basic-example" value="blue">
                        <ui-radio-option value="red" label="Red"></ui-radio-option>
                        <ui-radio-option value="blue" label="Blue"></ui-radio-option>
                        <ui-radio-option value="green" label="Green"></ui-radio-option>
                      </ui-radio-group>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Horizontal Layout</h2>
                <p class="mb-4 text-gray-600">Display radio options in a horizontal row instead of vertical stack.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-radio-group name="horizontal-example" value="medium" layout="horizontal">
                        <ui-radio-option value="small" label="Small"></ui-radio-option>
                        <ui-radio-option value="medium" label="Medium"></ui-radio-option>
                        <ui-radio-option value="large" label="Large"></ui-radio-option>
                      </ui-radio-group>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${horizontalExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Disabled State</h2>
                <p class="mb-4 text-gray-600">Disable the entire radio group to prevent user interaction.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-radio-group name="disabled-group" value="option1" disabled>
                        <ui-radio-option value="option1" label="Option 1"></ui-radio-option>
                        <ui-radio-option value="option2" label="Option 2"></ui-radio-option>
                        <ui-radio-option value="option3" label="Option 3"></ui-radio-option>
                      </ui-radio-group>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${disabledExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the radio group component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the radio group component before using it</li>
                        <li>• Use <code>name</code> attribute to group radio options together</li>
                        <li>• Use <code>value</code> attribute to set the selected option</li>
                        <li>• Use <code>layout="horizontal"</code> for horizontal arrangement</li>
                        <li>• Use <code>disabled</code> attribute to disable the entire group</li>
                        <li>• Listen for <code>change</code> event to handle selection changes</li>
                        <li>• Radio group is fully accessible with keyboard navigation</li>
                        <li>• Each radio option requires a unique <code>value</code> attribute</li>
                        <li>• Use <code>label</code> attribute on radio options for display text</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">Radio Group Attributes</h4>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">name</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Name for the radio group (required)</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">value</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Currently selected value</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">layout</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">vertical</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Layout direction: vertical, horizontal</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Disable the entire radio group</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Radio Option Attributes</h4>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">value</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Value for this option (required)</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Display text for this option</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Disable this specific option</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">change</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when selection changes (detail: { value: string, name: string })</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">getValue()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Get the currently selected value</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">setValue(value)</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Set the selected value programmatically</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">getOptions()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Get all radio options with their values and states</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-radio-group-docs-page', RadioGroupDocsPage);
export default RadioGroupDocsPage; 