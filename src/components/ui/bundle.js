/**
 * UPO UI Components Bundle
 * 
 * This file loads all UI components for the application
 * Prevents double registration of components
 */

import './Button.js';
import './Input.js';
import './Box.js';
import './Link.js';

// Export all components for easy importing
export { default as Button } from './Button.js';
export { default as Input } from './Input.js';
export { default as Box } from './Box.js';
export { default as Link } from './Link.js';

console.log('🎨 UPO UI Components loaded'); 