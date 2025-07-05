# 🎨 UPO UI

A lightweight, vanilla JavaScript Web Component library built with native Web Components and Shadow DOM. No build tools, no dependencies, just pure ES Modules ready to use in modern browsers.

## ✨ Features

- 🚀 **Zero Dependencies** - Pure vanilla JavaScript
- 📦 **No Build Tools** - Works directly in the browser
- 🔧 **ES Modules** - Modern import/export syntax
- 🎭 **Shadow DOM** - Encapsulated styles and markup
- 🎨 **CSS Variables** - Easy theming and customization
- 📱 **Responsive** - Mobile-first design
- ♿ **Accessible** - Built with accessibility in mind
- 🔥 **Lightweight** - Minimal footprint

## 🚀 Quick Start

### Option 1: Load All Components

```html
<!DOCTYPE html>
<html>
<head>
    <title>UPO UI Demo</title>
</head>
<body>
    <upo-input placeholder="Enter your name"></upo-input>
    <upo-button variant="primary">Click Me!</upo-button>
    <upo-select placeholder="Choose option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </upo-select>
    
    <script type="module" src="./components/bundle.js"></script>
</body>
</html>
```

### Option 2: Load Individual Components

```html
<script type="module" src="./components/Input.js"></script>
<script type="module" src="./components/Button.js"></script>
<script type="module" src="./components/Select.js"></script>
```

### Option 3: Import in JavaScript

```javascript
import { Input, Button, Select } from './components/bundle.js';

// Components are automatically registered
// You can now use them in your HTML
```

## 📋 Components

### 🔤 Input Component

A flexible input component with support for various input types.

#### Usage

```html
<upo-input placeholder="Enter text"></upo-input>
<upo-input type="email" placeholder="Enter email"></upo-input>
<upo-input type="password" placeholder="Enter password"></upo-input>
<upo-input value="Pre-filled" placeholder="Default value"></upo-input>
<upo-input disabled placeholder="Disabled input"></upo-input>
```

#### Attributes

- `placeholder` - Placeholder text
- `value` - Input value
- `type` - Input type (text, email, password, etc.)
- `disabled` - Disable the input

#### Events

- `input` - Fired when input value changes
- `change` - Fired when input loses focus and value has changed

#### Methods

- `focus()` - Focus the input
- `blur()` - Blur the input
- `value` - Get/set the input value

### 🔘 Button Component

A versatile button component with multiple variants and sizes.

#### Usage

```html
<upo-button variant="primary">Primary Button</upo-button>
<upo-button variant="secondary">Secondary Button</upo-button>
<upo-button variant="outline">Outline Button</upo-button>
<upo-button variant="ghost">Ghost Button</upo-button>
<upo-button variant="danger">Danger Button</upo-button>

<upo-button size="small">Small</upo-button>
<upo-button size="medium">Medium</upo-button>
<upo-button size="large">Large</upo-button>

<upo-button disabled>Disabled</upo-button>
```

#### Attributes

- `variant` - Button style (primary, secondary, outline, ghost, danger)
- `size` - Button size (small, medium, large)
- `disabled` - Disable the button

#### Events

- `click` - Fired when button is clicked

#### Methods

- `click()` - Programmatically click the button
- `focus()` - Focus the button
- `blur()` - Blur the button

### 📋 Select Component

A dropdown select component with support for option elements.

#### Usage

```html
<upo-select placeholder="Choose option">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</upo-select>

<upo-select value="2">
    <option value="1">Option 1</option>
    <option value="2" selected>Option 2</option>
    <option value="3">Option 3</option>
</upo-select>

<upo-select disabled>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</upo-select>
```

#### Attributes

- `placeholder` - Placeholder text for empty selection
- `value` - Selected value
- `disabled` - Disable the select

#### Events

- `change` - Fired when selection changes

#### Methods

- `focus()` - Focus the select
- `blur()` - Blur the select
- `value` - Get/set the selected value

## 🎨 Theming

UPO UI uses CSS Variables for easy theming. You can customize the appearance by setting CSS variables:

```css
:root {
    /* Input theming */
    --upo-input-padding: 12px 16px;
    --upo-input-border: 1px solid #d1d5db;
    --upo-input-border-radius: 6px;
    --upo-input-font-size: 16px;
    --upo-input-background: #ffffff;
    --upo-input-color: #111827;
    --upo-input-focus-border-color: #3b82f6;
    --upo-input-focus-box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    
    /* Button theming */
    --upo-button-border-radius: 6px;
    --upo-button-font-weight: 500;
    --upo-button-transition: all 0.2s ease-in-out;
    --upo-button-primary-background: #3b82f6;
    --upo-button-primary-color: #ffffff;
    --upo-button-primary-hover-background: #2563eb;
    
    /* Select theming */
    --upo-select-padding: 12px 16px;
    --upo-select-border: 1px solid #d1d5db;
    --upo-select-border-radius: 6px;
    --upo-select-background: #ffffff;
    --upo-select-color: #111827;
    --upo-select-focus-border-color: #3b82f6;
}
```

## 🌐 Browser Support

UPO UI works in all modern browsers that support:

- ES Modules
- Custom Elements v1
- Shadow DOM v1
- CSS Variables

### Supported Browsers

- Chrome 63+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## 📁 Project Structure

```
upoUI/
├── components/
│   ├── Input.js          # Input component
│   ├── Button.js         # Button component
│   ├── Select.js         # Select component
│   └── bundle.js         # All components bundle
├── index.html            # Demo page
├── README.md            # This file
└── .nojekyll            # GitHub Pages config
```

## 🚀 GitHub Pages Deployment

This project is configured for GitHub Pages deployment:

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/` (root) folder
5. Your components will be available at `https://yourusername.github.io/upoUI`

## 💡 Usage Examples

### Form Example

```html
<form>
    <upo-input id="name" placeholder="Enter your name"></upo-input>
    <upo-input id="email" type="email" placeholder="Enter your email"></upo-input>
    <upo-select id="country" placeholder="Select country">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
    </upo-select>
    <upo-button id="submit" variant="primary">Submit</upo-button>
</form>

<script type="module">
    import './components/bundle.js';
    
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            country: document.getElementById('country').value
        };
        console.log('Form data:', formData);
    });
</script>
```

### Event Handling

```javascript
// Listen for input changes
document.querySelector('upo-input').addEventListener('input', (e) => {
    console.log('Input value:', e.detail.value);
});

// Listen for button clicks
document.querySelector('upo-button').addEventListener('click', (e) => {
    console.log('Button clicked!');
});

// Listen for select changes
document.querySelector('upo-select').addEventListener('change', (e) => {
    console.log('Selected value:', e.detail.value);
});
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with modern Web Components standards
- Inspired by popular UI libraries like Tailwind UI and Chakra UI
- Designed for simplicity and ease of use

---

Made with ❤️ using Vanilla JavaScript Web Components
