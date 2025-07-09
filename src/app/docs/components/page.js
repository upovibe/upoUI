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
            { href: '/docs/components/accordion', label: 'Accordion', description: 'Collapsible content sections with smooth animations.' },
            { href: '/docs/components/alert', label: 'Alert', description: 'Display callouts for user attention with different types and styles.' },
            { href: '/docs/components/avatar', label: 'Avatar', description: 'Circular avatars with images or initials and status indicators.' },
            { href: '/docs/components/badge', label: 'Badge', description: 'Small status indicator (e.g. notifications).' },
            { href: '/docs/components/box', label: 'Box', description: 'Basic container component with customizable styling.' },
            { href: '/docs/components/breadcrumb', label: 'Breadcrumb', description: 'Navigation hierarchy for better UX context.' },
            { href: '/docs/components/button', label: 'Button', description: 'Interactive buttons with various styles and states.' },
            { href: '/docs/components/calendar', label: 'Calendar', description: 'Calendar component for calender events.' },
            { href: '/docs/components/card', label: 'Card', description: 'Container components for displaying content in organized layouts.' },
            { href: '/docs/components/carousel', label: 'Carousel', description: 'Rotating content display for images or promotions.' },
            { href: '/docs/components/checkbox', label: 'Checkbox', description: 'Toggle multiple selections with checkboxes.' },
            { href: '/docs/components/datepicker', label: 'Date Picker', description: 'Choose dates with a calendar popup input.' },
            { href: '/docs/components/dialog', label: 'Dialog', description: 'Modal popups for alerts, forms, or confirmations.' },
            { href: '/docs/components/drawer', label: 'Drawer', description: 'Slide-out panels for navigation or options.' },
            { href: '/docs/components/dropdown', label: 'Dropdown', description: 'Toggleable list of options or menus.' },
            { href: '/docs/components/empty-state', label: 'Empty State', description: 'Visuals and messaging for no content scenarios.' },
            { href: '/docs/components/error-message', label: 'Error Message', description: 'Inline error messages for form validation.' },
            { href: '/docs/components/file-upload', label: 'File Upload', description: 'Upload files with drag & drop or file picker.' },
            { href: '/docs/components/footer', label: 'Footer', description: 'Bottom section of the page for links and branding.' },
            { href: '/docs/components/form', label: 'Form', description: 'Structured group of input components with validation.' },
            { href: '/docs/components/grid', label: 'Grid', description: 'Responsive layout structure for columns and rows.' },
            { href: '/docs/components/header', label: 'Header', description: 'Top navigation or branding bar.' },
            { href: '/docs/components/hero', label: 'Hero Section', description: 'Prominent section for main content or call to action.' },
            { href: '/docs/components/icon', label: 'Icon', description: 'Reusable icon system with SVG or font symbols.' },
            { href: '/docs/components/image', label: 'Image', description: 'Responsive and styled image rendering.' },
            { href: '/docs/components/input', label: 'Input', description: 'Form input fields with focus states and validation.' },
            { href: '/docs/components/link', label: 'Link', description: 'Styled link components with hover and focus states.' },
            { href: '/docs/components/list', label: 'List', description: 'Display grouped items in vertical order.' },
            { href: '/docs/components/loader', label: 'Loader', description: 'Spinners or animations for loading states.' },
            { href: '/docs/components/menu', label: 'Menu', description: 'Navigation or action menus for dropdowns or drawers.' },
            { href: '/docs/components/modal', label: 'Modal', description: 'Centralized popup for focused user interaction.' },
            { href: '/docs/components/navbar', label: 'Navbar', description: 'Responsive top navigation bar with links.' },
            { href: '/docs/components/notification', label: 'Notification', description: 'Passive messages to inform the user.' },
            { href: '/docs/components/overlay', label: 'Overlay', description: 'Dimmed background layer for modals and focus.' },
            { href: '/docs/components/pagination', label: 'Pagination', description: 'Page controls for navigating long lists.' },
            { href: '/docs/components/progress', label: 'Progress Bar', description: 'Track the completion of a task or process.' },
            { href: '/docs/components/radio', label: 'Radio Group', description: 'Single-select form inputs grouped together.' },
            { href: '/docs/components/rating', label: 'Rating', description: 'Star-based rating display or input.' },
            { href: '/docs/components/select', label: 'Select', description: 'Dropdown selection input for forms.' },
            { href: '/docs/components/sidebar', label: 'Sidebar', description: 'Vertical panel for navigation or filters.' },
            { href: '/docs/components/skeleton', label: 'Skeleton Loader', description: 'Placeholder loading indicator for content.' },
            { href: '/docs/components/snackbar', label: 'Snackbar', description: 'Temporary notification at the bottom of the screen.' },
            { href: '/docs/components/stepper', label: 'Stepper', description: 'Multi-step progress navigation.' },
            { href: '/docs/components/switch', label: 'Switch', description: 'Toggle switch between on/off states.' },
            { href: '/docs/components/table', label: 'Table', description: 'Display tabular data in rows and columns.' },
            { href: '/docs/components/tabs', label: 'Tabs', description: 'Tabbed interfaces for organizing content into sections.' },
            { href: '/docs/components/textarea', label: 'Textarea', description: 'Multi-line input fields for long text.' },
            { href: '/docs/components/tooltip', label: 'Tooltip', description: 'Small pop-up with helpful information on hover.' },
            { href: '/docs/components/upload-button', label: 'Upload Button', description: 'Trigger file upload actions.' },
            { href: '/docs/components/user-profile', label: 'User Profile Card', description: 'Compact user card with avatar, name, and details.' },
            { href: '/docs/components/video', label: 'Video Player', description: 'Embed or stream video content with controls.' },
            { href: '/docs/components/wizard', label: 'Wizard', description: 'Step-by-step form navigation experience.' },
            { href: '/docs/components/wrapper', label: 'Wrapper', description: 'Utility component for layout spacing or styling.' },
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
