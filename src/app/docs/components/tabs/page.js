import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Tabs.js';
import '@/components/ui/Box.js';

class TabsDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Tabs | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-tabs>
  <ui-tab-list>
    <ui-tab value="tab1">Overview</ui-tab>
    <ui-tab value="tab2">Features</ui-tab>
    <ui-tab value="tab3">Settings</ui-tab>
  </ui-tab-list>
  <ui-tab-panel value="tab1">
    <p>This is the overview content.</p>
  </ui-tab-panel>
  <ui-tab-panel value="tab2">
    <p>This is the features content.</p>
  </ui-tab-panel>
  <ui-tab-panel value="tab3">
    <p>This is the settings content.</p>
  </ui-tab-panel>
</ui-tabs>`;

        const withContentExample = `<ui-tabs>
  <ui-tab-list>
    <ui-tab value="preview">Preview</ui-tab>
    <ui-tab value="code">Code</ui-tab>
  </ui-tab-list>
  <ui-tab-panel value="preview">
    <div class="p-4 bg-gray-100 rounded">
      <h3>Preview Content</h3>
      <p>This is the preview panel content.</p>
    </div>
  </ui-tab-panel>
  <ui-tab-panel value="code">
    <pre class="bg-gray-900 text-green-400 p-4 rounded">
&lt;div class="p-4 bg-gray-100 rounded"&gt;
  &lt;h3&gt;Preview Content&lt;/h3&gt;
  &lt;p&gt;This is the preview panel content.&lt;/p&gt;
&lt;/div&gt;
    </pre>
  </ui-tab-panel>
</ui-tabs>`;

        const multipleTabsExample = `<ui-tabs>
  <ui-tab-list>
    <ui-tab value="html">HTML</ui-tab>
    <ui-tab value="css">CSS</ui-tab>
    <ui-tab value="js">JavaScript</ui-tab>
    <ui-tab value="react">React</ui-tab>
    <ui-tab value="vue">Vue</ui-tab>
  </ui-tab-list>
  <ui-tab-panel value="html">
    <p>HTML content here...</p>
  </ui-tab-panel>
  <ui-tab-panel value="css">
    <p>CSS content here...</p>
  </ui-tab-panel>
  <ui-tab-panel value="js">
    <p>JavaScript content here...</p>
  </ui-tab-panel>
  <ui-tab-panel value="react">
    <p>React content here...</p>
  </ui-tab-panel>
  <ui-tab-panel value="vue">
    <p>Vue content here...</p>
  </ui-tab-panel>
</ui-tabs>`;

        const setupExample = `// Import the tabs component
import '@/components/ui/Tabs.js';

