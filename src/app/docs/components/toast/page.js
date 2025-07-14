import App from "@/core/App.js";
import "@/components/ui/CodeBlock.js";
import "@/components/ui/Toast.js";
import "@/components/ui/Box.js";
import "@/components/ui/Tabs.js";

// Toast demonstration functions - made globally available
window.showBasicToast = function() {
    Toast.show({
        message: "This is a basic toast notification",
        variant: "default"
    });
    console.log('Basic toast shown');
};

window.showToastWithTitle = function() {
    Toast.show({
        title: "Success",
        message: "Your profile has been updated successfully!",
        variant: "success"
    });
    console.log('Toast with title shown');
};

window.showPersistentToast = function() {
    Toast.show({
        title: "Important",
        message: "This toast will stay until you close it manually",
        variant: "warning",
        duration: 0
    });
    console.log('Persistent toast shown');
};

window.showSuccessToast = function() {
    Toast.show({
        title: "Success",
        message: "Operation completed successfully!",
        variant: "success"
    });
    console.log('Success toast shown');
};

window.showErrorToast = function() {
    Toast.show({
        title: "Error",
        message: "Something went wrong. Please try again.",
        variant: "error"
    });
    console.log('Error toast shown');
};

window.showWarningToast = function() {
    Toast.show({
        title: "Warning",
        message: "Please review your input before proceeding.",
        variant: "warning"
    });
    console.log('Warning toast shown');
};

window.showInfoToast = function() {
    Toast.show({
        title: "Information",
        message: "Here's some helpful information for you.",
        variant: "info"
    });
    console.log('Info toast shown');
};

window.showDefaultToast = function() {
    Toast.show({
        title: "Default",
        message: "This is a default toast notification.",
        variant: "default"
    });
    console.log('Default toast shown');
};

window.showTopRightToast = function() {
    Toast.show({
        message: "Top right position",
        position: "top-right"
    });
    console.log('Top right toast shown');
};

window.showTopLeftToast = function() {
    Toast.show({
        message: "Top left position",
        position: "top-left"
    });
    console.log('Top left toast shown');
};

window.showBottomRightToast = function() {
    Toast.show({
        message: "Bottom right position",
        position: "bottom-right"
    });
    console.log('Bottom right toast shown');
};

window.showBottomLeftToast = function() {
    Toast.show({
        message: "Bottom left position",
        position: "bottom-left"
    });
    console.log('Bottom left toast shown');
};

window.showQuickToast = function() {
    Toast.show({
        message: "This toast will disappear quickly",
        duration: 2000
    });
    console.log('Quick toast shown');
};

window.showLongToast = function() {
    Toast.show({
        message: "This toast will stay for 10 seconds",
        duration: 10000
    });
    console.log('Long toast shown');
};

window.showNoAutoHideToast = function() {
    Toast.show({
        title: "Manual Close",
        message: "This toast won't auto-hide. Click the X to close it.",
        duration: 0
    });
    console.log('No auto-hide toast shown');
};

window.showHtmlToast = function() {
    const toast = document.createElement('ui-toast');
    toast.setAttribute('message', 'This toast was created using HTML attributes!');
    toast.setAttribute('title', 'HTML Toast');
    toast.setAttribute('variant', 'success');
    toast.setAttribute('position', 'top-right');
    toast.setAttribute('duration', '5000');
    document.body.appendChild(toast);
    setTimeout(() => toast.show(), 10);
    console.log('HTML toast shown');
};

window.testToast = function() {
    console.log('Testing toast...');
    console.log('Toast available:', typeof window.Toast);
    console.log('Toast.show available:', typeof window.Toast?.show);
    
    if (typeof window.Toast !== 'undefined' && typeof window.Toast.show === 'function') {
        window.Toast.show({
            message: "Test toast is working!",
            variant: "success"
        });
        console.log('Test toast called');
    } else {
        console.error('Toast is not available globally');
        // Try creating element directly
        const toast = document.createElement('ui-toast');
        toast.setAttribute('message', 'Direct element test');
        toast.setAttribute('variant', 'info');
        document.body.appendChild(toast);
        setTimeout(() => {
            if (toast.show) {
                toast.show();
                console.log('Direct element toast shown');
            } else {
                console.error('Toast element has no show method');
            }
        }, 100);
    }
};

