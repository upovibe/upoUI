import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Card.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class CardDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Card | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-card>
  <ui-card-header>
    <ui-card-title>Card Title</ui-card-title>
    <ui-card-subtitle>Card subtitle or description</ui-card-subtitle>
  </ui-card-header>
  <ui-card-content>
    <p>This is the main content of the card. You can put any HTML content here.</p>
  </ui-card-content>
  <ui-card-footer>
    <ui-button>Action</ui-button>
  </ui-card-footer>
</ui-card>`;

        const variantsExample = `<ui-card variant="elevated">
  <ui-card-content>
    <p>Elevated card with shadow</p>
  </ui-card-content>
</ui-card>

<ui-card variant="outlined">
  <ui-card-content>
    <p>Outlined card with border</p>
  </ui-card-content>
</ui-card>

<ui-card variant="filled">
  <ui-card-content>
    <p>Filled card with background</p>
  </ui-card-content>
</ui-card>`;

        const sizesExample = `<ui-card size="sm">
  <ui-card-content>
    <p>Small card</p>
  </ui-card-content>
</ui-card>

<ui-card size="md">
  <ui-card-content>
    <p>Medium card (default)</p>
  </ui-card-content>
</ui-card>

<ui-card size="lg">
  <ui-card-content>
    <p>Large card</p>
  </ui-card-content>
</ui-card>`;

        const setupExample = `// Import the card component
import '@/components/ui/Card.js';

class CardExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h1>Card Examples</h1>
                
                <!-- Basic card -->
                <ui-card>
                    <ui-card-header>
                        <ui-card-title>Card Title</ui-card-title>
                        <ui-card-subtitle>Card subtitle</ui-card-subtitle>
                    </ui-card-header>
                    <ui-card-content>
                        <p>This is the main content of the card.</p>
                    </ui-card-content>
                    <ui-card-footer>
                        <ui-button>Action</ui-button>
                    </ui-card-footer>
                </ui-card>
                
                <!-- Different variants -->
                <ui-card variant="elevated">
                    <ui-card-content>
                        <p>Elevated card with shadow</p>
                    </ui-card-content>
                </ui-card>
                
                <!-- Different sizes -->
                <ui-card size="lg">
                    <ui-card-content>
                        <p>Large card</p>
                    </ui-card-content>
                </ui-card>
            </div>
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
                        Container component for displaying content in organized layouts. Perfect for content organization, product displays, and information grouping.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 shadow rounded-lg border border-gray-200">
                            <ui-card>
                                <ui-card-header>
                                    <ui-card-title>Card Title</ui-card-title>
                                    <ui-card-subtitle>Card subtitle or description</ui-card-subtitle>
                                </ui-card-header>
                                <ui-card-content>
                                    <p>This is the main content of the card. You can put any HTML content here.</p>
                                </ui-card-content>
                                <ui-card-footer>
                                    <ui-button>Action</ui-button>
                                </ui-card-footer>
                            </ui-card>
                            <ui-card variant="elevated">
                                <ui-card-content>
                                    <p>Elevated card with shadow effect for better visual hierarchy.</p>
                                </ui-card-content>
                            </ui-card>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Card</h2>
                <p class="mb-4 text-gray-600">Default card with header, content, and footer sections. Use <code>ui-card-header</code>, <code>ui-card-content</code>, and <code>ui-card-footer</code> for structured layout.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-card>
                        <ui-card-header>
                          <ui-card-title>Card Title</ui-card-title>
                          <ui-card-subtitle>Card subtitle or description</ui-card-subtitle>
                        </ui-card-header>
                        <ui-card-content>
                          <p>This is the main content of the card. You can put any HTML content here.</p>
                        </ui-card-content>
                        <ui-card-footer>
                          <ui-button>Action</ui-button>
                        </ui-card-footer>
                      </ui-card>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Card Variants</h2>
                <p class="mb-4 text-gray-600">Choose from different visual styles: <code>default</code>, <code>elevated</code>, <code>outlined</code>, and <code>filled</code>.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-card variant="elevated">
                        <ui-card-content>
                          <p>Elevated card with shadow</p>
                        </ui-card-content>
                      </ui-card>
                      <ui-card variant="outlined">
                        <ui-card-content>
                          <p>Outlined card with border</p>
                        </ui-card-content>
                      </ui-card>
                      <ui-card variant="filled">
                        <ui-card-content>
                          <p>Filled card with background</p>
                        </ui-card-content>
                      </ui-card>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${variantsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Card Sizes</h2>
                <p class="mb-4 text-gray-600">Use the <code>size</code> attribute to control card dimensions. Available sizes: <code>sm</code>, <code>md</code> (default), and <code>lg</code>.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-card size="sm">
                        <ui-card-content>
                          <p>Small card</p>
                        </ui-card-content>
                      </ui-card>
                      <ui-card size="md">
                        <ui-card-content>
                          <p>Medium card (default)</p>
                        </ui-card-content>
                      </ui-card>
                      <ui-card size="lg">
                        <ui-card-content>
                          <p>Large card</p>
                        </ui-card-content>
                      </ui-card>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${sizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Complete Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the card component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the card component before using it</li>
                        <li>• Use <code>ui-card-header</code> for the card title and subtitle</li>
                        <li>• Use <code>ui-card-content</code> for the main content</li>
                        <li>• Use <code>ui-card-footer</code> for actions or additional content</li>
                        <li>• Use <code>variant</code> attribute for different visual styles</li>
                        <li>• Use <code>size</code> attribute to control dimensions</li>
                        <li>• Cards can contain any HTML content</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">ui-card Attributes</h4>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">variant</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'default' | 'elevated' | 'outlined' | 'filled'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'default'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Card visual style</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">size</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'sm' | 'md' | 'lg'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'md'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Card size</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Card Sub-components</h4>
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Component</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">ui-card-header</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Container for card title and subtitle</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">ui-card-title</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Main title of the card</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">ui-card-subtitle</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Secondary text below the title</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">ui-card-content</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Main content area of the card</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">ui-card-footer</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Footer area for actions or additional content</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-card-docs-page', CardDocsPage);
export default CardDocsPage; 