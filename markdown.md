## 🧠 Global State Management
**Goal**: Share global data (e.g., logged-in user, theme) across components.
- Create `src/core/store.js`
- Use a simple event-driven pattern (Pub/Sub)
- Include `setState`, `getState`, and `subscribe` methods
- Automatically trigger UI updates on state changes