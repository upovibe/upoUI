/**
 * Table Component
 * 
 * A comprehensive table component with sorting, pagination, selection, search, and responsive design.
 * Supports various data formats, customizable columns, and accessibility features.
 * 
 * Attributes:
 * - data: string - JSON string of table data (default: '[]')
 * - columns: string - JSON string of column definitions (default: '[]')
 * - title: string - Table title (default: 'Table')
 * - sortable: boolean - Enable column sorting (default: true)
 * - selectable: boolean - Enable row selection (default: false)
 * - pagination: boolean - Enable pagination (default: false)
 * - page-size: number - Number of rows per page (default: 10)
 * - striped: boolean - Enable striped rows (default: false)
 * - bordered: boolean - Enable table borders (default: false)
 * - compact: boolean - Enable compact mode (default: false)
 * - searchable: boolean - Enable search functionality (default: false)
 * - search-placeholder: string - Placeholder text for search input (default: 'Search...')
 * 
 * Events:
 * - table-sort: Fired when column is sorted (detail: { column: string, direction: string })
 * - table-select: Fired when row is selected (detail: { row: object, selected: boolean })
 * - table-page-change: Fired when page changes (detail: { page: number })
 * - table-search: Fired when search query changes (detail: { query: string, results: number })
 * - table-refresh: Fired when refresh button is clicked
 * 
 * Usage:
 * <ui-table data='[{"id":1,"name":"John","age":25}]' columns='[{"key":"name","label":"Name"}]'></ui-table>
 * <ui-table sortable="true" selectable="true" pagination="true" page-size="5" searchable="true"></ui-table>
 * 
 * Accessibility:
 * - Proper table semantics with thead, tbody, th, td
 * - ARIA attributes for sorting and selection
 * - Keyboard navigation support
 * - Screen reader friendly
 */
class Table extends HTMLElement {
    static get observedAttributes() {
        return ['data', 'columns', 'title', 'sortable', 'selectable', 'pagination', 'page-size', 'striped', 'bordered', 'compact', 'searchable', 'search-placeholder'];
    }

    constructor() {
        super();
        
        // Initialize with attribute values if they exist
        this.data = this.parseJSONAttribute('data', []);
        this.columns = this.parseJSONAttribute('columns', []);
        this.title = this.getAttribute('title') || 'Table';
        this.sortable = this.hasAttribute('sortable');
        this.selectable = this.hasAttribute('selectable');
        this.pagination = this.hasAttribute('pagination');
        this.pageSize = parseInt(this.getAttribute('page-size')) || 10;
        this.striped = this.hasAttribute('striped');
        this.bordered = this.hasAttribute('bordered');
        this.compact = this.hasAttribute('compact');
        this.searchable = this.hasAttribute('searchable');
        this.searchPlaceholder = this.getAttribute('search-placeholder') || 'Search...';
        
        // Internal state
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortDirection = 'asc';
        this.selectedRows = new Set();
        this.searchQuery = '';
        this.filteredData = [...this.data];
        
        // Flag to prevent attributeChangedCallback from interfering
        this.isUpdating = false;
        
        // Add default styles
        this.addDefaultStyles();
    }

    /**
     * Parse JSON attribute safely
     * @param {string} attrName - The attribute name
     * @param {any} defaultValue - Default value if parsing fails
     * @returns {any} Parsed value or default
     */
    parseJSONAttribute(attrName, defaultValue) {
        const value = this.getAttribute(attrName);
        if (!value) return defaultValue;
        try {
            return JSON.parse(value);
        } catch (e) {
            console.warn(`Failed to parse ${attrName} attribute:`, e);
            return defaultValue;
        }
    }

