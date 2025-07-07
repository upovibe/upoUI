import App from '../../../../core/App.js';
import '../../../../components/ui/CodeBlock.js';
import '../../../../components/ui/Accordion.js';
import '../../../../components/ui/Box.js';
import '../../../../components/ui/Tabs.js';

class AccordionDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Accordion | UPO UI Docs';
    }
    render() {
        const usageExample = `<ui-accordion>
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

        const setupExample = `// Import the accordion component
import '../../components/ui/Accordion.js';

class AccordionExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h1>Accordion Example</h1>
                
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
                <h1 class="text-3xl font-bold text-gray-900">Accordion</h1>
                <p class="mt-4 text-lg text-gray-600">
                  The <code>&lt;ui-accordion&gt;</code> component lets you create collapsible sections. Each <code>&lt;ui-accordion-item&gt;</code> takes a <b>title</b> attribute and can be opened by adding the <b>open</b> attribute.
                </p>
                
                <h2 class="text-xl font-semibold mt-8 mb-4">Multiple Items Open (Default)</h2>
                <p class="mb-4 text-gray-600">By default, multiple accordion items can be open at the same time.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-accordion>
                      <ui-accordion-item title="Section 1" open>
                        <p>Content for section 1.</p>
                        <p>More content here.</p>
                      </ui-accordion-item>
                      <ui-accordion-item title="Section 2">
                        <p>Content for section 2.</p>
                      </ui-accordion-item>
                    </ui-accordion>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${usageExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>
                
                <h2 class="text-xl font-semibold mt-8 mb-4">Single Item Open</h2>
                <p class="mb-4 text-gray-600">Add the <code>single</code> attribute to ensure only one accordion item can be open at a time.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
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
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${singleExample.replace(/"/g, '&quot;')}"></ui-codeblock>
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
                        <li>• Content can include any HTML elements</li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('app-accordion-docs-page', AccordionDocsPage);
export default AccordionDocsPage; 