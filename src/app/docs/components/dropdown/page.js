import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Dropdown.js';
import '@/components/ui/Button.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class DropdownDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Dropdown Component | UPO UI';
        
        // Set up event listeners for the live examples
        setTimeout(() => {
            this.setupDropdownExamples();
        }, 100);
    }

    render() {
        const basicExample = `<ui-dropdown placeholder="Select a fruit">
    <ui-option value="apple">Apple</ui-option>
    <ui-option value="banana">Banana</ui-option>
    <ui-option value="orange">Orange</ui-option>
    <ui-option value="grape">Grape</ui-option>
</ui-dropdown>`;

        const multiSelectExample = `<ui-dropdown placeholder="Select multiple fruits" multiple>
    <ui-option value="apple">Apple</ui-option>
    <ui-option value="banana">Banana</ui-option>
    <ui-option value="orange">Orange</ui-option>
    <ui-option value="grape">Grape</ui-option>
    <ui-option value="mango">Mango</ui-option>
    <ui-option value="pineapple">Pineapple</ui-option>
</ui-dropdown>`;

        const searchableExample = `<ui-dropdown placeholder="Search countries" searchable>
    <ui-option value="us">United States</ui-option>
    <ui-option value="uk">United Kingdom</ui-option>
    <ui-option value="ca">Canada</ui-option>
    <ui-option value="au">Australia</ui-option>
    <ui-option value="de">Germany</ui-option>
    <ui-option value="fr">France</ui-option>
    <ui-option value="jp">Japan</ui-option>
    <ui-option value="cn">China</ui-option>
    <ui-option value="in">India</ui-option>
    <ui-option value="br">Brazil</ui-option>
</ui-dropdown>`;

        const searchableMultiExample = `<ui-dropdown placeholder="Search and select multiple" multiple searchable>
    <ui-option value="react">React</ui-option>
    <ui-option value="vue">Vue.js</ui-option>
    <ui-option value="angular">Angular</ui-option>
    <ui-option value="svelte">Svelte</ui-option>
    <ui-option value="next">Next.js</ui-option>
    <ui-option value="nuxt">Nuxt.js</ui-option>
    <ui-option value="gatsby">Gatsby</ui-option>
    <ui-option value="remix">Remix</ui-option>
</ui-dropdown>`;

        const sizeExample = `<div class="space-y-4">
    <ui-dropdown placeholder="Small dropdown" size="sm">
        <ui-option value="option1">Option 1</ui-option>
        <ui-option value="option2">Option 2</ui-option>
    </ui-dropdown>
    
    <ui-dropdown placeholder="Medium dropdown (default)" size="md">
        <ui-option value="option1">Option 1</ui-option>
        <ui-option value="option2">Option 2</ui-option>
    </ui-dropdown>
    
    <ui-dropdown placeholder="Large dropdown" size="lg">
        <ui-option value="option1">Option 1</ui-option>
        <ui-option value="option2">Option 2</ui-option>
    </ui-dropdown>
</div>`;

        const disabledExample = `<ui-dropdown placeholder="Disabled dropdown" disabled>
    <ui-option value="option1">Option 1</ui-option>
    <ui-option value="option2">Option 2</ui-option>
</ui-dropdown>`;

        const apiExample = `// Get dropdown element
const dropdown = document.getElementById('my-dropdown');

// Listen for change events
dropdown.addEventListener('dropdown-change', (event) => {
    console.log('Selected value:', event.detail.value);
    console.log('All selected options:', event.detail.selectedOptions);
});

// Listen for open/close events
dropdown.addEventListener('dropdown-open', () => {
    console.log('Dropdown opened');
});

dropdown.addEventListener('dropdown-close', () => {
    console.log('Dropdown closed');
});

// Programmatically set attributes
dropdown.setAttribute('placeholder', 'New placeholder');
dropdown.setAttribute('multiple', ''); // Enable multi-select
dropdown.setAttribute('searchable', ''); // Enable search
dropdown.setAttribute('disabled', ''); // Disable dropdown
dropdown.setAttribute('size', 'lg'); // Set size

// Check if dropdown is open
if (dropdown.isOpen) {
    console.log('Dropdown is currently open');
}`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Dropdown Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A flexible dropdown component with support for single/multi-select, search functionality, 
                        keyboard navigation, and accessibility features.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div>
                                <h3 class="text-sm font-medium text-gray-700 mb-2">Basic Dropdown</h3>
                                <ui-dropdown id="live-basic-dropdown" placeholder="Select a fruit">
                                    <ui-option value="apple">Apple</ui-option>
                                    <ui-option value="banana">Banana</ui-option>
                                    <ui-option value="orange">Orange</ui-option>
                                    <ui-option value="grape">Grape</ui-option>
                                </ui-dropdown>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-700 mb-2">Multi-Select</h3>
                                <ui-dropdown id="live-multi-dropdown" placeholder="Select multiple fruits" multiple>
                                    <ui-option value="apple">Apple</ui-option>
                                    <ui-option value="banana">Banana</ui-option>
                                    <ui-option value="orange">Orange</ui-option>
                                    <ui-option value="grape">Grape</ui-option>
                                </ui-dropdown>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-700 mb-2">Searchable</h3>
                                <ui-dropdown id="live-search-dropdown" placeholder="Search countries" searchable>
                                    <ui-option value="us">United States</ui-option>
                                    <ui-option value="uk">United Kingdom</ui-option>
                                    <ui-option value="ca">Canada</ui-option>
                                    <ui-option value="au">Australia</ui-option>
                                </ui-dropdown>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-700 mb-2">Searchable Multi-Select</h3>
                                <ui-dropdown id="live-search-multi-dropdown" placeholder="Search and select" multiple searchable>
                                    <ui-option value="react">React</ui-option>
                                    <ui-option value="vue">Vue.js</ui-option>
                                    <ui-option value="angular">Angular</ui-option>
                                    <ui-option value="svelte">Svelte</ui-option>
                                </ui-dropdown>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Dropdown</h2>
                <p class="mb-4 text-gray-600">A simple dropdown for single selection.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <ui-dropdown id="demo-basic-dropdown" placeholder="Select a fruit">
                        <ui-option value="apple">Apple</ui-option>
                        <ui-option value="banana">Banana</ui-option>
                        <ui-option value="orange">Orange</ui-option>
                        <ui-option value="grape">Grape</ui-option>
                    </ui-dropdown>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Multi-Select Dropdown</h2>
                <p class="mb-4 text-gray-600">Enable multiple selection with the <code>multiple</code> attribute.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <ui-dropdown id="demo-multi-dropdown" placeholder="Select multiple fruits" multiple>
                        <ui-option value="apple">Apple</ui-option>
                        <ui-option value="banana">Banana</ui-option>
                        <ui-option value="orange">Orange</ui-option>
                        <ui-option value="grape">Grape</ui-option>
                        <ui-option value="mango">Mango</ui-option>
                        <ui-option value="pineapple">Pineapple</ui-option>
                    </ui-dropdown>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${multiSelectExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Searchable Dropdown</h2>
                <p class="mb-4 text-gray-600">Add search functionality with the <code>searchable</code> attribute.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <ui-dropdown id="demo-search-dropdown" placeholder="Search countries" searchable>
                        <ui-option value="us">United States</ui-option>
                        <ui-option value="uk">United Kingdom</ui-option>
                        <ui-option value="ca">Canada</ui-option>
                        <ui-option value="au">Australia</ui-option>
                        <ui-option value="de">Germany</ui-option>
                        <ui-option value="fr">France</ui-option>
                        <ui-option value="jp">Japan</ui-option>
                        <ui-option value="cn">China</ui-option>
                        <ui-option value="in">India</ui-option>
                        <ui-option value="br">Brazil</ui-option>
                    </ui-dropdown>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${searchableExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Searchable Multi-Select</h2>
                <p class="mb-4 text-gray-600">Combine search and multi-select functionality.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <ui-dropdown id="demo-search-multi-dropdown" placeholder="Search and select multiple" multiple searchable>
                        <ui-option value="react">React</ui-option>
                        <ui-option value="vue">Vue.js</ui-option>
                        <ui-option value="angular">Angular</ui-option>
                        <ui-option value="svelte">Svelte</ui-option>
                        <ui-option value="next">Next.js</ui-option>
                        <ui-option value="nuxt">Nuxt.js</ui-option>
                        <ui-option value="gatsby">Gatsby</ui-option>
                        <ui-option value="remix">Remix</ui-option>
                    </ui-dropdown>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${searchableMultiExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Size Variants</h2>
                <p class="mb-4 text-gray-600">Use different sizes with the <code>size</code> attribute.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <div class="space-y-4">
                        <ui-dropdown id="demo-small-dropdown" placeholder="Small dropdown" size="sm">
                            <ui-option value="option1">Option 1</ui-option>
                            <ui-option value="option2">Option 2</ui-option>
                        </ui-dropdown>
                        
                        <ui-dropdown id="demo-medium-dropdown" placeholder="Medium dropdown (default)" size="md">
                            <ui-option value="option1">Option 1</ui-option>
                            <ui-option value="option2">Option 2</ui-option>
                        </ui-dropdown>
                        
                        <ui-dropdown id="demo-large-dropdown" placeholder="Large dropdown" size="lg">
                            <ui-option value="option1">Option 1</ui-option>
                            <ui-option value="option2">Option 2</ui-option>
                        </ui-dropdown>
                    </div>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${sizeExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Disabled State</h2>
                <p class="mb-4 text-gray-600">Disable the dropdown with the <code>disabled</code> attribute.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview6">Preview</ui-tab>
                    <ui-tab value="code6">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview6">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <ui-dropdown id="demo-disabled-dropdown" placeholder="Disabled dropdown" disabled>
                        <ui-option value="option1">Option 1</ui-option>
                        <ui-option value="option2">Option 2</ui-option>
                    </ui-dropdown>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code6">
                    <ui-codeblock language="html" code="${disabledExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">API Reference</h2>
                <p class="mb-4 text-gray-600">Learn how to programmatically control the dropdown component.</p>
                
                <ui-codeblock language="javascript" code="${apiExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Features</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Single and multi-select modes</li>
                        <li>• Search functionality for large option lists</li>
                        <li>• Keyboard navigation (Arrow keys, Enter, Escape)</li>
                        <li>• Accessible with proper ARIA attributes</li>
                        <li>• Multiple size variants (sm, md, lg)</li>
                        <li>• Disabled state support</li>
                        <li>• Event-driven API for easy integration</li>
                        <li>• Responsive design for mobile devices</li>
                    </ul>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Attributes</h2>
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
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">placeholder</td>
                                <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                <td class="px-4 py-2 text-sm text-gray-600">"Select an option"</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Placeholder text when no option is selected</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">multiple</td>
                                <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Enables multi-select mode</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">searchable</td>
                                <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Enables search functionality</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">disabled</td>
                                <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Disables the dropdown</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">size</td>
                                <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                <td class="px-4 py-2 text-sm text-gray-600">"md"</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Size variant: "sm", "md", "lg"</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Events</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Event</th>
                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">dropdown-change</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Fired when selection changes</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">dropdown-open</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Fired when dropdown opens</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">dropdown-close</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Fired when dropdown closes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Keyboard Navigation</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Key</th>
                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">Enter / Space</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Open/close dropdown or select option</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">Arrow Down</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Focus next option</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">Arrow Up</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Focus previous option</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">Escape</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Close dropdown</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    setupDropdownExamples() {
        // Add event listeners for dropdown examples
        const dropdowns = document.querySelectorAll('ui-dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('dropdown-change', (event) => {
                console.log('Dropdown changed:', dropdown.id, event.detail);
            });
            
            dropdown.addEventListener('dropdown-open', () => {
                console.log('Dropdown opened:', dropdown.id);
            });
            
            dropdown.addEventListener('dropdown-close', () => {
                console.log('Dropdown closed:', dropdown.id);
            });
        });
    }
}

customElements.define('app-dropdown-docs-page', DropdownDocsPage);
export default DropdownDocsPage; 