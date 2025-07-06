import Router from './core/Router.js';

// Create router instance
const router = new Router();

// Define routes - App-based structure
router
    // Static routes from app directory
    .route('/', 'app/page.js')
    .route('/about', 'app/about/page.js')
    .route('/components', 'app/components/page.js')
    
    // Dynamic routes with [param] syntax
    .route('/user/[id]', 'app/user/[id]/page.js')
    .route('/blog/[slug]', 'app/blog/[slug]/page.js')
    
    .start('#app');

// Make router globally available for navigation
window.router = router;



console.log('🎯 UPO UI App-Based Router loaded!');
console.log('📱 Available routes:');
console.log('   • /                 - Home page');
console.log('   • /about            - About page'); 
console.log('   • /components       - Components showcase');
console.log('   • /user/[id]        - Dynamic user profile (e.g., /user/123)');
console.log('   • /blog/[slug]      - Dynamic blog post (e.g., /blog/getting-started)');
