import App from "@/core/App.js";
import "@/components/ui/Box.js";
import "@/components/layout/Header.js";
import "@/components/layout/Sidebar.js";
import "@/components/layout/PromoSidebar.js";
import "@/components/common/ScrollToTop.js";

/**
 * 📘 Docs Section Layout
 *
 * Renders the documentation layout with a fixed header, fixed sidebars, and
 * a main content area that scrolls with the browser's main scrollbar.
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
      <div class="min-h-screen bg-white w-full xl:container mx-auto">
        <!-- Global Header -->
        <app-header></app-header>

        <!-- Fixed Sidebars Container -->
        <div class="fixed top-16 left-0 right-0 bottom-0 pointer-events-none">
          
          <!-- Fixed Left Sidebar (Hidden on mobile) -->
          <div class="absolute top-0 left-0 w-64 h-full bg-white border-r border-gray-200 overflow-y-auto overflow-x-hidden pointer-events-auto hidden lg:block">
            <app-sidebar></app-sidebar>
          </div>

          <!-- Fixed Right Sidebar -->
          <div class="absolute top-0 right-0 w-64 h-full bg-white border-l border-gray-200 overflow-y-auto overflow-x-hidden pointer-events-auto hidden lg:block">
            <app-promo-sidebar></app-promo-sidebar>
          </div>

        </div>

        <!-- Mobile Sidebar Overlay -->
        <app-sidebar class="lg:hidden"></app-sidebar>

        <!-- Main Content Area with Normal Scrolling -->
        <main id="docs-content-outlet" class="lg:ml-64 lg:mr-64 min-h-screen px-3 md:px-6 lg:px-10 py-8 lg:py-24 pt-24">
          <!-- Page-specific content will be injected here -->
        </main>

        <!-- Scroll to Top Button -->
        <ui-scroll-to-top></ui-scroll-to-top>

      </div>
    `;
  }
}

customElements.define("app-docs-layout", DocsLayout);
export default DocsLayout;
