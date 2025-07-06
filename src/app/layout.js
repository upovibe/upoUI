import App from '../core/App.js';
import '../components/layout/Header.js';
import '../components/layout/Footer.js';

/**
 * Root Layout Component
 * 
 * This layout wraps all pages in the app directory
 * Similar to Next.js layout.js
 * 
 * Features:
 * - Common header/footer
 * - Global app structure
 * - Layout configuration per page
 */
class RootLayout extends App {
    render() {
        const children = this.get('children') || '';
        const showHeader = this.get('showHeader') !== false;
        const showFooter = this.get('showFooter') !== false;
        const layoutClass = this.get('layoutClass') || '';
        const pageTitle = this.get('pageTitle') || 'UPO UI';
        
        // Set document title
        document.title = pageTitle;
        
        return `
            <div class="min-h-screen flex flex-col ${layoutClass}">
                ${showHeader ? '<app-header></app-header>' : ''}
                
                <main class="flex-1">
                    ${children}
                </main>
                
                ${showFooter ? '<app-footer></app-footer>' : ''}
            </div>
        `;
    }
    
    // Set page content
    setPageContent(content) {
        this.set('children', content);
    }
    
    // Configure layout options
    configure(options = {}) {
        Object.entries(options).forEach(([key, value]) => {
            this.set(key, value);
        });
    }
}

customElements.define('root-layout', RootLayout);
export default RootLayout; 