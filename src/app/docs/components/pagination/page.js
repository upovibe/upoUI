import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Pagination.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class PaginationDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Pagination | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-pagination current-page="3" total-pages="10"></ui-pagination>`;

        const withFirstLastExample = `<ui-pagination 
  current-page="5" 
  total-pages="20" 
  show-first-last="true"
></ui-pagination>`;

        const variantsExample = `<ui-pagination current-page="3" total-pages="10" variant="default"></ui-pagination>
<ui-pagination current-page="3" total-pages="10" variant="primary"></ui-pagination>
<ui-pagination current-page="3" total-pages="10" variant="secondary"></ui-pagination>`;

        const maxVisibleExample = `<ui-pagination current-page="5" total-pages="20" max-visible="3"></ui-pagination>
<ui-pagination current-page="5" total-pages="20" max-visible="5"></ui-pagination>
<ui-pagination current-page="5" total-pages="20" max-visible="7"></ui-pagination>`;

        const noPrevNextExample = `<ui-pagination 
  current-page="3" 
  total-pages="10" 
  show-prev-next="false"
></ui-pagination>`;

        const setupExample = `// Import the pagination component
import '@/components/ui/Pagination.js';

class PaginationExample extends HTMLElement {
    constructor() {
        super();
        this.currentPage = 1;
        this.totalPages = 20;
    }

    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h3>Page \${this.currentPage} of \${this.totalPages}</h3>
                <ui-pagination 
                    current-page="\${this.currentPage}" 
                    total-pages="\${this.totalPages}"
                    show-first-last="true"
                ></ui-pagination>
            </div>
        \`;
        
        // Listen for page changes
        this.querySelector('ui-pagination').addEventListener('page-change', (event) => {
            this.currentPage = event.detail.page;
            this.updateDisplay();
            console.log('Page changed to:', this.currentPage);
        });
    }

    updateDisplay() {
        this.querySelector('h3').textContent = \`Page \${this.currentPage} of \${this.totalPages}\`;
        this.querySelector('ui-pagination').setAttribute('current-page', this.currentPage.toString());
    }
}

customElements.define('ui-pagination-example', PaginationExample);
export default PaginationExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Pagination Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A flexible pagination component with page numbers, navigation buttons, and various display options. 
                        Perfect for data tables, search results, and any content that needs to be paginated.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Basic Pagination</h3>
                                <ui-pagination current-page="3" total-pages="10"></ui-pagination>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">With First/Last</h3>
                                <ui-pagination current-page="5" total-pages="20" show-first-last="true"></ui-pagination>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Pagination</h2>
                <p class="mb-4 text-gray-600">Simple pagination with page numbers and previous/next buttons.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-pagination current-page="3" total-pages="10"></ui-pagination>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">With First/Last Buttons</h2>
                <p class="mb-4 text-gray-600">Add first and last page buttons for easier navigation.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-pagination current-page="5" total-pages="20" show-first-last="true"></ui-pagination>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${withFirstLastExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Pagination Variants</h2>
                <p class="mb-4 text-gray-600">Different color variants to match your design system.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Default Variant</label>
                        <ui-pagination current-page="3" total-pages="10" variant="default"></ui-pagination>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Primary Variant</label>
                        <ui-pagination current-page="3" total-pages="10" variant="primary"></ui-pagination>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Secondary Variant</label>
                        <ui-pagination current-page="3" total-pages="10" variant="secondary"></ui-pagination>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${variantsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Maximum Visible Pages</h2>
                <p class="mb-4 text-gray-600">Control how many page numbers are visible at once.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">3 Visible Pages</label>
                        <ui-pagination current-page="5" total-pages="20" max-visible="3"></ui-pagination>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">5 Visible Pages</label>
                        <ui-pagination current-page="5" total-pages="20" max-visible="5"></ui-pagination>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">7 Visible Pages</label>
                        <ui-pagination current-page="5" total-pages="20" max-visible="7"></ui-pagination>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${maxVisibleExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Without Previous/Next</h2>
                <p class="mb-4 text-gray-600">Hide the previous and next buttons for a simpler interface.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-pagination current-page="3" total-pages="10" show-prev-next="false"></ui-pagination>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${noPrevNextExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the pagination component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the pagination component before using it</li>
                        <li>• Use <code>current-page</code> attribute to set the active page</li>
                        <li>• Use <code>total-pages</code> attribute to set the total number of pages</li>
                        <li>• Use <code>show-prev-next="false"</code> to hide previous/next buttons</li>
                        <li>• Use <code>show-first-last="true"</code> to show first/last buttons</li>
                        <li>• Use <code>max-visible</code> to control visible page numbers</li>
                        <li>• Use <code>variant</code> attribute for styling: default, primary, secondary</li>
                        <li>• Listen for <code>page-change</code> event to handle page changes</li>
                        <li>• Pagination is fully accessible with keyboard navigation</li>
                        <li>• Component uses a compact size by default for better space efficiency</li>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">current-page</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Current active page number</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">total-pages</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Total number of pages</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">show-prev-next</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Show/hide previous and next buttons</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">show-first-last</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Show/hide first and last buttons</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">max-visible</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Maximum number of visible page buttons</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">default</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Style variant: default, primary, secondary</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">page-change</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when a page is clicked (detail: { page: number })</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">goToPage(page)</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Programmatically navigate to a specific page</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-pagination-docs-page', PaginationDocsPage);
export default PaginationDocsPage; 