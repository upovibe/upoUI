/**
 * Dropdown Component
 * 
 * A customizable dropdown component with support for single/multi-select, search, and keyboard navigation.
 * 
 * Attributes:
 * - placeholder: string - placeholder text when no option is selected
 * - multiple: boolean - enables multi-select mode
 * - searchable: boolean - enables search functionality
 * - disabled: boolean - disables the dropdown
 * - size: string - size variant: "sm", "md", "lg" (default: "md")
 * 
 * Usage:
 * <ui-dropdown placeholder="Select an option">
 *   <ui-option value="option1">Option 1</ui-option>
 *   <ui-option value="option2">Option 2</ui-option>
 * </ui-dropdown>
 */
class Dropdown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = false;
        this.selectedOptions = new Set();
        this.searchQuery = '';
        this.focusedIndex = -1;
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
        // Render options after a small delay to ensure child elements are available
        setTimeout(() => {
            this.renderOptions();
            this.updateDisplay();
        }, 0);
    }

    render() {
        const placeholder = this.getAttribute('placeholder') || 'Select an option';
        const multiple = this.hasAttribute('multiple');
        const searchable = this.hasAttribute('searchable');
        const disabled = this.hasAttribute('disabled');
        const size = this.getAttribute('size') || 'md';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    position: relative;
                }
                
                .dropdown-container {
                    position: relative;
                    width: 100%;
                }
                
                .dropdown-trigger {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    padding: 0.5rem 0.75rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.375rem;
                    background-color: white;
                    cursor: pointer;
                    transition: all 0.15s ease-in-out;
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    color: #374151;
                }
                
                .dropdown-trigger:hover:not(:disabled) {
                    border-color: #9ca3af;
                }
                
                .dropdown-trigger:focus {
                    outline: none;
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }
                
                .dropdown-trigger:disabled {
                    background-color: #f9fafb;
                    color: #9ca3af;
                    cursor: not-allowed;
                }
                
                .dropdown-trigger.open {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }
                
                .dropdown-value {
                    flex: 1;
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                
                .dropdown-placeholder {
                    color: #9ca3af;
                }
                
                .dropdown-arrow {
                    width: 1rem;
                    height: 1rem;
                    color: #6b7280;
                    transition: transform 0.15s ease-in-out;
                    flex-shrink: 0;
                    margin-left: 0.5rem;
                }
                
                .dropdown-trigger.open .dropdown-arrow {
                    transform: rotate(180deg);
                }
                
                .dropdown-menu {
                    position: absolute;
                    top: calc(100% + 4px);
                    left: 0;
                    right: 0;
                    background-color: white;
                    border: 1px solid #d1d5db;
                    border-radius: 0.375rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    z-index: 9999;
                    max-height: 200px;
                    overflow-y: auto;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-4px);
                    transition: all 0.15s ease-in-out;
                }
                
                .dropdown-menu.open {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                
                .dropdown-search {
                    padding: 0.5rem 0.75rem;
                    border-bottom: 1px solid #e5e7eb;
                }
                
                .dropdown-search input {
                    width: 100%;
                    padding: 0.375rem 0.5rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.25rem;
                    font-size: 0.875rem;
                    outline: none;
                }
                
                .dropdown-search input:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
                }
                
                .dropdown-options {
                    padding: 0.25rem 0;
                }
                
                .dropdown-option {
                    padding: 0.5rem 0.75rem;
                    cursor: pointer;
                    font-size: 0.875rem;
                    color: #374151;
                    transition: background-color 0.15s ease-in-out;
                    display: flex;
                    align-items: center;
                }
                
                .dropdown-option:hover {
                    background-color: #f3f4f6;
                }
                
                .dropdown-option.selected {
                    background-color: #eff6ff;
                    color: #1d4ed8;
                }
                
                .dropdown-option.focused {
                    background-color: #f3f4f6;
                }
                
                .dropdown-option:disabled {
                    color: #9ca3af;
                    cursor: not-allowed;
                }
                
                .dropdown-option:disabled:hover {
                    background-color: transparent;
                }
                
                .dropdown-checkbox {
                    margin-right: 0.5rem;
                    width: 1rem;
                    height: 1rem;
                    color: #3b82f6;
                }
                
                .dropdown-no-options {
                    padding: 0.5rem 0.75rem;
                    color: #9ca3af;
                    font-size: 0.875rem;
                    text-align: center;
                }
                
                /* Size variants */
                .dropdown-trigger.size-sm {
                    padding: 0.375rem 0.5rem;
                    font-size: 0.75rem;
                }
                
                .dropdown-trigger.size-lg {
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                }
                
                /* Responsive */
                @media (max-width: 640px) {
                    .dropdown-menu {
                        max-height: 150px;
                    }
                }
            </style>
            
            <div class="dropdown-container">
                <button class="dropdown-trigger size-${size} ${this.isOpen ? 'open' : ''}" 
                        type="button" 
                        role="combobox" 
                        aria-expanded="${this.isOpen}"
                        aria-haspopup="listbox"
                        ${disabled ? 'disabled' : ''}>
                    <span class="dropdown-value">
                        <span class="dropdown-placeholder">${placeholder}</span>
                    </span>
                    <svg class="dropdown-arrow" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                
                <div class="dropdown-menu ${this.isOpen ? 'open' : ''}" role="listbox">
                    ${searchable ? `
                        <div class="dropdown-search">
                            <input type="text" placeholder="Search options..." id="search-input">
                        </div>
                    ` : ''}
                    <div class="dropdown-options" id="options-container">
                        <div class="dropdown-no-options">No options available</div>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const trigger = this.shadowRoot.querySelector('.dropdown-trigger');
        const searchInput = this.shadowRoot.querySelector('#search-input');
        const optionsContainer = this.shadowRoot.querySelector('#options-container');

        // Toggle dropdown
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.hasAttribute('disabled')) return;
            this.toggle();
        });

        // Search functionality
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase();
                this.filterOptions();
            });

            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.selectFocusedOption();
                }
            });
        }

        // Keyboard navigation
        trigger.addEventListener('keydown', (e) => {
            if (this.hasAttribute('disabled')) return;
            
            switch (e.key) {
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    this.toggle();
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    this.open();
                    this.focusNextOption();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.open();
                    this.focusPrevOption();
                    break;
                case 'Escape':
                    this.close();
                    break;
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!this.shadowRoot.contains(e.target)) {
                this.close();
            }
        });

        // Handle option clicks
        optionsContainer.addEventListener('click', (e) => {
            const option = e.target.closest('.dropdown-option');
            if (option) {
                const value = option.dataset.value;
                this.selectOption(value);
            }
        });

        // Keyboard navigation in dropdown
        optionsContainer.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    this.focusNextOption();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.focusPrevOption();
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    this.selectFocusedOption();
                    break;
                case 'Escape':
                    this.close();
                    break;
            }
        });
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.isOpen = true;
        this.shadowRoot.querySelector('.dropdown-trigger').classList.add('open');
        this.shadowRoot.querySelector('.dropdown-menu').classList.add('open');
        
        // Re-render options when opening to ensure they're up to date
        this.renderOptions();
        
        // Focus search input if available
        const searchInput = this.shadowRoot.querySelector('#search-input');
        if (searchInput) {
            setTimeout(() => searchInput.focus(), 0);
        }
        
        this.dispatchEvent(new CustomEvent('dropdown-open', { bubbles: true }));
    }

    close() {
        this.isOpen = false;
        this.shadowRoot.querySelector('.dropdown-trigger').classList.remove('open');
        this.shadowRoot.querySelector('.dropdown-menu').classList.remove('open');
        this.focusedIndex = -1;
        this.searchQuery = '';
        
        // Clear search input
        const searchInput = this.shadowRoot.querySelector('#search-input');
        if (searchInput) {
            searchInput.value = '';
        }
        
        this.dispatchEvent(new CustomEvent('dropdown-close', { bubbles: true }));
    }

    getOptions() {
        return Array.from(this.querySelectorAll('ui-option')).map(option => ({
            value: option.getAttribute('value'),
            text: option.textContent.trim(),
            disabled: option.hasAttribute('disabled')
        }));
    }

    filterOptions() {
        const options = this.getOptions();
        const filteredOptions = options.filter(option => 
            !option.disabled && option.text.toLowerCase().includes(this.searchQuery)
        );
        this.renderOptions(filteredOptions);
    }

    renderOptions(options = null) {
        const optionsContainer = this.shadowRoot.querySelector('#options-container');
        const allOptions = options || this.getOptions();
        const multiple = this.hasAttribute('multiple');
        
        if (allOptions.length === 0) {
            optionsContainer.innerHTML = '<div class="dropdown-no-options">No options available</div>';
            return;
        }

        optionsContainer.innerHTML = allOptions.map((option, index) => {
            const isSelected = this.selectedOptions.has(option.value);
            const isFocused = index === this.focusedIndex;
            const isDisabled = option.disabled;
            
            return `
                <div class="dropdown-option ${isSelected ? 'selected' : ''} ${isFocused ? 'focused' : ''} ${isDisabled ? 'disabled' : ''}"
                     data-value="${option.value}"
                     role="option"
                     aria-selected="${isSelected}"
                     ${isDisabled ? 'aria-disabled="true"' : ''}
                     tabindex="${isFocused ? '0' : '-1'}">
                    ${multiple ? `
                        <input type="checkbox" class="dropdown-checkbox" ${isSelected ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
                    ` : ''}
                    ${option.text}
                </div>
            `;
        }).join('');
    }

    selectOption(value) {
        const multiple = this.hasAttribute('multiple');
        
        if (multiple) {
            if (this.selectedOptions.has(value)) {
                this.selectedOptions.delete(value);
            } else {
                this.selectedOptions.add(value);
            }
        } else {
            this.selectedOptions.clear();
            this.selectedOptions.add(value);
            this.close();
        }
        
        this.updateDisplay();
        this.dispatchEvent(new CustomEvent('dropdown-change', { 
            bubbles: true, 
            detail: { 
                value: multiple ? Array.from(this.selectedOptions) : value,
                selectedOptions: Array.from(this.selectedOptions)
            }
        }));
    }

    updateDisplay() {
        const valueElement = this.shadowRoot.querySelector('.dropdown-value');
        const placeholder = this.getAttribute('placeholder') || 'Select an option';
        const multiple = this.hasAttribute('multiple');
        
        if (this.selectedOptions.size === 0) {
            valueElement.innerHTML = `<span class="dropdown-placeholder">${placeholder}</span>`;
        } else if (multiple) {
            const options = this.getOptions();
            const selectedTexts = Array.from(this.selectedOptions)
                .map(value => options.find(opt => opt.value === value)?.text)
                .filter(Boolean);
            
            if (selectedTexts.length === 0) {
                valueElement.innerHTML = `<span class="dropdown-placeholder">${placeholder}</span>`;
            } else if (selectedTexts.length === 1) {
                valueElement.textContent = selectedTexts[0];
            } else {
                valueElement.textContent = `${selectedTexts.length} items selected`;
            }
        } else {
            const options = this.getOptions();
            const selectedOption = options.find(opt => opt.value === Array.from(this.selectedOptions)[0]);
            valueElement.textContent = selectedOption?.text || placeholder;
        }
    }

    focusNextOption() {
        const options = this.shadowRoot.querySelectorAll('.dropdown-option:not(.disabled)');
        if (options.length === 0) return;
        
        this.focusedIndex = Math.min(this.focusedIndex + 1, options.length - 1);
        this.updateFocus();
    }

    focusPrevOption() {
        const options = this.shadowRoot.querySelectorAll('.dropdown-option:not(.disabled)');
        if (options.length === 0) return;
        
        this.focusedIndex = Math.max(this.focusedIndex - 1, 0);
        this.updateFocus();
    }

    updateFocus() {
        const options = this.shadowRoot.querySelectorAll('.dropdown-option');
        options.forEach((option, index) => {
            option.classList.toggle('focused', index === this.focusedIndex);
            option.tabIndex = index === this.focusedIndex ? 0 : -1;
        });
    }

    selectFocusedOption() {
        const options = this.shadowRoot.querySelectorAll('.dropdown-option:not(.disabled)');
        if (this.focusedIndex >= 0 && this.focusedIndex < options.length) {
            const option = options[this.focusedIndex];
            const value = option.dataset.value;
            this.selectOption(value);
        }
    }

    static get observedAttributes() {
        return ['placeholder', 'multiple', 'searchable', 'disabled', 'size'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'disabled') {
            const trigger = this.shadowRoot.querySelector('.dropdown-trigger');
            if (trigger) {
                trigger.disabled = this.hasAttribute('disabled');
            }
        } else {
            this.render();
            this.setupEventListeners();
            this.updateDisplay();
        }
    }
}

/**
 * Dropdown Option Component
 */
class DropdownOption extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // This component is just a container for the option content
        // The actual rendering is handled by the parent Dropdown component
    }
}

customElements.define('ui-dropdown', Dropdown);
customElements.define('ui-option', DropdownOption);

export default Dropdown; 