import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Tooltip.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class TooltipDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Tooltip | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-tooltip content="This is a simple tooltip">
  <button class="px-4 py-2 bg-blue-500 text-white rounded">Hover me</button>
</ui-tooltip>`;

        const positionsExample = `<ui-tooltip content="Top tooltip" position="top">
  <button class="px-4 py-2 bg-blue-500 text-white rounded">Top</button>
</ui-tooltip>

<ui-tooltip content="Bottom tooltip" position="bottom">
  <button class="px-4 py-2 bg-blue-500 text-white rounded">Bottom</button>
</ui-tooltip>

<ui-tooltip content="Left tooltip" position="left">
  <button class="px-4 py-2 bg-blue-500 text-white rounded">Left</button>
</ui-tooltip>

<ui-tooltip content="Right tooltip" position="right">
  <button class="px-4 py-2 bg-blue-500 text-white rounded">Right</button>
</ui-tooltip>`;

        const variantsExample = `<ui-tooltip content="Default tooltip">
  <button class="px-4 py-2 bg-gray-500 text-white rounded">Default</button>
</ui-tooltip>

<ui-tooltip content="Primary tooltip" variant="primary">
  <button class="px-4 py-2 bg-blue-500 text-white rounded">Primary</button>
</ui-tooltip>

<ui-tooltip content="Success tooltip" variant="success">
  <button class="px-4 py-2 bg-green-500 text-white rounded">Success</button>
</ui-tooltip>

<ui-tooltip content="Warning tooltip" variant="warning">
  <button class="px-4 py-2 bg-yellow-500 text-white rounded">Warning</button>
</ui-tooltip>

<ui-tooltip content="Error tooltip" variant="error">
  <button class="px-4 py-2 bg-red-500 text-white rounded">Error</button>
</ui-tooltip>

<ui-tooltip content="Info tooltip" variant="info">
  <button class="px-4 py-2 bg-cyan-500 text-white rounded">Info</button>
</ui-tooltip>`;

        const triggersExample = `<ui-tooltip content="Hover tooltip" trigger="hover">
  <button class="px-4 py-2 bg-blue-500 text-white rounded">Hover</button>
</ui-tooltip>

<ui-tooltip content="Click tooltip" trigger="click">
  <button class="px-4 py-2 bg-green-500 text-white rounded">Click</button>
</ui-tooltip>

<ui-tooltip content="Focus tooltip" trigger="focus">
  <button class="px-4 py-2 bg-purple-500 text-white rounded">Focus</button>
</ui-tooltip>`;

        const withArrowExample = `<!-- Arrow functionality has been removed for simplicity -->`;

        const richContentExample = `<ui-tooltip content="<strong>Bold text</strong> and <em>italic text</em> with <span style='color: #10b981;'>custom styling</span>">
  <button class="px-4 py-2 bg-blue-500 text-white rounded">Rich Content</button>
</ui-tooltip>`;

        const setupExample = `// Import the tooltip component
import '@/components/ui/Tooltip.js';