    /**
     * Add default CSS styles to document if not already added
     * Creates a unique style element with all table styles
     */
    addDefaultStyles() {
        if (!document.getElementById('upo-ui-table-styles')) {
            const style = document.createElement('style');
            style.id = 'upo-ui-table-styles';
            style.textContent = `
                .upo-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.875rem;
                    line-height: 1.25;
                }
                
                .upo-table-bordered {
                    border: 1px solid #e5e7eb;
                }
                
                .upo-table-bordered th,
                .upo-table-bordered td {
                    border: 1px solid #e5e7eb;
                }
                
                .upo-table th {
                    background-color: #f9fafb;
                    font-weight: 600;
                    text-align: left;
                    padding: 0.75rem;
                    color: #374151;
                    border-bottom: 1px solid #e5e7eb;
                }
                
                .upo-table td {
                    padding: 0.75rem;
                    border-bottom: 1px solid #e5e7eb;
                    color: #111827;
                }
                
                .upo-table-compact th,
                .upo-table-compact td {
                    padding: 0.5rem;
                }
                
                .upo-table-striped tbody tr:nth-child(even) {
                    background-color: #f9fafb;
                }
                
                .upo-table tbody tr:hover {
                    background-color: #f3f4f6;
                }
                
                .upo-table-sortable th {
                    cursor: pointer;
                    user-select: none;
                }
                
                .upo-table-sortable th:hover {
                    background-color: #f3f4f6;
                }
                
                .upo-table-sortable th::after {
                    content: '↕';
                    margin-left: 0.5rem;
                    opacity: 0.5;
                }
                
                .upo-table-sortable th.upo-sort-asc::after {
                    content: '↑';
                    opacity: 1;
                }
                
                .upo-table-sortable th.upo-sort-desc::after {
                    content: '↓';
                    opacity: 1;
                }
                
                .upo-table-selectable tbody tr {
                    cursor: pointer;
                }
                
                .upo-table-selectable tbody tr.selected {
                    background-color: #dbeafe;
                }
                
                .upo-table-selectable tbody tr.selected:hover {
                    background-color: #bfdbfe;
                }
                
                .upo-table-checkbox {
                    width: 1rem;
                    height: 1rem;
                    margin: 0;
                }
                
                .upo-table-container {
                    overflow-x: auto;
                    border-radius: 0.375rem;
                    border: 1px solid #e5e7eb;
                }
                
                .upo-table-header {
                    padding: 1rem 1rem 0.5rem 1rem;
                    background-color: #f9fafb;
                    border-bottom: 1px solid #e5e7eb;
                }
                
                .upo-table-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #111827;
                    margin-bottom: 0.5rem;
                }
                
                .upo-table-count {
                    font-size: 0.875rem;
                    color: #6b7280;
                    margin-left: 0.5rem;
                }
                
                .upo-table-controls-row {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .upo-table-search {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                
                .upo-table-search-input {
                    padding: 0.5rem 0.75rem 0.5rem 2.5rem;
                    font-size: 0.875rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.375rem;
                    outline: none;
                    transition: all 0.15s ease-in-out;
                    width: 200px;
                }
                
                .upo-table-search-input:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
                }
                
                .upo-table-search-icon {
                    position: absolute;
                    left: 0.75rem;
                    color: #6b7280;
                    pointer-events: none;
                }
                
                .upo-table-search-clear {
                    position: absolute;
                    right: 2.2rem;
                    padding: 0.25rem;
                    font-size: 0.875rem;
                    color: #6b7280;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    border-radius: 0.25rem;
                    transition: all 0.15s ease-in-out;
                }
                
                .upo-table-search-clear:hover {
                    background-color: #f3f4f6;
                    color: #374151;
                }
                
                .upo-table-refresh {
                    padding: 0.5rem;
                    border: none;
                    background: none;
                    color: #6b7280;
                    border-radius: 0.375rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    transition: background 0.15s;
                }
                
                .upo-table-refresh:hover {
                    background-color: #f3f4f6;
                    color: #2563eb;
                }
                
                .upo-table-print {
                    padding: 0.5rem;
                    border: none;
                    background: none;
                    color: #6b7280;
                    border-radius: 0.375rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    transition: background 0.15s;
                }
                
                .upo-table-print:hover {
                    background-color: #f3f4f6;
                    color: #2563eb;
                }
                
                .upo-table-pagination {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background-color: #f9fafb;
                    border-top: 1px solid #e5e7eb;
                }
                
                .upo-table-pagination-info {
                    font-size: 0.875rem;
                    color: #6b7280;
                }
                
                .upo-table-pagination-controls {
                    display: flex;
                    gap: 0.5rem;
                }
                
                .upo-table-pagination-button {
                    padding: 0.375rem 0.75rem;
                    font-size: 0.875rem;
                    border: 1px solid #d1d5db;
                    background-color: #ffffff;
                    color: #374151;
                    border-radius: 0.375rem;
                    cursor: pointer;
                    transition: all 0.15s ease-in-out;
                }
                
                .upo-table-pagination-button:hover:not(:disabled) {
                    background-color: #f9fafb;
                    border-color: #9ca3af;
                }
                
                .upo-table-pagination-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                
                .upo-table-pagination-button.active {
                    background-color: #3b82f6;
                    border-color: #3b82f6;
                    color: #ffffff;
                }
                
                .upo-table-empty {
                    text-align: center;
                    padding: 2rem;
                    color: #6b7280;
                    font-style: italic;
                }
            `;
            document.head.appendChild(style);
        }
    }

