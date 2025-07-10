import App from '@/core/App.js';
import '@/components/ui/CodeBlock.js';
import '@/components/ui/Input.js';
import '@/components/ui/Calendar.js';
import '@/components/ui/Box.js';
import '@/components/ui/Tabs.js';

class DatePickerDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'DatePicker Implementation | UPO UI';
        
        // Set up event listeners for the live examples
        setTimeout(() => {
            // Live example 1
            this.setupDatePicker('live-date-input', 'live-calendar-dropdown', 'live-calendar');
            
            // Live example 2
            this.setupDatePicker('live-date-input-value', 'live-calendar-dropdown-value', 'live-calendar-value');
            
            // Live example 3 (with time selection)
            this.setupDatePicker('live-date-input-time', 'live-calendar-dropdown-time', 'live-calendar-time');
            
            // Demo examples
            this.setupDatePicker('demo-date-input', 'demo-calendar-dropdown', 'demo-calendar');
            this.setupDatePicker('demo-date-input-value', 'demo-calendar-dropdown-value', 'demo-calendar-value');
            
            // Interactive example
            this.setupInteractiveDatePicker();
        }, 100);
    }

    render() {
        const basicExample = `<div class="date-picker-demo">
    <ui-input id="date-input" placeholder="Select a date" readonly></ui-input>
    <div class="calendar-dropdown" id="calendar-dropdown" style="display: none;">
        <ui-calendar id="demo-calendar"></ui-calendar>
    </div>
</div>

<script>
const dateInput = document.getElementById('date-input');
const calendarDropdown = document.getElementById('calendar-dropdown');
const calendar = document.getElementById('demo-calendar');

// Toggle calendar on input click
dateInput.addEventListener('click', () => {
    calendarDropdown.style.display = calendarDropdown.style.display === 'none' ? 'block' : 'none';
});

// Handle date selection
calendar.addEventListener('date-select', (e) => {
    const date = e.detail.date;
    const dateString = date.toISOString().split('T')[0];
    dateInput.value = dateString;
    calendarDropdown.style.display = 'none';
});
</script>`;

        const withInitialValueExample = `<div class="date-picker-demo">
    <ui-input id="date-input-with-value" value="2024-06-15" placeholder="Select a date" readonly></ui-input>
    <div class="calendar-dropdown" id="calendar-dropdown-with-value" style="display: none;">
        <ui-calendar id="demo-calendar-with-value" date="2024-06-15"></ui-calendar>
    </div>
</div>

<script>
const dateInput = document.getElementById('date-input-with-value');
const calendarDropdown = document.getElementById('calendar-dropdown-with-value');
const calendar = document.getElementById('demo-calendar-with-value');

dateInput.addEventListener('click', () => {
    calendarDropdown.style.display = calendarDropdown.style.display === 'none' ? 'block' : 'none';
});

calendar.addEventListener('date-select', (e) => {
    const date = e.detail.date;
    const dateString = date.toISOString().split('T')[0];
    dateInput.value = dateString;
    calendarDropdown.style.display = 'none';
});
</script>`;

        const interactiveExample = `<div class="date-picker-demo">
    <ui-input id="interactive-date-input" placeholder="Select a date" readonly></ui-input>
    <div class="calendar-dropdown" id="interactive-calendar-dropdown" style="display: none;">
        <ui-calendar id="interactive-calendar"></ui-calendar>
    </div>
    <div id="date-events" class="text-sm text-gray-600 bg-gray-50 p-3 rounded border mt-2">
        <div>Event log will appear here...</div>
    </div>
</div>

<script>
const dateInput = document.getElementById('interactive-date-input');
const calendarDropdown = document.getElementById('interactive-calendar-dropdown');
const calendar = document.getElementById('interactive-calendar');
const eventLog = document.getElementById('date-events');

dateInput.addEventListener('click', () => {
    calendarDropdown.style.display = calendarDropdown.style.display === 'none' ? 'block' : 'none';
});

calendar.addEventListener('date-select', (e) => {
    const date = e.detail.date;
    const dateString = date.toISOString().split('T')[0];
    dateInput.value = dateString;
    calendarDropdown.style.display = 'none';
    
    // Log the event
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.textContent = \`[\${timestamp}] Date selected: \${date.toLocaleDateString()} (\${dateString})\`;
    eventLog.appendChild(logEntry);
    
    // Keep only last 5 entries
    while (eventLog.children.length > 5) {
        eventLog.removeChild(eventLog.firstChild);
    }
});
</script>`;

        const setupExample = `// Import the required components
import '@/components/ui/Input.js';
import '@/components/ui/Calendar.js';

class DatePickerExample extends HTMLElement {
    connectedCallback() {
        this.innerHTML = \`
            <div class="date-picker-container">
                <ui-input id="my-date-input" placeholder="Select a date" readonly></ui-input>
                <div class="calendar-dropdown" id="my-calendar-dropdown" style="display: none;">
                    <ui-calendar id="my-calendar"></ui-calendar>
                </div>
            </div>
        \`;
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        const dateInput = this.querySelector('#my-date-input');
        const calendarDropdown = this.querySelector('#my-calendar-dropdown');
        const calendar = this.querySelector('#my-calendar');
        
        // Toggle calendar on input click
        dateInput.addEventListener('click', () => {
            calendarDropdown.style.display = 
                calendarDropdown.style.display === 'none' ? 'block' : 'none';
        });
        
        // Handle date selection
        calendar.addEventListener('date-select', (e) => {
            const date = e.detail.date;
            const dateString = date.toISOString().split('T')[0];
            dateInput.value = dateString;
            calendarDropdown.style.display = 'none';
            
            // Dispatch custom event
            this.dispatchEvent(new CustomEvent('date-selected', {
                detail: { date, value: dateString },
                bubbles: true
            }));
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                calendarDropdown.style.display = 'none';
            }
        });
    }
}

customElements.define('date-picker-example', DatePickerExample);`;

        const eventsExample = `// Listen for date selection events
document.addEventListener('date-selected', (event) => {
    console.log('Date selected:', event.detail.date);
    console.log('Value:', event.detail.value);
});

// Programmatically control the date picker
const dateInput = document.querySelector('#my-date-input');
const calendar = document.querySelector('#my-calendar');

// Set a date programmatically
dateInput.value = '2024-12-25';
calendar.setAttribute('date', '2024-12-25');

// Open/close the calendar dropdown
const calendarDropdown = document.querySelector('#my-calendar-dropdown');
calendarDropdown.style.display = 'block'; // Open
calendarDropdown.style.display = 'none';  // Close`;

        return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">DatePicker Implementation</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Learn how to create a date picker using the Input and Calendar components together. 
                        This demonstrates component composition and event handling.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="flex flex-col gap-6 p-4 shadow rounded-lg border border-gray-200">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Basic Date Picker</label>
                                <div class="date-picker-demo">
                                    <ui-input id="live-date-input" placeholder="Select a date" readonly type="date"></ui-input>
                                    <div class="calendar-dropdown" id="live-calendar-dropdown" style="display: none; position: absolute; z-index: 1000; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); margin-top: 0.25rem;">
                                        <ui-calendar id="live-calendar"></ui-calendar>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">With Initial Value</label>
                                <div class="date-picker-demo">
                                    <ui-input id="live-date-input-value" value="2024-06-15" placeholder="Select a date" readonly type="date"></ui-input>
                                    <div class="calendar-dropdown" id="live-calendar-dropdown-value" style="display: none; position: absolute; z-index: 1000; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); margin-top: 0.25rem;">
                                        <ui-calendar id="live-calendar-value" date="2024-06-15"></ui-calendar>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">With Time Selection</label>
                                <div class="date-picker-demo">
                                    <ui-input id="live-date-input-time" placeholder="Select a date and time" readonly type="datetime-local"></ui-input>
                                    <div class="calendar-dropdown" id="live-calendar-dropdown-time" style="display: none; position: absolute; z-index: 1000; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); margin-top: 0.25rem;">
                                        <ui-calendar id="live-calendar-time" show-time time="14:30"></ui-calendar>
                                    </div>
                                </div>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Implementation</h2>
                <p class="mb-4 text-gray-600">A simple date picker that combines an Input component with a Calendar dropdown.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <div class="date-picker-demo" style="position: relative;">
                        <ui-input id="demo-date-input" placeholder="Select a date" readonly type="date"></ui-input>
                        <div class="calendar-dropdown" id="demo-calendar-dropdown" style="display: none; position: absolute; z-index: 1000; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); margin-top: 0.25rem;">
                            <ui-calendar id="demo-calendar"></ui-calendar>
                        </div>
                    </div>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">With Initial Value</h2>
                <p class="mb-4 text-gray-600">Set an initial date value for both the input and calendar.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                  <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                    <div class="date-picker-demo" style="position: relative;">
                        <ui-input id="demo-date-input-value" value="2024-06-15" placeholder="Select a date" readonly type="date"></ui-input>
                        <div class="calendar-dropdown" id="demo-calendar-dropdown-value" style="display: none; position: absolute; z-index: 1000; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); margin-top: 0.25rem;">
                            <ui-calendar id="demo-calendar-value" date="2024-06-15"></ui-calendar>
                        </div>
                    </div>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${withInitialValueExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Interactive Example</h2>
                <p class="mb-4 text-gray-600">A date picker with event logging to demonstrate the interaction flow.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                  <ui-box class="flex flex-col gap-4 p-4 shadow rounded-lg border border-gray-200">
                    <div class="date-picker-demo" style="position: relative;">
                        <ui-input id="interactive-date-input" placeholder="Select a date" readonly type="date"></ui-input>
                        <div class="calendar-dropdown" id="interactive-calendar-dropdown" style="display: none; position: absolute; z-index: 1000; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); margin-top: 0.25rem;">
                            <ui-calendar id="interactive-calendar"></ui-calendar>
                        </div>
                    </div>
                    <div id="date-events" class="text-sm text-gray-600 bg-gray-50 p-3 rounded border">
                        <div>Event log will appear here...</div>
                    </div>
                  </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${interactiveExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Complete Implementation</h2>
                <p class="mb-4 text-gray-600">A reusable date picker component that combines Input and Calendar with proper event handling.</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Use Input component with <code>readonly</code> attribute to prevent manual editing</li>
                        <li>• Use Calendar component for date selection</li>
                        <li>• Toggle calendar dropdown visibility on input click</li>
                        <li>• Listen for <code>date-select</code> events from Calendar component</li>
                        <li>• Update input value when a date is selected</li>
                        <li>• Close dropdown after date selection</li>
                        <li>• Handle click outside to close dropdown</li>
                        <li>• Use proper positioning and z-index for dropdown</li>
                    </ul>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Event Handling</h2>
                <p class="mb-4 text-gray-600">Learn how to handle events and programmatically control the date picker.</p>
                
                <ui-codeblock language="javascript" code="${eventsExample.replace(/"/g, '&quot;')}"></ui-codeblock>
                
                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">Implementation Guide</h3>
                    
                    <h4 class="text-md font-semibold mb-2">Components Used</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Component</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Purpose</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Key Attributes</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">ui-input</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Display selected date</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">readonly, placeholder, value</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">ui-calendar</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Date selection interface</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">date</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Events to Listen For</h4>
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Event</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Source</th>
                                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">click</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">ui-input</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Toggle calendar dropdown</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm font-mono text-gray-900">date-select</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">ui-calendar</td>
                                    <td class="px-4 py-2 text-sm text-gray-600">Date selected from calendar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }



    setupDatePicker(inputId, dropdownId, calendarId) {
        const dateInput = document.getElementById(inputId);
        const calendarDropdown = document.getElementById(dropdownId);
        const calendar = document.getElementById(calendarId);
        
        if (dateInput && calendarDropdown && calendar) {
            dateInput.addEventListener('click', () => {
                calendarDropdown.style.display = calendarDropdown.style.display === 'none' ? 'block' : 'none';
            });
            
            calendar.addEventListener('date-select', (e) => {
                const date = e.detail.date;
                let dateString = date.toISOString().split('T')[0];
                
                // If time is included in the event detail, format with time
                if (e.detail.time) {
                    const time = e.detail.time;
                    dateString = `${dateString} ${time}`;
                }
                
                dateInput.value = dateString;
                calendarDropdown.style.display = 'none';
            });
        }
    }

    setupInteractiveDatePicker() {
        const dateInput = document.getElementById('interactive-date-input');
        const calendarDropdown = document.getElementById('interactive-calendar-dropdown');
        const calendar = document.getElementById('interactive-calendar');
        const eventLog = document.getElementById('date-events');
        
        if (dateInput && calendarDropdown && calendar && eventLog) {
            dateInput.addEventListener('click', () => {
                calendarDropdown.style.display = calendarDropdown.style.display === 'none' ? 'block' : 'none';
            });
            
            calendar.addEventListener('date-select', (e) => {
                const date = e.detail.date;
                const dateString = date.toISOString().split('T')[0];
                dateInput.value = dateString;
                calendarDropdown.style.display = 'none';
                
                // Log the event
                const timestamp = new Date().toLocaleTimeString();
                const logEntry = document.createElement('div');
                logEntry.textContent = `[${timestamp}] Date selected: ${date.toLocaleDateString()} (${dateString})`;
                eventLog.appendChild(logEntry);
                
                // Keep only last 5 entries
                while (eventLog.children.length > 5) {
                    eventLog.removeChild(eventLog.firstChild);
                }
            });
        }
    }
}

customElements.define('app-date-picker-docs-page', DatePickerDocsPage);
export default DatePickerDocsPage;
