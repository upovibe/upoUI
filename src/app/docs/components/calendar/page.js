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

        const withTimeExample = `<ui-calendar show-time></ui-calendar>`;

        const withDateTimeExample = `<ui-calendar date="2024-06-15" show-time time="14:30"></ui-calendar>`;

        const rangeExample = `<ui-calendar range-mode="true"></ui-calendar>`;

        const rangeWithConstraintsExample = `<ui-calendar 
    range-mode="true" 
    min-date="2023-03-01" 
    max-date="2026-03-31">
</ui-calendar>`;

        const rangeWithTimeExample = `<ui-calendar 
    range-mode="true" 
    show-time="true" 
    min-date="2023-03-01" 
    max-date="2026-03-31">
</ui-calendar>`;

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

        const timeInteractiveExample = `<ui-calendar id="time-calendar" show-time time="09:00"></ui-calendar>

<script>
const calendar = document.getElementById('time-calendar');
calendar.addEventListener('date-select', (e) => {
    if (e.detail.time) {
        console.log('Date and time selected:', e.detail.dateTime);
        console.log('Time:', e.detail.time);
    } else {
        console.log('Date selected:', e.detail.date);
    }
});
calendar.addEventListener('time-change', (e) => {
    console.log('Time changed:', e.detail.time);
});
</script>`;

        const rangeInteractiveExample = `<ui-calendar id="range-calendar" range-mode="true" min-date="2023-03-01" max-date="2026-03-31"></ui-calendar>

<script>
const calendar = document.getElementById('range-calendar');
calendar.addEventListener('range-select', (e) => {
    console.log('Range selected:', e.detail);
    console.log('Start date:', e.detail.startDate);
    console.log('End date:', e.detail.endDate);
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
});

// Listen for time events (when show-time is enabled)
document.addEventListener('time-change', (event) => {
    console.log('Time changed:', event.detail.time);
});

// Enhanced date-select event with time
document.addEventListener('date-select', (event) => {
    if (event.detail.time) {
        console.log('Date and time selected:', event.detail.dateTime);
        console.log('Time:', event.detail.time);
    } else {
        console.log('Date selected:', event.detail.date);
    }
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
                        <ui-box class="flex flex-col gap-6 p-4 shadow rounded-lg border border-gray-200">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Basic Calendar</label>
                                <div class="flex justify-center">
                                    <ui-calendar id="live-calendar"></ui-calendar>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Calendar with Time Selection</label>
                                <div class="flex justify-center">
                                    <ui-calendar id="live-calendar-time" show-time time="14:30"></ui-calendar>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Date Range Selection (Check Console)</label>
                                <div class="flex justify-center">
                                    <ui-calendar id="live-range-calendar" range-mode="true" min-date="2023-03-01" max-date="2026-03-31"></ui-calendar>
                                </div>
                            </div>
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

                <h2 class="text-xl font-semibold mt-8 mb-4">Calendar with Time Selection</h2>
                <p class="mb-4 text-gray-600">Enable time selection by adding the <code>show-time</code> attribute. Users can select hours and minutes.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                  <ui-box class="flex justify-center p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar show-time></ui-calendar>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${withTimeExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Calendar with Date and Time</h2>
                <p class="mb-4 text-gray-600">Set both initial date and time using the <code>date</code> and <code>time</code> attributes.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                  <ui-box class="flex justify-center p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar date="2024-06-15" show-time time="14:30"></ui-calendar>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${withDateTimeExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Interactive Calendar</h2>
                <p class="mb-4 text-gray-600">Listen for calendar events to handle date selection and navigation.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                  <ui-box class="flex flex-col items-center gap-4 p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar id="interactive-calendar"></ui-calendar>
                    <div id="calendar-events" class="text-sm text-gray-600 bg-gray-50 p-3 rounded border">
                        <div>Event log will appear here...</div>
                    </div>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${interactiveExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Date Range Selection</h2>
                <p class="mb-4 text-gray-600">Enable date range selection with the <code>range-mode</code> attribute. Users can select start and end dates.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview-range">Preview</ui-tab>
                    <ui-tab value="code-range">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview-range">
                  <ui-box class="flex justify-center p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar range-mode="true"></ui-calendar>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code-range">
                    <ui-codeblock language="html" code="${rangeExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Date Range with Constraints</h2>
                <p class="mb-4 text-gray-600">Set minimum and maximum selectable dates using <code>min-date</code> and <code>max-date</code> attributes.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview-range-constraints">Preview</ui-tab>
                    <ui-tab value="code-range-constraints">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview-range-constraints">
                  <ui-box class="flex justify-center p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar range-mode="true" min-date="2023-03-01" max-date="2026-03-31"></ui-calendar>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code-range-constraints">
                    <ui-codeblock language="html" code="${rangeWithConstraintsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Date Range with Time Selection</h2>
                <p class="mb-4 text-gray-600">Combine range selection with time selection for precise date-time ranges.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview-range-time">Preview</ui-tab>
                    <ui-tab value="code-range-time">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview-range-time">
                  <ui-box class="flex justify-center p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar range-mode="true" show-time="true" min-date="2023-03-01" max-date="2026-03-31"></ui-calendar>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code-range-time">
                    <ui-codeblock language="html" code="${rangeWithTimeExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Interactive Calendar with Time</h2>
                <p class="mb-4 text-gray-600">Listen for both date and time selection events.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview6">Preview</ui-tab>
                    <ui-tab value="code6">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview6">
                  <ui-box class="flex flex-col items-center gap-4 p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar id="interactive-calendar-time" show-time time="09:00"></ui-calendar>
                    <div id="calendar-time-events" class="text-sm text-gray-600 bg-gray-50 p-3 rounded border">
                        <div>Event log will appear here...</div>
                    </div>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code6">
                    <ui-codeblock language="html" code="${timeInteractiveExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Interactive Date Range Selection</h2>
                <p class="mb-4 text-gray-600">Listen for range selection events to handle date ranges.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview7">Preview</ui-tab>
                    <ui-tab value="code7">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview7">
                  <ui-box class="flex flex-col items-center gap-4 p-4 shadow rounded-lg border border-gray-200">
                    <ui-calendar id="interactive-range-calendar" range-mode="true" min-date="2023-03-01" max-date="2026-03-31"></ui-calendar>
                    <div id="calendar-range-events" class="text-sm text-gray-600 bg-gray-50 p-3 rounded border">
                        <div>Range selection log will appear here...</div>
                    </div>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code7">
                    <ui-codeblock language="html" code="${rangeInteractiveExample.replace(/"/g, '&quot;')}"></ui-codeblock>
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
                        <li>• Use <code>show-time</code> attribute to enable time selection</li>
                        <li>• Use <code>time</code> attribute to set initial time (HH:MM format)</li>
                        <li>• Use <code>range-mode="true"</code> to enable date range selection</li>
                        <li>• Use <code>min-date</code> and <code>max-date</code> to set date constraints</li>
                        <li>• Listen for <code>date-select</code> events when dates are clicked</li>
                        <li>• Listen for <code>range-select</code> events when date ranges are selected</li>
                        <li>• Listen for <code>time-change</code> events when time is changed</li>
                        <li>• Listen for <code>month-change</code> events when navigating months</li>
                        <li>• Listen for <code>today</code> events when "Today" button is clicked</li>
                        <li>• Calendar includes navigation controls and "Today" button</li>
                        <li>• Today's date is highlighted automatically</li>
                        <li>• Range selection shows visual feedback with different colors</li>
                    </ul>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Event Handling</h2>
                <p class="mb-4 text-gray-600">Learn how to handle events and programmatically control the calendar.</p>
                
                <ui-codeblock language="javascript" code="${eventsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
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
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">show-time</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Enable time selection with hour and minute dropdowns</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">time</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">'12:00'</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Initial time in HH:MM format (24-hour)</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">range-mode</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">boolean</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">false</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Enable date range selection mode</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">min-date</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">none</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Minimum selectable date (ISO date string)</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">max-date</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">string</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">none</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Maximum selectable date (ISO date string)</td>
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
                                    <td class="px-4 py-2 text-sm text-gray-600">{ date: Date } or { date: Date, time: string, dateTime: Date }</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when a date is clicked. Includes time info if show-time is enabled</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">time-change</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">{ time: string }</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when time is changed (only when show-time is enabled)</td>
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
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">range-select</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">{ start: Date, end: Date, startDate: string, endDate: string }</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Fired when a date range is selected (only when range-mode is enabled)</td>
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
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Time Selection</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Hour and minute dropdowns (when show-time is enabled)</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Responsive Design</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Works well on different screen sizes</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Date Range Selection</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Select start and end dates with visual range highlighting</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">Date Constraints</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Set minimum and maximum selectable dates</td>
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
        
        // Set up event listeners for the interactive examples
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

            // Set up time calendar events
            const interactiveTimeCalendar = document.getElementById('interactive-calendar-time');
            const timeEventLog = document.getElementById('calendar-time-events');
            
            if (interactiveTimeCalendar && timeEventLog) {
                interactiveTimeCalendar.addEventListener('date-select', (e) => {
                    if (e.detail.time) {
                        const dateTime = e.detail.dateTime.toLocaleString();
                        this.addEventLog(timeEventLog, `Date and time selected: ${dateTime}`);
                    } else {
                        const date = e.detail.date.toLocaleDateString();
                        this.addEventLog(timeEventLog, `Date selected: ${date}`);
                    }
                });
                
                interactiveTimeCalendar.addEventListener('time-change', (e) => {
                    this.addEventLog(timeEventLog, `Time changed to: ${e.detail.time}`);
                });
            }

            // Set up range calendar events
            const interactiveRangeCalendar = document.getElementById('interactive-range-calendar');
            const rangeEventLog = document.getElementById('calendar-range-events');
            
            if (interactiveRangeCalendar && rangeEventLog) {
                interactiveRangeCalendar.addEventListener('range-select', (e) => {
                    if (e.detail.startDate && e.detail.endDate) {
                        const startDate = new Date(e.detail.startDate).toLocaleDateString();
                        const endDate = new Date(e.detail.endDate).toLocaleDateString();
                        this.addEventLog(rangeEventLog, `Range selected: ${startDate} to ${endDate}`);
                    } else if (e.detail.startDate) {
                        const startDate = new Date(e.detail.startDate).toLocaleDateString();
                        this.addEventLog(rangeEventLog, `Start date selected: ${startDate}`);
                    }
                });
            }

            // Set up live range calendar events
            const liveRangeCalendar = document.getElementById('live-range-calendar');
            if (liveRangeCalendar) {
                liveRangeCalendar.addEventListener('range-select', (e) => {
                    console.log('🔍 Range selected:', e.detail);
                    if (e.detail.startDate && e.detail.endDate) {
                        console.log('📅 Start date:', e.detail.startDate);
                        console.log('📅 End date:', e.detail.endDate);
                    }
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