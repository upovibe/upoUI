/**
 * Progress Bar Component
 * 
 * A flexible progress bar component with various display options and animations.
 * 
 * Attributes:
 * - value: number (default: 0) - current progress value (0-100)
 * - max: number (default: 100) - maximum value
 * - variant: string (default: "default") - style variant: "default", "primary", "success", "warning", "danger"
 * - size: string (default: "md") - progress bar size: "sm", "md", "lg"
 * - animated: boolean (default: false) - enable smooth progress animation
 * - striped: boolean (default: false) - show striped pattern
 * - show-label: boolean (default: false) - show percentage label
 * - label-position: string (default: "inside") - label position: "inside", "outside"
 * 
 * Events:
 * - progress-complete: Fired when progress reaches 100% (detail: { value: number })
 * 
 * Usage:
 * <ui-progress-bar value="75" variant="primary" animated="true"></ui-progress-bar>
 */
class ProgressBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.value = parseInt(this.getAttribute('value')) || 0;
        this.max = parseInt(this.getAttribute('max')) || 100;
    }

    static get observedAttributes() {
        return ['value', 'max', 'variant', 'size', 'animated', 'striped', 'show-label', 'label-position'];
    }

    connectedCallback() {
        this.render();
        this.setupAnimation();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.value = parseInt(this.getAttribute('value')) || 0;
            this.max = parseInt(this.getAttribute('max')) || 100;
            this.render();
            this.setupAnimation();
        }
    }

    setupAnimation() {
        if (this.getAttribute('animated') === 'true') {
            const progressFill = this.shadowRoot.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.transition = 'width 0.6s ease-in-out';
            }
        }
    }

    getPercentage() {
        return Math.min(Math.max((this.value / this.max) * 100, 0), 100);
    }

    render() {
        const percentage = this.getPercentage();
        const variant = this.getAttribute('variant') || 'default';
        const size = this.getAttribute('size') || 'md';
        const animated = this.getAttribute('animated') === 'true';
        const striped = this.getAttribute('striped') === 'true';
        const showLabel = this.getAttribute('show-label') === 'true';
        const labelPosition = this.getAttribute('label-position') || 'inside';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                }

                .progress-container {
                    position: relative;
                    width: 100%;
                    background-color: #f3f4f6;
                    border-radius: 0.375rem;
                    overflow: hidden;
                }

                .progress-bar {
                    position: relative;
                    width: 100%;
                    height: 0.5rem;
                    background-color: #f3f4f6;
                    border-radius: 0.375rem;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background-color: #3b82f6;
                    border-radius: 0.375rem;
                    transition: width 0.3s ease;
                    position: relative;
                }

                /* Size variants */
                .progress-bar.size-sm {
                    height: 0.25rem;
                }

                .progress-bar.size-md {
                    height: 0.5rem;
                }

                .progress-bar.size-lg {
                    height: 0.75rem;
                }

                /* Variant styles */
                .progress-fill.variant-default {
                    background-color: #6b7280;
                }

                .progress-fill.variant-primary {
                    background-color: #3b82f6;
                }

                .progress-fill.variant-success {
                    background-color: #10b981;
                }

                .progress-fill.variant-warning {
                    background-color: #f59e0b;
                }

                .progress-fill.variant-danger {
                    background-color: #ef4444;
                }

                /* Striped pattern */
                .progress-fill.striped {
                    background-image: linear-gradient(
                        45deg,
                        rgba(255, 255, 255, 0.15) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, 0.15) 50%,
                        rgba(255, 255, 255, 0.15) 75%,
                        transparent 75%,
                        transparent
                    );
                    background-size: 1rem 1rem;
                    animation: progress-stripes 1s linear infinite;
                }

                @keyframes progress-stripes {
                    0% {
                        background-position: 1rem 0;
                    }
                    100% {
                        background-position: 0 0;
                    }
                }

                /* Label styles */
                .progress-label {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #374151;
                    margin-bottom: 0.25rem;
                }

                .progress-label.outside {
                    margin-bottom: 0.25rem;
                }

                .progress-label.inside {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                    z-index: 1;
                }

                /* Animated progress */
                .progress-fill.animated {
                    transition: width 0.6s ease-in-out;
                }

                /* Responsive */
                @media (max-width: 640px) {
                    .progress-label {
                        font-size: 0.75rem;
                    }
                    
                    .progress-label.inside {
                        font-size: 0.625rem;
                    }
                }
            </style>

            <div class="progress-container">
                ${showLabel && labelPosition === 'outside' ? `
                    <div class="progress-label outside">
                        ${percentage.toFixed(0)}%
                    </div>
                ` : ''}
                
                <div class="progress-bar size-${size}">
                    <div class="progress-fill variant-${variant} ${animated ? 'animated' : ''} ${striped ? 'striped' : ''}" 
                         style="width: ${percentage}%"
                         role="progressbar" 
                         aria-valuenow="${this.value}" 
                         aria-valuemin="0" 
                         aria-valuemax="${this.max}"
                         aria-label="Progress: ${percentage.toFixed(0)}%">
                    </div>
                    
                    ${showLabel && labelPosition === 'inside' ? `
                        <div class="progress-label inside">
                            ${percentage.toFixed(0)}%
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        // Check if progress is complete
        if (percentage >= 100) {
            this.dispatchEvent(new CustomEvent('progress-complete', {
                detail: { value: this.value }
            }));
        }
    }
}

customElements.define('ui-progress-bar', ProgressBar);
export default ProgressBar; 