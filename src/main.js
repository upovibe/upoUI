import Router from './core/Router.js';

// Create router instance. The router now configures itself from index.html.
const router = new Router();

// Start the router
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
console.log('   • /                     - app/page.js (home page)');
console.log('   • /user/123             - app/user/[id]/page.js (dynamic route)');
console.log('   • /auth/signin          - app/auth/signin/page.js (route group)');
console.log('   • /auth/signup          - app/auth/signup/page.js (route group)');
console.log('   • /dashboard/analytics  - app/dashboard/analytics/page.js (route group)');
console.log('');
console.log('📁 Route Groups: Folder names become URL paths');
console.log('   • app/auth/* → /auth/*');
console.log('   • app/dashboard/* → /dashboard/*');
console.log('   • app/admin/* → /admin/*');
console.log('');
console.log('🔄 All routes: Auto-discovered - no manual registration needed!');
console.log('');
console.log('🚀 Try the demo pages above!');
