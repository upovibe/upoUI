import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Dropdown.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class DropdownDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Dropdown | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-dropdown placeholder="Choose a country">
  <ui-option value="us">United States</ui-option>
  <ui-option value="ca">Canada</ui-option>
  <ui-option value="uk">United Kingdom</ui-option>
  <ui-option value="au">Australia</ui-option>
</ui-dropdown>`;

        const multiSelectExample = `<ui-dropdown multiple placeholder="Choose countries">
  <ui-option value="us">United States</ui-option>
  <ui-option value="ca">Canada</ui-option>
  <ui-option value="uk">United Kingdom</ui-option>
  <ui-option value="au">Australia</ui-option>
</ui-dropdown>`;

        const searchableExample = `<ui-dropdown searchable placeholder="Search for a country">
  <ui-option value="us">United States</ui-option>
  <ui-option value="ca">Canada</ui-option>
  <ui-option value="uk">United Kingdom</ui-option>
  <ui-option value="au">Australia</ui-option>
  <ui-option value="de">Germany</ui-option>
  <ui-option value="fr">France</ui-option>
</ui-dropdown>`;

        const setupExample = `// Import the dropdown component
import '@/components/ui/Dropdown.js';

class DropdownExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <ui-dropdown placeholder="Choose a country">
                <ui-option value="us">United States</ui-option>
                <ui-option value="ca">Canada</ui-option>
                <ui-option value="uk">United Kingdom</ui-option>
                <ui-option value="au">Australia</ui-option>
            </ui-dropdown>
        \`;
    }
}

customElements.define('ui-dropdown-example', DropdownExample);
export default DropdownExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Dropdown Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A customizable dropdown/select component with modern UI, supporting single and multi-select modes, 
                        search functionality, and keyboard navigation.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div>
                                <h3 class="text-sm font-medium text-gray-700 mb-2">Basic Dropdown</h3>
                                <ui-dropdown placeholder="Choose a country">
                                    <ui-option value="us">United States</ui-option>
                                    <ui-option value="ca">Canada</ui-option>
                                    <ui-option value="uk">United Kingdom</ui-option>
                                    <ui-option value="au">Australia</ui-option>
                                </ui-dropdown>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-700 mb-2">Multi Select</h3>
                                <ui-dropdown multiple placeholder="Choose countries">
                                    <ui-option value="us">United States</ui-option>
                                    <ui-option value="ca">Canada</ui-option>
                                    <ui-option value="uk">United Kingdom</ui-option>
                                    <ui-option value="au">Australia</ui-option>
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
                      <ui-dropdown placeholder="Choose a country">
                        <ui-option value="us">United States</ui-option>
                        <ui-option value="ca">Canada</ui-option>
                        <ui-option value="uk">United Kingdom</ui-option>
                        <ui-option value="au">Australia</ui-option>
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
                      <ui-dropdown multiple placeholder="Choose countries">
                        <ui-option value="us">United States</ui-option>
                        <ui-option value="ca">Canada</ui-option>
                        <ui-option value="uk">United Kingdom</ui-option>
                        <ui-option value="au">Australia</ui-option>
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
                      <ui-dropdown searchable placeholder="Search for a country">
                        <ui-option value="us">United States</ui-option>
                        <ui-option value="ca">Canada</ui-option>
                        <ui-option value="uk">United Kingdom</ui-option>
                        <ui-option value="au">Australia</ui-option>
                        <ui-option value="de">Germany</ui-option>
                        <ui-option value="fr">France</ui-option>
                      </ui-dropdown>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${searchableExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the dropdown component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the dropdown component before using it</li>
                        <li>• Use <code>multiple</code> attribute for multi-select mode</li>
                        <li>• Use <code>searchable</code> attribute to enable search</li>
                        <li>• Use <code>disabled</code> attribute to disable the dropdown</li>
                        <li>• Use <code>size</code> attribute for different sizes (sm, md, lg)</li>
                        <li>• Use <code>status</code> attribute for validation states</li>
                        <li>• Dropdowns support keyboard navigation</li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('app-dropdown-docs-page', DropdownDocsPage);
export default DropdownDocsPage; 