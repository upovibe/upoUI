// UPO UI - Bundle Entry Point
// Import all components to register them with the browser

import Input from './Input.js';
import Box from './Box.js';

// Export components for individual use
export { Input, Box };

// Also export as default object for convenience
export default {
    Input,
    Box,
    version: '1.0.0'
};

// Log successful loading
console.log('🎨 UPO UI loaded successfully!');
console.log('📦 Version: 1.0.0');
console.log('🎯 Framework compatibility: Tailwind CSS, Bootstrap, Custom CSS');

// Usage info
console.log(`
🎉 UPO UI is ready!

Features:
✅ Works with any CSS framework
✅ All HTML attributes supported
✅ Framework agnostic
✅ Zero dependencies
`); 