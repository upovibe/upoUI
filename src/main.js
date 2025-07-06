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
console.log('🌐 Available routes:');
console.log('   • /                 - app/page.js (home page)');
console.log('   • /user/123         - app/user/[id]/page.js (dynamic route)');
console.log('');
console.log('📁 Static routes: Just create files and navigate to them');
console.log('🔄 Dynamic routes: Auto-discovered too! (e.g., app/user/[id]/page.js)');
console.log('');
console.log('💡 100% file-based - no manual registration needed!');
