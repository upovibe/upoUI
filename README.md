# 🎨 UPO UI

A lightweight, vanilla JavaScript Web Component library. No build tools, no dependencies, just pure ES Modules.

## ✨ Features

- 🚀 **Zero Dependencies** - Pure vanilla JavaScript
- 📦 **No Build Tools** - Works directly in the browser
- 🎭 **Shadow DOM** - Encapsulated styles and markup
- 🎨 **CSS Variables** - Easy theming
- 📱 **Responsive** - Mobile-first design
- 🔥 **Lightweight** - Minimal footprint

## 🚀 Quick Start

```html
<!DOCTYPE html>
<html>
<head>
    <title>UPO UI Demo</title>
</head>
<body>
    <!-- Use the components -->
    <ui-input placeholder="Enter your name"></ui-input>
    <ui-button variant="primary">Click Me!</ui-button>
    <ui-select placeholder="Choose option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </ui-select>
    
    <!-- Load the library -->
    <script type="module" src="./components/bundle.js"></script>
</body>
</html>
```

## 📋 Components

### Input (`<ui-input>`)
```html
<ui-input placeholder="Enter text"></ui-input>
<ui-input type="email" placeholder="Enter email"></ui-input>
<ui-input disabled placeholder="Disabled input"></ui-input>
```

### Button (`<ui-button>`)
```html
<ui-button variant="primary">Primary</ui-button>
<ui-button variant="secondary">Secondary</ui-button>
<ui-button variant="outline">Outline</ui-button>
<ui-button variant="danger">Danger</ui-button>
<ui-button size="small">Small</ui-button>
<ui-button disabled>Disabled</ui-button>
```

### Select (`<ui-select>`)
```html
<ui-select placeholder="Choose option">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</ui-select>
```

## 🎨 Theming

Customize components using CSS variables:

```css
:root {
    --ui-input-border-radius: 8px;
    --ui-button-primary-background: #your-color;
    --ui-select-border-color: #your-color;
}
```

## 📁 Installation

### Option 1: Direct Download
Download the `components/` folder and include it in your project.

### Option 2: CDN (Coming Soon)
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/upovibe/upoUI@v1.0.0/components/bundle.js"></script>
```

### Option 3: Clone Repository
```bash
git clone https://github.com/upovibe/upoUI.git
cd upoUI
# Open index.html in your browser
```

## 🌐 Browser Support

Works in all modern browsers that support:
- ES Modules
- Custom Elements v1
- Shadow DOM v1
- CSS Variables

**Supported:** Chrome 63+, Firefox 63+, Safari 10.1+, Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

---

Made with ❤️ using Vanilla JavaScript Web Components
