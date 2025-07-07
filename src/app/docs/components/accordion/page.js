import App from '../../../../core/App.js';
import '../../../../components/ui/CodeBlock.js';
import '../../../../components/ui/Accordion.js';
import '../../../../components/ui/Box.js';

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
        return `
            <div>
                <h1 class="text-3xl font-bold text-gray-900">Accordion</h1>
                <p class="mt-4 text-gray-600">
                  The <code>&lt;ui-accordion&gt;</code> component lets you create collapsible sections. Each <code>&lt;ui-accordion-item&gt;</code> takes a <b>title</b> attribute and can be opened by adding the <b>open</b> attribute. Only the content of the open item is visible at a time. This is useful for FAQs, settings panels, and more.
                </p>
                <h2 class="text-xl font-semibold mt-8 mb-2">Live Example</h2>
                <ui-box class="p-12 px-20 border border-gray-200 rounded-lg">
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
                <h2 class="text-xl font-semibold mt-8 mb-2">Usage Example</h2>
                <ui-codeblock language="html" code="${usageExample.replace(/"/g, '&quot;')}"></ui-codeblock>
            </div>
        `;
    }
}

customElements.define('app-accordion-docs-page', AccordionDocsPage);
export default AccordionDocsPage; 