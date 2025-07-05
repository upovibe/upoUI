// UPO UI - Bundle Entry Point
// Import all components to register them with the browser

import Input from './Input.js';
import Button from './Button.js';
import Select from './Select.js';

// Export components for individual use
export { Input, Button, Select };

// Also export as default object for convenience
export default {
  Input,
  Button,
  Select
};

// Log that UPO UI has been loaded
console.log('🎨 UPO UI loaded successfully!');
console.log('Available components:', Object.keys({ Input, Button, Select })); 