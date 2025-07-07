import App from "../../core/App.js";
import "../../components/ui/Box.js";
import "../../components/layout/Header.js";
import "../../components/layout/Sidebar.js";
import "../../components/layout/PromoSidebar.js";

/**
 * 📘 Docs Section Layout
 *
 * Renders the documentation layout with a fixed header, fixed sidebars, and
 * a scrollable main content area. Content will be injected into the outlet.
 */
class DocsLayout extends App {
  /**
   * Updates the main content area dynamically.
   * @param {string} htmlContent - HTML content to insert into the outlet.
   */
  setPageContent(htmlContent) {
    const outlet = this.querySelector("#docs-content-outlet");
    if (outlet) {
      outlet.innerHTML = htmlContent;
    }
  }

  render() {
    return `
      <div class="min-h-screen bg-white">
        <!-- Global Header -->
        <app-header></app-header>

        <!-- Docs Container with Fixed Sidebars -->
        <div class="fixed inset-0 top-16 flex">
          
          <!-- Fixed Sidebar Navigation -->
          <div class="w-64 flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto">
            <app-sidebar></app-sidebar>
          </div>

          <!-- Scrollable Main Content Area -->
          <main id="docs-content-outlet" class="flex-1 overflow-y-auto px-3 md:px-6 lg:px-10 py-8 lg:py-12">
            <!-- Page-specific content will be injected here -->
          </main>

          <!-- Fixed Promotional Sidebar -->
          <div class="w-64 flex-shrink-0 bg-white border-l border-gray-200 overflow-y-auto hidden lg:block">
            <app-promo-sidebar></app-promo-sidebar>
          </div>

        </div>
      </div>
    `;
  }
}

customElements.define("app-docs-layout", DocsLayout);
export default DocsLayout;
