/**
 * Table Component
 * 
 * A comprehensive table component with sorting, pagination, selection, and responsive design.
 * Supports various data formats, customizable columns, and accessibility features.
 * 
 * Attributes:
 * - data: string - JSON string of table data (default: '[]')
 * - columns: string - JSON string of column definitions (default: '[]')
 * - sortable: boolean - Enable column sorting (default: true)
 * - selectable: boolean - Enable row selection (default: false)
 * - pagination: boolean - Enable pagination (default: false)
 * - page-size: number - Number of rows per page (default: 10)
 * - striped: boolean - Enable striped rows (default: false)
 * - bordered: boolean - Enable table borders (default: false)
 * - compact: boolean - Enable compact mode (default: false)
 * 
 * Events:
 * - table-sort: Fired when column is sorted (detail: { column: string, direction: string })
 * - table-select: Fired when row is selected (detail: { row: object, selected: boolean })
 * - table-page-change: Fired when page changes (detail: { page: number })
 * 
 * Usage:
 * <ui-table data='[{"id":1,"name":"John","age":25}]' columns='[{"key":"name","label":"Name"}]'></ui-table>
 * <ui-table sortable="true" selectable="true" pagination="true" page-size="5"></ui-table>
 * 
 * Accessibility:
 * - Proper table semantics with thead, tbody, th, td
 * - ARIA attributes for sorting and selection
 * - Keyboard navigation support
 * - Screen reader friendly
 */
class Table extends HTMLElement {
    static get observedAttributes() {
        return ['data', 'columns', 'sortable', 'selectable', 'pagination', 'page-size', 'striped', 'bordered', 'compact'];
    }

    constructor() {
        super();
        
        // Initialize with attribute values if they exist
        this.data = this.parseJSONAttribute('data', []);
        this.columns = this.parseJSONAttribute('columns', []);
        this.sortable = this.hasAttribute('sortable');
        this.selectable = this.hasAttribute('selectable');
        this.pagination = this.hasAttribute('pagination');
        this.pageSize = parseInt(this.getAttribute('page-size')) || 10;
        this.striped = this.hasAttribute('striped');
        this.bordered = this.hasAttribute('bordered');
        this.compact = this.hasAttribute('compact');
        
        // Internal state
        this.currentPage = 1;
        this.sortColumn = null;
        this.sortDirection = 'asc';
        this.selectedRows = new Set();
        
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
            } else if (name === 'sortable' || name === 'selectable' || name === 'pagination' || name === 'striped' || name === 'bordered' || name === 'compact') {
                this[name] = this.hasAttribute(name);
            } else if (name === 'page-size') {
                this.pageSize = parseInt(newValue) || 10;
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
    }

    /**
     * Deselect all rows
     */
    deselectAll() {
        if (!this.selectable) return;

        this.selectedRows.clear();
        this.render();
    }

    /**
     * Go to a specific page
     * @param {number} page - The page number
     */
    goToPage(page) {
        if (!this.pagination) return;

        const maxPage = Math.ceil(this.data.length / this.pageSize);
        if (page < 1 || page > maxPage) return;

        this.currentPage = page;
        this.render();
        this.dispatchEvent(new CustomEvent('table-page-change', {
            detail: { page },
            bubbles: true
        }));
    }

    /**
     * Get the currently visible data based on pagination
     * @returns {Array} The visible data
     */
    getVisibleData() {
        if (!this.pagination) return this.data;

        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.data.slice(start, end);
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
        const maxPage = Math.ceil(this.data.length / this.pageSize);
        
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
            tableHTML += `
                        <tr>
                            <td colspan="${this.columns.length + (this.selectable ? 1 : 0)}" class="upo-table-empty">
                                No data available
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

        if (this.pagination && this.data.length > 0) {
            const startItem = (this.currentPage - 1) * this.pageSize + 1;
            const endItem = Math.min(this.currentPage * this.pageSize, this.data.length);
            
            tableHTML += `
                <div class="upo-table-pagination">
                    <div class="upo-table-pagination-info">
                        Showing ${startItem} to ${endItem} of ${this.data.length} results
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
    }
}

customElements.define('ui-table', Table);
export default Table; 