class ToastDocsPage extends App {
  connectedCallback() {
    super.connectedCallback();
    document.title = "Toast | UPO UI Docs";
  }

  render() {
    const basicExample = `// Using static method
Toast.show({
  message: "Operation completed successfully!",
  variant: "success",
  position: "top-right",
  duration: 5000
});

// Using element
const toast = document.createElement('ui-toast');
toast.setAttribute('message', 'Hello World!');
toast.setAttribute('variant', 'info');
document.body.appendChild(toast);
toast.show();`;

    const variantsExample = `Toast.show({
  message: "Success message",
  variant: "success"
});

Toast.show({
  message: "Error occurred",
  variant: "error"
});

Toast.show({
  message: "Warning message",
  variant: "warning"
});

Toast.show({
  message: "Information",
  variant: "info"
});`;

    const positionsExample = `Toast.show({
  message: "Top right position",
  position: "top-right"
});

Toast.show({
  message: "Top left position", 
  position: "top-left"
});

Toast.show({
  message: "Bottom right position",
  position: "bottom-right"
});

Toast.show({
  message: "Bottom left position",
  position: "bottom-left"
});`;

    const durationExample = `// Quick toast (2 seconds)
Toast.show({
  message: "Quick notification",
  duration: 2000
});

// Long toast (10 seconds)
Toast.show({
  message: "Long notification",
  duration: 10000
});

// Persistent toast (no auto-hide)
Toast.show({
  message: "Manual close only",
  duration: 0
});`;

    const htmlExample = `<ui-toast 
  message="Your changes have been saved!"
  title="Success"
  variant="success"
  position="top-right"
  duration="3000">
</ui-toast>`;

    const setupExample = `// Import the toast component
import '@/components/ui/Toast.js';

class ToastExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <div>
                <h1>Toast Examples</h1>
                
                <!-- Basic toast -->
                <button onclick="showBasicToast()">Show Basic Toast</button>
                
                <!-- Different variants -->
                <button onclick="showSuccessToast()">Success Toast</button>
                <button onclick="showErrorToast()">Error Toast</button>
                <button onclick="showWarningToast()">Warning Toast</button>
                
                <!-- Different positions -->
                <button onclick="showTopRightToast()">Top Right</button>
                <button onclick="showBottomLeftToast()">Bottom Left</button>
                
                <!-- Different durations -->
                <button onclick="showQuickToast()">Quick Toast</button>
                <button onclick="showPersistentToast()">Persistent Toast</button>
            </div>
        \`;
    }
}

// Toast functions
function showBasicToast() {
    Toast.show({
        message: "This is a basic toast notification",
        variant: "default"
    });
}

function showSuccessToast() {
    Toast.show({
        title: "Success",
        message: "Operation completed successfully!",
        variant: "success"
    });
}

function showErrorToast() {
    Toast.show({
        title: "Error",
        message: "Something went wrong. Please try again.",
        variant: "error"
    });
}

function showWarningToast() {
    Toast.show({
        title: "Warning",
        message: "Please review your input before proceeding.",
        variant: "warning"
    });
}

function showTopRightToast() {
    Toast.show({
        message: "Top right position",
        position: "top-right"
    });
}

function showBottomLeftToast() {
    Toast.show({
        message: "Bottom left position",
        position: "bottom-left"
    });
}

function showQuickToast() {
    Toast.show({
        message: "This toast will disappear quickly",
        duration: 2000
    });
}

function showPersistentToast() {
    Toast.show({
        title: "Important",
        message: "This toast will stay until you close it manually",
        variant: "warning",
        duration: 0
    });
}

customElements.define('ui-toast-example', ToastExample);
export default ToastExample;`;

    return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Toast Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A flexible toast notification component with multiple variants and positioning options. Perfect for user feedback, alerts, and notifications.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                            <button onclick="showSuccessToast()" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                Success Toast
                            </button>
                            <button onclick="showErrorToast()" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                                Error Toast
                            </button>
                            <button onclick="showWarningToast()" class="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                                Warning Toast
                            </button>
                            <button onclick="showInfoToast()" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Info Toast
                            </button>
                            <button onclick="testToast()" class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                                Test Toast
                            </button>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Usage</h2>
                <p class="mb-4 text-gray-600">Simple toast notifications with different variants for various use cases.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <button onclick="showBasicToast()" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Show Basic Toast
                      </button>
                      <button onclick="showToastWithTitle()" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Toast with Title
                      </button>
                      <button onclick="showPersistentToast()" class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                        Persistent Toast
                      </button>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="javascript" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Toast Variants</h2>
                <p class="mb-4 text-gray-600">Choose from five variants: <code>success</code>, <code>error</code>, <code>warning</code>, <code>info</code>, and <code>default</code> for different message types.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <button onclick="showSuccessToast()" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Success
                      </button>
                      <button onclick="showErrorToast()" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                        Error
                      </button>
                      <button onclick="showWarningToast()" class="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
                        Warning
                      </button>
                      <button onclick="showInfoToast()" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Info
                      </button>
                      <button onclick="showDefaultToast()" class="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                        Default
                      </button>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="javascript" code="${variantsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Toast Positions</h2>
                <p class="mb-4 text-gray-600">Use the <code>position</code> attribute to control where the toast appears on screen. Available positions: <code>top-right</code>, <code>top-left</code>, <code>bottom-right</code>, and <code>bottom-left</code>.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <button onclick="showTopRightToast()" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Top Right
                      </button>
                      <button onclick="showTopLeftToast()" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Top Left
                      </button>
                      <button onclick="showBottomRightToast()" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Bottom Right
                      </button>
                      <button onclick="showBottomLeftToast()" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Bottom Left
                      </button>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="javascript" code="${positionsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Duration Examples</h2>
                <p class="mb-4 text-gray-600">Control how long the toast stays visible using the <code>duration</code> attribute in milliseconds. Set to <code>0</code> for persistent toasts.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="flex flex-wrap gap-4 p-4 shadow rounded-lg border border-gray-200">
                      <button onclick="showQuickToast()" class="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
                        Quick (2s)
                      </button>
                      <button onclick="showLongToast()" class="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">
                        Long (10s)
                      </button>
                      <button onclick="showNoAutoHideToast()" class="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700">
                        No Auto-hide
                      </button>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="javascript" code="${durationExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">HTML Usage</h2>
                <p class="mb-4 text-gray-600">You can also use the toast component directly in HTML with attributes.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <p class="text-gray-600 mb-4">Click the button to show a toast using HTML attributes:</p>
                      <button onclick="showHtmlToast()" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Show HTML Toast
                      </button>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${htmlExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Complete Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the toast component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the toast component before using it</li>
                        <li>• Use <code>Toast.show()</code> static method for quick notifications</li>
                        <li>• Choose from <code>success</code>, <code>error</code>, <code>warning</code>, <code>info</code>, or <code>default</code> variants</li>
                        <li>• Position toasts with <code>top-right</code>, <code>top-left</code>, <code>bottom-right</code>, or <code>bottom-left</code></li>
                        <li>• Set <code>duration</code> in milliseconds (0 = no auto-hide)</li>
                        <li>• Include optional <code>title</code> for more structured notifications</li>
                        <li>• Perfect for user feedback, alerts, and system notifications</li>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">variant</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'success' | 'error' | 'warning' | 'info' | 'default'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'default'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Color variant for the toast</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">position</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'top-right'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Position on screen</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">duration</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">number</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">5000</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Auto-hide duration in milliseconds (0 = no auto-hide)</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">message</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">''</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Toast message content</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">title</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">''</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Toast title (optional)</td>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Toast.show(options)</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">object</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Static method to create and show a toast</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">toast.show()</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">none</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Show the toast with animation</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">toast.hide()</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">none</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Hide the toast with animation</td>
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
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">toast-show</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when the toast becomes visible</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">toast-hide</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when the toast is hidden</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("app-toast-docs-page", ToastDocsPage);
export default ToastDocsPage;