class TooltipExample extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = \`
            <div class="space-y-4">
                <h3>Interactive Tooltips</h3>
                
                <ui-tooltip content="This tooltip shows on hover" trigger="hover">
                    <button class="px-4 py-2 bg-blue-500 text-white rounded">
                        Hover Tooltip
                    </button>
                </ui-tooltip>
                
                <ui-tooltip content="This tooltip shows on click" trigger="click">
                    <button class="px-4 py-2 bg-green-500 text-white rounded">
                        Click Tooltip
                    </button>
                </ui-tooltip>
                
                <ui-tooltip content="This tooltip shows on focus" trigger="focus">
                    <button class="px-4 py-2 bg-purple-500 text-white rounded">
                        Focus Tooltip
                    </button>
                </ui-tooltip>
                
                <div class="mt-4">
                    <button id="manual-tooltip" class="px-4 py-2 bg-orange-500 text-white rounded">
                        Manual Tooltip
                    </button>
                    <ui-tooltip id="manual" content="This tooltip is controlled manually" trigger="manual">
                        <div></div>
                    </ui-tooltip>
                </div>
            </div>
        \`;
        
        // Add event listeners for manual tooltip
        const manualBtn = this.querySelector('#manual-tooltip');
        const manualTooltip = this.querySelector('#manual');
        
        manualBtn.addEventListener('click', () => {
            manualTooltip.toggle();
        });
        
        // Listen for tooltip events
        this.addEventListener('tooltip-show', (e) => {
            console.log('Tooltip shown:', e.target);
        });
        
        this.addEventListener('tooltip-hide', (e) => {
            console.log('Tooltip hidden:', e.target);
        });
    }
}

customElements.define('ui-tooltip-example', TooltipExample);
export default TooltipExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Tooltip Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A flexible tooltip component that provides contextual information when hovering, 
                        clicking, or focusing on elements. Supports multiple positions, triggers, and styling variants.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Basic Tooltip</h3>
                                <ui-tooltip content="This is a simple tooltip">
                                    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Hover me</button>
                                </ui-tooltip>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Click Tooltip</h3>
                                <ui-tooltip content="This tooltip shows on click" trigger="click">
                                    <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Click me</button>
                                </ui-tooltip>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Rich Content</h3>
                                <ui-tooltip content="<strong>Bold</strong> and <em>italic</em> text">
                                    <button class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Rich Content</button>
                                </ui-tooltip>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Tooltip</h2>
                <p class="mb-4 text-gray-600">Simple tooltip that appears on hover.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-tooltip content="This is a simple tooltip">
                        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Hover me</button>
                      </ui-tooltip>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Positions</h2>
                <p class="mb-4 text-gray-600">Tooltips can be positioned around the trigger element in various directions.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <div class="grid grid-cols-2 gap-4">
                        <div class="flex justify-center">
                          <ui-tooltip content="Top tooltip" position="top">
                            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Top</button>
                          </ui-tooltip>
                        </div>
                        <div class="flex justify-center">
                          <ui-tooltip content="Bottom tooltip" position="bottom">
                            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Bottom</button>
                          </ui-tooltip>
                        </div>
                        <div class="flex justify-center">
                          <ui-tooltip content="Left tooltip" position="left">
                            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Left</button>
                          </ui-tooltip>
                        </div>
                        <div class="flex justify-center">
                          <ui-tooltip content="Right tooltip" position="right">
                            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Right</button>
                          </ui-tooltip>
                        </div>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${positionsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Variants</h2>
                <p class="mb-4 text-gray-600">Different color variants for various use cases and contexts.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <ui-tooltip content="Default tooltip">
                          <button class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Default</button>
                        </ui-tooltip>
                        <ui-tooltip content="Primary tooltip" variant="primary">
                          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Primary</button>
                        </ui-tooltip>
                        <ui-tooltip content="Success tooltip" variant="success">
                          <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Success</button>
                        </ui-tooltip>
                        <ui-tooltip content="Warning tooltip" variant="warning">
                          <button class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Warning</button>
                        </ui-tooltip>
                        <ui-tooltip content="Error tooltip" variant="error">
                          <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Error</button>
                        </ui-tooltip>
                        <ui-tooltip content="Info tooltip" variant="info">
                          <button class="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">Info</button>
                        </ui-tooltip>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${variantsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Triggers</h2>
                <p class="mb-4 text-gray-600">Different ways to trigger tooltip display.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <div class="grid grid-cols-3 gap-4">
                        <ui-tooltip content="Hover tooltip" trigger="hover">
                          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Hover</button>
                        </ui-tooltip>
                        <ui-tooltip content="Click tooltip" trigger="click">
                          <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Click</button>
                        </ui-tooltip>
                        <ui-tooltip content="Focus tooltip" trigger="focus">
                          <button class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Focus</button>
                        </ui-tooltip>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${triggersExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>



                <h2 class="text-xl font-semibold mt-8 mb-4">Rich Content</h2>
                <p class="mb-4 text-gray-600">Tooltips support HTML content for rich formatting.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview6">Preview</ui-tab>
                    <ui-tab value="code6">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview6">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-tooltip content="<strong>Bold text</strong> and <em>italic text</em> with <span style='color: #10b981;'>custom styling</span>">
                        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Rich Content</button>
                      </ui-tooltip>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code6">
                    <ui-codeblock language="html" code="${richContentExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">How to integrate tooltips into your application.</p>
                
                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">How to integrate tooltips into your application.</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the tooltip component before using it</li>
                        <li>• Use <code>content</code> attribute for tooltip text (supports HTML)</li>
                        <li>• Use <code>position</code> attribute for placement (top, bottom, left, right, etc.)</li>
                        <li>• Use <code>trigger</code> attribute for interaction (hover, click, focus, manual)</li>
                        <li>• Use <code>variant</code> attribute for different styles (default, primary, success, warning, error, info)</li>
                        <li>• Use <code>delay</code> and <code>duration</code> for timing control</li>
                        <li>• Use <code>max-width</code> attribute to control tooltip width</li>
                        <li>• Tooltips are fully accessible with proper ARIA attributes</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">Attributes</h4>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">content</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">''</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Tooltip content (supports HTML)</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">position</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'top'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Position: top, bottom, left, right, top-start, top-end, etc.</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">trigger</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'hover'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Trigger: hover, click, focus, manual</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">variant</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'default'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Style variant: default, primary, success, warning, error, info</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">delay</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">number</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">200</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Delay before showing tooltip (ms)</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">duration</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">number</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">300</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Animation duration (ms)</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">max-width</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'200px'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Maximum width of tooltip</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">disabled</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Disable tooltip functionality</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Methods</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Method</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Parameters</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">show()</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">-</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Show the tooltip</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">hide()</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">-</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Hide the tooltip</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">toggle()</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">-</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Toggle tooltip visibility</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">setContent(content)</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Update tooltip content</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">setPosition(position)</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Update tooltip position</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">setVariant(variant)</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Update tooltip variant</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">enable()</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">-</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Enable tooltip functionality</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">disable()</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">-</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Disable tooltip functionality</td>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">tooltip-show</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">-</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when tooltip becomes visible</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">tooltip-hide</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">-</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when tooltip becomes hidden</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



                <h2 class="text-xl font-semibold mt-8 mb-4">API Reference</h2>
                <div class="space-y-6">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Attributes</h3>
                    <div class="overflow-x-auto">
                      <table class="min-w-full border border-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                            <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Attribute</th>
                            <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Type</th>
                            <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Default</th>
                            <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Description</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">content</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">''</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Tooltip content (supports HTML)</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">position</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">'top'</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Position: top, bottom, left, right, top-start, top-end, etc.</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">trigger</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">'hover'</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Trigger: hover, click, focus, manual</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">variant</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">'default'</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Style variant: default, primary, success, warning, error, info</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">delay</td>
                            <td class="px-4 py-2 text-sm text-gray-600">number</td>
                            <td class="px-4 py-2 text-sm text-gray-600">200</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Delay before showing tooltip (ms)</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">duration</td>
                            <td class="px-4 py-2 text-sm text-gray-600">number</td>
                            <td class="px-4 py-2 text-sm text-gray-600">300</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Animation duration (ms)</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">max-width</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">'200px'</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Maximum width of tooltip</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">disabled</td>
                            <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                            <td class="px-4 py-2 text-sm text-gray-600">false</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Disable tooltip functionality</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Methods</h3>
                    <div class="overflow-x-auto">
                      <table class="min-w-full border border-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                            <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Method</th>
                            <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Parameters</th>
                            <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Description</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">show()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Show the tooltip</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">hide()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Hide the tooltip</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">toggle()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Toggle tooltip visibility</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">setContent(content)</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Update tooltip content</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">setPosition(position)</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Update tooltip position</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">setVariant(variant)</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Update tooltip variant</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">enable()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Enable tooltip functionality</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">disable()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Disable tooltip functionality</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Events</h3>
                    <div class="overflow-x-auto">
                      <table class="min-w-full border border-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                            <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Event</th>
                            <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Detail</th>
                            <th class="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">Description</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">tooltip-show</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Fired when tooltip becomes visible</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">tooltip-hide</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Fired when tooltip becomes hidden</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-tooltip-docs-page', TooltipDocsPage);
export default TooltipDocsPage; 