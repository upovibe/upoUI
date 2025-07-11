import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/FileUpload.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class FileUploadDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'FileUpload | UPO UI Docs';
    }

    render() {
        const basicExample = `<ui-file-upload 
  text="Drop files here or click to upload"
  accept=".jpg,.png,.pdf"
  max-size="5242880"
  max-files="3"
></ui-file-upload>`;

        const multipleExample = `<ui-file-upload 
  multiple
  text="Upload multiple files"
  accept=".jpg,.png,.gif"
  max-files="5"
></ui-file-upload>`;

        const imageExample = `<ui-file-upload 
  text="Upload images only"
  accept="image/*"
  max-size="2097152"
></ui-file-upload>`;

        const documentExample = `<ui-file-upload 
  text="Upload documents"
  accept=".pdf,.doc,.docx,.txt"
  max-size="10485760"
></ui-file-upload>`;

        const statusExample = `<ui-file-upload status="success" text="Upload successful"></ui-file-upload>
<ui-file-upload status="warning" text="Upload with warnings"></ui-file-upload>
<ui-file-upload status="error" text="Upload failed"></ui-file-upload>
<ui-file-upload status="info" text="Upload in progress"></ui-file-upload>`;

        const setupExample = `// Import the file upload component
import '@/components/ui/FileUpload.js';

class FileUploadExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <ui-file-upload 
                text="Drop files here or click to upload"
                accept=".jpg,.png,.pdf"
                max-size="5242880"
                max-files="3"
            ></ui-file-upload>
        \`;
        
        // Listen for file changes
        this.querySelector('ui-file-upload').addEventListener('files-changed', (event) => {
            console.log('Files changed:', event.detail.files);
        });
    }
}

customElements.define('ui-file-upload-example', FileUploadExample);
export default FileUploadExample;`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">FileUpload Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A modern file upload component with drag and drop support, file preview, progress tracking, and validation.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <div>
                                <h3 class="text-sm font-medium text-gray-700 mb-2">Basic Upload</h3>
                                <ui-file-upload 
                                    text="Drop files here or click to upload"
                                    accept=".jpg,.png,.pdf"
                                    max-size="5242880"
                                    max-files="3"
                                ></ui-file-upload>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-700 mb-2">Multiple Files</h3>
                                <ui-file-upload 
                                    multiple
                                    text="Upload multiple files"
                                    accept=".jpg,.png,.gif"
                                    max-files="5"
                                ></ui-file-upload>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic File Upload</h2>
                <p class="mb-4 text-gray-600">A simple file upload with drag and drop support and file validation.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-file-upload 
                        text="Drop files here or click to upload"
                        accept=".jpg,.png,.pdf"
                        max-size="5242880"
                        max-files="3"
                      ></ui-file-upload>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Multiple File Upload</h2>
                <p class="mb-4 text-gray-600">Enable multiple file selection with the <code>multiple</code> attribute.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-file-upload 
                        multiple
                        text="Upload multiple files"
                        accept=".jpg,.png,.gif"
                        max-files="5"
                      ></ui-file-upload>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${multipleExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Image Upload Only</h2>
                <p class="mb-4 text-gray-600">Restrict uploads to image files only using the <code>accept</code> attribute.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-file-upload 
                        text="Upload images only"
                        accept="image/*"
                        max-size="2097152"
                      ></ui-file-upload>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${imageExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Document Upload</h2>
                <p class="mb-4 text-gray-600">Upload specific document types with size restrictions.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-file-upload 
                        text="Upload documents"
                        accept=".pdf,.doc,.docx,.txt"
                        max-size="10485760"
                      ></ui-file-upload>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${documentExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Status States</h2>
                <p class="mb-4 text-gray-600">Use the <code>status</code> attribute to show different visual states.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <ui-file-upload status="success" text="Upload successful"></ui-file-upload>
                      <ui-file-upload status="warning" text="Upload with warnings"></ui-file-upload>
                      <ui-file-upload status="error" text="Upload failed"></ui-file-upload>
                      <ui-file-upload status="info" text="Upload in progress"></ui-file-upload>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${statusExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the file upload component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <h2 class="text-xl font-semibold mt-8 mb-4">Key Points</h2>
                <div class="space-y-4">
                  <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <i class="fas fa-upload text-blue-400"></i>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-blue-800">File Upload</h3>
                        <div class="mt-2 text-sm text-blue-700">
                          <p>Drag and drop interface with support for single or multiple file selection. Includes file type validation, size limits, and progress tracking.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-green-50 border-l-4 border-green-400 p-4">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <i class="fas fa-shield-alt text-green-400"></i>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-green-800">Validation</h3>
                        <div class="mt-2 text-sm text-green-700">
                          <p>Built-in validation for file types, sizes, and quantities. Visual feedback for upload status with success, warning, error, and info states.</p>
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
                        <h3 class="text-sm font-medium text-purple-800">Customization</h3>
                        <div class="mt-2 text-sm text-purple-700">
                          <p>Highly customizable with custom upload text, file type restrictions, size limits, and visual states. Supports progress tracking and file management.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-orange-50 border-l-4 border-orange-400 p-4">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <i class="fas fa-mobile-alt text-orange-400"></i>
                      </div>
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-orange-800">Accessibility</h3>
                        <div class="mt-2 text-sm text-orange-700">
                          <p>Accessible design with keyboard navigation, screen reader support, and clear visual feedback. Works seamlessly across desktop and mobile devices.</p>
                        </div>
                      </div>
                    </div>
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
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">multiple</td>
                            <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                            <td class="px-4 py-2 text-sm text-gray-600">false</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Allow multiple file selection</td>
                                </tr>
                                <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">accept</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">''</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Comma-separated list of accepted file types</td>
                                </tr>
                                <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">max-size</td>
                            <td class="px-4 py-2 text-sm text-gray-600">number</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Maximum file size in bytes</td>
                                </tr>
                                <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">max-files</td>
                            <td class="px-4 py-2 text-sm text-gray-600">number</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Maximum number of files allowed</td>
                                </tr>
                                <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">disabled</td>
                            <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                            <td class="px-4 py-2 text-sm text-gray-600">false</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Disable the file upload</td>
                                </tr>
                                <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">status</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">''</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Visual status: success, warning, error, info</td>
                                </tr>
                                <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">text</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string</td>
                            <td class="px-4 py-2 text-sm text-gray-600">'Drop files here or click to upload'</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Custom upload text</td>
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
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">getFiles()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Returns array of selected files</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">clear()</td>
                            <td class="px-4 py-2 text-sm text-gray-600">-</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Clears all selected files</td>
                          </tr>
                          <tr>
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">setUploadProgress(fileName, progress)</td>
                            <td class="px-4 py-2 text-sm text-gray-600">string, number</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Sets upload progress for a specific file (0-100)</td>
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
                            <td class="px-4 py-2 text-sm text-gray-900 font-mono">files-changed</td>
                            <td class="px-4 py-2 text-sm text-gray-600">FileList</td>
                            <td class="px-4 py-2 text-sm text-gray-600">Fired when files are added or removed</td>
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

customElements.define('app-file-upload-docs-page', FileUploadDocsPage);
export default FileUploadDocsPage; 