You are helping me build a reusable Web Component UI library called **UPO UI** using Vanilla JavaScript.

### Project Overview:
- The framework name is **UPO UI**
- It uses native Web Components (`class extends HTMLElement`)
- No NPM, no build tools, no Vite or Rollup
- Pure ES Modules (ESM), importable directly via `<script type="module">`
- It will be hosted on GitHub Pages or shared hosting

### Design & Usage:
- Component tags should use **PascalCase** style: `<Input>`, `<Button>`, `<Select>`
- Internally, use `customElements.define('Input', class {...})`
- Each component should use **Shadow DOM** and **CSS Variables** for styling
- Components must work with `<script type="module">` without bundling
- Component files must live in `./components/`

### Folder Structure:
root/
├── components/
│ ├── Input.js ← input field with placeholder and value support
│ ├── Button.js ← styled button with slot content
│ ├── Select.js ← dropdown using <option> children
│ └── bundle.js ← optional entry point to load all components
├── index.html ← live demo page showing all components
├── README.md ← usage instructions
└── .nojekyll ← for GitHub Pages compatibility


### Requirements:
1. Write each component using `class MyComponent extends HTMLElement`
2. Use Shadow DOM for isolation
3. Style with CSS inside the component, but allow theming via CSS variables
4. Create `index.html` that demonstrates usage of all components
5. Provide `bundle.js` that loads all components at once
6. Add a `README.md` with CDN usage examples and GitHub Pages links
7. Ensure everything can be loaded in the browser without build tools

Start by scaffolding the entire structure and creating the 3 base components: Input, Button, and Select.