    /**
     * Called when the element is connected to the DOM
     * Sets up event listeners and initial state
     */
    connectedCallback() {
        this.render();
    }

    /**
     * Called when attributes are changed
     * Updates the component state and re-renders
     * @param {string} name - The name of the changed attribute
     * @param {string} oldValue - The previous value
     * @param {string} newValue - The new value
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue && !this.isUpdating) {
            if (name === 'data' || name === 'columns') {
                this[name] = this.parseJSONAttribute(name, name === 'data' ? [] : []);
                this.filteredData = [...this.data];
            } else if (name === 'sortable' || name === 'selectable' || name === 'pagination' || name === 'striped' || name === 'bordered' || name === 'compact' || name === 'searchable') {
                this[name] = this.hasAttribute(name);
            } else if (name === 'page-size') {
                this.pageSize = parseInt(newValue) || 10;
            } else if (name === 'search-placeholder') {
                this.searchPlaceholder = newValue || 'Search...';
            } else if (name === 'title') {
                this.title = newValue || 'Table';
            }
            this.render();
        }
    }

    /**
     * Sort the table data
     * @param {string} column - The column to sort by
     */
    sort(column) {
        if (!this.sortable) return;

        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
        }

        this.data.sort((a, b) => {
            const aVal = a[column];
            const bVal = b[column];
            
            if (aVal === bVal) return 0;
            
            const comparison = aVal < bVal ? -1 : 1;
            return this.sortDirection === 'asc' ? comparison : -comparison;
        });

