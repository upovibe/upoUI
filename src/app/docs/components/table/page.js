import App from "@/core/App.js";
import "@/components/ui/CodeBlock.js";
import "@/components/ui/Table.js";
import "@/components/ui/Box.js";
import "@/components/ui/Tabs.js";

class TableDocsPage extends App {
  connectedCallback() {
    super.connectedCallback();
    document.title = "Table | UPO UI Docs";

    // Add event listeners after the component is rendered
    setTimeout(() => {
      this.setupDemoEventListeners();
    }, 100);
  }

  setupDemoEventListeners() {
    // Action table demo
    const actionTable = this.querySelector("#demo-action-table");
    if (actionTable) {
      actionTable.addEventListener("table-view", (event) => {
        console.log(
          "🔍 VIEW clicked for row:",
          event.detail.rowIndex,
          "Data:",
          event.detail.row
        );
      });

      actionTable.addEventListener("table-edit", (event) => {
        console.log(
          "✏️ EDIT clicked for row:",
          event.detail.rowIndex,
          "Data:",
          event.detail.row
        );
      });

      actionTable.addEventListener("table-delete", (event) => {
        console.log(
          "🗑️ DELETE clicked for row:",
          event.detail.rowIndex,
          "Data:",
          event.detail.row
        );
      });
    }

    // Addable table demo
    const addableTable = this.querySelector("#demo-addable-table");
    if (addableTable) {
      addableTable.addEventListener("table-add", (event) => {
        console.log(
          "➕ ADD button clicked! Timestamp:",
          event.detail.timestamp
        );
      });
    }

    // Clickable table demo
    const clickableTable = this.querySelector("#demo-clickable-table");
    if (clickableTable) {
      clickableTable.addEventListener("table-row-click", (event) => {
        console.log(
          "🖱️ ROW clicked! Row index:",
          event.detail.rowIndex,
          "Data:",
          event.detail.row
        );
      });
    }
  }

  render() {
    const sampleData = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 25,
        department: "Engineering",
        status: "Active",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        age: 30,
        department: "Marketing",
        status: "Active",
      },
      {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        age: 28,
        department: "Sales",
        status: "Inactive",
      },
      {
        id: 4,
        name: "Alice Brown",
        email: "alice@example.com",
        age: 32,
        department: "Engineering",
        status: "Active",
      },
      {
        id: 5,
        name: "Charlie Wilson",
        email: "charlie@example.com",
        age: 27,
        department: "HR",
        status: "Pending",
      },
    ];

    const sampleColumns = [
      { key: "status", label: "Status" },
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "age", label: "Age" },
      { key: "department", label: "Department" },
    ];

    const basicExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
></ui-table>`;

    const sortableExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
  sortable="true"
></ui-table>`;

    const selectableExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
  selectable="true"
></ui-table>`;

    const searchableExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
  searchable="true"
></ui-table>`;

    const searchableCustomExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
  searchable="true"
  search-placeholder="Search employees..."
></ui-table>`;

    const filterableExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
  filterable="true"
></ui-table>`;

    const addableExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
  addable="true"
></ui-table>`;

    const actionExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
  action="true"
></ui-table>`;

    const paginationExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
  pagination="true"
  page-size="3"
