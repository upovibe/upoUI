import Router from './router.js';

// Create router instance
const router = new Router();

// Define routes
router
    .route('/', 'pages/Home.js')
    .route('/about', 'pages/About.js')
    .route('/components', 'pages/Components.js')
    .start('#app');

// Make router globally available for navigation
window.router = router;

console.log('🎯 UPO UI Router loaded!');
