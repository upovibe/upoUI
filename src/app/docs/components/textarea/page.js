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

        const floatingLabelExample = `<ui-textarea floating-label placeholder="Your Message"></ui-textarea>
<ui-textarea floating-label placeholder="Email Address" variant="primary"></ui-textarea>
<ui-textarea floating-label placeholder="Description" size="lg"></ui-textarea>`;

        const floatingLabelWithErrorExample = `<ui-textarea 
  floating-label 
  placeholder="Required Field" 
  variant="error" 
  error="This field is required"
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
                    floating-label
                    placeholder="Your Message"
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
                                <h3 class="text-sm font-medium text-gray-700">Floating Label</h3>
                                <ui-textarea floating-label placeholder="Your Message"></ui-textarea>
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

                <h2 class="text-xl font-semibold mt-8 mb-4">Floating Label</h2>
                <p class="mb-4 text-gray-600">Modern floating label that animates above the textarea when focused or has content.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea floating-label placeholder="Your Message"></ui-textarea>
                      <ui-textarea floating-label placeholder="Email Address" variant="primary"></ui-textarea>
                      <ui-textarea floating-label placeholder="Description" size="lg"></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${floatingLabelExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Floating Label with Error</h2>
                <p class="mb-4 text-gray-600">Floating label with error state and validation message.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea floating-label="Required Field" variant="error" error="This field is required"></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${floatingLabelWithErrorExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Textarea Variants</h2>
                <p class="mb-4 text-gray-600">Different color variants to match your design system and convey different states.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea placeholder="Default variant"></ui-textarea>
                      <ui-textarea variant="primary" placeholder="Primary variant"></ui-textarea>
                      <ui-textarea variant="success" placeholder="Success variant"></ui-textarea>
                      <ui-textarea variant="warning" placeholder="Warning variant"></ui-textarea>
                      <ui-textarea variant="error" error="This field is required" placeholder="Error variant"></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${variantsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Textarea Sizes</h2>
                <p class="mb-4 text-gray-600">Control the size of the textarea with different size options.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview6">Preview</ui-tab>
                    <ui-tab value="code6">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview6">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea size="sm" placeholder="Small size"></ui-textarea>
                      <ui-textarea size="md" placeholder="Medium size (default)"></ui-textarea>
                      <ui-textarea size="lg" placeholder="Large size"></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code6">
                    <ui-codeblock language="html" code="${sizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Character Count</h2>
                <p class="mb-4 text-gray-600">Show character count with optional maximum length validation.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview7">Preview</ui-tab>
                    <ui-tab value="code7">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview7">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea placeholder="Enter your message" maxlength="100" show-count></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code7">
                    <ui-codeblock language="html" code="${withCountExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Auto-Resize</h2>
                <p class="mb-4 text-gray-600">Textarea that automatically adjusts its height based on content.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview8">Preview</ui-tab>
                    <ui-tab value="code8">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview8">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea placeholder="This textarea auto-resizes" auto-resize></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code8">
                    <ui-codeblock language="html" code="${autoResizeExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Textarea States</h2>
                <p class="mb-4 text-gray-600">Different states for various use cases.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview9">Preview</ui-tab>
                    <ui-tab value="code9">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview9">
                    <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-textarea placeholder="Normal state"></ui-textarea>
                      <ui-textarea placeholder="Disabled state" disabled></ui-textarea>
                      <ui-textarea value="Read-only content" readonly></ui-textarea>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code9">
                    <ui-codeblock language="html" code="${statesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the textarea component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <h2 class="text-xl font-semibold mt-8 mb-4">Key Points</h2>
                <div class="space-y-4">
                  <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <i class="fas fa-edit text-blue-400"></i>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-blue-800">Text Input</h3>
                        <div class="mt-2 text-sm text-blue-700">
                          <p>Multi-line text input with support for placeholders, labels, and floating labels. Includes character counting, auto-resize, and validation features.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-green-50 border-l-4 border-green-400 p-4">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <i class="fas fa-palette text-green-400"></i>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-green-800">Styling Options</h3>
                        <div class="mt-2 text-sm text-green-700">
                          <p>Multiple variants (default, primary, secondary, success, warning, error) and sizes (sm, md, lg). Floating label animation for modern UI design.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <i class="fas fa-cogs text-purple-400"></i>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-purple-800">Advanced Features</h3>
                        <div class="mt-2 text-sm text-purple-700">
                          <p>Character counting with maxlength and show-count attributes. Auto-resize functionality for dynamic height adjustment. Comprehensive validation and error handling.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-orange-50 border-l-4 border-orange-400 p-4">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <i class="fas fa-universal-access text-orange-400"></i>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-orange-800">Accessibility</h3>
                        <div class="mt-2 text-sm text-orange-700">
                          <p>Built-in accessibility features with proper ARIA labels, keyboard navigation, and screen reader support. Disabled and readonly states for different use cases.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">placeholder</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Hint text displayed when textarea is empty</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">value</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">''</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Initial value of the textarea</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">label</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Label text displayed above the textarea</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">floating-label</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Floating label that animates above the textarea</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">variant</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">default</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Style variant: default, primary, secondary, success, warning, error</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">size</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">md</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Size variant: sm, md, lg</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">maxlength</td>
                            <td class="px-4 py-2 text-sm text-gray-600">number</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Maximum number of characters allowed</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">error</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Error message to display</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">disabled</td>
                            <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                            <td class="px-4 py-2 text-sm text-gray-600">false</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Disables the textarea</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">readonly</td>
                            <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                            <td class="px-4 py-2 text-sm text-gray-600">false</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Makes the textarea read-only</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">show-count</td>
                            <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                            <td class="px-4 py-2 text-sm text-gray-600">false</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Shows character count</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">auto-resize</td>
                            <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                            <td class="px-4 py-2 text-sm text-gray-600">false</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Automatically adjusts height based on content</td>
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
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">getValue()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Get the current value</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">setValue(value)</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Set the textarea value</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">focus()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Focus the textarea</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">blur()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Remove focus from the textarea</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">setError(message)</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Set an error message</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">clearError()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Clear the error message</td>
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
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">input</td>
                            <td class="px-4 py-2 text-sm text-gray-600">{ value: string }</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Fired when the value changes</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">change</td>
                            <td class="px-4 py-2 text-sm text-gray-600">{ value: string }</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Fired when the value changes and loses focus</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">focus</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Fired when the textarea gains focus</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">blur</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Fired when the textarea loses focus</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-textarea-docs-page', TextareaDocsPage);
export default TextareaDocsPage; 