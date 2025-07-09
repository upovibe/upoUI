import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Card.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';
import '@/components/ui/Avatar.js';

class CardDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Card | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-card>
  <h3>Card Title</h3>
  <p>This is the main content of the card. You can put any HTML content here.</p>
</ui-card>`;

        const setupExample = `// Import the card component
import '@/components/ui/Card.js';

class CardExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <ui-card>
                <h3>Card Title</h3>
                <p>This is the main content of the card.</p>
            </ui-card>
        \`;
    }
}

customElements.define('ui-card-example', CardExample);
export default CardExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Card Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Simple container component for displaying content in organized layouts.
                    </p>
                    
                    <!-- Live Example -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Example</h2>
                        <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                            <ui-card class="flex items-center gap-4">
                                <ui-avatar name="John Doe" alt="John Doe"></ui-avatar>
                                    <div>
                                        <h3>Card Title</h3>
                                        <p style="margin: 0; color: #6b7280;">Card subtitle</p>
                                    </div>
                            </ui-card>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Usage</h2>
                <p class="mb-4 text-gray-600">Simply wrap your content in the <code>ui-card</code> element.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview">Preview</ui-tab>
                    <ui-tab value="code">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-card class="flex items-center gap-4">
                        <ui-avatar name="John Doe" alt="John Doe"></ui-avatar>
                        <div>
                          <h3>Card Title</h3>
                          <p style="margin: 0; color: #6b7280;">Card subtitle</p>
                        </div>
                      </ui-card>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code">
                    <ui-codeblock language="html" code="<ui-card class=&quot;flex items-center gap-4&quot;>
  <ui-avatar name=&quot;John Doe&quot; alt=&quot;John Doe&quot;></ui-avatar>
  <div>
    <h3>Card Title</h3>
    <p style=&quot;margin: 0; color: #6b7280;&quot;>Card subtitle</p>
  </div>
</ui-card>"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the card component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the card component before using it</li>
                        <li>• Simply wrap your content in <code>ui-card</code> tags</li>
                        <li>• Cards can contain any HTML content</li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('app-card-docs-page', CardDocsPage);
export default CardDocsPage; 