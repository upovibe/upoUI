import Router from './core/Router.js';

// Create router instance
const router = new Router();

// Start the router - no manual routes needed!
router.start('#app');

// Make router globally available for navigation
window.router = router;



console.log('🎯 UPO UI Router with Auto-Loading loaded!');
console.log('');
console.log('📱 File-Based Routing:');
console.log('   ✅ Create files anywhere in app/ directory');
console.log('   ✅ No manual route registration needed');
console.log('   ✅ Multiple file naming conventions supported');
console.log('');
console.log('🗂️ Supported file patterns:');
console.log('   • app/contact/page.js     → /contact');
console.log('   • app/contact.js          → /contact');
console.log('   • app/contact/contact.js  → /contact');
console.log('   • app/contact/index.js    → /contact');
console.log('');
console.log('🌐 Example routes (create files to make them work):');
console.log('   • /                 - app/page.js (or app/home.js)');
console.log('   • /about            - app/about/page.js (or app/about.js)'); 
console.log('   • /contact          - app/contact/page.js (or app/contact.js)');
console.log('   • /products         - app/products.js (or app/products/page.js)');
console.log('   • /user/[id]        - app/user/[id]/page.js (dynamic route)');
console.log('');
console.log('💡 Just create a file and navigate to it - fully automatic!');
