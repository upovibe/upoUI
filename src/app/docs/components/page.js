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
        // Define component data in one place
        const components = [
            { href: '/docs/components/alert', label: 'Alert', description: 'Display callouts for user attention with different types and styles.' },
            { href: '/docs/components/accordion', label: 'Accordion', description: 'Collapsible content sections with smooth animations.' },
            { href: '/docs/components/avatar', label: 'Avatar', description: 'Circular avatars with images or initials and status indicators.' },
            { href: '/docs/components/badge', label: 'Badge', description: 'Small status indicator (e.g. notifications)' },
            { href: '/docs/components/button', label: 'Button', description: 'Interactive buttons with various styles and states.' },
            { href: '/docs/components/input', label: 'Input', description: 'Form input fields with focus states and validation.' },
            { href: '/docs/components/tabs', label: 'Tabs', description: 'Tabbed interfaces for organizing content into sections.' },
            { href: '/docs/components/card', label: 'Card', description: 'Container components for displaying content in organized layouts.' },
            { href: '/docs/components/box', label: 'Box', description: 'Basic container component with customizable styling.' },
            { href: '/docs/components/link', label: 'Link', description: 'Styled link components with hover and focus states.' }
        ];

        return `
            <div class="">
                <h1 class="text-3xl font-bold text-gray-900 mb-6">
                    Components
                </h1>
                <p class="text-lg text-gray-600 mb-8">
                    Explore our collection of UI components designed for modern web applications.
                </p>
                
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
                    ${components.map(component => `
                        <a href="${component.href}" class="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                            <h3 class="text-lg font-semibold text-gray-900 mb-2">${component.label}</h3>
                            <p class="text-gray-600">${component.description}</p>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

customElements.define('app-docs-components-page', DocsComponentsPage);
export default DocsComponentsPage;
