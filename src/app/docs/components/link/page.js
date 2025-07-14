import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Link.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class LinkDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Link | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-link href="https://example.com">Basic Link</ui-link>
<ui-link href="https://example.com" target="_blank">External Link</ui-link>
<ui-link href="#section">Internal Link</ui-link>`;

        const linkVariantsExample = `<ui-link href="#" variant="default">Default Link</ui-link>
<ui-link href="#" variant="primary">Primary Link</ui-link>
<ui-link href="#" variant="secondary">Secondary Link</ui-link>
<ui-link href="#" variant="success">Success Link</ui-link>
<ui-link href="#" variant="warning">Warning Link</ui-link>
<ui-link href="#" variant="error">Error Link</ui-link>`;

        const linkSizesExample = `<ui-link href="#" size="sm">Small Link</ui-link>
<ui-link href="#" size="md">Medium Link</ui-link>
<ui-link href="#" size="lg">Large Link</ui-link>`;

        const linkStatesExample = `<ui-link href="#">Normal Link</ui-link>
<ui-link href="#" disabled>Disabled Link</ui-link>
<ui-link href="#" loading>Loading Link</ui-link>`;

        const linkWithIconsExample = `<ui-link href="#" leading-icon="<i class='fas fa-external-link-alt'></i>">
  External Link
</ui-link>

<ui-link href="#" trailing-icon="<i class='fas fa-arrow-right'></i>">
  Next Page
</ui-link>

<ui-link href="#" leading-icon="<i class='fas fa-download'></i>" trailing-icon="<i class='fas fa-arrow-down'></i>">
  Download File
</ui-link>`;

        const setupExample = `// Import the link component
import '@/components/ui/Link.js';

class LinkExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <ui-link 
                href="https://example.com" 
                variant="primary"
                target="_blank"
            >
                Visit Example
            </ui-link>
        \`;
        
        // Listen for link clicks
        this.querySelector('ui-link').addEventListener('click', (event) => {
            console.log('Link clicked:', event.target.href);
        });
    }
}

customElements.define('ui-link-example', LinkExample);
export default LinkExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Link Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A versatile link component with various styles, colors, sizes, and states. 
                        Perfect for navigation, external links, and interactive elements.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Basic Links</h3>
                                <ui-link href="https://example.com">Basic Link</ui-link>
                                <ui-link href="https://example.com" target="_blank">External Link</ui-link>
                                <ui-link href="#section">Internal Link</ui-link>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Styled Links</h3>
                                <ui-link href="#" variant="primary">Primary Link</ui-link>
                                <ui-link href="#" variant="success">Success Link</ui-link>
                                <ui-link href="#" leading-icon="<i class='fas fa-external-link-alt'></i>">With Icon</ui-link>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Links</h2>
                <p class="mb-4 text-gray-600">Simple links with different targets and purposes.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Basic Link</label>
                        <ui-link href="https://example.com">Basic Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">External Link</label>
                        <ui-link href="https://example.com" target="_blank">External Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Internal Link</label>
                        <ui-link href="#section">Internal Link</ui-link>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Link Variants</h2>
                <p class="mb-4 text-gray-600">Choose from different color variants to match your design system.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Default Variant</label>
                        <ui-link href="#" variant="default">Default Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Primary Variant</label>
                        <ui-link href="#" variant="primary">Primary Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Secondary Variant</label>
                        <ui-link href="#" variant="secondary">Secondary Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Success Variant</label>
                        <ui-link href="#" variant="success">Success Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Warning Variant</label>
                        <ui-link href="#" variant="warning">Warning Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Error Variant</label>
                        <ui-link href="#" variant="error">Error Link</ui-link>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${linkVariantsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Link Sizes</h2>
                <p class="mb-4 text-gray-600">Use the <code>size</code> attribute to control link dimensions.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Small Size</label>
                        <ui-link href="#" size="sm">Small Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Medium Size</label>
                        <ui-link href="#" size="md">Medium Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Large Size</label>
                        <ui-link href="#" size="lg">Large Link</ui-link>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${linkSizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Link States</h2>
                <p class="mb-4 text-gray-600">Links can have different states: normal, disabled, and loading.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Normal State</label>
                        <ui-link href="#">Normal Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Disabled State</label>
                        <ui-link href="#" disabled>Disabled Link</ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Loading State</label>
                        <ui-link href="#" loading>Loading Link</ui-link>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${linkStatesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Links with Icons</h2>
                <p class="mb-4 text-gray-600">Add FontAwesome icons to enhance link appearance and meaning.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Leading Icon</label>
                        <ui-link href="#" leading-icon="<i class='fas fa-external-link-alt'></i>">
                          External Link
                        </ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Trailing Icon</label>
                        <ui-link href="#" trailing-icon="<i class='fas fa-arrow-right'></i>">
                          Next Page
                        </ui-link>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Both Icons</label>
                        <ui-link href="#" leading-icon="<i class='fas fa-download'></i>" trailing-icon="<i class='fas fa-arrow-down'></i>">
                          Download File
                        </ui-link>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${linkWithIconsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the link component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the link component before using it</li>
                        <li>• Use <code>href</code> attribute for the link destination</li>
                        <li>• Use <code>target="_blank"</code> for external links</li>
                        <li>• Use <code>variant</code> attribute for different color themes</li>
                        <li>• Use <code>size</code> attribute to control dimensions</li>
                        <li>• Use <code>leading-icon</code> and <code>trailing-icon</code> for FontAwesome icons</li>
                        <li>• Add <code>disabled</code> attribute to disable the link</li>
                        <li>• Add <code>loading</code> attribute to show loading state</li>
                        <li>• Links are fully accessible with keyboard navigation</li>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">href</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">The URL the link points to</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">target</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Link target: _blank, _self, _parent, _top</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Color variant: default, primary, secondary, success, warning, error</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Link size: sm, md, lg</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">leading-icon</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">FontAwesome icon HTML to display before the link</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">trailing-icon</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">FontAwesome icon HTML to display after the link</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Disable the link</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">loading</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Show loading state</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">click</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the link is clicked</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">focus</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the link receives focus</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">blur</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the link loses focus</td>
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
                                    <td class="px-6 py-4 text-sm text-gray-500">Focuses the link element</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">blur()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Removes focus from the link element</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">click()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Programmatically clicks the link</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-link-docs-page', LinkDocsPage);
export default LinkDocsPage; 