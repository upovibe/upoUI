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
import './Tabs.js';
import './Alert.js';
import './CodeBlock.js';
import './Card.js';
import './Accordion.js';

// Export all components for easy importing
export { default as Button } from './Button.js';
export { default as Input } from './Input.js';
export { default as Box } from './Box.js';
export { default as Link } from './Link.js';
export { default as Tabs } from './Tabs.js';
export { default as Alert } from './Alert.js';
export { default as CodeBlock } from './CodeBlock.js';
export { default as Card } from './Card.js';
export { default as Accordion } from './Accordion.js';

console.log('🎨 UPO UI Components loaded'); 