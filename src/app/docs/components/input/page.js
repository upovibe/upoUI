import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Input.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class InputDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Input | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-input placeholder="Enter your name"></ui-input>
<ui-input type="email" placeholder="Enter your email"></ui-input>
<ui-input type="password" placeholder="Enter your password"></ui-input>`;

        const inputTypesExample = `<ui-input type="text" placeholder="Text input"></ui-input>
<ui-input type="email" placeholder="Email input"></ui-input>
<ui-input type="password" placeholder="Password input"></ui-input>
<ui-input type="search" placeholder="Search input"></ui-input>
<ui-input type="number" placeholder="Number input"></ui-input>
<ui-input type="date" placeholder="Date input"></ui-input>
<ui-input type="time" placeholder="Time input"></ui-input>
<ui-input type="datetime-local" placeholder="DateTime input"></ui-input>
<ui-input type="color" placeholder="Color input"></ui-input>
<ui-input type="range" min="0" max="100" value="50"></ui-input>`;

        const prefixSuffixExample = `<ui-input prefix="$" placeholder="Amount"></ui-input>
<ui-input suffix="%" placeholder="Percentage"></ui-input>
<ui-input prefix="https://" suffix=".com" placeholder="Website"></ui-input>`;

        const iconsExample = `<ui-input 
  leading-icon="<i class='fas fa-envelope'></i>"
  type="email" 
  placeholder="Enter email"
></ui-input>

<ui-input 
  leading-icon="<i class='fas fa-search'></i>"
  type="search" 
  placeholder="Search..."
></ui-input>

<ui-input 
  leading-icon="<i class='fas fa-phone'></i>"
  placeholder="Phone number"
></ui-input>`;

        const labelsExample = `<ui-input 
  label="Email Address"
  type="email" 
  placeholder="Enter your email"
></ui-input>

<ui-input 
  floating-label="Username"
  placeholder="Enter username"
></ui-input>

<ui-input 
  floating-label="Email Address"
  type="email" 
  placeholder="Enter email"
></ui-input>`;

        const validationExample = `<ui-input 
  placeholder="Success state"
  status="success"
  value="Valid input"
></ui-input>

<ui-input 
  placeholder="Warning state"
  status="warning"
  value="Warning input"
></ui-input>

<ui-input 
  placeholder="Error state"
  status="error"
  value="Error input"
></ui-input>

<ui-input 
  placeholder="Info state"
  status="info"
  value="Info input"
></ui-input>`;

        const setupExample = `// Import the input component
import '@/components/ui/Input.js';

class InputExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <ui-input 
                type="email" 
                placeholder="Enter your email"
                label="Email Address"
                status="success"
            ></ui-input>
        \`;
        
        // Listen for input changes
        this.querySelector('ui-input').addEventListener('input', (event) => {
            console.log('Input value:', event.target.value);
        });
    }
}

customElements.define('ui-input-example', InputExample);
export default InputExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Input Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A versatile input component with support for various input types, validation states, 
                        icons, labels, and advanced features like color picker and range slider.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div>
                                <h3 class="text-sm font-medium text-gray-700 mb-2">Basic Inputs</h3>
                                <ui-input placeholder="Text input"></ui-input>
                                <ui-input type="email" placeholder="Email input" class="mt-2"></ui-input>
                                <ui-input type="password" placeholder="Password input" class="mt-2"></ui-input>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-700 mb-2">Advanced Features</h3>
                                <ui-input placeholder="With prefix" prefix="$" suffix=".00"></ui-input>
                                <ui-input placeholder="With icons" leading-icon="<i class='fas fa-search'></i>" class="mt-2"></ui-input>
                                <ui-input placeholder="With label" label="Email Address" class="mt-2"></ui-input>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Input Types</h2>
                <p class="mb-4 text-gray-600">Standard input types with proper styling and validation.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Text Input</label>
                        <ui-input placeholder="Enter text"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email Input</label>
                        <ui-input type="email" placeholder="Enter email"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Password Input</label>
                        <ui-input type="password" placeholder="Enter password"></ui-input>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">All Input Types</h2>
                <p class="mb-4 text-gray-600">The input component supports all standard HTML input types with enhanced styling.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Search Input</label>
                        <ui-input type="search" placeholder="Search..."></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Number Input</label>
                        <ui-input type="number" placeholder="Enter number"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Date Input</label>
                        <ui-input type="date" placeholder="Select date"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Time Input</label>
                        <ui-input type="time" placeholder="Select time"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">DateTime Input</label>
                        <ui-input type="datetime-local" placeholder="Select date and time"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Color Input</label>
                        <ui-input type="color" placeholder="Select color"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Range Input</label>
                        <ui-input type="range" min="0" max="100" value="50"></ui-input>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${inputTypesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Prefix & Suffix</h2>
                <p class="mb-4 text-gray-600">Add text before or after the input field for better context.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Currency Input</label>
                        <ui-input prefix="$" placeholder="Amount"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Percentage Input</label>
                        <ui-input suffix="%" placeholder="Percentage"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Website Input</label>
                        <ui-input prefix="https://" suffix=".com" placeholder="Website"></ui-input>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${prefixSuffixExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">With Icons</h2>
                <p class="mb-4 text-gray-600">Add FontAwesome icons to enhance the input appearance.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email with Icon</label>
                        <ui-input leading-icon="<i class='fas fa-envelope'></i>" type="email" placeholder="Enter email"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Search with Icon</label>
                        <ui-input leading-icon="<i class='fas fa-search'></i>" type="search" placeholder="Search..."></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Phone with Icon</label>
                        <ui-input leading-icon="<i class='fas fa-phone'></i>" placeholder="Phone number"></ui-input>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${iconsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Labels</h2>
                <p class="mb-4 text-gray-600">Use external labels or floating labels for better user experience.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">External Label</label>
                        <ui-input label="Email Address" type="email" placeholder="Enter your email"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Floating Label</label>
                        <ui-input floating-label="Username" placeholder="Enter username"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Floating Label with Email</label>
                        <ui-input floating-label="Email Address" type="email" placeholder="Enter email"></ui-input>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${labelsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Validation States</h2>
                <p class="mb-4 text-gray-600">Use the <code>status</code> attribute to show different validation states.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview6">Preview</ui-tab>
                    <ui-tab value="code6">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview6">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Success State</label>
                        <ui-input status="success" placeholder="Success validation"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Warning State</label>
                        <ui-input status="warning" placeholder="Warning validation"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Error State</label>
                        <ui-input status="error" placeholder="Error validation"></ui-input>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Info State</label>
                        <ui-input status="info" placeholder="Info validation"></ui-input>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code6">
                    <ui-codeblock language="html" code="${validationExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the input component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the input component before using it</li>
                        <li>• Use <code>type</code> attribute for different input types (text, email, password, etc.)</li>
                        <li>• Use <code>status</code> attribute for validation states (success, warning, error, info)</li>
                        <li>• Use <code>prefix</code> and <code>suffix</code> for text before/after input</li>
                        <li>• Use <code>leading-icon</code> and <code>trailing-icon</code> for FontAwesome icons</li>
                        <li>• Use <code>label</code> for external labels</li>
                        <li>• Use <code>floating-label</code> for floating labels</li>
                        <li>• Password inputs automatically include a visibility toggle</li>
                        <li>• Color inputs include a color preview</li>
                        <li>• Range inputs include dual thumbs for range selection</li>
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
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">type</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Input type: text, email, password, search, number, date, time, datetime-local, color, range</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Placeholder text for the input</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">value</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Initial value of the input</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Disable the input</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">status</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Validation state: success, warning, error, info</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">prefix</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Text to display before the input</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">suffix</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Text to display after the input</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">leading-icon</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">FontAwesome icon HTML to display before the input</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">trailing-icon</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">FontAwesome icon HTML to display after the input</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">External label text</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">floating-label</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Floating label text</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">input</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the input value changes</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">change</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the input value is committed</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">focus</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the input receives focus</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">blur</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the input loses focus</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">focus()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Focuses the input element</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">blur()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Removes focus from the input element</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">select()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Selects all text in the input</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-input-docs-page', InputDocsPage);
export default InputDocsPage; 