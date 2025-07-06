import App from '../app.js';

class Header extends App {
    render() {
        return `
            <nav class="bg-white shadow-sm border-b">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <div class="font-bold text-xl text-blue-600">UPO UI</div>
                        <div class="space-x-6">
                            <a href="/" class="text-gray-700 hover:text-blue-600">Home</a>
                            <a href="/about" class="text-gray-700 hover:text-blue-600">About</a>
                            <a href="/components" class="text-gray-700 hover:text-blue-600">Components</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('app-header', Header);
export default Header;