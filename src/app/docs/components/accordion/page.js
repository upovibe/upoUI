import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Accordion.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class AccordionDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Accordion | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-accordion>
  <ui-accordion-item title="Section 1" open>
    <p>Content for section 1.</p>
    <p>More content here.</p>
  </ui-accordion-item>
  <ui-accordion-item title="Section 2">
    <p>Content for section 2.</p>
  </ui-accordion-item>
</ui-accordion>`;

        const singleExample = `<ui-accordion single>
  <ui-accordion-item title="Section 1" open>
    <p>Content for section 1.</p>
    <p>More content here.</p>
  </ui-accordion-item>
  <ui-accordion-item title="Section 2">
    <p>Content for section 2.</p>
  </ui-accordion-item>
  <ui-accordion-item title="Section 3">
    <p>Content for section 3.</p>
  </ui-accordion-item>
</ui-accordion>`;

        const nestedExample = `<ui-accordion>
  <ui-accordion-item title="Getting Started" open>
    <p>Welcome to our documentation!</p>
    <p>This section covers the basics.</p>
    <ui-accordion>
      <ui-accordion-item title="Installation">
        <p>Follow these steps to install the component.</p>
      </ui-accordion-item>
      <ui-accordion-item title="Configuration">
        <p>Learn how to configure the component.</p>
      </ui-accordion-item>
    </ui-accordion>
  </ui-accordion-item>
  <ui-accordion-item title="Advanced Topics">
    <p>Learn advanced features here.</p>
  </ui-accordion-item>
</ui-accordion>`;

        const setupExample = `// Import the accordion component
import '@/components/ui/Accordion.js';

class AccordionExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h1>Accordion Examples</h1>
                
                <!-- Basic accordion -->
                <ui-accordion>
                    <ui-accordion-item title="Getting Started">
                        <p>Welcome to our documentation!</p>
                        <p>This section covers the basics.</p>
                    </ui-accordion-item>
                    <ui-accordion-item title="Advanced Topics">
                        <p>Learn advanced features here.</p>
                    </ui-accordion-item>
                </ui-accordion>
                
                <!-- Single-open accordion -->
                <ui-accordion single>
                    <ui-accordion-item title="FAQ 1" open>
                        <p>Answer to frequently asked question 1.</p>
                    </ui-accordion-item>
                    <ui-accordion-item title="FAQ 2">
                        <p>Answer to frequently asked question 2.</p>
                    </ui-accordion-item>
                </ui-accordion>
            </div>
        \`;
    }
}

customElements.define('ui-accordion-example', AccordionExample);
export default AccordionExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Accordion Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Creates collapsible content sections with smooth animations. Perfect for FAQs, documentation, and organizing content into expandable sections.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex flex-col gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <ui-accordion>
                                <ui-accordion-item title="Getting Started" open>
                                    <p>Welcome to our documentation! This section covers the basics.</p>
                                    <p>Learn how to get up and running quickly.</p>
                                </ui-accordion-item>
                                <ui-accordion-item title="Advanced Features">
                                    <p>Discover advanced features and customization options.</p>
                                </ui-accordion-item>
                            </ui-accordion>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Accordion</h2>
                <p class="mb-4 text-gray-600">By default, multiple accordion items can be open at the same time. Use the <code>title</code> attribute to set the header text.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-accordion>
                        <ui-accordion-item title="Section 1" open>
                          <p>Content for section 1.</p>
                          <p>More content here.</p>
                        </ui-accordion-item>
                        <ui-accordion-item title="Section 2">
                          <p>Content for section 2.</p>
                        </ui-accordion-item>
                      </ui-accordion>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Single Item Open</h2>
                <p class="mb-4 text-gray-600">Add the <code>single</code> attribute to ensure only one accordion item can be open at a time. This is perfect for FAQ sections.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-accordion single>
                        <ui-accordion-item title="Section 1" open>
                          <p>Content for section 1.</p>
                          <p>More content here.</p>
                        </ui-accordion-item>
                        <ui-accordion-item title="Section 2">
                          <p>Content for section 2.</p>
                        </ui-accordion-item>
                        <ui-accordion-item title="Section 3">
                          <p>Content for section 3.</p>
                        </ui-accordion-item>
                      </ui-accordion>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${singleExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Nested Accordions</h2>
                <p class="mb-4 text-gray-600">You can nest accordions within accordion items to create hierarchical content structures.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-accordion>
                        <ui-accordion-item title="Getting Started" open>
                          <p>Welcome to our documentation!</p>
                          <p>This section covers the basics.</p>
                          <ui-accordion>
                            <ui-accordion-item title="Installation">
                              <p>Follow these steps to install the component.</p>
                            </ui-accordion-item>
                            <ui-accordion-item title="Configuration">
                              <p>Learn how to configure the component.</p>
                            </ui-accordion-item>
                          </ui-accordion>
                        </ui-accordion-item>
                        <ui-accordion-item title="Advanced Topics">
                          <p>Learn advanced features here.</p>
                        </ui-accordion-item>
                      </ui-accordion>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${nestedExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Complete Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the accordion component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the accordion component before using it</li>
                        <li>• Use <code>title</code> attribute to set the header text</li>
                        <li>• Add <code>open</code> attribute to start with an item expanded</li>
                        <li>• Use <code>single</code> attribute for one-at-a-time behavior</li>
                        <li>• Content can include any HTML elements, including nested accordions</li>
                        <li>• Smooth animations are included by default</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">ui-accordion Attributes</h4>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">single</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Ensures only one item can be open at a time</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">ui-accordion-item Attributes</h4>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">title</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">''</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Text displayed in the accordion header</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">open</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Starts the item in an expanded state</td>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">accordion-toggle</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">{ open: boolean, title: string }</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when an accordion item is toggled</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-accordion-docs-page', AccordionDocsPage);
export default AccordionDocsPage; 