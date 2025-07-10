import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Modal.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';
import '@/components/ui/Button.js';

class ModalDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Modal | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-modal open position="right" size="md">
  <div slot="title">Basic Modal</div>
  <div>
    <p>This is a basic modal that slides in from the right.</p>
    <p>It includes a header, content area, and footer.</p>
  </div>
  <div slot="footer">
    <ui-button variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Cancel</ui-button>
    <ui-button variant="primary">Save</ui-button>
  </div>
</ui-modal>`;

        const positionsExample = `<!-- Left Position -->
<ui-modal open position="left" size="md">
  <div slot="title">Left Modal</div>
  <div>Content slides in from the left</div>
</ui-modal>

<!-- Right Position -->
<ui-modal open position="right" size="md">
  <div slot="title">Right Modal</div>
  <div>Content slides in from the right</div>
</ui-modal>

<!-- Top Position -->
<ui-modal open position="top" size="md">
  <div slot="title">Top Modal</div>
  <div>Content slides in from the top</div>
</ui-modal>

<!-- Bottom Position -->
<ui-modal open position="bottom" size="md">
  <div slot="title">Bottom Modal</div>
  <div>Content slides in from the bottom</div>
</ui-modal>`;

        const sizesExample = `<!-- Small Size -->
<ui-modal open position="right" size="sm">
  <div slot="title">Small Modal</div>
  <div>300px width</div>
</ui-modal>

<!-- Medium Size -->
<ui-modal open position="right" size="md">
  <div slot="title">Medium Modal</div>
  <div>400px width</div>
</ui-modal>

<!-- Large Size -->
<ui-modal open position="right" size="lg">
  <div slot="title">Large Modal</div>
  <div>500px width</div>
</ui-modal>

<!-- Extra Large Size -->
<ui-modal open position="right" size="xl">
  <div slot="title">Extra Large Modal</div>
  <div>600px width</div>
</ui-modal>

<!-- Full Size -->
<ui-modal open position="right" size="full">
  <div slot="title">Full Width Modal</div>
  <div>100% width</div>
</ui-modal>`;

        const optionsExample = `<!-- No Backdrop -->
<ui-modal open position="right" backdrop="false">
  <div slot="title">No Backdrop</div>
  <div>Modal without backdrop</div>
</ui-modal>

<!-- No Close Button -->
<ui-modal open position="right" close-button="false">
  <div slot="title">No Close Button</div>
  <div>Modal without close button</div>
</ui-modal>

<!-- No Escape Key -->
<ui-modal open position="right" close-on-escape="false">
  <div slot="title">No Escape Key</div>
  <div>Modal that doesn't close on escape</div>
</ui-modal>

<!-- No Backdrop Click -->
<ui-modal open position="right" close-on-backdrop-click="false">
  <div slot="title">No Backdrop Click</div>
  <div>Modal that doesn't close on backdrop click</div>
</ui-modal>`;

        const setupExample = `// Import the modal component
import '@/components/ui/Modal.js';
import '@/components/ui/Button.js';

class ModalExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <ui-button onclick="this.nextElementSibling.setAttribute('open', '')">
                Open Modal
            </ui-button>
            
            <ui-modal position="right" size="md">
                <div slot="title">Example Modal</div>
                <div>
                    <p>This is an example modal with custom content.</p>
                    <p>You can add any HTML content here.</p>
                </div>
                <div slot="footer">
                    <ui-button variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">
                        Cancel
                    </ui-button>
                    <ui-button variant="primary">
                        Save
                    </ui-button>
                </div>
            </ui-modal>
        \`;
        
        // Listen for modal events
        this.querySelector('ui-modal').addEventListener('modal-open', () => {
            console.log('Modal opened');
        });
        
        this.querySelector('ui-modal').addEventListener('modal-close', () => {
            console.log('Modal closed');
        });
    }
}

customElements.define('ui-modal-example', ModalExample);
export default ModalExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Modal Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A versatile side modal component that slides in from different directions (left, right, top, bottom). 
                        Perfect for navigation panels, forms, and content overlays with smooth animations.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Basic Modal</h3>
                                <ui-button onclick="document.getElementById('basic-modal').setAttribute('open', '')">
                                    Open Right Modal
                                </ui-button>
                                <ui-modal id="basic-modal" position="right" size="md">
                                    <div slot="title">Basic Modal</div>
                                    <div>
                                        <p>This is a basic modal that slides in from the right.</p>
                                        <p>It includes a header, content area, and footer.</p>
                                    </div>
                                    <div slot="footer">
                                        <ui-button variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Cancel</ui-button>
                                        <ui-button variant="primary">Save</ui-button>
                                    </div>
                                </ui-modal>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Different Positions</h3>
                                <ui-button onclick="document.getElementById('left-modal').setAttribute('open', '')">
                                    Open Left Modal
                                </ui-button>
                                <ui-modal id="left-modal" position="left" size="md">
                                    <div slot="title">Left Modal</div>
                                    <div>
                                        <p>This modal slides in from the left side.</p>
                                        <p>Perfect for navigation menus.</p>
                                    </div>
                                    <div slot="footer">
                                        <ui-button variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                                    </div>
                                </ui-modal>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Modal</h2>
                <p class="mb-4 text-gray-600">A simple modal with header, content, and footer sections.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-button onclick="document.getElementById('demo-modal').setAttribute('open', '')">
                        Open Basic Modal
                      </ui-button>
                      
                      <ui-modal id="demo-modal" position="right" size="md">
                        <div slot="title">Basic Modal</div>
                        <div>
                          <p>This is a basic modal that slides in from the right.</p>
                          <p>It includes a header, content area, and footer.</p>
                        </div>
                        <div slot="footer">
                          <ui-button variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Cancel</ui-button>
                          <ui-button variant="primary">Save</ui-button>
                        </div>
                      </ui-modal>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Modal Positions</h2>
                <p class="mb-4 text-gray-600">Choose from four different positions where the modal slides in from.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Left Position</label>
                        <ui-button size="sm" onclick="document.getElementById('left-demo').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="left-demo" position="left" size="sm">
                          <div slot="title">Left Modal</div>
                          <div>Content slides in from the left</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Right Position</label>
                        <ui-button size="sm" onclick="document.getElementById('right-demo').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="right-demo" position="right" size="sm">
                          <div slot="title">Right Modal</div>
                          <div>Content slides in from the right</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Top Position</label>
                        <ui-button size="sm" onclick="document.getElementById('top-demo').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="top-demo" position="top" size="sm">
                          <div slot="title">Top Modal</div>
                          <div>Content slides in from the top</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Bottom Position</label>
                        <ui-button size="sm" onclick="document.getElementById('bottom-demo').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="bottom-demo" position="bottom" size="sm">
                          <div slot="title">Bottom Modal</div>
                          <div>Content slides in from the bottom</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${positionsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Modal Sizes</h2>
                <p class="mb-4 text-gray-600">Choose from different size options to fit your content needs. <strong>Note:</strong> Top and bottom positions always have full width - size only affects height.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Small (300px)</label>
                        <ui-button size="sm" onclick="document.getElementById('sm-modal').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="sm-modal" position="right" size="sm">
                          <div slot="title">Small Modal</div>
                          <div>300px width</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Medium (400px)</label>
                        <ui-button size="sm" onclick="document.getElementById('md-modal').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="md-modal" position="right" size="md">
                          <div slot="title">Medium Modal</div>
                          <div>400px width</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Large (500px)</label>
                        <ui-button size="sm" onclick="document.getElementById('lg-modal').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="lg-modal" position="right" size="lg">
                          <div slot="title">Large Modal</div>
                          <div>500px width</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">XL (600px)</label>
                        <ui-button size="sm" onclick="document.getElementById('xl-modal').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="xl-modal" position="right" size="xl">
                          <div slot="title">XL Modal</div>
                          <div>600px width</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Full Width</label>
                        <ui-button size="sm" onclick="document.getElementById('full-modal').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="full-modal" position="right" size="full">
                          <div slot="title">Full Width Modal</div>
                          <div>100% width</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${sizesExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Modal Options</h2>
                <p class="mb-4 text-gray-600">Customize modal behavior with various options and attributes.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">No Backdrop</label>
                        <ui-button size="sm" onclick="document.getElementById('no-backdrop').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="no-backdrop" position="right" size="sm" backdrop="false">
                          <div slot="title">No Backdrop</div>
                          <div>Modal without backdrop</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">No Close Button</label>
                        <ui-button size="sm" onclick="document.getElementById('no-close-btn').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="no-close-btn" position="right" size="sm" close-button="false">
                          <div slot="title">No Close Button</div>
                          <div>Modal without close button</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">No Escape Key</label>
                        <ui-button size="sm" onclick="document.getElementById('no-escape').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="no-escape" position="right" size="sm" close-on-escape="false">
                          <div slot="title">No Escape Key</div>
                          <div>Modal that doesn't close on escape</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">No Backdrop Click</label>
                        <ui-button size="sm" onclick="document.getElementById('no-backdrop-click').setAttribute('open', '')">Open</ui-button>
                        <ui-modal id="no-backdrop-click" position="right" size="sm" close-on-backdrop-click="false">
                          <div slot="title">No Backdrop Click</div>
                          <div>Modal that doesn't close on backdrop click</div>
                          <div slot="footer">
                            <ui-button size="sm" variant="secondary" onclick="this.closest('ui-modal').removeAttribute('open')">Close</ui-button>
                          </div>
                        </ui-modal>
                      </div>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${optionsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the modal component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the modal component before using it</li>
                        <li>• Use <code>open</code> attribute to control visibility</li>
                        <li>• Use <code>position</code> attribute for slide direction: left, right, top, bottom</li>
                        <li>• Use <code>size</code> attribute for dimensions: sm, md, lg, xl, full</li>
                        <li>• <strong>Note:</strong> Top and bottom positions always have full width - size only affects height</li>
                        <li>• Use <code>backdrop="false"</code> to hide the backdrop</li>
                        <li>• Use <code>close-button="false"</code> to hide the close button</li>
                        <li>• Use <code>close-on-escape="false"</code> to disable escape key</li>
                        <li>• Use <code>close-on-backdrop-click="false"</code> to disable backdrop click</li>
                        <li>• Use <code>slot="title"</code> for header content</li>
                        <li>• Use <code>slot="footer"</code> for footer content</li>
                        <li>• Listen for <code>modal-open</code> and <code>modal-close</code> events</li>
                        <li>• Modals are fully accessible with keyboard navigation</li>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">open</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Controls modal visibility</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">position</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">right</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Modal position: left, right, top, bottom</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">md</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Modal size: sm, md, lg, xl, full. For top/bottom positions, size only affects height (width is always 100%)</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">backdrop</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Show/hide backdrop</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">close-on-escape</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Close on escape key</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">close-on-backdrop-click</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Close on backdrop click</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">close-button</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Show/hide close button</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Slots</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slot</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">default</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Main modal content</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">title</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Modal header title</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">footer</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Modal footer content</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">modal-open</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the modal opens</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">modal-close</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when the modal closes</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">open()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Opens the modal</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">close()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Closes the modal</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-modal-docs-page', ModalDocsPage);
export default ModalDocsPage; 