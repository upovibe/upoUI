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
            </div>
        `;
    }
}

customElements.define('app-accordion-docs-page', AccordionDocsPage);
export default AccordionDocsPage; 