></ui-table>`;

    const styledExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
  striped="true"
  bordered="true"
  compact="true"
></ui-table>`;

    const fullExample = `<ui-table 
  data='${JSON.stringify(sampleData)}' 
  columns='${JSON.stringify(sampleColumns)}'
  sortable="true"
  selectable="true"
  pagination="true"
  page-size="3"
  searchable="true"
  striped="true"
  bordered="true"
></ui-table>`;

    const setupExample = `// Import the table component
import '@/components/ui/Table.js';

class TableExample extends HTMLElement {
    constructor() {
        super();
        this.data = [
            { id: 1, name: 'John Doe', email: 'john@example.com', age: 25 },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 30 },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 28 }
        ];
        
        this.columns = [
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'age', label: 'Age' }
        ];
    }

    connectedCallback() {
        this.innerHTML = \`
            <div class="space-y-4">
                <h3>Interactive Table</h3>
                
                <ui-table 
                    id="myTable"
                    data='\${JSON.stringify(this.data)}'
                    columns='\${JSON.stringify(this.columns)}'
                    sortable="true"
                    selectable="true"
                    pagination="true"
                    page-size="2"
                    searchable="true"
                    striped="true"
                    bordered="true"
                ></ui-table>
                
                <div class="mt-4 p-3 bg-gray-100 rounded">
                    <p>Selected rows: <span id="selected-count">0</span></p>
                    <p>Current sort: <span id="sort-info">None</span></p>
                    <p>Current page: <span id="page-info">1</span></p>
                    <p>Search results: <span id="search-info">All</span></p>
                </div>
            </div>
        \`;
        
        // Listen for table events
        this.addEventListener('table-sort', (event) => {
            this.querySelector('#sort-info').textContent = \`\${event.detail.column} (\${event.detail.direction})\`;
            console.log('Table sorted:', event.detail);
        });
        
        this.addEventListener('table-select', (event) => {
            const table = this.querySelector('ui-table');
            const selectedCount = table.selectedRows ? table.selectedRows.size : 0;
            this.querySelector('#selected-count').textContent = selectedCount;
            console.log('Row selected:', event.detail);
        });
        
        this.addEventListener('table-page-change', (event) => {
            this.querySelector('#page-info').textContent = event.detail.page;
            console.log('Page changed:', event.detail);
        });
        
        this.addEventListener('table-search', (event) => {
            const searchText = event.detail.query ? \`"\${event.detail.query}" (\${event.detail.results} results)\` : 'All';
            this.querySelector('#search-info').textContent = searchText;
            console.log('Search changed:', event.detail);
        });
        
        this.addEventListener('table-add', (event) => {
            console.log('Add button clicked:', event.detail);
            // Handle adding new items
        });
        
        this.addEventListener('table-view', (event) => {
            console.log('View clicked:', event.detail.row, event.detail.rowIndex);
            // Handle viewing item details
        });
        
        this.addEventListener('table-edit', (event) => {
            console.log('Edit clicked:', event.detail.row, event.detail.rowIndex);
            // Handle editing item
        });
        
        this.addEventListener('table-delete', (event) => {
            console.log('Delete clicked:', event.detail.row, event.detail.rowIndex);
            // Handle deleting item
        });
    }
}

customElements.define('ui-table-example', TableExample);
export default TableExample;`;

    return `
            <div>
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Table Component</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        A comprehensive table component with sorting, pagination, selection, search, and responsive design. 
                        Perfect for displaying data with interactive features and accessibility support.
                    </p>
                    
                    <!-- Live Examples -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-4">Live Examples</h2>
                        <ui-box class="space-y-4 p-4 shadow rounded-lg border border-gray-200">
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Basic Table</h3>
                                <ui-table 
                                    data='${JSON.stringify(sampleData)}' 
                                    columns='${JSON.stringify(sampleColumns)}'
                                    clickable="true"
                                ></ui-table>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Searchable Table</h3>
                                <ui-table 
                                    data='${JSON.stringify(sampleData)}' 
                                    columns='${JSON.stringify(sampleColumns)}'
                                    searchable="true"
                                ></ui-table>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Sortable Table</h3>
                                <ui-table 
                                    data='${JSON.stringify(sampleData)}' 
                                    columns='${JSON.stringify(sampleColumns)}'
                                    sortable="true"
                                ></ui-table>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Selectable Table</h3>
                                <ui-table 
                                    data='${JSON.stringify(sampleData)}' 
                                    columns='${JSON.stringify(sampleColumns)}'
                                    selectable="true"
                                ></ui-table>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Action Buttons Table (Check Console)</h3>
                                <ui-table 
                                    data='${JSON.stringify(sampleData)}' 
                                    columns='${JSON.stringify(sampleColumns)}'
                                    action="true"
                                    id="demo-action-table"
                                ></ui-table>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Addable Table (Check Console)</h3>
                                <ui-table 
                                    data='${JSON.stringify(sampleData)}' 
                                    columns='${JSON.stringify(sampleColumns)}'
                                    addable="true"
                                    id="demo-addable-table"
                                ></ui-table>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3 class="text-sm font-medium text-gray-700">Clickable Table (Check Console)</h3>
                                <ui-table 
                                    data='${JSON.stringify(sampleData)}' 
                                    columns='${JSON.stringify(sampleColumns)}'
                                    clickable="true"
                                    id="demo-clickable-table"
                                ></ui-table>
                            </div>
                        </ui-box>
                    </div>
                </div>

                <h2 class="text-xl font-semibold mt-8 mb-4">Basic Table</h2>
                <p class="mb-4 text-gray-600">Simple table with data display.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview1">Preview</ui-tab>
                    <ui-tab value="code1">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview1">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code1">
                    <ui-codeblock language="html" code="${basicExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Searchable Table</h2>
                <p class="mb-4 text-gray-600">Enable search functionality to filter data across all columns.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview2">Preview</ui-tab>
                    <ui-tab value="code2">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview2">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                        searchable="true"
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code2">
                    <ui-codeblock language="html" code="${searchableExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Searchable Table with Custom Placeholder</h2>
                <p class="mb-4 text-gray-600">Customize the search input placeholder text.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview3">Preview</ui-tab>
                    <ui-tab value="code3">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview3">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                        searchable="true"
                        search-placeholder="Search employees..."
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code3">
                    <ui-codeblock language="html" code="${searchableCustomExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Filterable Table</h2>
                <p class="mb-4 text-gray-600">Enable dropdown filtering for the first column values.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview-filter">Preview</ui-tab>
                    <ui-tab value="code-filter">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview-filter">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                        filterable="true"
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code-filter">
                    <ui-codeblock language="html" code="${filterableExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Addable Table</h2>
                <p class="mb-4 text-gray-600">Enable the add button to create new items.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview-addable">Preview</ui-tab>
                    <ui-tab value="code-addable">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview-addable">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                        addable="true"
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code-addable">
                    <ui-codeblock language="html" code="${addableExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Action Buttons Table</h2>
                <p class="mb-4 text-gray-600">Enable action buttons (view, edit, delete) on each row.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview-action">Preview</ui-tab>
                    <ui-tab value="code-action">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview-action">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                        action="true"
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code-action">
                    <ui-codeblock language="html" code="${actionExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Sortable Table</h2>
                <p class="mb-4 text-gray-600">Enable column sorting by clicking on headers.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview4">Preview</ui-tab>
                    <ui-tab value="code4">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview4">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                        sortable="true"
                        clickable="true"
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code4">
                    <ui-codeblock language="html" code="${sortableExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Selectable Table</h2>
                <p class="mb-4 text-gray-600">Enable row selection with checkboxes.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview5">Preview</ui-tab>
                    <ui-tab value="code5">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview5">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                        selectable="true"
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code5">
                    <ui-codeblock language="html" code="${selectableExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Pagination</h2>
                <p class="mb-4 text-gray-600">Add pagination to handle large datasets.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview6">Preview</ui-tab>
                    <ui-tab value="code6">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview6">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                        pagination="true"
                        page-size="3"
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code6">
                    <ui-codeblock language="html" code="${paginationExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Styled Table</h2>
                <p class="mb-4 text-gray-600">Apply different styling options.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview7">Preview</ui-tab>
                    <ui-tab value="code7">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview7">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                        striped="true"
                        bordered="true"
                        compact="true"
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code7">
                    <ui-codeblock language="html" code="${styledExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Full Featured Table</h2>
                <p class="mb-4 text-gray-600">Combine all features for a complete table experience.</p>
                
                <ui-tabs>
                  <ui-tab-list>
                    <ui-tab value="preview8">Preview</ui-tab>
                    <ui-tab value="code8">Code</ui-tab>
                  </ui-tab-list>
                  
                  <ui-tab-panel value="preview8">
                    <ui-box class="p-4 shadow rounded-lg border border-gray-200">
                      <ui-table 
                        data='${JSON.stringify(sampleData)}' 
                        columns='${JSON.stringify(sampleColumns)}'
                        sortable="true"
                        selectable="true"
                        pagination="true"
                        page-size="3"
                        searchable="true"
                        striped="true"
                        bordered="true"
                      ></ui-table>
                    </ui-box>
                  </ui-tab-panel>
                  
                  <ui-tab-panel value="code8">
                    <ui-codeblock language="html" code="${fullExample.replace(
                      /"/g,
                      "&quot;"
                    )}"></ui-codeblock>
                  </ui-tab-panel>
                </ui-tabs>

                <h2 class="text-xl font-semibold mt-8 mb-4">Setup Guide</h2>
                <p class="mb-4 text-gray-600">Here's how to use the table component in your own JavaScript files:</p>
                
                <ui-codeblock language="javascript" code="${setupExample.replace(
                  /"/g,
                  "&quot;"
                )}"></ui-codeblock>
                
                <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Key Points</h3>
                    <ul class="text-blue-800 space-y-1">
                        <li>• Import the table component before using it</li>
                        <li>• Use <code>data</code> attribute with JSON string for table data</li>
                        <li>• Use <code>columns</code> attribute with JSON string for column definitions</li>
                        <li>• Use <code>searchable="true"</code> to enable search functionality</li>
                        <li>• Use <code>search-placeholder</code> to customize search input placeholder</li>
                        <li>• Use <code>filterable="true"</code> to enable dropdown filtering for the first column</li>
                        <li>• Use <code>addable="true"</code> to enable the add button for creating new items</li>
                        <li>• Use <code>action="true"</code> to enable action buttons (view, edit, delete) on each row</li>
                        <li>• Use <code>sortable="true"</code> to enable column sorting</li>
                        <li>• Use <code>selectable="true"</code> to enable row selection</li>
                        <li>• Use <code>pagination="true"</code> to enable pagination</li>
                        <li>• Use <code>page-size</code> to set initial rows per page (users can enter custom values 1-1000)</li>
                        <li>• Use <code>striped="true"</code> for alternating row colors</li>
                        <li>• Use <code>bordered="true"</code> for table borders</li>
                        <li>• Use <code>compact="true"</code> for reduced padding</li>
                        <li>• Listen for <code>table-sort</code>, <code>table-select</code>, <code>table-page-change</code>, <code>table-search</code>, <code>table-add</code>, <code>table-view</code>, <code>table-edit</code>, and <code>table-delete</code> events</li>
                        <li>• Table is fully accessible with keyboard navigation and screen readers</li>
                        <li>• Responsive design with horizontal scrolling for mobile</li>
                        <li>• Search works across all columns and updates pagination automatically</li>
                    </ul>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4">API Reference</h3>
                    
                    <h4 class="text-md font-semibold mb-2">Attributes</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attribute</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">data</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'[]'</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">JSON string of table data</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">columns</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'[]'</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">JSON string of column definitions</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">searchable</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable search functionality</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">search-placeholder</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'Search...'</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Placeholder text for search input</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">filterable</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable dropdown filtering for the first column</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">addable</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable add button for creating new items</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">action</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable action buttons (view, edit, delete) on each row</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">sortable</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable column sorting</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">selectable</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable row selection</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">pagination</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable pagination</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">page-size</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Number of rows per page</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">striped</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable striped rows</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">bordered</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable table borders</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">compact</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Enable compact mode</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Events</h4>
                    <div class="overflow-x-auto mb-6">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">table-search</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when search query or filter changes (detail: { query: string, filterValue: string, results: number })</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">table-sort</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when column is sorted (detail: { column: string, direction: string })</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">table-select</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when row is selected (detail: { row: object, selected: boolean })</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">table-page-change</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when page changes (detail: { page: number })</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">table-page-size-change</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when page size changes (detail: { pageSize: number })</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">table-add</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when add button is clicked (detail: { timestamp: number })</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">table-view</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when view button is clicked (detail: { row: object, rowIndex: number })</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">table-edit</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when edit button is clicked (detail: { row: object, rowIndex: number })</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">table-delete</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Fired when delete button is clicked (detail: { row: object, rowIndex: number })</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold mb-2">Methods</h4>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">filterData(query)</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Programmatically filter data by search query</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">sort(column)</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Programmatically sort by column</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">selectAll()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Select all visible rows</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">deselectAll()</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Deselect all rows</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">goToPage(page)</td>
                                    <td class="px-6 py-4 text-sm text-gray-500">Navigate to specific page</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("app-table-docs-page", TableDocsPage);
export default TableDocsPage;