        this.render();
        this.dispatchEvent(new CustomEvent('table-sort', {
            detail: { column, direction: this.sortDirection },
            bubbles: true
        }));
    }

    /**
     * Toggle row selection
     * @param {number} rowIndex - The index of the row to toggle
     */
    toggleRowSelection(rowIndex) {
        if (!this.selectable) return;

        const row = this.getVisibleData()[rowIndex];
        if (!row) return;

        if (this.selectedRows.has(row)) {
            this.selectedRows.delete(row);
        } else {
            this.selectedRows.add(row);
        }

        this.render();
        this.dispatchEvent(new CustomEvent('table-select', {
            detail: { row, selected: this.selectedRows.has(row) },
            bubbles: true
        }));
    }

    /**
     * Select all rows
     */
    selectAll() {
        if (!this.selectable) return;

        const visibleData = this.getVisibleData();
        visibleData.forEach(row => this.selectedRows.add(row));
        this.render();
        
        this.dispatchEvent(new CustomEvent('table-select', {
            detail: { row: null, selected: true, all: true },
            bubbles: true
        }));
    }

    /**
     * Deselect all rows
     */
    deselectAll() {
        if (!this.selectable) return;

        this.selectedRows.clear();
        this.render();
        
        this.dispatchEvent(new CustomEvent('table-select', {
            detail: { row: null, selected: false, all: true },
            bubbles: true
        }));
    }

    /**
     * Refresh table data
     */
    refresh() {
        this.dispatchEvent(new CustomEvent('table-refresh', {
            detail: { timestamp: Date.now() },
            bubbles: true
        }));
    }

    /**
     * Print table data
     */
    print() {
        try {
            // Create a print-friendly version of the table
            const printWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
            
            if (!printWindow) {
                // Fallback for Edge and other browsers with strict popup blockers
                this.printFallback();
                return;
            }
            
            const dataToUse = this.searchable ? this.filteredData : this.data;
            const visibleData = this.getVisibleData();
            
            const printHTML = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>${this.title} - Print</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; font-weight: bold; }
                        .print-header { text-align: center; margin-bottom: 20px; }
                        .print-title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
                        .print-info { font-size: 14px; color: #666; }
                        @media print {
                            body { margin: 0; }
                            .no-print { display: none; }
                        }
                    </style>
                </head>
                <body>
                    <div class="print-header">
                        <div class="print-title">${this.title}</div>
                        <div class="print-info">
                            Printed on: ${new Date().toLocaleString()}<br>
                            Total Records: ${dataToUse.length}
                            ${this.searchable && this.searchQuery ? `<br>Filtered by: "${this.searchQuery}"` : ''}
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                ${this.columns.map(col => `<th>${col.label || col.key}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${visibleData.map(row => `
                                <tr>
                                    ${this.columns.map(col => `<td>${row[col.key] || ''}</td>`).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    <script>
                        // Auto-print when page loads
                        window.onload = function() {
                            setTimeout(function() {
                                window.print();
                                window.close();
                            }, 100);
                        };
                    </script>
                </body>
                </html>
            `;
            
            printWindow.document.write(printHTML);
            printWindow.document.close();
            
        } catch (error) {
            console.warn('Print window failed, using fallback:', error);
            this.printFallback();
        }
        
        this.dispatchEvent(new CustomEvent('table-print', {
            detail: { timestamp: Date.now() },
            bubbles: true
        }));
    }

    /**
     * Fallback print method for Edge and other browsers
     */
    printFallback() {
        // Create a temporary div with the table content
        const tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        tempDiv.style.top = '0';
        
        const dataToUse = this.searchable ? this.filteredData : this.data;
        const visibleData = this.getVisibleData();
        
        tempDiv.innerHTML = `
            <div style="font-family: Arial, sans-serif; margin: 20px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">${this.title}</div>
                    <div style="font-size: 14px; color: #666;">
                        Printed on: ${new Date().toLocaleString()}<br>
                        Total Records: ${dataToUse.length}
                        ${this.searchable && this.searchQuery ? `<br>Filtered by: "${this.searchQuery}"` : ''}
                    </div>
                </div>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <thead>
                        <tr>
                            ${this.columns.map(col => `<th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2; font-weight: bold;">${col.label || col.key}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${visibleData.map(row => `
                            <tr>
                                ${this.columns.map(col => `<td style="border: 1px solid #ddd; padding: 8px; text-align: left;">${row[col.key] || ''}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        document.body.appendChild(tempDiv);
        
        // Print the current page
        window.print();
        
        // Remove the temporary div after a short delay
        setTimeout(() => {
            if (document.body.contains(tempDiv)) {
                document.body.removeChild(tempDiv);
            }
        }, 1000);
    }

    /**
     * Filter data based on search query
     * @param {string} query - The search query
     */
    filterData(query) {
        this.searchQuery = query.toLowerCase().trim();
        
        if (!this.searchQuery) {
            this.filteredData = [...this.data];
        } else {
            this.filteredData = this.data.filter(row => {
                return this.columns.some(col => {
                    const value = row[col.key];
                    if (value === null || value === undefined) return false;
                    return String(value).toLowerCase().includes(this.searchQuery);
                });
            });
        }
        
        // Reset to first page when filtering
        this.currentPage = 1;
        
        this.render();
        this.dispatchEvent(new CustomEvent('table-search', {
            detail: { query: this.searchQuery, results: this.filteredData.length },
            bubbles: true
        }));
    }

    /**
     * Handle search input changes
     * @param {Event} event - The input event
     */
    handleSearchInput(event) {
        const query = event.target.value;
        this.filterData(query);
    }

    /**
     * Handle search input keydown events
     * @param {Event} event - The keydown event
     */
    handleSearchKeydown(event) {
        if (event.key === 'Escape') {
            event.target.value = '';
            this.filterData('');
        }
    }

    /**
     * Go to a specific page
     * @param {number} page - The page number
     */
    goToPage(page) {
        if (!this.pagination) return;

        const dataToUse = this.searchable ? this.filteredData : this.data;
        const maxPage = Math.ceil(dataToUse.length / this.pageSize);
        if (page < 1 || page > maxPage) return;

        this.currentPage = page;
        this.render();
        this.dispatchEvent(new CustomEvent('table-page-change', {
            detail: { page },
            bubbles: true
        }));
    }

    /**
     * Get the currently visible data based on pagination and search
     * @returns {Array} The visible data
     */
    getVisibleData() {
        const dataToUse = this.searchable ? this.filteredData : this.data;
        
        if (!this.pagination) return dataToUse;

        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return dataToUse.slice(start, end);
    }

    /**
     * Handle click events on table headers for sorting
     * @param {Event} event - The click event
     */
    handleHeaderClick(event) {
        const th = event.target.closest('th');
        if (!th || !this.sortable) return;

        const column = th.dataset.column;
        if (column) {
            this.sort(column);
        }
    }

    /**
     * Handle click events on table rows for selection
     * @param {Event} event - The click event
     */
    handleRowClick(event) {
        const tr = event.target.closest('tr');
        if (!tr || !this.selectable) return;

        const rowIndex = parseInt(tr.dataset.rowIndex);
        if (!isNaN(rowIndex)) {
            this.toggleRowSelection(rowIndex);
        }
    }

    /**
     * Handle checkbox change events
     * @param {Event} event - The change event
     */
    handleCheckboxChange(event) {
        const checkbox = event.target;
        const rowIndex = parseInt(checkbox.dataset.rowIndex);
        
        if (!isNaN(rowIndex)) {
            this.toggleRowSelection(rowIndex);
        } else if (checkbox.dataset.selectAll) {
            if (checkbox.checked) {
                this.selectAll();
            } else {
                this.deselectAll();
            }
        }
    }

    /**
     * Render the table component
     * Creates the HTML structure with appropriate CSS classes
     */
    render() {
        const visibleData = this.getVisibleData();
        const dataToUse = this.searchable ? this.filteredData : this.data;
        const maxPage = Math.ceil(dataToUse.length / this.pageSize);
        const totalCount = this.data.length;
        const filteredCount = dataToUse.length;
        
        const tableClasses = [
            'upo-table',
            this.sortable ? 'upo-table-sortable' : '',
            this.selectable ? 'upo-table-selectable' : '',
            this.striped ? 'upo-table-striped' : '',
            this.bordered ? 'upo-table-bordered' : '',
            this.compact ? 'upo-table-compact' : ''
        ].filter(Boolean).join(' ');

        let tableHTML = `
            <div class="upo-table-container">
        `;

        // Header: Title on top, then controls row (search, refresh)
        tableHTML += `
            <div class="upo-table-header">
                <div class="upo-table-title">
                    ${this.title}
                    <span class="upo-table-count">(${this.searchable && this.searchQuery ? filteredCount : totalCount})</span>
                </div>
                <div class="upo-table-controls-row">
        `;

        // Search bar (left), refresh button (right of search)
        if (this.searchable) {
            tableHTML += `
                <div class="upo-table-search">
                    <svg class="upo-table-search-icon" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <input 
                        type="text" 
                        class="upo-table-search-input" 
                        placeholder="${this.searchPlaceholder}"
                        value="${this.searchQuery}"
                        aria-label="Search table"
                    >
                    ${this.searchQuery ? `
                        <button class="upo-table-search-clear" aria-label="Clear search">
                            ×
                        </button>
                    ` : ''}
                </div>
            `;
        }

        // Refresh button (icon only)
        tableHTML += `
            <button class="upo-table-refresh" onclick="this.closest('ui-table').refresh()" aria-label="Refresh table">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                </svg>
            </button>
        `;
        
        // Print button (icon only)
        tableHTML += `
            <button class="upo-table-print" onclick="this.closest('ui-table').print()" aria-label="Print table">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 19V5a2 2 0 012-2h8a2 2 0 012 2v14m-6 0h.01M6 19h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
            </button>
        `;

        tableHTML += `
                </div>
            </div>
        `;

        tableHTML += `
                <table class="${tableClasses}" role="table">
                    <thead>
                        <tr>
                            ${this.selectable ? '<th><input type="checkbox" class="upo-table-checkbox" data-select-all></th>' : ''}
                            ${this.columns.map(col => `
                                <th data-column="${col.key}" ${this.sortable ? 'tabindex="0" role="button"' : ''}>
                                    ${col.label || col.key}
                                </th>
                            `).join('')}
                        </tr>
                    </thead>
                    <tbody>
        `;

        if (visibleData.length === 0) {
            const noDataMessage = this.searchable && this.searchQuery 
                ? `No results found for "${this.searchQuery}"`
                : 'No data available';
            
            tableHTML += `
                        <tr>
                            <td colspan="${this.columns.length + (this.selectable ? 1 : 0)}" class="upo-table-empty">
                                ${noDataMessage}
                            </td>
                        </tr>
            `;
        } else {
            visibleData.forEach((row, index) => {
                const isSelected = this.selectedRows.has(row);
                const rowClasses = isSelected ? 'selected' : '';
                
                tableHTML += `
                    <tr data-row-index="${index}" class="${rowClasses}">
                        ${this.selectable ? `
                            <td>
                                <input type="checkbox" class="upo-table-checkbox" data-row-index="${index}" ${isSelected ? 'checked' : ''}>
                            </td>
                        ` : ''}
                        ${this.columns.map(col => `
                            <td>${row[col.key] || ''}</td>
                        `).join('')}
                    </tr>
                `;
            });
        }

        tableHTML += `
                    </tbody>
                </table>
        `;

        if (this.pagination && dataToUse.length > 0) {
            const startItem = (this.currentPage - 1) * this.pageSize + 1;
            const endItem = Math.min(this.currentPage * this.pageSize, dataToUse.length);
            
            tableHTML += `
                <div class="upo-table-pagination">
                    <div class="upo-table-pagination-info">
                        Showing ${startItem} to ${endItem} of ${dataToUse.length} results
                        ${this.searchable && this.searchQuery ? ` (filtered from ${this.data.length} total)` : ''}
                    </div>
                    <div class="upo-table-pagination-controls">
                        <button class="upo-table-pagination-button" ${this.currentPage === 1 ? 'disabled' : ''} onclick="this.closest('ui-table').goToPage(${this.currentPage - 1})">
                            Previous
                        </button>
            `;

            // Page numbers
            const startPage = Math.max(1, this.currentPage - 2);
            const endPage = Math.min(maxPage, this.currentPage + 2);
            
            for (let i = startPage; i <= endPage; i++) {
                tableHTML += `
                    <button class="upo-table-pagination-button ${i === this.currentPage ? 'active' : ''}" onclick="this.closest('ui-table').goToPage(${i})">
                        ${i}
                    </button>
                `;
            }

            tableHTML += `
                        <button class="upo-table-pagination-button" ${this.currentPage === maxPage ? 'disabled' : ''} onclick="this.closest('ui-table').goToPage(${this.currentPage + 1})">
                            Next
                        </button>
                    </div>
                </div>
            `;
        }

        tableHTML += '</div>';

        this.innerHTML = tableHTML;

        // Add event listeners
        if (this.sortable) {
            this.querySelectorAll('th[data-column]').forEach(th => {
                th.addEventListener('click', this.handleHeaderClick.bind(this));
                th.addEventListener('keydown', (e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        this.handleHeaderClick(e);
                    }
                });
            });
        }

        if (this.selectable) {
            this.querySelectorAll('tbody tr').forEach(tr => {
                tr.addEventListener('click', this.handleRowClick.bind(this));
            });

            this.querySelectorAll('.upo-table-checkbox').forEach(checkbox => {
                checkbox.addEventListener('change', this.handleCheckboxChange.bind(this));
            });
        }

        // Add search event listeners
        if (this.searchable) {
            const searchInput = this.querySelector('.upo-table-search-input');
            if (searchInput) {
                searchInput.addEventListener('input', this.handleSearchInput.bind(this));
                searchInput.addEventListener('keydown', this.handleSearchKeydown.bind(this));
            }

            const clearButton = this.querySelector('.upo-table-search-clear');
            if (clearButton) {
                clearButton.addEventListener('click', () => {
                    this.querySelector('.upo-table-search-input').value = '';
                    this.filterData('');
                });
            }
        }
    }
}

customElements.define('ui-table', Table);
export default Table; 