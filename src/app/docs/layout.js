import App from "../../core/App.js";
import "../../components/ui/Box.js";
import "../../components/layout/Header.js";
import "../../components/layout/Sidebar.js";
import "../../components/layout/PromoSidebar.js";

/**
 * 📘 Docs Section Layout
 *
 * Renders the documentation layout with a fixed header, sidebar, and
 * a main content area. Content will be injected into the outlet.
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
      <div>
        <!-- Global Header -->
        <app-header></app-header>

        <!-- Docs Container -->
        <ui-box class="max-w-8xl mx-auto p-3 flex pt-16">
          
          <!-- Sidebar Navigation -->
          <app-sidebar></app-sidebar>

          <!-- Main Content Area -->
          <main id="docs-content-outlet" class="flex-grow container mx-auto p-6 py-12">
            <!-- Page-specific content will be injected here -->
          </main>

          <!-- Promotional Sidebar -->
          <app-promo-sidebar></app-promo-sidebar>

        </ui-box>
      </div>
    `;
  }
}

customElements.define("app-docs-layout", DocsLayout);
export default DocsLayout;
