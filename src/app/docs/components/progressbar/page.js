import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/ProgressBar.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class ProgressBarDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Progress Bar | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-progress-bar value="75"></ui-progress-bar>`;

        const variantsExample = `<ui-progress-bar value="60" variant="default"></ui-progress-bar>
<ui-progress-bar value="60" variant="primary"></ui-progress-bar>
<ui-progress-bar value="60" variant="success"></ui-progress-bar>
<ui-progress-bar value="60" variant="warning"></ui-progress-bar>
<ui-progress-bar value="60" variant="danger"></ui-progress-bar>`;

        const sizesExample = `<ui-progress-bar value="50" size="sm"></ui-progress-bar>
<ui-progress-bar value="50" size="md"></ui-progress-bar>
<ui-progress-bar value="50" size="lg"></ui-progress-bar>`;

        const animatedExample = `<ui-progress-bar value="75" animated="true"></ui-progress-bar>`;

        const stripedExample = `<ui-progress-bar value="80" striped="true"></ui-progress-bar>`;

        const withLabelExample = `<ui-progress-bar value="65" show-label="true"></ui-progress-bar>
<ui-progress-bar value="65" show-label="true" label-position="outside"></ui-progress-bar>`;

        const setupExample = `// Import the progress bar component
import '@/components/ui/ProgressBar.js';

class ProgressExample extends HTMLElement {
    constructor() {
        super();
        this.progress = 0;
        this.interval = null;
    }

    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h3>Upload Progress</h3>
                <ui-progress-bar 
                    value="\${this.progress}" 
                    variant="primary" 
                    animated="true"
                    show-label="true"
                ></ui-progress-bar>
                <button id="startBtn">Start Upload</button>
            </div>
        \`;
        
        // Listen for progress completion
        this.querySelector('ui-progress-bar').addEventListener('progress-complete', (event) => {
            console.log('Upload completed!', event.detail.value);
            this.stopProgress();
        });
        
        // Start button
        this.querySelector('#startBtn').addEventListener('click', () => {
            this.startProgress();
        });
    }

    startProgress() {
        this.progress = 0;
        this.interval = setInterval(() => {
            this.progress += Math.random() * 10;
            if (this.progress >= 100) {
                this.progress = 100;
                this.stopProgress();
            }
            this.querySelector('ui-progress-bar').setAttribute('value', this.progress.toString());
        }, 200);
    }

    stopProgress() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

customElements.define('ui-progress-example', ProgressExample);
export default ProgressExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Progress Bar Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A flexible progress bar component with various display options, animations, and accessibility features. 
                        Perfect for file uploads, loading states, and any progress indication.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Basic Progress</h3>
                                <ui-progress-bar value="75"></ui-progress-bar>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Animated Progress</h3>
                                <ui-progress-bar value="60" animated="true" variant="primary"></ui-progress-bar>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Progress Bar</h2>
                <p class="mb-4 text-gray-600">Simple progress bar with a default value.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-progress-bar value="75"></ui-progress-bar>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Progress Bar Variants</h2>
                <p class="mb-4 text-gray-600">Different color variants to match your design system.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Default Variant</label>
                        <ui-progress-bar value="60" variant="default"></ui-progress-bar>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Primary Variant</label>
                        <ui-progress-bar value="60" variant="primary"></ui-progress-bar>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Success Variant</label>
                        <ui-progress-bar value="60" variant="success"></ui-progress-bar>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Warning Variant</label>
                        <ui-progress-bar value="60" variant="warning"></ui-progress-bar>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Danger Variant</label>
                        <ui-progress-bar value="60" variant="danger"></ui-progress-bar>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${variantsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Progress Bar Sizes</h2>
                <p class="mb-4 text-gray-600">Choose from different size options to match your design.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Small Size</label>
                        <ui-progress-bar value="50" size="sm"></ui-progress-bar>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Medium Size</label>
                        <ui-progress-bar value="50" size="md"></ui-progress-bar>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Large Size</label>
                        <ui-progress-bar value="50" size="lg"></ui-progress-bar>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${sizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Animated Progress</h2>
                <p class="mb-4 text-gray-600">Enable smooth animations when the progress value changes.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-progress-bar value="75" animated="true"></ui-progress-bar>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${animatedExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Striped Progress Bar</h2>
                <p class="mb-4 text-gray-600">Add a striped pattern for a more dynamic appearance.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-progress-bar value="80" striped="true"></ui-progress-bar>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${stripedExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Progress with Labels</h2>
                <p class="mb-4 text-gray-600">Show percentage labels inside or outside the progress bar.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview6">Preview</ui-tab>
                    <ui-tab value="code6">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview6">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Label Inside</label>
                        <ui-progress-bar value="65" show-label="true"></ui-progress-bar>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Label Outside</label>
                        <ui-progress-bar value="65" show-label="true" label-position="outside"></ui-progress-bar>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code6">
                    <ui-codeblock language="html" code="${withLabelExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the progress bar component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the progress bar component before using it</li>
                        <li>• Use <code>value</code> attribute to set the current progress (0-100)</li>
                        <li>• Use <code>max</code> attribute to set the maximum value (default: 100)</li>
                        <li>• Use <code>variant</code> attribute for styling: default, primary, success, warning, danger</li>
                        <li>• Use <code>size</code> attribute for dimensions: sm, md, lg</li>
                        <li>• Use <code>animated="true"</code> for smooth progress animations</li>
                        <li>• Use <code>striped="true"</code> for animated striped pattern</li>
                        <li>• Use <code>show-label="true"</code> to display percentage</li>
                        <li>• Use <code>label-position</code> to position label: inside, outside</li>
                        <li>• Listen for <code>progress-complete</code> event when progress reaches 100%</li>
                        <li>• Progress bar is fully accessible with ARIA attributes</li>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">value</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Current progress value (0-100)</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">max</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Maximum progress value</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">default</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Style variant: default, primary, success, warning, danger</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">md</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Progress bar size: sm, md, lg</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">animated</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable smooth progress animation</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">striped</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Show animated striped pattern</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">show-label</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Show percentage label</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label-position</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">inside</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Label position: inside, outside</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">progress-complete</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when progress reaches 100% (detail: { value: number })</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">getPercentage()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Get the current progress percentage</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-progressbar-docs-page', ProgressBarDocsPage);
export default ProgressBarDocsPage; 