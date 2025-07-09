import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Alert.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class AlertDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Alert Component | UPO UI';
    }

    render() {
        const basicExample = `<ui-alert>
    This is a basic info alert message.
</ui-alert>

<ui-alert type="success">
    Operation completed successfully!
</ui-alert>

<ui-alert type="warning">
    Please review your settings before continuing.
</ui-alert>

<ui-alert type="error">
    Something went wrong. Please try again.
</ui-alert>`;

        const withTitleExample = `<ui-alert type="info" title="Information">
    Here's some important information you should know.
</ui-alert>

<ui-alert type="success" title="Success!">
    Your changes have been saved successfully.
</ui-alert>

<ui-alert type="warning" title="Warning">
    This action cannot be undone.
</ui-alert>

<ui-alert type="error" title="Error">
    Failed to connect to the server.
</ui-alert>`;

        const dismissibleExample = `<ui-alert type="info" dismissible>
    This alert can be dismissed by clicking the X button.
</ui-alert>

<ui-alert type="success" title="Success!" dismissible>
    Operation completed. You can dismiss this message.
</ui-alert>`;

        const setupExample = `// Import the alert component
import '@/components/ui/Alert.js';

class MyPage extends HTMLElement {
    render() {
        return \`
            <ui-alert type="error" title="Error">
                Something went wrong!
            </ui-alert>
        \`;
    }
}`;

        const eventsExample = `// Listen for alert dismissal
document.addEventListener('alert-dismissed', (event) => {
    console.log('Alert dismissed:', event.detail.type);
});

// Programmatically dismiss an alert
const alert = document.querySelector('ui-alert');
alert.dismiss();`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Alert Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Displays a callout for user attention. Perfect for informational or error messages.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex flex-col gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <ui-alert >
                                This is a basic info alert message.
                            </ui-alert>

                            <ui-alert type="success">
                                Operation completed successfully!
                            </ui-alert>

                            <ui-alert type="warning">
                                Please review your settings before continuing.
                            </ui-alert>

                            <ui-alert type="error">
                                Something went wrong. Please try again.
                            </ui-alert>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Alert Types</h2>
                <p class="mb-4 text-gray-600">The alert component supports four types: <code>info</code> (default), <code>success</code>, <code>warning</code>, and <code>error</code>.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-alert type="info">This is a basic info alert message.</ui-alert>
                        <ui-alert type="success">Operation completed successfully!</ui-alert>
                        <ui-alert type="warning">Please review your settings before continuing.</ui-alert>
                        <ui-alert type="error">Something went wrong. Please try again.</ui-alert>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Alerts with Titles</h2>
                <p class="mb-4 text-gray-600">Add a <code>title</code> attribute to include a bold heading in your alert.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-alert type="info" title="Information">Here's some important information you should know.</ui-alert>
                        <ui-alert type="success" title="Success!">Your changes have been saved successfully.</ui-alert>
                        <ui-alert type="warning" title="Warning">This action cannot be undone.</ui-alert>
                        <ui-alert type="error" title="Error">Failed to connect to the server.</ui-alert>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${withTitleExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Dismissible Alerts</h2>
                <p class="mb-4 text-gray-600">Add the <code>dismissible</code> attribute to show a close button that allows users to dismiss the alert.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
 <ui-alert type="info" dismissible>This alert can be dismissed by clicking the X button.</ui-alert>
                        <ui-alert type="success" title="Success!" dismissible>Operation completed. You can dismiss this message.</ui-alert>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${dismissibleExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Complete Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the alert component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the alert component before using it</li>
                        <li>• Use <code>type</code> attribute to set alert style (info, success, warning, error)</li>
                        <li>• Add <code>title</code> attribute for a bold heading</li>
                        <li>• Use <code>dismissible</code> attribute to add a close button</li>
                        <li>• Content can include any HTML elements</li>
                        <li>• Listen for <code>alert-dismissed</code> events when alerts are closed</li>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">type</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'info' | 'success' | 'warning' | 'error'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'info'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Alert type determining color and icon</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">title</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">''</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Optional title text shown in bold</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">dismissible</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Shows close button when present</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Events</h4>
                    <div class="overflow-x-auto mb-6">
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">alert-dismissed</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">{ type: string }</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when alert is dismissed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Methods</h4>
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Method</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">dismiss()</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Programmatically dismiss the alert</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-alert-docs-page', AlertDocsPage);
export default AlertDocsPage; 