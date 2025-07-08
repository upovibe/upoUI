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
            <ui-box class="max-w-4xl mx-auto py-8 px-6">
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Alert Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Displays a callout for user attention. Perfect for informational or error messages.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <div class="space-y-4 p-6 bg-gray-50 rounded-lg">
                            <ui-alert>
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
                        </div>
                    </div>
                </div>

                <ui-tabs>
                    <div slot="tab-1">Basic Usage</div>
                    <div slot="tab-2">With Titles</div>
                    <div slot="tab-3">Dismissible</div>
                    <div slot="tab-4">Setup</div>
                    <div slot="tab-5">Events</div>

                    <div slot="panel-1">
                        <h3 class="text-lg font-semibold mb-4">Basic Alert Types</h3>
                        <p class="text-gray-600 mb-4">
                            The alert component supports four types: <code>info</code> (default), <code>success</code>, <code>warning</code>, and <code>error</code>.
                        </p>
                        
                        <div class="mb-6">
                            <h4 class="text-md font-medium mb-3">Preview:</h4>
                            <div class="space-y-4 p-4 bg-gray-50 rounded-lg">
                                <ui-alert>
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
                            </div>
                        </div>

                        <ui-code-block language="html">
                            ${basicExample}
                        </ui-code-block>
                    </div>

                    <div slot="panel-2">
                        <h3 class="text-lg font-semibold mb-4">Alerts with Titles</h3>
                        <p class="text-gray-600 mb-4">
                            Add a <code>title</code> attribute to include a bold heading in your alert.
                        </p>
                        
                        <div class="mb-6">
                            <h4 class="text-md font-medium mb-3">Preview:</h4>
                            <div class="space-y-4 p-4 bg-gray-50 rounded-lg">
                                <ui-alert type="info" title="Information">
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
                                </ui-alert>
                            </div>
                        </div>

                        <ui-code-block language="html">
                            ${withTitleExample}
                        </ui-code-block>
                    </div>

                    <div slot="panel-3">
                        <h3 class="text-lg font-semibold mb-4">Dismissible Alerts</h3>
                        <p class="text-gray-600 mb-4">
                            Add the <code>dismissible</code> attribute to show a close button that allows users to dismiss the alert.
                        </p>
                        
                        <div class="mb-6">
                            <h4 class="text-md font-medium mb-3">Preview:</h4>
                            <div class="space-y-4 p-4 bg-gray-50 rounded-lg">
                                <ui-alert type="info" dismissible>
                                    This alert can be dismissed by clicking the X button.
                                </ui-alert>

                                <ui-alert type="success" title="Success!" dismissible>
                                    Operation completed. You can dismiss this message.
                                </ui-alert>
                            </div>
                        </div>

                        <ui-code-block language="html">
                            ${dismissibleExample}
                        </ui-code-block>
                    </div>

                    <div slot="panel-4">
                        <h3 class="text-lg font-semibold mb-4">Setup</h3>
                        <p class="text-gray-600 mb-4">
                            Import the Alert component and use it in your application.
                        </p>

                        <ui-code-block language="javascript">
                            ${setupExample}
                        </ui-code-block>

                        <div class="mt-6">
                            <h4 class="text-md font-semibold mb-2">Attributes</h4>
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
                        </div>
                    </div>

                    <div slot="panel-5">
                        <h3 class="text-lg font-semibold mb-4">Events</h3>
                        <p class="text-gray-600 mb-4">
                            The Alert component dispatches events when dismissed.
                        </p>

                        <ui-code-block language="javascript">
                            ${eventsExample}
                        </ui-code-block>

                        <div class="mt-6">
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
                                            <td class="px-4 py-2 text-sm font-mono text-gray-900">alert-dismissed</td>
                                            <td class="px-4 py-2 text-sm text-gray-600">{ type: string }</td>
                                            <td class="px-4 py-2 text-sm text-gray-600">Fired when alert is dismissed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="mt-6">
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
                </ui-tabs>
            </ui-box>
        `;
    }
}

customElements.define('app-alert-docs-page', AlertDocsPage);
export default AlertDocsPage; 