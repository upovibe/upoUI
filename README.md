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
    <ui-input placeholder="Enter your name"></ui-input>
    <ui-button variant="primary">Click Me!</ui-button>
    <ui-select placeholder="Choose option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </ui-select>
    
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
<ui-input placeholder="Enter text"></ui-input>
<ui-input type="email" placeholder="Enter email"></ui-input>
<ui-input type="password" placeholder="Enter password"></ui-input>
<ui-input value="Pre-filled" placeholder="Default value"></ui-input>
<ui-input disabled placeholder="Disabled input"></ui-input>
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
<ui-button variant="primary">Primary Button</ui-button>
<ui-button variant="secondary">Secondary Button</ui-button>
<ui-button variant="outline">Outline Button</ui-button>
<ui-button variant="ghost">Ghost Button</ui-button>
<ui-button variant="danger">Danger Button</ui-button>

<ui-button size="small">Small</ui-button>
<ui-button size="medium">Medium</ui-button>
<ui-button size="large">Large</ui-button>

<ui-button disabled>Disabled</ui-button>
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
<ui-select placeholder="Choose option">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</ui-select>

<ui-select value="2">
    <option value="1">Option 1</option>
    <option value="2" selected>Option 2</option>
    <option value="3">Option 3</option>
</ui-select>

<ui-select disabled>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</ui-select>
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
    --ui-input-padding: 12px 16px;
    --ui-input-border: 1px solid #d1d5db;
    --ui-input-border-radius: 6px;
    --ui-input-font-size: 16px;
    --ui-input-background: #ffffff;
    --ui-input-color: #111827;
    --ui-input-focus-border-color: #3b82f6;
    --ui-input-focus-box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    
    /* Button theming */
    --ui-button-border-radius: 6px;
    --ui-button-font-weight: 500;
    --ui-button-transition: all 0.2s ease-in-out;
    --ui-button-primary-background: #3b82f6;
    --ui-button-primary-color: #ffffff;
    --ui-button-primary-hover-background: #2563eb;
    
    /* Select theming */
    --ui-select-padding: 12px 16px;
    --ui-select-border: 1px solid #d1d5db;
    --ui-select-border-radius: 6px;
    --ui-select-background: #ffffff;
    --ui-select-color: #111827;
    --ui-select-focus-border-color: #3b82f6;
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
    <ui-input id="name" placeholder="Enter your name"></ui-input>
    <ui-input id="email" type="email" placeholder="Enter your email"></ui-input>
    <ui-select id="country" placeholder="Select country">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
    </ui-select>
    <ui-button id="submit" variant="primary">Submit</ui-button>
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
document.querySelector('ui-input').addEventListener('input', (e) => {
    console.log('Input value:', e.detail.value);
});

// Listen for button clicks
document.querySelector('ui-button').addEventListener('click', (e) => {
    console.log('Button clicked!');
});

// Listen for select changes
document.querySelector('ui-select').addEventListener('change', (e) => {
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
