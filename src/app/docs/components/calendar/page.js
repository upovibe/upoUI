import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Calendar.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class CalendarDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Calendar Component | UPO UI';
    }

    render() {
        const basicExample = `<ui-calendar></ui-calendar>`;

        const withDateExample = `<ui-calendar date="2024-06-15"></ui-calendar>`;

        const interactiveExample = `<ui-calendar id="my-calendar"></ui-calendar>

<script>
const calendar = document.getElementById('my-calendar');
calendar.addEventListener('date-select', (e) => {
    console.log('Date selected:', e.detail.date);
});
calendar.addEventListener('month-change', (e) => {
    console.log('Month changed:', e.detail.date);
});
calendar.addEventListener('today', (e) => {
    console.log('Today button clicked:', e.detail.date);
});
</script>`;

        const setupExample = `// Import the calendar component
import '@/components/ui/Calendar.js';

class MyPage extends HTMLElement {
    render() {
        return \`
            <ui-calendar date="2024-06-15"></ui-calendar>
        \`;
    }
}`;

        const eventsExample = `// Listen for calendar events
document.addEventListener('date-select', (event) => {
    console.log('Date selected:', event.detail.date);
});

document.addEventListener('month-change', (event) => {
    console.log('Month changed:', event.detail.date);
});

document.addEventListener('today', (event) => {
    console.log('Today button clicked:', event.detail.date);
});`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Calendar Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A calendar view component that displays a monthly calendar with navigation. Based on shadcn/ui calendar design pattern.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex justify-center p-4 shadow rounded-lg border border-gray-200">
                            <ui-calendar id="live-calendar"></ui-calendar>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Calendar</h2>
                <p class="mb-4 text-gray-600">A simple calendar that displays the current month with navigation controls.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                  <ui-box class="flex justify-center p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar></ui-calendar>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Calendar with Specific Date</h2>
                <p class="mb-4 text-gray-600">Set the initial calendar view to a specific date using the <code>date</code> attribute.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                  <ui-box class="flex justify-center p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar date="2024-06-15"></ui-calendar>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${withDateExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Interactive Calendar</h2>
                <p class="mb-4 text-gray-600">Listen for calendar events to handle date selection and navigation.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                  <ui-box class="flex flex-col items-center gap-4 p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar id="interactive-calendar"></ui-calendar>
                    <div id="calendar-events" class="text-sm text-gray-600 bg-gray-50 p-3 rounded border">
                        <div>Event log will appear here...</div>
                    </div>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${interactiveExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Complete Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the calendar component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the calendar component before using it</li>
                        <li>• Use <code>date</code> attribute to set initial view (ISO date string)</li>
                        <li>• Listen for <code>date-select</code> events when dates are clicked</li>
                        <li>• Listen for <code>month-change</code> events when navigating months</li>
                        <li>• Listen for <code>today</code> events when "Today" button is clicked</li>
                        <li>• Calendar includes navigation controls and "Today" button</li>
                        <li>• Today's date is highlighted automatically</li>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">date</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">current date</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">ISO date string to set the initial calendar view</td>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">date-select</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">{ date: Date }</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when a date is clicked</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">month-change</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">{ date: Date }</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when navigating to previous/next month</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">today</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">{ date: Date }</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when the "Today" button is clicked</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Features</h4>
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Feature</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Monthly View</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Displays a full month with proper grid layout</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Navigation</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Previous/next month buttons with smooth transitions</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Today Highlighting</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Current date is highlighted in blue</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Today Button</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Quick return to current month</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Date Selection</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Click any date to trigger events</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Responsive Design</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Works well on different screen sizes</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Accessibility</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Proper ARIA labels and keyboard support</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        
        // Set up event listeners for the interactive example
        setTimeout(() => {
            const interactiveCalendar = document.getElementById('interactive-calendar');
            const eventLog = document.getElementById('calendar-events');
            
            if (interactiveCalendar && eventLog) {
                interactiveCalendar.addEventListener('date-select', (e) => {
                    const date = e.detail.date.toLocaleDateString();
                    this.addEventLog(eventLog, `Date selected: ${date}`);
                });
                
                interactiveCalendar.addEventListener('month-change', (e) => {
                    const date = e.detail.date.toLocaleDateString('en-US', { 
                        month: 'long', 
                        year: 'numeric' 
                    });
                    this.addEventLog(eventLog, `Month changed to: ${date}`);
                });
                
                interactiveCalendar.addEventListener('today', (e) => {
                    const date = e.detail.date.toLocaleDateString();
                    this.addEventLog(eventLog, `Today button clicked: ${date}`);
                });
            }
        }, 100);
    }

    addEventLog(container, message) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = document.createElement('div');
        logEntry.textContent = `[${timestamp}] ${message}`;
        container.appendChild(logEntry);
        
        // Keep only last 5 entries
        while (container.children.length > 5) {
            container.removeChild(container.firstChild);
        }
        
        container.scrollTop = container.scrollHeight;
    }
}

customElements.define('app-calendar-docs-page', CalendarDocsPage);
export default CalendarDocsPage; 