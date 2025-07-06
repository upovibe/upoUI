import App from '../app.js';

class SidebarContent extends App {
    render() {
        return `
            <ui-box id="sidebar-content-area" class="lg:ml-80 transition-all duration-300">
                <!-- Header -->
                <ui-box class="bg-white shadow-sm">
                    <ui-box class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <h1 class="text-4xl font-bold text-gray-900 mb-4">${this.get('title') || 'Components'}</h1>
                        <p class="text-xl text-gray-600">${this.get('subtitle') || 'Explore all available UPO UI components with live examples and code snippets.'}</p>
                    </ui-box>
                </ui-box>
                
                <!-- Content -->
                <ui-box class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    ${this.get('showWelcome') !== false ? this.welcomeContent() : this.get('content') || ''}
                </ui-box>
            </ui-box>
        `;
    }
    
    welcomeContent() {
        return `
            <ui-box class="text-center py-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">Welcome to UPO UI</h2>
                <p class="text-gray-600 mb-8">Start exploring our components using the sidebar navigation.</p>
                
                <ui-box class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ui-box class="p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:shadow-md transition-all cursor-pointer">
                        <ui-box class="text-3xl mb-3">📝</ui-box>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Input Components</h3>
                        <p class="text-gray-600 text-sm">Text inputs, forms, and more</p>
                    </ui-box>
                    
                    <ui-box class="p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:shadow-md transition-all cursor-pointer">
                        <ui-box class="text-3xl mb-3">🔘</ui-box>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Button Components</h3>
                        <p class="text-gray-600 text-sm">Buttons with beautiful defaults</p>
                    </ui-box>
                    
                    <ui-box class="p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:shadow-md transition-all cursor-pointer">
                        <ui-box class="text-3xl mb-3">📦</ui-box>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Layout Components</h3>
                        <p class="text-gray-600 text-sm">Boxes, containers, and layouts</p>
                    </ui-box>
                </ui-box>
            </ui-box>
        `;
    }
}

customElements.define('app-sidebar-content', SidebarContent);
export default SidebarContent;