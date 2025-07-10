import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Dialog.js';
import '@/components/ui/Button.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class DialogDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Dialog Component | UPO UI';
        
        // Set up event listeners for the live examples
        setTimeout(() => {
            this.setupDialogExamples();
        }, 100);
    }

    render() {
        const basicExample = `<ui-dialog id="basic-dialog" title="Basic Dialog">
    <div slot="content">
        <p>This is a basic dialog with default content and footer buttons.</p>
        <p>You can customize the content using the <code>content</code> slot.</p>
    </div>
</ui-dialog>

<ui-button onclick="document.getElementById('basic-dialog').open()">Open Dialog</ui-button>`;

        const customFooterExample = `<ui-dialog id="custom-footer-dialog" title="Custom Footer">
    <div slot="content">
        <p>This dialog has a custom footer with different buttons.</p>
        <p>Use the <code>footer</code> slot to customize the footer content.</p>
    </div>
    <div slot="footer">
        <ui-button class="secondary">Save Draft</ui-button>
        <ui-button class="primary">Publish</ui-button>
    </div>
</ui-dialog>

<ui-button onclick="document.getElementById('custom-footer-dialog').open()">Open Custom Footer</ui-button>`;

        const confirmationExample = `<ui-dialog id="confirm-dialog" title="Confirm Action">
    <div slot="content">
        <p>Are you sure you want to delete this item?</p>
        <p>This action cannot be undone.</p>
    </div>
    <div slot="footer">
        <ui-button class="secondary" onclick="document.getElementById('confirm-dialog').close()">Cancel</ui-button>
        <ui-button class="danger" onclick="handleDelete()">Delete</ui-button>
    </div>
</ui-dialog>

<ui-button onclick="document.getElementById('confirm-dialog').open()">Delete Item</ui-button>`;

        const formExample = `<ui-dialog id="form-dialog" title="User Information">
    <div slot="content">
        <form id="user-form">
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your name">
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your email">
            </div>
        </form>
    </div>
    <div slot="footer">
        <ui-button class="secondary" onclick="document.getElementById('form-dialog').close()">Cancel</ui-button>
        <ui-button class="primary" onclick="handleSubmit()">Save</ui-button>
    </div>
</ui-dialog>

<ui-button onclick="document.getElementById('form-dialog').open()">Add User</ui-button>`;

        const apiExample = `// Open dialog programmatically
const dialog = document.getElementById('my-dialog');
dialog.open();

// Close dialog programmatically
dialog.close();

// Listen for dialog events
dialog.addEventListener('dialog-open', () => {
    console.log('Dialog opened');
});

dialog.addEventListener('dialog-close', () => {
    console.log('Dialog closed');
});

dialog.addEventListener('confirm', () => {
    console.log('Confirm button clicked');
});

dialog.addEventListener('cancel', () => {
    console.log('Cancel button clicked');
});

// Set dialog title
dialog.setAttribute('title', 'New Title');

// Check if dialog is open
if (dialog.hasAttribute('open')) {
    console.log('Dialog is open');
}`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Dialog Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A modal dialog component with header, content, and footer sections. 
                        Perfect for confirmations, forms, and content overlays.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <ui-button onclick="document.getElementById('live-basic-dialog').open()">Basic Dialog</ui-button>
                            <ui-button onclick="document.getElementById('live-custom-footer-dialog').open()">Custom Footer</ui-button>
                            <ui-button onclick="document.getElementById('live-confirm-dialog').open()">Confirmation</ui-button>
                            <ui-button onclick="document.getElementById('live-form-dialog').open()">Form Dialog</ui-button>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Dialog</h2>
                <p class="mb-4 text-gray-600">A simple dialog with default content and footer buttons.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <ui-button onclick="document.getElementById('demo-basic-dialog').open()">Open Basic Dialog</ui-button>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Custom Footer</h2>
                <p class="mb-4 text-gray-600">Customize the footer with your own buttons and content.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <ui-button onclick="document.getElementById('demo-custom-footer-dialog').open()">Open Custom Footer</ui-button>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${customFooterExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Confirmation Dialog</h2>
                <p class="mb-4 text-gray-600">Use for confirming destructive actions or important decisions.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <ui-button onclick="document.getElementById('demo-confirm-dialog').open()">Delete Item</ui-button>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${confirmationExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Form Dialog</h2>
                <p class="mb-4 text-gray-600">Perfect for collecting user input in a modal context.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <ui-button onclick="document.getElementById('demo-form-dialog').open()">Add User</ui-button>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${formExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">API Reference</h2>
                <p class="mb-4 text-gray-600">Learn how to programmatically control the dialog component.</p>
                
                <ui-codeblock language="javascript" code="${apiExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Features</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Modal overlay with backdrop blur</li>
                        <li>• Smooth open/close animations</li>
                        <li>• Close on overlay click or Escape key</li>
                        <li>• Customizable header, content, and footer</li>
                        <li>• Responsive design for mobile devices</li>
                        <li>• Accessible with proper ARIA labels</li>
                        <li>• Event-driven API for easy integration</li>
                    </ul>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Attributes</h2>
                <div class="overflow-x-auto">
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
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">open</td>
                                <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Controls dialog visibility</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">title</td>
                                <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                <td class="px-4 py-2 text-sm text-gray-600">"Dialog"</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Sets the header title</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Slots</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Slot</th>
                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">content</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Main dialog content area</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">footer</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Footer area for buttons and actions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Events</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Event</th>
                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">dialog-open</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Fired when dialog opens</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">dialog-close</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Fired when dialog closes</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">confirm</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Fired when default confirm button is clicked</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm font-mono text-gray-900">cancel</td>
                                <td class="px-4 py-2 text-sm text-gray-600">Fired when default cancel button is clicked</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- Live Dialog Examples -->
            <ui-dialog id="live-basic-dialog" title="Basic Dialog">
                <div slot="content">
                    <p>This is a basic dialog with default content and footer buttons.</p>
                    <p>You can customize the content using the <code>content</code> slot.</p>
                </div>
            </ui-dialog>
            
            <ui-dialog id="live-custom-footer-dialog" title="Custom Footer">
                <div slot="content">
                    <p>This dialog has a custom footer with different buttons.</p>
                    <p>Use the <code>footer</code> slot to customize the footer content.</p>
                </div>
                <div slot="footer">
                    <ui-button class="secondary">Save Draft</ui-button>
                    <ui-button class="primary">Publish</ui-button>
                </div>
            </ui-dialog>
            
            <ui-dialog id="live-confirm-dialog" title="Confirm Action">
                <div slot="content">
                    <p>Are you sure you want to delete this item?</p>
                    <p>This action cannot be undone.</p>
                </div>
                <div slot="footer">
                    <ui-button class="secondary" onclick="document.getElementById('live-confirm-dialog').close()">Cancel</ui-button>
                    <ui-button class="danger">Delete</ui-button>
                </div>
            </ui-dialog>
            
            <ui-dialog id="live-form-dialog" title="User Information">
                <div slot="content">
                    <form>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your name">
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your email">
                        </div>
                    </form>
                </div>
                <div slot="footer">
                    <ui-button class="secondary" onclick="document.getElementById('live-form-dialog').close()">Cancel</ui-button>
                    <ui-button class="primary">Save</ui-button>
                </div>
            </ui-dialog>
            
            <!-- Demo Dialog Examples -->
            <ui-dialog id="demo-basic-dialog" title="Basic Dialog">
                <div slot="content">
                    <p>This is a basic dialog with default content and footer buttons.</p>
                    <p>You can customize the content using the <code>content</code> slot.</p>
                </div>
            </ui-dialog>
            
            <ui-dialog id="demo-custom-footer-dialog" title="Custom Footer">
                <div slot="content">
                    <p>This dialog has a custom footer with different buttons.</p>
                    <p>Use the <code>footer</code> slot to customize the footer content.</p>
                </div>
                <div slot="footer">
                    <ui-button class="secondary">Save Draft</ui-button>
                    <ui-button class="primary">Publish</ui-button>
                </div>
            </ui-dialog>
            
            <ui-dialog id="demo-confirm-dialog" title="Confirm Action">
                <div slot="content">
                    <p>Are you sure you want to delete this item?</p>
                    <p>This action cannot be undone.</p>
                </div>
                <div slot="footer">
                    <ui-button class="secondary" onclick="document.getElementById('demo-confirm-dialog').close()">Cancel</ui-button>
                    <ui-button class="danger">Delete</ui-button>
                </div>
            </ui-dialog>
            
            <ui-dialog id="demo-form-dialog" title="User Information">
                <div slot="content">
                    <form>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your name">
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your email">
                        </div>
                    </form>
                </div>
                <div slot="footer">
                    <ui-button class="secondary" onclick="document.getElementById('demo-form-dialog').close()">Cancel</ui-button>
                    <ui-button class="primary">Save</ui-button>
                </div>
            </ui-dialog>
        `;
    }

    setupDialogExamples() {
        // Add event listeners for dialog examples
        const dialogs = document.querySelectorAll('ui-dialog');
        dialogs.forEach(dialog => {
            dialog.addEventListener('dialog-open', () => {
                console.log('Dialog opened:', dialog.id);
            });
            
            dialog.addEventListener('dialog-close', () => {
                console.log('Dialog closed:', dialog.id);
            });
            
            dialog.addEventListener('confirm', () => {
                console.log('Confirm clicked on:', dialog.id);
            });
            
            dialog.addEventListener('cancel', () => {
                console.log('Cancel clicked on:', dialog.id);
            });
        });
    }
}

customElements.define('app-dialog-docs-page', DialogDocsPage);
export default DialogDocsPage; 