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
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the file upload component before using it</li>
                        <li>• Use <code>multiple</code> attribute for multiple file selection</li>
                        <li>• Use <code>accept</code> attribute to restrict file types</li>
                        <li>• Use <code>max-size</code> attribute to limit file size</li>
                        <li>• Use <code>max-files</code> attribute to limit number of files</li>
                        <li>• Use <code>status</code> attribute for visual states</li>
                        <li>• Listen for <code>files-changed</code> event to handle file changes</li>
                        <li>• Use <code>getFiles()</code> method to get selected files</li>
                        <li>• Use <code>clear()</code> method to remove all files</li>
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
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">multiple</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Allow multiple file selection</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">accept</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Comma-separated list of accepted file types</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">max-size</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Maximum file size in bytes</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">max-files</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Maximum number of files allowed</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Disable the file upload</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">status</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Visual status: success, warning, error, info</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">text</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Custom upload text</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">files-changed</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when files are added or removed</td>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">getFiles()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Returns array of selected files</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">clear()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Clears all selected files</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">setUploadProgress(fileName, progress)</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Sets upload progress for a specific file (0-100)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-file-upload-docs-page', FileUploadDocsPage);
export default FileUploadDocsPage; 