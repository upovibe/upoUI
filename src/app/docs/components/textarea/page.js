import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Textarea.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class TextareaDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Textarea | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-textarea placeholder="Enter your message"></ui-textarea>`;

        const withLabelExample = `<ui-textarea 
  label="Message" 
  placeholder="Enter your message here..."
></ui-textarea>`;

        const variantsExample = `<ui-textarea placeholder="Default variant"></ui-textarea>
<ui-textarea variant="primary" placeholder="Primary variant"></ui-textarea>
<ui-textarea variant="success" placeholder="Success variant"></ui-textarea>
<ui-textarea variant="warning" placeholder="Warning variant"></ui-textarea>
<ui-textarea variant="error" error="This field is required" placeholder="Error variant"></ui-textarea>`;

        const sizesExample = `<ui-textarea size="sm" placeholder="Small size"></ui-textarea>
<ui-textarea size="md" placeholder="Medium size (default)"></ui-textarea>
<ui-textarea size="lg" placeholder="Large size"></ui-textarea>`;

        const withCountExample = `<ui-textarea 
  placeholder="Enter your message" 
  maxlength="100" 
  show-count
></ui-textarea>`;

        const autoResizeExample = `<ui-textarea 
  placeholder="This textarea auto-resizes" 
  auto-resize
></ui-textarea>`;

        const statesExample = `<ui-textarea placeholder="Normal state"></ui-textarea>
<ui-textarea placeholder="Disabled state" disabled></ui-textarea>
<ui-textarea value="Read-only content" readonly></ui-textarea>`;

        const setupExample = `// Import the textarea component
import '@/components/ui/Textarea.js';

class TextareaExample extends HTMLElement {
    constructor() {
        super();
        this.message = '';
    }

    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h3>Contact Form</h3>
                <ui-textarea 
                    id="message-textarea"
                    label="Your Message"
                    placeholder="Enter your message here..."
                    maxlength="500"
                    show-count
                ></ui-textarea>
                <button id="submit-btn">Submit</button>
                <p id="char-count"></p>
            </div>
        \`;
        
        // Add event listeners
        const textarea = this.querySelector('#message-textarea');
        const submitBtn = this.querySelector('#submit-btn');
        const charCount = this.querySelector('#char-count');
        
        textarea.addEventListener('input', (e) => {
            this.message = e.detail.value;
            charCount.textContent = \`Message: \${this.message}\`;
        });
        
        submitBtn.addEventListener('click', () => {
            if (this.message.trim()) {
                console.log('Message submitted:', this.message);
                alert('Message submitted!');
            } else {
                textarea.setError('Message is required');
            }
        });
    }
}

customElements.define('ui-textarea-example', TextareaExample);
export default TextareaExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Textarea Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A flexible textarea component for multi-line text input with various styling options, 
                        validation support, and accessibility features. Perfect for forms, comments, and any 
                        multi-line text input needs.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Basic Textarea</h3>
                                <ui-textarea placeholder="Enter your message"></ui-textarea>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">With Character Count</h3>
                                <ui-textarea placeholder="Type here..." maxlength="50" show-count></ui-textarea>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Textarea</h2>
                <p class="mb-4 text-gray-600">Simple textarea with placeholder text.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea placeholder="Enter your message"></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">With Label</h2>
                <p class="mb-4 text-gray-600">Textarea with a descriptive label for better accessibility.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea label="Message" placeholder="Enter your message here..."></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${withLabelExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Textarea Variants</h2>
                <p class="mb-4 text-gray-600">Different color variants to match your design system and convey different states.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea placeholder="Default variant"></ui-textarea>
                      <ui-textarea variant="primary" placeholder="Primary variant"></ui-textarea>
                      <ui-textarea variant="success" placeholder="Success variant"></ui-textarea>
                      <ui-textarea variant="warning" placeholder="Warning variant"></ui-textarea>
                      <ui-textarea variant="error" error="This field is required" placeholder="Error variant"></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${variantsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Textarea Sizes</h2>
                <p class="mb-4 text-gray-600">Control the size of the textarea with different size options.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea size="sm" placeholder="Small size"></ui-textarea>
                      <ui-textarea size="md" placeholder="Medium size (default)"></ui-textarea>
                      <ui-textarea size="lg" placeholder="Large size"></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${sizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Character Count</h2>
                <p class="mb-4 text-gray-600">Show character count with optional maximum length validation.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea placeholder="Enter your message" maxlength="100" show-count></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${withCountExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Auto-Resize</h2>
                <p class="mb-4 text-gray-600">Textarea that automatically adjusts its height based on content.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview6">Preview</ui-tab>
                    <ui-tab value="code6">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview6">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea placeholder="This textarea auto-resizes" auto-resize></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code6">
                    <ui-codeblock language="html" code="${autoResizeExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Textarea States</h2>
                <p class="mb-4 text-gray-600">Different states for various use cases.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview7">Preview</ui-tab>
                    <ui-tab value="code7">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview7">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea placeholder="Normal state"></ui-textarea>
                      <ui-textarea placeholder="Disabled state" disabled></ui-textarea>
                      <ui-textarea value="Read-only content" readonly></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code7">
                    <ui-codeblock language="html" code="${statesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the textarea component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the textarea component before using it</li>
                        <li>• Use <code>placeholder</code> attribute for hint text</li>
                        <li>• Use <code>label</code> attribute for accessibility</li>
                        <li>• Use <code>variant</code> attribute for different styles (default, primary, secondary, success, warning, error)</li>
                        <li>• Use <code>size</code> attribute to control dimensions (sm, md, lg)</li>
                        <li>• Use <code>maxlength</code> and <code>show-count</code> for character counting</li>
                        <li>• Use <code>auto-resize</code> for dynamic height adjustment</li>
                        <li>• Use <code>error</code> attribute to show validation messages</li>
                        <li>• Add <code>disabled</code> or <code>readonly</code> attributes for different states</li>
                        <li>• Listen for <code>input</code>, <code>change</code>, <code>focus</code>, and <code>blur</code> events</li>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Hint text displayed when textarea is empty</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">value</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">''</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Initial value of the textarea</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Label text displayed above the textarea</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">default</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Style variant: default, primary, secondary, success, warning, error</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">md</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Size variant: sm, md, lg</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">maxlength</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Maximum number of characters allowed</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">error</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Error message to display</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Disables the textarea</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">readonly</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Makes the textarea read-only</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">show-count</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Shows character count</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">auto-resize</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Automatically adjusts height based on content</td>
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
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detail</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">input</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ value: string }</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the value changes</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">change</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ value: string }</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the value changes and loses focus</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">focus</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the textarea gains focus</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">blur</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the textarea loses focus</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">getValue()</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Get the current value</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">setValue(value)</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">void</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Set the textarea value</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">focus()</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">void</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Focus the textarea</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">blur()</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">void</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Remove focus from the textarea</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">setError(message)</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">void</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Set an error message</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">clearError()</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">void</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Clear the error message</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-textarea-docs-page', TextareaDocsPage);
export default TextareaDocsPage; 