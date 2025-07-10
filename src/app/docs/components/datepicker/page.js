import App from '@/core/App.js';
import '@/components/ui/Input.js';

class DatePickerDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'DatePicker Component | UPO UI';
    }

    render() {
        return `
            <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-4">Input Component</h1>
                <p class="text-lg text-gray-600 mb-6">Advanced input component with prefix, suffix, icons, and labels.</p>
                
                <div class="space-y-8">
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Basic Inputs</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Text Input</label>
                                <ui-input placeholder="Enter text"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Password Input</label>
                                <ui-input type="password" placeholder="Enter password"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email Input</label>
                                <ui-input type="email" placeholder="Enter email"></ui-input>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 class="text-xl font-semibold mb-4">With Prefix & Suffix</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Currency Input</label>
                                <ui-input prefix="$" placeholder="Amount"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Percentage Input</label>
                                <ui-input suffix="%" placeholder="Percentage"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Weight Input</label>
                                <ui-input suffix="kg" placeholder="Weight"></ui-input>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 class="text-xl font-semibold mb-4">With Icons</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email with Icon</label>
                                <ui-input leading-icon="<svg fill='currentColor' viewBox='0 0 24 24'><path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/></svg>" type="email" placeholder="Enter email"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Search with Icon</label>
                                <ui-input leading-icon="<svg fill='currentColor' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>" type="search" placeholder="Search..."></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Phone with Icon</label>
                                <ui-input leading-icon="<svg fill='currentColor' viewBox='0 0 24 24'><path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/></svg>" placeholder="Phone number"></ui-input>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Floating Labels</h2>
                        <div class="space-y-4">
                            <div>
                                <ui-input floating-label placeholder="Username"></ui-input>
                            </div>
                            
                            <div>
                                <ui-input floating-label type="email" placeholder="Email address"></ui-input>
                            </div>
                            
                            <div>
                                <ui-input floating-label type="password" placeholder="Password"></ui-input>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Date & Time Inputs</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Date Input</label>
                                <ui-input type="date" placeholder="Select a date"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Date Time Input</label>
                                <ui-input type="datetime-local" placeholder="Select date and time"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Time Input</label>
                                <ui-input type="time" placeholder="Select time"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Color Input</label>
                                <ui-input type="color" placeholder="Select color"></ui-input>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Validation States</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Success State</label>
                                <ui-input status="success" placeholder="Success validation"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Warning State</label>
                                <ui-input status="warning" placeholder="Warning validation"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Error State</label>
                                <ui-input status="error" placeholder="Error validation"></ui-input>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Info State</label>
                                <ui-input status="info" placeholder="Info validation"></ui-input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-date-picker-docs-page', DatePickerDocsPage);
export default DatePickerDocsPage;