class TabsExample extends HTMLElement {
    constructor() {
        super();
        this.activeTab = 'tab1';
    }

    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h3>Dynamic Tabs</h3>
                <ui-tabs id="dynamic-tabs">
                    <ui-tab-list>
                        <ui-tab value="tab1">Tab 1</ui-tab>
                        <ui-tab value="tab2">Tab 2</ui-tab>
                        <ui-tab value="tab3">Tab 3</ui-tab>
                    </ui-tab-list>
                    <ui-tab-panel value="tab1">
                        <p>Content for tab 1</p>
                    </ui-tab-panel>
                    <ui-tab-panel value="tab2">
                        <p>Content for tab 2</p>
                    </ui-tab-panel>
                    <ui-tab-panel value="tab3">
                        <p>Content for tab 3</p>
                    </ui-tab-panel>
                </ui-tabs>
                <button id="changeTab">Change to Tab 2</button>
            </div>
        \`;
        
        // Add event listener for button
        this.querySelector('#changeTab').addEventListener('click', () => {
            this.querySelector('#dynamic-tabs').setActiveTab('tab2');
        });
    }
}

customElements.define('ui-tabs-example', TabsExample);
export default TabsExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Tabs Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A flexible tabbed interface component with smooth transitions and accessibility features. 
                        Perfect for organizing content into logical sections and improving user experience.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Basic Tabs</h3>
                                <ui-tabs>
                                    <ui-tab-list>
                                        <ui-tab value="overview">Overview</ui-tab>
                                        <ui-tab value="features">Features</ui-tab>
                                        <ui-tab value="settings">Settings</ui-tab>
                                    </ui-tab-list>
                                    <ui-tab-panel value="overview">
                                        <p class="text-sm">This is the overview content.</p>
                                    </ui-tab-panel>
                                    <ui-tab-panel value="features">
                                        <p class="text-sm">This is the features content.</p>
                                    </ui-tab-panel>
                                    <ui-tab-panel value="settings">
                                        <p class="text-sm">This is the settings content.</p>
                                    </ui-tab-panel>
                                </ui-tabs>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Content Tabs</h3>
                                <ui-tabs>
                                    <ui-tab-list>
                                        <ui-tab value="preview">Preview</ui-tab>
                                        <ui-tab value="code">Code</ui-tab>
                                    </ui-tab-list>
                                    <ui-tab-panel value="preview">
                                        <div class="p-2 bg-blue-50 rounded text-xs">
                                            <p>Preview content here</p>
                                        </div>
                                    </ui-tab-panel>
                                    <ui-tab-panel value="code">
                                        <pre class="bg-gray-900 text-green-400 p-2 rounded text-xs">console.log('Hello World');</pre>
                                    </ui-tab-panel>
                                </ui-tabs>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Tabs</h2>
                <p class="mb-4 text-gray-600">Simple tabbed interface with multiple panels and smooth transitions.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-tabs>
                        <ui-tab-list>
                          <ui-tab value="tab1">Overview</ui-tab>
                          <ui-tab value="tab2">Features</ui-tab>
                          <ui-tab value="tab3">Settings</ui-tab>
                        </ui-tab-list>
                        <ui-tab-panel value="tab1">
                          <p>This is the overview content.</p>
                        </ui-tab-panel>
                        <ui-tab-panel value="tab2">
                          <p>This is the features content.</p>
                        </ui-tab-panel>
                        <ui-tab-panel value="tab3">
                          <p>This is the settings content.</p>
                        </ui-tab-panel>
                      </ui-tabs>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Tabs with Rich Content</h2>
                <p class="mb-4 text-gray-600">Tabs can contain any type of content including formatted text, code blocks, and complex layouts.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-tabs>
                        <ui-tab-list>
                          <ui-tab value="preview">Preview</ui-tab>
                          <ui-tab value="code">Code</ui-tab>
                        </ui-tab-list>
                        <ui-tab-panel value="preview">
                          <div class="p-4 bg-gray-100 rounded">
                            <h3 class="font-semibold mb-2">Preview Content</h3>
                            <p>This is the preview panel content with rich formatting.</p>
                          </div>
                        </ui-tab-panel>
                        <ui-tab-panel value="code">
                          <pre class="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
&lt;div class="p-4 bg-gray-100 rounded"&gt;
  &lt;h3 class="font-semibold mb-2"&gt;Preview Content&lt;/h3&gt;
  &lt;p&gt;This is the preview panel content.&lt;/p&gt;
&lt;/div&gt;
                          </pre>
                        </ui-tab-panel>
                      </ui-tabs>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${withContentExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Multiple Tabs</h2>
                <p class="mb-4 text-gray-600">Tabs can handle any number of panels and automatically adjust the layout.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-tabs>
                        <ui-tab-list>
                          <ui-tab value="html">HTML</ui-tab>
                          <ui-tab value="css">CSS</ui-tab>
                          <ui-tab value="js">JavaScript</ui-tab>
                          <ui-tab value="react">React</ui-tab>
                          <ui-tab value="vue">Vue</ui-tab>
                        </ui-tab-list>
                        <ui-tab-panel value="html">
                          <p class="text-sm">HTML content here...</p>
                        </ui-tab-panel>
                        <ui-tab-panel value="css">
                          <p class="text-sm">CSS content here...</p>
                        </ui-tab-panel>
                        <ui-tab-panel value="js">
                          <p class="text-sm">JavaScript content here...</p>
                        </ui-tab-panel>
                        <ui-tab-panel value="react">
                          <p class="text-sm">React content here...</p>
                        </ui-tab-panel>
                        <ui-tab-panel value="vue">
                          <p class="text-sm">Vue content here...</p>
                        </ui-tab-panel>
                      </ui-tabs>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${multipleTabsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the tabs component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the tabs component before using it</li>
                        <li>• Use <code>ui-tabs</code> as the main container</li>
                        <li>• Use <code>ui-tab-list</code> to contain the tab buttons</li>
                        <li>• Use <code>ui-tab</code> for individual tab buttons with <code>value</code> attribute</li>
                        <li>• Use <code>ui-tab-panel</code> for content panels with matching <code>value</code> attribute</li>
                        <li>• Use <code>setActiveTab(value)</code> method to programmatically switch tabs</li>
                        <li>• Tabs automatically handle keyboard navigation and accessibility</li>
                        <li>• Smooth transitions and animations are included</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">Components</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ui-tabs</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Main tabs container</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Wraps all tab elements</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ui-tab-list</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Container for tab buttons</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Contains ui-tab elements</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ui-tab</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Individual tab button</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Requires value attribute</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ui-tab-panel</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Content panel for each tab</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Requires value attribute</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Attributes</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attribute</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">value</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ui-tab, ui-tab-panel</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Unique identifier linking tab to panel</td>
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
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameters</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Returns</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">setActiveTab(value)</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">void</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Programmatically switch to a specific tab</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-tabs-docs-page', TabsDocsPage);
export default TabsDocsPage; 