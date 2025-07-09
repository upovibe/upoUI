import App from '@/core/App.js';
import '@/components/ui/Box.js';

/**
 * Docs Components Page
 * 
 * A placeholder page for the component showcase.
 */
class DocsComponentsPage extends App {

    connectedCallback() {
        super.connectedCallback();
        document.title = 'Components | UPO UI Docs';
    }

    render() {
        return `
            <div class="max-w-4xl mx-auto p-6">
                <h1 class="text-3xl font-bold text-gray-900 mb-6">
                    Components
                </h1>
                <p class="text-lg text-gray-600 mb-8">
                    Explore our collection of UI components designed for modern web applications.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a href="/docs/components/alert" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Alert</h3>
                        <p class="text-gray-600">Display callouts for user attention with different types and styles.</p>
                    </a>
                    
                    <a href="/docs/components/accordion" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Accordion</h3>
                        <p class="text-gray-600">Collapsible content sections with smooth animations.</p>
                    </a>
                    
                    <a href="/docs/components/avatar" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Avatar</h3>
                        <p class="text-gray-600">Circular avatars with images or initials and status indicators.</p>
                    </a>
                    
                    <a href="/docs/components/button" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Button</h3>
                        <p class="text-gray-600">Interactive buttons with various styles and states.</p>
                    </a>
                    
                    <a href="/docs/components/input" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Input</h3>
                        <p class="text-gray-600">Form input fields with focus states and validation.</p>
                    </a>
                    
                    <a href="/docs/components/tabs" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Tabs</h3>
                        <p class="text-gray-600">Tabbed interfaces for organizing content into sections.</p>
                    </a>
                    
                    <a href="/docs/components/card" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Card</h3>
                        <p class="text-gray-600">Container components for displaying content in organized layouts.</p>
                    </a>
                    
                    <a href="/docs/components/box" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Box</h3>
                        <p class="text-gray-600">Basic container component with customizable styling.</p>
                    </a>
                    
                    <a href="/docs/components/link" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Link</h3>
                        <p class="text-gray-600">Styled link components with hover and focus states.</p>
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('app-docs-components-page', DocsComponentsPage);
export default DocsComponentsPage;
