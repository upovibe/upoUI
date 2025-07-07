import App from '../../../../core/App.js';
// ...optional component imports...

class AccordionDocsPage extends App {
    connectedCallback() {
        super.connectedCallback();
        document.title = 'Accordion | UPO UI Docs';
    }
    render() {
        return `
            <div>
                <h1 class="text-3xl font-bold text-gray-900">Accordion</h1>
                <p class="mt-4 text-lg text-gray-600">This is the Accordion component page.</p>
            </div>
        `;
    }
}

customElements.define('app-docs-accordion-page', AccordionDocsPage);
export default AccordionDocsPage; 